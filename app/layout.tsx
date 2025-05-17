import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

import type { Metadata } from "next";
import "./globals.css";

import Footer from "./components/connect-us/page"
import Navbar from "./components/navbar/page"

export const metadata: Metadata = {
  title: 'Márkus Szalon',
  description: 'Barátságos fodrászat Budakeszin. Hajgyógyászat specialista. Egészséges, szép hajért fordulj hozzám!',
  openGraph: {
    title: 'Márkus Szalon',
    description: 'Barátságos fodrász Budakeszin. Hajgyógyászat specialista. Egészséges, szép hajért fordulj hozzám!',
    siteName: 'Márkus Szalon',
    images: [
      {
        url: 'https://next-app-sevelaters-projects.vercel.app/logo.png',
        width: 600,
        height: 600,
        alt: 'Márkus Szalon logó',
      },
    ],
    locale: 'hu_HU',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
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