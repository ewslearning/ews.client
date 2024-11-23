
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
import { useState } from "react";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  orgName: string;
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

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  

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
            name="Message"
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
      <Image className={styles.map} src={Map} alt="Map"/>
  
         <div className={styles.addressHeading}>EWS Address</div>
         <div className={styles.fullAddress}> No.3, 2nd Floor, Wood Road, Clarke Rd, Richards Town, Bengaluru, Karnataka 560005</div>
        
         <div  className={styles.followUsContainer}>Follow us</div>
         <div className={styles.iconContainer}>                           
                                <FacebookIcon  className={styles.icons}/>
                                <LinkedinIcon className={styles.icons}/>
                                <InstaIcon className={styles.icons}/>
                                <TwitterIcon className={styles.icons}/>                              
                            </div>
                            </div>
     
      </div>
  );
};

export default Form;
