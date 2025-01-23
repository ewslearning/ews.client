
"use client";
import styles from "./form.module.css";
import Button from "@components/common/button/button";
import Input from "@components/common/input/input";
import { SubmitHandler, useForm } from "react-hook-form";
import Map from "../../assets/images/map.png";
import CustomCheckbox from "../checkbox/checkbox";
import Image from "next/image";
import FacebookIcon from "../../assets/icons/fbGreen.svg";
import InstaIcon from "../../assets/icons/igGreen.svg";
import LinkedinIcon from "../../assets/icons/linkedinGreen.svg";
import TwitterIcon from "../../assets/icons/twitterGreen.svg";
import YoutubeIcon from "../../assets/icons/youtubeGreen.svg";
import { useState } from "react";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  orgName: string;
  message?: string;
};

// interface CheckboxOption {
//    label: string;
//    value: string;
//  }
 
//  interface CheckboxGroupProps {
//    options: CheckboxOption[];
//    onSubmit: (selectedValues: string[]) => void;
//  }
 
//  type FormValues = {
//    selectedOptions: Record<string, boolean>; // Object to keep track of selected options
//  };
 

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const handleOpenMaps = (latitude: number, longitude: number) => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    window.open(googleMapsUrl, '_blank');
  };
  

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const formData = {
      access_key: "24e01616-b222-4139-bd08-df0f2e6d253a",
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      orgName: data.orgName,
      message: data.message,
      subject: selectedOptions.join(", "),
      preferredContactMethod: selectedpreferredMContactMethods.join(", "),
      howDidYouHearAboutUs: selectedHowDidYouHeardAboutUs.join(", "),
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        alert("Form submitted successfully!");
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please check your internet connection and try again.");
    }
  };
  

  const subjectOptions = [
   { label: "General\nInquiry", value: "General Inquiry" },
   { label: "Program\nInformation", value: "Program Information" },
   { label: "Certification\nDetails", value: "Certification Details" },
   { label: "Others", value: "Others" },
 ];



 const preferredMContactMethods = [
   { label: "Phone", value: "Phone" },
   { label: "Email", value: "Email" },
 ];

 const howDidYouHeardAboutUs = [
   { label: "Website", value: "Website" },
   { label: "Social Media", value: "Social Media" },
   { label: "Referral", value: "Referral" },
   { label: "Others", value: "Others" },
 ];

  // State to manage checked options
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectedpreferredMContactMethods, setSelectedPreferredMContactMethods] = useState<string[]>([]);
  const [selectedHowDidYouHeardAboutUs, setHowDidYouHeardAboutUs] = useState<string[]>([]);
 
  // Handle checkbox change
  const handleSelectedOptionsChange = (value: string) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((option) => option !== value) // Remove if already selected
        : [...prevSelected, value] // Add if not already selected
    );
  };
  const handleSselectedpreferredMContactMethodsChange = (value: string) => {
    setSelectedPreferredMContactMethods((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((option) => option !== value) // Remove if already selected
        : [...prevSelected, value] // Add if not already selected
    );
  };
  const handleselectedHowDidYouHeardAboutUsChange = (value: string) => {
    setHowDidYouHeardAboutUs((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((option) => option !== value) // Remove if already selected
        : [...prevSelected, value] // Add if not already selected
    );
  };

  return (
    <div className={styles.newsletterContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputparentcontainer}>
        <div className={styles.inputcontainer}>
          <Input
            variant="secondary"
            name="firstName"
            label="First Name*"
            placeholder="Enter Your First Name"
            register={register}
            error={errors.firstName}
          />

          <Input
          variant="secondary"
            name="lastName"
            label="Last Name*"
            placeholder="Enter Your Lirst Name"
            register={register}
            error={errors.lastName}
          />

          <Input
          variant="secondary"
            name="email"
            label="Email Address*"
            placeholder="Enter Your Email Address"
            register={register}
            error={errors.email}
          />

          <Input
          variant="secondary"
            name="phone"
            label="Phone Number*"
            placeholder="Enter Your Phone Number"
            register={register}
            error={errors.phone}
          />

         <Input
            variant="secondary"
            name="orgName"
            label="Organization Name"
            placeholder="You Organization / Company Name"
            register={register}
          />
          <div className={styles.labelText}>Subject<br/>
          <div className={styles.hintText}>Select an option
            </div>
            <div className={styles.checkboxContainer}>
         {subjectOptions.map((option) => (
        <CustomCheckbox
        key={option.value}
        value={option.value}
        label= {option.label}
        isChecked={selectedOptions.includes(option.value)} 
        onChange={() => handleSelectedOptionsChange(option.value)}
            />
             
        
      ))}
      </div>
            </div>
          
          
      <Input
            variant="secondary"
            name="message"
            label="Please provide details of your inquiry or request your message"
            placeholder="You Organization / Company Name"
            register={register}
          />
      
      <div className={styles.labelText}>Preferred Method of Contact<br/>
          <div className={styles.hintText}>Phone calls will be done in working hours between&nbsp;<div className={styles.workingHours}>9:30am to 6pm</div>
            </div><div className={styles.workingHours}>Except Sunday</div>
            <div className={styles.checkboxContainer}>
         {preferredMContactMethods.map((option) => (
        <CustomCheckbox
        key={option.value}
        value={option.value}
        label= {option.label}
        isChecked={selectedpreferredMContactMethods.includes(option.value)} 
        onChange={() => handleSselectedpreferredMContactMethodsChange(option.value)}
            />
      ))}
      </div>
            </div>

            <div className={styles.labelText}>How did you hear about us?<br/>
          <div className={styles.hintText}>Select an option
            </div>
            <div className={styles.checkboxContainer}>
         {howDidYouHeardAboutUs.map((option) => (
        <CustomCheckbox
        key={option.value}
        value={option.value}
        label= {option.label}
        isChecked={selectedHowDidYouHeardAboutUs.includes(option.value)} 
        onChange={() => handleselectedHowDidYouHeardAboutUsChange(option.value)}
            />
      ))}
      </div>
            </div>


        </div>

        
        
        <div className={styles.submitBtnContainer}>
        <Button typeof="submit" variant="primary">
          Submit
        </Button>
        </div>
        </div>
      </form>
      <div className={styles.mapSideContainer}>
      <Image className={styles.map} src={Map} alt="Map" onClick={() => handleOpenMaps(13.0063544, 77.6177286)}/>
  
         <div className={styles.addressHeading}>EWS Address</div>
         <p onClick={() => handleOpenMaps(13.0063544, 77.6177286)} className={styles.fullAddress}>No.3, 2nd floor, Clark Wood Road, Richards Town, Bengaluru, Karnataka 560005</p>
        
         <div  className={styles.followUsContainer}>Follow us</div>
         <div className={styles.iconContainer}>                           
         <FacebookIcon  onClick={() => window.open("https://www.facebook.com/profile.php?id=61570908623491")}  className={styles.icons}/>
                                <LinkedinIcon  onClick={() => window.open("https://www.linkedin.com/company/ews-learning/?viewAsMember=true")} className={styles.icons}/>
                                <InstaIcon onClick={() => window.open("https://www.instagram.com/ews.learning/?hl=en")} className={styles.icons}/>
                                <TwitterIcon  onClick={() => window.open("https://x.com/EWSLearning")} className={styles.icons}/>
                                <YoutubeIcon  onClick={() => window.open("https://www.youtube.com/channel/UCNPQ4KD37Wjy371x3geS0ew")} className={styles.icons}/>                             
                            </div>
                            </div>
     
      </div>
  );
};

export default Form;
