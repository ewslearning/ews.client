"use client";

import { useState } from "react";
import { X } from "lucide-react";

import styles from "./register.module.css";
import Button from "@app/home/components/common/button/button";
import { Input } from "../ui/input-field/input-field";
import { RadioGroup, RadioGroupItem } from "../ui/radio-button/radio-button";
import { Label } from "../ui/label/label";

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PopupForm({ isOpen, onClose }: PopupFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    age: "",
    gender: "",
    schoolName: "",
    city: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGenderChange = (value: string) => {
    setFormData((prev) => ({ ...prev, gender: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    const formPayload = {
      access_key: "047562dd-ef6e-4f23-bdb2-1ae8b2fd2bff", // <-- Replace this with your Web3Forms access key
      ...formData,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formPayload),
      });

      const result = await response.json();
      const fullName = `${formData.firstName} ${formData.lastName}`.trim();
      // Build Google Form prefilled URL
   const query = new URLSearchParams({
     "usp":"pp_url",
     "entry.1000020": fullName,            // Full Name
     "entry.1000025": formData.email,      // Email
     "entry.1000022": formData.phone,      // Phone
     "entry.1110581335": formData.age,        // Age
     "entry.1283564387": formData.schoolName, // School Name
   });

   const googleFormURL = `https://docs.google.com/forms/d/e/1FAIpQLSf7qnz34NPBjct2XAKIka2a9GufkQLbe3dUilLgOv6d8xcZuA/viewform?${query.toString()}`;

  
     window.open(googleFormURL, "_blank");

      if (result.success) {
        setStatusMessage("Form submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          age: "",
          gender: "",
          schoolName: "",
          city: "",
        });
      
     
        setTimeout(() => {
          onClose();
          setStatusMessage("");
        }, 2000);
      } else {
        setStatusMessage("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      setStatusMessage("Something went wrong. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlayWrapper}>
      <div className={styles.overlay} onClick={onClose} />

      <div className={styles.popup}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>Please fill this form.</h2>
            <p>We will reach out to you shortly.</p>
          </div>
          <button onClick={onClose} className={styles.closeButton}>
            <X className={styles.closeIcon} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <Label htmlFor="firstName" className={styles.label}>First Name</Label>
              <Input id="firstName" name="firstName" maxLength={150} value={formData.firstName} onChange={handleChange} required className={styles.input} />
            </div>

            <div className={styles.inputGroup}>
              <Label htmlFor="lastName" className={styles.label}>Last Name</Label>
              <Input id="lastName" name="lastName" maxLength={150} value={formData.lastName} onChange={handleChange} required className={styles.input} />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <Label htmlFor="phone" className={styles.label}>Phone Number</Label>
            <Input id="phone" name="phone" type="tel" maxLength={15} value={formData.phone} onChange={handleChange} required className={styles.input} />
          </div>

          <div className={styles.inputGroup}>
            <Label htmlFor="email" className={styles.label}>Email</Label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className={styles.input} />
          </div>

          <div className={styles.inputGroup}>
            <Label htmlFor="age" className={styles.label}>Age</Label>
            <Input id="age" name="age" type="number" min="1" max="120" value={formData.age} onChange={handleChange} required className={styles.input} />
          </div>

          <div className={styles.inputGroup}>
            <Label className={styles.label}>Gender</Label>
            <RadioGroup value={formData.gender} onValueChange={handleGenderChange} className={styles.radioGroup}>
              {["male", "female", "other"].map((gender) => (
                <div key={gender} className={styles.radioItem}>
                  <RadioGroupItem value={gender} id={gender} />
                  <Label htmlFor={gender} className={styles.label}>
                    {gender.charAt(0).toUpperCase() + gender.slice(1)}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className={styles.inputGroup}>
            <Label htmlFor="schoolName" className={styles.label}>School Name</Label>
            <Input id="schoolName" name="schoolName" maxLength={350} value={formData.schoolName} onChange={handleChange} required className={styles.input} />
          </div>

          <div className={styles.inputGroup}>
            <Label htmlFor="city" className={styles.label}>Enter City/State Name</Label>
            <Input id="city" name="city" maxLength={350} value={formData.city} onChange={handleChange} required className={styles.input} />
          </div>

          <Button className={styles.submitButton} disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Proceed to pay ₹1499"}
          </Button>

          {statusMessage && <p className={styles.statusMessage}>{statusMessage}</p>}
        </form>
      </div>
    </div>
  );
}
