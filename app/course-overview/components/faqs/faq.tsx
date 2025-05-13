"use client";
import { useEffect, useState } from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import styles from "./faq.module.css";

interface FAQ {
  question: string;
  answer: string;
}

interface FaqProps {
  faqs: FAQ[];
}

const Faq: React.FC<FaqProps> = ({ faqs }) => {
  const [expanded, setExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Proceed button click
  const handleProceed = async () => {
    const { name, phone, email } = formData;
  
    // Check if any field is empty
    if (!name.trim() || !phone.trim() || !email.trim()) {
      alert("Please fill in all the details before proceeding.");
      return;
    }

    const data = {
        access_key: "047562dd-ef6e-4f23-bdb2-1ae8b2fd2bff",
        name: name,
        phone: phone,
        email: email
      };
  
       await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
    const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSfbXbqpmm1hatXrej42xjPyTh1CjJAJw4r_zNlB4V6K_-aOFQ/viewform?usp=header&entry.1000020=${encodeURIComponent(
      name
    )}&entry.1000022=${encodeURIComponent(phone)}&entry.1000025=${encodeURIComponent(email)}`;
  
    window.open(formUrl, "_blank");
    setShowModal(false); // Close modal
  };


  const handleOpenModal = () => {
    setFormData({ name: "", phone: "", email: "" }); // Clear fields
    setShowModal(true);
  };
  
  const handleCloseModal = () => {
    setFormData({ name: "", phone: "", email: "" }); // Clear fields
    setShowModal(false);
  };
  
   

  return (
    <div className={styles.faqContainer}>
      <h2 className={styles.heading}>Frequently Asked Questions</h2>
      <Accordion transition transitionTimeout={200}>
        {faqs.slice(0, expanded ? faqs.length : 3).map((faq, index) => (
          <AccordionItem key={index} header={faq.question} className={styles.accordionItem}>
            <p className={styles.answer}>{faq.answer}</p>
          </AccordionItem>
        ))}
      </Accordion>
      <div className={styles.showMoreContainer}>
        <button className={styles.showMoreButton} onClick={() => setExpanded(!expanded)}>
          {expanded ? "Show Less" : "Show More"}
        </button>
      </div>

      {showButton && (
        <button className={styles.buyCourseButton} onClick={handleOpenModal}>
          Enroll Now
        </button>
      )}

      {/* Modal */}
      {showModal ? (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Enter Your Details</h3>
            <input className={styles.textInput} type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
            <input className={styles.textInput} type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
            <input className={styles.textInput} type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <div className={styles.modalButtons}>
              <button onClick={handleCloseModal}>Cancel</button>
              <button onClick={handleProceed}>Proceed</button>
            </div>
          </div>
        </div>
      ) : <></>}
    </div>
  );
};

export default Faq;
