"use client";

import Button from "@components/common/button/button";
import classes from "./newsletter.module.css";
import Input from "@components/common/input/input";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  orgName: string;
  areasOfInterest: string;
};

export const Newsletter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {console.log(data)};
  return (
    <article className={classes.newsletterContainer}>
      <div className={classes.headerContainer}>
        <h1 className={classes.header}>Stay Updated with Our Newsletter</h1>
       
      </div>
      <p className={classes.description}>
          Sign up to receive the latest news, updates, and exclusive insights
          from our team. Be the first to know about our programs,
          certifications, and collaborations!
        </p>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.inputparentcontainer}>
        <div className={classes.inputcontainer}>
          <Input
            name="firstName"
            label="First Name"
            placeholder="Enter your first name"
            register={register}
            error={errors.firstName}
          />

          <Input
            name="lastName"
            label="Last Name"
            placeholder="Enter your last name"
            register={register}
            error={errors.firstName}
          />

          <Input
            name="email"
            label="Email Address"
            placeholder="Enter your email"
            register={register}
            error={errors.firstName}
          />

          <Input
            name="orgName"
            label="Organization Name"
            placeholder="You Organization / Company Name"
            register={register}
            error={errors.firstName}
          />
           {/* Dropdown */}
          <Input
            name="areasOfInterest"
            label="Areas of Interest (Optional)"
            placeholder="Select the topics you're interested in "
            register={register}
            isDropDown={true}
            dropdownOptions={[{label: "Recycling", value: "Recycling"}, {label: "Sustainability", value: "Sustainability"}, {label: "Economic Statergies", value: "Economic Statergies"}]}
            error={errors.firstName}
          />
        </div>
        
        <div className={classes.submitBtnContainer}>
        <p className={classes.disclamer}>
          By Clicking Submit you agree I agree to receive email communications
          from EWS Learning. I understand that I can unsubscribe at
          any time.
        </p>

        <Button typeof="submit" variant="secondary">
          Submit
        </Button>
        </div>
        </div>
      </form>
    </article>
  );
};

export default Newsletter;
