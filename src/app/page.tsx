import Image from "next/image";
import { Badge } from "@/components/ui/badge"
import LogoLoop from '@/components/LogoLoop';
import { imageLogos } from "@/data/datapfolio";
import { Button } from "@/components/ui/button"
import Projek from "@/components/page/projek";
import { ExpandableScreen, ExpandableScreenContent, ExpandableScreenTrigger } from "@/components/ui/expandable-screen"
import { BackgroundGrid, DottedBackground } from "@/components/background"
import TextOpacity from "@/components/TextOpacity";
import Link from "next/link";
import { TextReveal } from "@/components/ui/text-reveal"
import { RevealText } from "@/components/ui/reveal-text"
import Preloader from "@/components/preloader/Preloader";
import Header from '@/components/header';

export default function Home() {
  return (
    <div>
      <Preloader />

      

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
            'text-[33px] lg:text-5xl', 
            'text-black',
            'text-center', 
            'leading-[0.9]', 
            'font-poppins', 
            'dark:text-white'
            ].join(' ')}>
              Build stunning digital<br />experiences.
          </h1>
          <p className="text-[#7e7e7e] text-[11px] text-center font-poppins lg:text-[16px]">
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
            
            <ExpandableScreen
              layoutId="unique-id"
              triggerRadius="100px"
              contentRadius="24px"
              animationDuration={0.3}
            >
              <ExpandableScreenTrigger>
                <button className="px-10 py-2 border border-[#252525] rounded-full cursor-pointer">
                  Contacts
                </button>
              </ExpandableScreenTrigger>

              <ExpandableScreenContent className="bg-primary">
                <h1>contoh</h1>
              </ExpandableScreenContent>
            </ExpandableScreen>
          </div>
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
        <TextReveal>Magic UI will change the way you design.</TextReveal>
      </section>

      <Projek />
      
      <section className="min-h-screen w-full bg-white dark:bg-dark-background relative flex items-center justify-center text-center">
        <h1>ini section selanjutnya</h1>
      </section>

    </div>
  );
}
