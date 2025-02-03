import React, { useState } from "react";
import styles from "./sidebar.module.css";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const [isBlogMenuOpen, setIsBlogMenuOpen] = useState(false);
  const [isCourseMenuOpen, setIsCourseMenuOpen] = useState(false);
  const router = useRouter();

  const handleBlogMenuToggle = () => setIsBlogMenuOpen(!isBlogMenuOpen);
  const handleCourseMenuToggle = () => setIsCourseMenuOpen(!isCourseMenuOpen);

  return (
    <div className={styles.sidebar}>
      {/* Blogs Section */}
      <div
        className={styles.sidebaritem}
        onMouseEnter={handleBlogMenuToggle}
        onMouseLeave={handleBlogMenuToggle}
      >
        {/* Blog SVG Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path d="M19 2H5C3.9 2 3 2.9 3 4V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V4C21 2.9 20.1 2 19 2ZM5 4H19V6H5V4ZM5 8H19V10H5V8ZM5 12H19V14H5V12ZM5 16H19V18H5V16ZM5 20V16H19V20H5Z"/>
        </svg>
        <span className={styles.sidebarlabel}>Blogs</span>
        {isBlogMenuOpen && (
          <div className={styles.submenu}>
            <button onClick={() => router.push("/admin/blogs/add")}>Add Blog</button>
            <button onClick={() => router.push("/admin/blogs/edit")}>Manage Blog</button>
          </div>
        )}
      </div>

      {/* Courses Section */}
      <div
        className={styles.sidebaritem}
        onMouseEnter={handleCourseMenuToggle}
        onMouseLeave={handleCourseMenuToggle}
      >
        {/* Courses SVG Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM5 5H19V7H5V5ZM5 9H19V11H5V9ZM5 13H19V15H5V13ZM5 17H19V19H5V17Z"/>
        </svg>
        <span className={styles.sidebarlabel}>Courses</span>
        {isCourseMenuOpen && (
          <div className={styles.submenu}>
            <button onClick={() => router.push("/admin/courses/add")}>Add Course</button>
            <button onClick={() => router.push("/admin/courses/edit")}>Manage Course</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
