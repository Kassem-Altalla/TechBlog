import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Tech blog",
  description: "A blog about technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
