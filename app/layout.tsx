import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Open_Sans, Lato, Merriweather } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
  variable: "--font-montserrat",
})

const openSans = Open_Sans({
  subsets: ["latin"], 
  display: "swap",
  weight: ["400", "600"],
  variable: "--font-open-sans",
})

const lato = Lato({
  subsets: ["latin"],
  display: "swap", 
  weight: ["400", "700"],
  variable: "--font-lato",
})

const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"], 
  variable: "--font-merriweather",
})

export const metadata: Metadata = {
  title: "Nick Sonnenberg Events",
  description: "Nick Sonnenberg Events",
  appleWebApp: {
    title: "Nick Sonnenberg Events"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${openSans.variable} ${lato.variable} ${merriweather.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
