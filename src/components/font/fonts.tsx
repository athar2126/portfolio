import { Poppins, DM_Serif_Text, Plus_Jakarta_Sans, Inter, Manrope } from "next/font/google";
import localFont from 'next/font/local'

export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const seriftext = DM_Serif_Text({
  variable: "--font-seriftext",
  subsets: ["latin"],
  weight: ["400"],
});

export const editorialItalic = localFont({
  src: './Editorial-Italic.woff2',
  variable: "--font-editorialItalic",
})

export const editorialRegular = localFont({
  src: './Editorial-Regular.woff2',
  variable: "--font-editorialRegular",
})

export const ivyPrestoLight = localFont({
  src: './ivyPrestoLight.woff2',
  variable: "--font-ivyPrestoLight",
})

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});