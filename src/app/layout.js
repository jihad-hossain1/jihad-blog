// "use client";
import { Root } from "postcss";
import "./globals.css";
import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Jihad Blog",
  description: "Learn Effective Programming",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${roboto.className} font-roboto`}>{children}</body>
    </html>
  );
};

export default RootLayout;
