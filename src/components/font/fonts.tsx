import { Playfair, Poppins, DM_Serif_Text } from "next/font/google";
import localFont from 'next/font/local'

export const playfair = Playfair({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
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