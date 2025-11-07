import React from 'react'
import Link from 'next/link'

const Certificate = () => {
  return (
    <>
    <div className="flex items-center justify-center w-[100%] h-[100vh]">
      <span className="pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10">
        E-Certificate
      </span>

      <Link href="/">ini link</Link>
    </div>
    </>
  )
}

export default Certificate
