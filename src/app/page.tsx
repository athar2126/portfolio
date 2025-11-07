import Image from "next/image";
import { Badge } from "@/components/ui/badge"
import LogoLoop from '@/components/LogoLoop';
import { imageLogos } from "@/data/datapfolio";
import { Button } from "@/components/ui/button"
import { BackgroundGrid, DottedBackground } from "@/components/background"
import TextOpacity from "@/components/TextOpacity";
import Link from "next/link";
import ImageTrail from '@/components/ImageTrail'
import { TextReveal } from "@/components/ui/text-reveal"
import Preloader from "@/components/preloader/Preloader";
import Header from '@/components/header';

export default function Home() {
  return (
    <div>
      <Preloader />

      <Header />

      <section className="min-h-screen w-full bg-white dark:bg-dark-background relative">
        <BackgroundGrid />

        <div className="flex flex-col items-center gap-[27px] relative top-[122px]">
          <p className="text-[#111827] dark:text-[#F0F0F0]">Welcome To My Portfolio</p>
          <Image
            src="/img/pfp.jpg"
            alt="pfp"
            width={70}
            height={70}
            className="rounded-full"
          />
          <div className="name">
            <Badge variant="outline">Athar Revansyah</Badge>
          </div>
          <h1 className={[
            'text-5xl', 
            'text-black', 
            'text-center', 
            'leading-[0.9]', 
            'font-poppins', 
            'dark:text-white'
            ].join(' ')}>
              Build stunning digital<br />experiences.
          </h1>
          <p className="text-[#7e7e7e] text-center font-poppins">
            I’m a designer and front-end developer passionate about<br />crafting clean, modern, and user-friendly interfaces.
          </p>
          <div className="flex gap-4">
            <Button 
              size="lg" 
              className={[
                'bg-[#252525]', 
                'text-white', 
                'rounded-full', 
                'w-35', 
                'dark:bg-white', 
                'dark:text-[#252525]'
                ].join(' ')}>
                Download CV
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className={[
                'bg-white', 
                'text-[#252525]', 
                'rounded-full', 
                'border-[#252525]', 
                'w-35', 
                'dark:border-white', 
                'dark:bg-[#252525]', 
                'dark:text-white'
                ].join(' ')}>
                  Projects
            </Button>
          </div>

          <a href="/certificate">sertifikat</a>
        </div>
      </section>

      <div className="bg-white dark:bg-dark-background" style={{ height: '100px', position: 'relative', overflow: 'hidden' }}>
        <LogoLoop
          logos={imageLogos}
          speed={60}
          direction="left"
          logoHeight={20}
          gap={50}
          pauseOnHover
          scaleOnHover
          fadeOut
          ariaLabel="Technology partners"
          style={{ opacity: '80%' }}
        />
      </div>

      <section className="min-h-screen w-full bg-white dark:bg-dark-background relative flex items-center justify-center text-center">
        {/*<div style={{ height: '70vh', position: 'absolute', width: '100%', overflowX: 'hidden' }}>
          <ImageTrail
            items={[
              'https://picsum.photos/id/287/300/300',
              'https://picsum.photos/id/1001/300/300',
              'https://picsum.photos/id/1025/300/300',
              'https://picsum.photos/id/1026/300/300',
              'https://picsum.photos/id/1027/300/300',
              'https://picsum.photos/id/1028/300/300',
              'https://picsum.photos/id/1029/300/300',
              'https://picsum.photos/id/1030/300/300',
              // ...
            ]}
            variant={2}
          />
        </div>*/}

        <TextReveal className="font-playfair">Magic UI will change the way you design.</TextReveal>
      </section>
      
      {/*<section className="min-h-screen w-full bg-[#f9fafb] dark:bg-[#1a1a1a] relative flex items-center justify-center text-center">
        <DottedBackground />
        
        <p>
          ansfjanjkbefnjakbejakbfjbeajbslfbaliwblibsidbgkjebadbgjkeabjkbgue4ldbghjake3lb
        </p>
      </section>*/}
    </div>
  );
}
