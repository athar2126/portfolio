'use client';
import {useState} from 'react'
import Burger from '@/components/navigation/burger';
import Stairs from '@/components/navigation/stairs';
import Menu from '@/components/navigation/menu';
import { AnimatePresence } from 'framer-motion';

export default function () {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
        <div className="fixed z-[3] w-full flex flex-col justify-between">
            <Burger openMenu={() => {setMenuIsOpen(true)}}/>
            <AnimatePresence mode="wait">
            {
                menuIsOpen && <>
                <Stairs />
                <Menu closeMenu={() => {setMenuIsOpen(false)}}/>
                </>
            }
            </AnimatePresence>
        </div>
    )
}