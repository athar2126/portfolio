import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { WordRotate } from "@/components/ui/word-rotate"
import LogoLoop from '@/components/LogoLoop'
import { imageProjects } from '@/data/datapfolio'
import { Instagram, Linkedin, Github, Download } from '@/components/editable-svg/Socialicon'

const page = () => {
  return (
    <div className="bg-[#ededee] dark:bg-[#050505]">
      <div className="grid grid-cols-2 grid-rows-9 lg:grid-cols-6 lg:grid-rows-7 gap-4 px-4 lg:px-20">

        {/* Profile Card */}
        <div className="p-5 border-[#BEBECD] bg-[#F4F4F5] dark:border-[#191919] dark:bg-[#101010] rounded-[22px] border col-span-2 relative lg:col-span-2 lg:row-span-2">
          <div className="flex column gap-5">
            <Image
              src="/img/pfp.jpg"
              alt="profile"
              width={80}
              height={80}
              className="rounded-2xl"
            />

            <div className="flex flex-col gap-1.5">
              <div
                className={[
                  "flex flex-row bg-[#EEEEF1] border-[#E1E1E6] border",
                  "w-fit h-fit py-[3.5px] px-[10px]",
                  "gap-1.5 rounded-full justify-center items-center"
                ].join(" ")}
              >
                <Image src="/img/icon/hand.svg" alt="hand" width={10} height={10} />
                <p className="font-inter text-[14px] text-[#71717A] font-medium leading-none">
                  Welcome
                </p>
              </div>

              <div>
                <p className="text-[22px] font-semibold font-manrope text-[#09090B] tracking-[-0.02em]">
                  Athar Revansyah
                </p>
                <p className="text-[15px] font-manrope text-[#303038]">
                  I'm a <span className="font-semibold text-[#0066FE]">Frontend Developer</span>
                </p>
              </div>
            </div>
          </div>

          <Tooltip>
            <TooltipTrigger asChild>
              <a href='linkcv.com' className='absolute right-5 top-5 border border-[#E1E1E6] bg-[#EEEEF1] p-2.5 rounded-[8px] dark:bg-[#1F1F1F] dark:border-[#1F1F1F]'>
                <Download />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <h1>Download CV</h1>
            </TooltipContent>
          </Tooltip>
        </div>

        {/* Ringkasan */}
        <div className="border-[#BEBECD] bg-[#F4F4F5] dark:border-[#191919] dark:bg-[#101010] rounded-[22px] border col-span-2 row-start-2 lg:col-start-3 lg:row-span-2">
          Ringkasan
        </div>

        {/* Experience */}
        <div className="border-[#BEBECD] bg-[#F4F4F5] dark:border-[#191919] dark:bg-[#101010] rounded-[22px] border col-span-2 row-start-6 lg:col-start-5 lg:row-span-2">
          Experience
        </div>

        {/* Identitas */}
        <div className="border-[#BEBECD] bg-[#F4F4F5] dark:border-[#191919] dark:bg-[#101010] rounded-[22px] border col-span-2 row-start-3 lg:row-start-3 lg:row-span-2">
          Identitas
        </div>

        {/* Projects */}
        <div className="pt-5 border-[#BEBECD] bg-[#F4F4F5] relative dark:border-[#191919] dark:bg-[#101010] rounded-[22px] border col-span-2 row-start-5 lg:col-start-3 lg:row-start-3 lg:row-span-2">
          <div className="flex flex-col gap-0.5 items-center pb-2.5">
            <div className="flex flex-row justify-center items-center gap-1">
              <Image src="/img/icon/work.svg" alt="star" width={18} height={0} />
              <p className="text-[14px] font-manrope leading-none">Projects</p>
            </div>
            <h1 className="text-[16px] font-manrope font-semibold">Recent Work</h1>
          </div>

          <LogoLoop
          logos={imageProjects}
          speed={20}
          direction="left"
          logoHeight={100}
          gap={10}
          pauseOnHover={false}
          ariaLabel="Technology partners"
          className='pt-2.5'
          />

          <div className='h-[100px] bg-[linear-gradient(180deg,rgba(15,15,15,0)_0%,rgb(239,239,239)_100%)] dark:bg-[linear-gradient(180deg,rgba(15,15,15,0)_0%,rgb(16,16,16)_100%)] absolute w-full bottom-0 z-1 overflow-hidden rounded-b-[22px]'>
            <div className='p-1 bg-[#e6e6e6] dark:bg-[#212121] rounded-[14px] w-[150px] absolute top-1/2 left-1/2 -translate-1/2'> 
              <Link href="/projects">
                <div className='p-2.5 flex justify-center rounded-[12px] items-center bg-[#0066FE]'>
                  <p className='text-[14px] text-white font-manrope font-semibold dark:text-[#2D2D2D]'>View Works</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="p-5 border-[#BEBECD] bg-[#F4F4F5] dark:border-[#191919] dark:bg-[#101010] rounded-[22px] border row-start-4 lg:col-start-5 lg:row-start-3 lg:row-span-3">
          <div className="flex flex-col gap-7.5">

            {/* Title */}
            <div className="flex flex-col gap-0.5 items-center">
              <div className="flex flex-row justify-center items-center gap-1">
                <Image src="/img/icon/star.svg" alt="star" width={22} height={0} />
                <p className="text-[14px] font-manrope leading-none">Follow Me</p>
              </div>
              <h1 className="text-[16px] font-manrope font-semibold">Social Media</h1>
            </div>

            {/* Social List */}
            <div className="flex flex-col gap-2.5">
              <a className="social-item" href="instagram.com">
                <div className="icon-box"><Instagram /></div>
                <p className="social-text">@atharrevan</p>
              </a>

              <a className="social-item" href="linkedin.com">
                <div className="icon-box"><Linkedin /></div>
                <p className="social-text">@atharrevan</p>
              </a>

              <a className="social-item" href="github.com">
                <div className="icon-box"><Github /></div>
                <p className="social-text">@atharrevan</p>
              </a>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="border-[#BEBECD] bg-[#F4F4F5] dark:border-[#191919] dark:bg-[#101010] rounded-[22px] border row-start-4 lg:col-start-6 lg:row-start-3 lg:row-span-3">
          Services
        </div>

        {/* Random Mini Box */}
        <div className="h-[110px] border-[#BEBECD] bg-[#F4F4F5] dark:border-[#191919] dark:bg-[#101010] rounded-[22px] border row-start-8 col-span-2 lg:col-span-4 lg:row-start-5">
          8
        </div>

        {/* Globe */}
        <div className="h-[220px] border-[#BEBECD] bg-[#F4F4F5] dark:border-[#191919] dark:bg-[#101010] rounded-[22px] border row-start-7 lg:row-start-6 lg:row-span-2">
          Globe
        </div>

        {/* Word Rotate */}
        <div className="h-[220px] border-[#BEBECD] bg-[#F4F4F5] dark:border-[#191919] dark:bg-[#101010] rounded-[22px] border col-span-2 row-start-9 lg:col-span-4 lg:row-start-6 lg:row-span-2">
          Word rotate
        </div>

        {/* React Tailwind Nextjs */}
        <div className="h-[220px] border-[#BEBECD] bg-[#F4F4F5] dark:border-[#191919] dark:bg-[#101010] rounded-[22px] border row-start-7 lg:col-start-6 lg:row-start-6 lg:row-span-2">
          React Tailwind Next.js
        </div>

      </div>
    </div>
  )
}

export default page
