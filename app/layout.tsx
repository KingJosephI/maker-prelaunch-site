import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
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
      <body className={`${manrope.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
