"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import  supabase  from "../../../utils/supabase-client";
import { User } from "@supabase/supabase-js";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";

export default function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function getUser() {
      const { data, error } = await supabase.auth.getUser();
      if (error || !data?.user) {
        router.push("/admin/admin-login");
      } else {
        setUser(data.user); 
      }
    }
    getUser();
  }, [router]);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        router.push("/admin/admin-login"); // Redirect if logged out
      }
    });
  
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [router]);

  return (
    <div>=
        <Sidebar />
    </div>
  );
}
