"use client";
import type { Metadata } from "next";
import "./globals.css";
import { poppinsFontClass } from "@app/home/theme/fonts/font";
import Footer from "@components/footer/footer";
import Header from "@components/header/header";
import { usePathname } from "next/navigation";
import Script from "next/script";

const GA_MEASUREMENT_ID = "G-QV52V79Q0Y";


// export const metadata: Metadata = {
//   metadataBase:  new URL('https://ewslearning.com'),
//   title: "EWS Learning | AI-Driven Environmental Education for Everyone, Everywhere",
//   description: "Empowering Sustainable Futures through Environmental Education & Corporate Sustainability. Our mission is to educate, engage, and connect stakeholders to ensure that waste is managed responsibly, environmental sustainability is prioritized, and governance practices are strengthened for a more equitable and sustainable future.",
//   keywords: "ews learning, ewslearning, ews, EWS Learning, ews learn",
//   applicationName: 'EWS Learning',
//   alternates: {
//     canonical: "https://ewslearning.com"
//   }
// };

export default function RootLayout({
  children,
}: Readonly<{ 
  children: React.ReactNode;
}>) {

   // Access the current path
   const pathname = usePathname();

   // Check if the current page is `/admin-login`
   const isAdminLoginPage = pathname ? pathname.startsWith("/admin") : false;
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `,
          }}
        />
      </head>
      <body className={`${poppinsFontClass.className}`}>
      {!isAdminLoginPage && <Header />}
        {children}
        {!isAdminLoginPage && <Footer />}
      </body>
    </html>
  );
}
