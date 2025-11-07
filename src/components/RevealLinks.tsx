import React from "react";
import Link from "next/link";
import { motion } from 'framer-motion'

const MotionLink = motion(Link);

export const RevealLinks = ({ children, href }: { children: string; href: string; }) => {
    return (
        <FlipLink href={href}>{children}</FlipLink>
    )
}

const DURATION = 0.4;
const STAGGER = 0.04;

const FlipLink = ({ children, href }: { children: string; href: string; }) => {
    return (
        <MotionLink
            initial="initial"
            whileHover="hovered"
            href={href} 
            className="relative w-fit block overflow-hidden whitespace-nowrap text-6xl font-light uppercase font-seriftext"
        >
            <div>
                {children.split("").map((l, i) => {
                    return <motion.span 
                    variants={{
                        initial: {
                            y: 0,
                        },
                        hovered: {
                            y: "-100%",
                        },
                    }}
                    transition={{
                        duration: DURATION,
                        ease: "easeInOut",
                        delay: STAGGER * i,
                    }}
                    className="inline-block"
                    key={i}>{l}</motion.span>
                })}
            </div>
            <div className="absolute inset-0">
                {children.split("").map((l, i) => {
                    return <motion.span 
                    variants={{
                        initial: {
                            y: "100%",
                        },
                        hovered: {
                            y: 0,
                        },
                    }}
                    transition={{
                        duration: DURATION,
                        ease: "easeInOut",
                        delay: STAGGER * i,
                    }}
                    className="inline-block"
                    key={i}>{l}</motion.span>
                })}
            </div>
        </MotionLink>
    )
}