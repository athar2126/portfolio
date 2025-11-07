"use client";
import React, { useRef } from 'react'
import { useScroll, motion, useTransform, MotionValue } from 'motion/react'

const TextOpacity = () => {
    const value = "Hi, I'm Ifal Fahri A.A. tech enthusiast studying Informatics Engineering. Mainly focused on Web Development and Visual Design I love creating intuitive and visually appealing stuff like this."

    const element = useRef(null);
    const { scrollYProgress} = useScroll({
        target: element,
        offset: ['start end', 'start 0.25']
    })

  const words = value.split(" ");
  return (
    <p 
      className="text-[50px] max-w-[1280px] flex flex-wrap leading-none items-center justify-center"
      ref={element}
    >
        {
            words.map( (word, i) => {
                const start = i / words.length;
                const end = start + (1 / words.length)
                return <Word key={i} range={[start, end]} progress={scrollYProgress}>{word}</Word>
            })
        }
    </p>
  )
}

interface WordProps {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
}

const Word: React.FC<WordProps> = ({ children, range, progress }) => {
    const characters = children.split("");
    const amount = range [1] - range[0];
    const step = amount / children.length;
    return (
        <span className="mr-[12px] mt-[12px] relative">
            {
                characters.map( (character, i) => {
                    const start = range[0] + (step * i);
                    const end = range[0] + (step * (i + 1));
                    console.log([start, end])
                    return <Character key={i} range={[start, end]} progress={progress}>{character}</Character>
                })
            }
        </span>
    )
}

interface CharacterProps {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
}

const Character: React.FC<CharacterProps> = ({ children, range, progress }) => {
    const opacity = useTransform(progress, range, [0, 1]);
    return (
        <span>
            <span className="absolute opacity-[0.1]">{children}</span>
            <motion.span style={{opacity}}>
                {children}
            </motion.span>
        </span>
    )
}

export default TextOpacity