'use client'

import React from "react";
import { height, background, mountAnim } from "@/components/navigation/anim";
import { motion } from "framer-motion";

export default function Stair() {
  return (
    <motion.div
      className="
        fixed top-0 left-0 z-[2]
        h-screen flex
        pointer-events-none
        transition-all duration-1000
      "
    >
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          variants={height}
          {...mountAnim}
          custom={4 - index}
          className="
            w-[20vw] h-full
            bg-dark-background
          "
        />
      ))}

      <motion.div
        variants={background}
        {...mountAnim}
        className="
          absolute top-0 left-0
          w-full h-full
          bg-black
        "
      />
    </motion.div>
  );
}
