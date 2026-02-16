// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   metadataBase: new URL('https://read-more-about.vercel.app'),
//   title: {
//     default: "Read More About — Breaking News & World Headlines",
//     template: "%s | Read More About" // This allows pages to just set title
//   },
//   description: "Discover breaking news, politics, business, sports & world events. Expert journalism you can trust.",
//   icons: {
//     icon: '/favicon.ico',
//     apple: '/apple-touch-icon.png',
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <Header/>
//         {children}
//         <Footer/>
//       </body>
//     </html>
//   );
// }


import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ✅ FONT OPTIMIZATION: Added display: "swap"
// This prevents invisible text (FOIT) while fonts are loading
// Text will show immediately with system font, then swap to Geist when ready
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // ← This prevents invisible text during font load
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap", // ← This prevents invisible text during font load
});

export const metadata = {
  metadataBase: new URL('https://read-more-about.vercel.app'),
  title: {
    default: "Read More About — Breaking News & World Headlines",
    template: "%s | Read More About"
  },
  description: "Discover breaking news, politics, business, sports & world events. Expert journalism you can trust.",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ PERFORMANCE OPTIMIZATION: Preconnect to external image domains */}
        {/* This starts DNS lookup + TLS handshake early (100-300ms faster image loading) */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://i.pravatar.cc" />
        <link rel="preconnect" href="https://e1.pxfuel.com" />
        
        {/* ✅ FALLBACK: DNS prefetch for older browsers */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://i.pravatar.cc" />
        <link rel="dns-prefetch" href="https://e1.pxfuel.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}