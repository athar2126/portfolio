import { easeInOut, motion } from "framer-motion";
import { opacity, slideLeft, muncul, mountAnim, navLink } from "@/components/navigation/anim";
import { RevealLinks } from "@/components/RevealLinks";
import Logo from '@/components/editable-svg/logo'
import Image from "next/image";

const MotionImg = motion(Image);

const menu = [
  {
    title: "Projects",
    description: "To See Everything",
    images: ["projects1.jpg", "projects2.jpg"],
  },
  {
    title: "Agence",
    description: "To Learn Everything",
    images: ["agence1.jpg", "agence2.jpg"],
  },
  {
    title: "Contact",
    description: "To Send a FAX",
    images: ["contact1.jpg", "contact2.jpg"],
  },
];

export default function Menu({ closeMenu }) {
  return (
    <motion.div
      className="
        fixed z-[3] w-full h-full
        flex flex-col justify-between
      "
      variants={opacity}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {/* HEADER */}
      <div className="flex justify-between p-5 flex-row-reverse">
        <motion.div 
          onClick={closeMenu} 
          className="text-white cursor-pointer"
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0}}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{
            duration: 0.4,
            delay: 0.2,
            ease: easeInOut,
          }}
        >
          close
        </motion.div>

        <Logo className="w-25" color="#fff" bgColor="#fff" revan="#13151a"/>
      </div>

      {/* BODY */}
      <div
        className="
          absolute left-1/2 top-1/2
          -translate-x-1/2 -translate-y-1/2
          w-full
        "
      >
        <div className="grid px-8 text-white">
          <ul className="leading-none">
            <motion.li initial="initial" whileHover="hovered" className="overflow-hidden w-fit">
              <motion.div variants={navLink} initial="hidden" animate="show" exit="exit" className="py-2">
                <RevealLinks href="#">About</RevealLinks>
              </motion.div>
              <MotionImg src="/img/pfp.jpg" width={100} height={100} className="absolute top-1/2 left-1/2" alt="test"
                  variants={{
                      initial: {
                          opacity: 0,
                          scale: 0.9,
                      },
                      hovered: {
                          opacity: "100%",
                          scale: 1,
                      },
                  }}/>
            </motion.li>

            <motion.li initial="initial" whileHover="hovered" className="overflow-hidden w-fit">
              <motion.div variants={navLink} initial="hidden" animate="show" exit="exit" className="py-2">
                <RevealLinks href="#">Projects</RevealLinks>         
              </motion.div>
              <MotionImg src="/img/pfp.jpg" width={100} height={100} className="absolute top-1/2 left-1/2" alt="test"
                  variants={{
                      initial: {
                          opacity: 0,
                          scale: 0.9,
                      },
                      hovered: {
                          opacity: "100%",
                          scale: 1,
                      },
                  }}/>
            </motion.li>

            <motion.li initial="initial" whileHover="hovered" className="overflow-hidden w-fit">
              <motion.div variants={navLink} initial="hidden" animate="show" exit="exit" className="py-2">
                <a href="/certificate">Certificate</a>
              </motion.div>
              <MotionImg src="/img/pfp.jpg" width={100} height={100} className="absolute top-1/2 left-1/2" alt="test"
                  variants={{
                      initial: {
                          opacity: 0,
                          scale: 0.9,
                      },
                      hovered: {
                          opacity: "100%",
                          scale: 1,
                      },
                  }}/>
            </motion.li>

            <motion.li initial="initial" whileHover="hovered" className="overflow-hidden w-fit">
              <motion.div variants={navLink} initial="hidden" animate="show" exit="exit" className="py-2">
                <RevealLinks href="#">Changelog</RevealLinks>
              </motion.div>
              <MotionImg src="/img/pfp.jpg" width={100} height={100} className="absolute top-1/2 left-1/2" alt="test"
                  variants={{
                      initial: {
                          opacity: 0,
                          scale: 0.9,
                      },
                      hovered: {
                          opacity: "100%",
                          scale: 1,
                      },
                  }}/>
            </motion.li>

            <motion.li initial="initial" whileHover="hovered" className="overflow-hidden w-fit">
              <motion.div variants={navLink} initial="hidden" animate="show" exit="exit" className="py-2">
                <RevealLinks href="#">Blog</RevealLinks>
              </motion.div>
              <MotionImg src="/img/pfp.jpg" width={100} height={100} className="absolute top-1/2 left-1/2" alt="test"
                  variants={{
                      initial: {
                          opacity: 0,
                          scale: 0.9,
                      },
                      hovered: {
                          opacity: "100%",
                          scale: 1,
                      },
                  }}/>
            </motion.li>
          </ul>
        </div>
      </div>

      {/* FOOTER */}
      <motion.div
        variants={opacity}
        {...mountAnim}
        custom={0.5}
        className="
          flex justify-center gap-[10px] p-5 text-white
        "
      >
        <a className="text-[3vw] border-2 border-white px-2 rounded-[30px] cursor-pointer">FB</a>
        <a className="text-[3vw] border-2 border-white px-2 rounded-[30px] cursor-pointer">IG</a>
        <a className="text-[3vw] border-2 border-white px-2 rounded-[30px] cursor-pointer">IN</a>
        <a className="text-[3vw] border-2 border-white px-2 rounded-[30px] cursor-pointer">BE</a>
      </motion.div>
    </motion.div>
  );
}