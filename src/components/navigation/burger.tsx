'use client';

import { motion } from 'framer-motion'
import Logo from '@/components/editable-svg/logo'
import { useState } from 'react';

export default function Burger({ openMenu }: { openMenu: () => void }) {

  const [hovered, setHovered] = useState(false)

  return (
    <>
    <div className="flex justify-between p-4 items-center">
      <Logo className='w-25'/>
      <motion.div className='flex flex-col' onHoverStart={() => setHovered(true)} onHoverEnd={() => setHovered(false)}>
        <div onClick={openMenu} className='cursor-pointer'>
            menu
        </div>
        <div className={`border-t-2 border-dark-background rounded-full transition-all duration-400 ease-in-out ${hovered ? 'w-full' : 'w-0'}`}></div>
      </motion.div>
    </div>
    
    </>
  );
}
