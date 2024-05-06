import { Inter } from "next/font/google";
import "./globals.css";

import HomeLogo from "@/components/HomeLogo";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "caracolstudio",
  description:
    "3D printing; production; prototyping; research; robotics; 3D printing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body className={`overflow-x-hidden`}>
        <HomeLogo />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
