import { Inter } from "next/font/google";
import "./globals.css";

import HomeLogo from "@/components/HomeLogo";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden`}>
        <HomeLogo />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
