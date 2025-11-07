"use client";
import TransitionLogo from "../editable-svg/logotransition";
import { useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { gsap } from "gsap";
import "./PageTransition.css";

const PageTransition = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  const overlayRef = useRef<HTMLDivElement>(null);
  const logoOverlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<SVGSVGElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const blocksRef = useRef<HTMLDivElement[]>([]);
  const isTransitioning = useRef(false);

  useEffect(() => {
    /** GET SVG PATH REFERENCE */
    if (logoRef.current) {
      const p = logoRef.current.querySelector("path");
      if (p instanceof SVGPathElement) {
        pathRef.current = p;

        const length = p.getTotalLength();
        gsap.set(p, {
          strokeDasharray: length,
          strokeDashoffset: length,
          fill: "transparent",
        });
      }
    }

    /** CREATE BLOCKS SAFELY */
    const createBlocks = () => {
      if (!overlayRef.current) return;

      while (overlayRef.current.firstChild) {
        overlayRef.current.removeChild(overlayRef.current.firstChild);
      }

      blocksRef.current = [];

      for (let i = 0; i < 20; i++) {
        const block = document.createElement("div");
        block.className = "kotak";
        overlayRef.current.appendChild(block);
        blocksRef.current.push(block);
      }
    };

    createBlocks();
    gsap.set(blocksRef.current, { scaleX: 0, transformOrigin: "left" });
    revealPage();

    /** PATCH LOCAL NAVIGATION */
    const handleRouteChange = (url: string) => {
      if (isTransitioning.current) return;
      isTransitioning.current = true;
      coverPage(url);
    };

    const links = document.querySelectorAll('a[href^="/"]');
    links.forEach((link) => {
      link.addEventListener("click", (e: any) => {
        e.preventDefault();
        const href = e.currentTarget.href;
        const url = new URL(href).pathname;
        if (url !== pathname) {
          handleRouteChange(url);
        }
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleRouteChange);
      });
    };
  }, [router, pathname]);

  /** COVER ANIMATION */
  const coverPage = (url: string) => {
    const tl = gsap.timeline({
      onComplete: () => router.push(url),
    });

    tl.to(blocksRef.current, {
      scaleX: 1,
      duration: 0.4,
      stagger: 0.02,
      ease: "power2.out",
      transformOrigin: "left",
    });

    tl.set(logoOverlayRef.current, { opacity: 1 }, "-=0.2");

    if (pathRef.current) {
      const path = pathRef.current;
      const length = path.getTotalLength();

      tl.set(
        path,
        {
          strokeDashoffset: length,
          fill: "transparent",
        },
        "-=0.25"
      )
        .to(
          path,
          {
            strokeDashoffset: 0,
            duration: 2,
            ease: "power2.inOut",
          },
          "-=0.5"
        )
        .to(
          path,
          {
            fill: "#fff",
            duration: 1,
            ease: "power2.out",
          },
          "-=0.5"
        );
    }

    tl.to(logoOverlayRef.current, {
      opacity: 0,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  /** REVEAL ON PAGE LOAD */
  const revealPage = () => {
    gsap.set(blocksRef.current, { scaleX: 1, transformOrigin: "right" });

    gsap.to(blocksRef.current, {
      scaleX: 0,
      duration: 0.4,
      stagger: 0.02,
      ease: "power2.out",
      transformOrigin: "right",
      onComplete: () => {
        isTransitioning.current = false;
      },
    });
  };

  return (
    <div className="pagetransition-wrapper">
      <div ref={overlayRef} className="transition-overlay"></div>

      <div ref={logoOverlayRef} className="logo-overlay">
        <div className="logo-container">
          <TransitionLogo ref={logoRef} />
        </div>
      </div>

      {children}
    </div>
  );
};

export default PageTransition;
