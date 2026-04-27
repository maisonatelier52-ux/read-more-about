import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://www.read-more-about.com'),
  title: {
    default: "Read More About — Breaking News & World Headlines"
  },
  description: "Discover breaking news, politics, business, sports & world events. Expert journalism you can trust.",
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Read More About RSS Feed"
          href="/rss.xml"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        <ScrollToTop /> 
        {children}
        <Footer/>
      </body>
    </html>
  );
}
