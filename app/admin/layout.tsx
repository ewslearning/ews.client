"use client";
import { usePathname } from "next/navigation";
import Header from "./admin-dashboard/components/header/header";

export default function AdminLoginLayout({
    children,
  }: Readonly<{ 
    children: React.ReactNode;
  }>) {

     // Access the current path
   const pathname = usePathname();

   // Check if the current page is `/admin-login`
   const isAdminLoggedIn = pathname ? pathname === "/admin/admin-dashboard" : false;
   
    return (
      <html lang="en">
        <body>
          {isAdminLoggedIn && <Header/>}
          {children}
        </body>
      </html>
    );
  }
  