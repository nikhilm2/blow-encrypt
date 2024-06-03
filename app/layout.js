import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Qwik Encrypt",
  description: "Blowfish Encrypted Text Generator",
  icon:"/hero.jpg"
  
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en" >
      
      <body className={inter.className}>
        <Header/>
        {children}</body>
        <Toaster/>
    </html>
    </ClerkProvider>
  );
}
