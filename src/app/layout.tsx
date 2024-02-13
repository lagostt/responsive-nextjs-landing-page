import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const roboto =  Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Landing page",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
