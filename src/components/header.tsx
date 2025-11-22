'use client';
import {useState} from 'react'
import Burger from '@/components/navigation/burger';
import Stairs from '@/components/navigation/stairs';
import Menu from '@/components/navigation/menu';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

export default function () {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    useEffect(() => {
        window.dispatchEvent(new Event("rebindLinks"));
        }, [menuIsOpen]);

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