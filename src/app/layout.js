'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from 'react-redux';
import { store } from "@/store/confiq/confiqStore";
import Header from "@/layout/Header";
import Fotter from "@/layout/Fotter";
import Notification from "@/ui/Notification";
import { usePathname } from "next/navigation";
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import Sidebar from "@/components/admin/SideBar";
import { GoogleOAuthProvider } from "@react-oauth/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function createEmotionCache() {
  return createCache({ key: 'css', prepend: true });
}

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin/');

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Provider store={store}>
        <GoogleOAuthProvider clientId={"450018528716-490ictmal5ne2vnov4c8ocipnjsfjrbu.apps.googleusercontent.com"}>

          <CacheProvider value={createEmotionCache()}>
            {!isAdminRoute && <Header />}
            <Notification />
            {children}
            {!isAdminRoute && <Fotter />}
          </CacheProvider>
          </GoogleOAuthProvider>
        </Provider>
      </body>
    </html>
  );
}
