"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./Header.module.css"; // Import external CSS
import supabase from "../../../../../utils/supabase-client";
import Logo from "@assets/icons/ews.svg";
import ProfileIcon from "@assets/images/profile.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/admin-login");
  };

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <Logo width={120} height={80} />
      </div>

      {/* Profile Icon */}
      <div className={styles.profileContainer}>
        <button onClick={() => setIsOpen(!isOpen)} className={styles.profileButton}>
          <Image
            src={ProfileIcon.src}
            alt="Profile"
            width={40}
            height={40}
            className={styles.profileIcon}
          />
        </button>

        {/* Popover Dialog */}
        {isOpen && (
          <div className={styles.popover}>
            <button onClick={handleLogout} className={styles.logoutButton}>
              Log Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
