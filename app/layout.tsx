import type { Metadata } from "next";
import "./globals.css";
import { poppinsFontClass } from "@app/home/theme/fonts/font";
import Footer from "@components/footer/footer";
import Header from "@components/header/header";

export const metadata: Metadata = {
  metadataBase:  new URL('https://ewslearning.com'),
  title: "EWS Learning",
  description: "Empowering Sustainable Futures through Environmental Education & Corporate Sustainability",
  keywords: "ews learning, ewslearning, ews, EWS Learning, ews learn",
};

export default function RootLayout({
  children,
}: Readonly<{ 
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsFontClass.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
