import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

import type { Metadata } from "next";
import "./globals.css";

import Footer from "./components/connect-us/page"
import Navbar from "./components/navbar/page"

export const metadata: Metadata = {
  title: "Márkus Szalon",
  description: "Fodrászat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-black main`}>

        <div className='text-white'>
        <Navbar/>
        </div>

        {children}

        <div className="text-white">
        <Footer/>
        </div>

      </body>
    </html>
  );
}