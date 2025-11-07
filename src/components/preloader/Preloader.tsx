'use client';

import React from 'react'
import './Preloader.css'
import { useEffect } from "react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

const Preloader = () => {

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem("preloaderPlayed");

    if (hasPlayed) {
    document.querySelector(".loader")?.remove();
    return;
    }

    sessionStorage.setItem("preloaderPlayed", "true");

    CustomEase.create("hop", "0.9, 0, 0.1, 1");

    const tl = gsap.timeline({
      delay: 0.3,
      defaults: { ease: "hop" },
    });

    const counts = document.querySelectorAll(".loader .count");

    counts.forEach((count, index) => {
      const digits = count.querySelectorAll(".digit h1");

      tl.to(
        digits,
        { y: "0", duration: 1, stagger: 0.075 },
        index * 1
      );

      if (index < counts.length) {
        tl.to(
          digits,
          { y: "-100%", duration: 1, stagger: 0.075 },
          index * 1 + 1
        );
      }
    });

    tl.to(".loader .spinner", { opacity: 0, duration: 0.3 });

    tl.to(".loader .word h1", { y: "0%", duration: 1 }, "<");

    tl.to(".loader .divider", {
      scaleY: "100%",
      duration: 1,
      onComplete: () =>
        gsap.to(".loader .divider", {
          opacity: 0,
          duration: 0.4,
          delay: 0.3,
        }),
    });

    tl.to(".loader #word-1 h1", { y: "100%", duration: 1, delay: 0.3 });
    tl.to(".loader #word-2 h1", { y: "-100%", duration: 1 }, "<");

    tl.to(".loader .blok", {
      clipPath: (i) =>
        i === 0
          ? "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
          : "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      duration: 1,
      stagger: 0.1,
      delay: 0.75,
    });

    tl.to(".loader", {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        document.querySelector(".loader")?.remove();
      },
    });
  }, []);

  return (
    <>
      <div className="loader">
        <div className="overlay">
          <div className="blok" />
          <div className="blok" />
        </div>

        <div className="intro-logo">
          <div className="word" id="word-1">
            <h1><span className='font-editorialItalic text-white font-medium'>Athar</span></h1>
          </div>
          <div className="word" id="word-2">
            <h1 className="text-white font-medium">Revan</h1>
          </div>
        </div>

        <div className="divider" />
        
        <div className="spinner-container">
          <div className="spinner" />
        </div>
        
        <div className="counter">
          <div className="count">
            <div className="digit"><h1 className='text-center text-white text-[5rem] font-medium leading-none font-editorial font-editorialRegular'>0</h1></div>
            <div className="digit"><h1 className='text-center text-white text-[5rem] font-medium leading-none font-editorial font-editorialRegular'>0</h1></div>
          </div>
          <div className="count">
            <div className="digit"><h1 className='text-center text-white text-[5rem] font-medium leading-none font-editorial font-editorialRegular'>2</h1></div>
            <div className="digit"><h1 className='text-center text-white text-[5rem] font-medium leading-none font-editorial font-editorialRegular'>8</h1></div>
          </div>
          <div className="count">
            <div className="digit"><h1 className='text-center text-white text-[5rem] font-medium leading-none font-editorial font-editorialRegular'>5</h1></div>
            <div className="digit"><h1 className='text-center text-white text-[5rem] font-medium leading-none font-editorial font-editorialRegular'>4</h1></div>
          </div>
          <div className="count">
            <div className="digit"><h1 className='text-center text-white text-[5rem] font-medium leading-none font-editorial font-editorialRegular'>7</h1></div>
            <div className="digit"><h1 className='text-center text-white text-[5rem] font-medium leading-none font-editorial font-editorialRegular'>9</h1></div>
          </div>
          <div className="count">
            <div className="digit"><h1 className='text-center text-white text-[5rem] font-medium leading-none font-editorial font-editorialRegular'>9</h1></div>
            <div className="digit"><h1 className='text-center text-white text-[5rem] font-medium leading-none font-editorial font-editorialRegular'>9</h1></div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Preloader
