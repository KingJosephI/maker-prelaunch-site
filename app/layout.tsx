import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Header, Footer } from "./components";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maker prelaunch ",
  description: "Quit the 9-5 grind and live on your own term",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} px-6 md:px-24 lg:px-[10.3rem]`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
