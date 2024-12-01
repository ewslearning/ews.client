"use client";
import styles from "./newsletter.module.css";
import RightArrow from "@assets/icons/right-arrow-white.svg";
import Input from "@app/home/components/common/input/input";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
   email: string;
 };

const NewsLetter : React.FC= () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<Inputs>();
  
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
    
   return (<div className={styles.parentContainer}>
      
     <div className={styles.heading}>Subscribe To Our News Letter</div>
     <p className={styles.sub}>Enter Email to receive the latest news, updates, and exclusive 
insights from our team. Be the first to know about our 
programs, certifications, and collaborations!</p>

      <div className={styles.textfieldContainer}>
         <Input
            variant="green"
            name="email"
            label="Email Address*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
            placeholder="Enter Your Email Address"
            register={register}
            error={errors.email}
          />
          <button className={styles.submit} ><div >Submit</div><RightArrow className={styles.arrow}/></button>
      </div>

      <div className={styles.textfieldContainerMob}>
         <Input
            variant="green"
            name="email"
            label="Email Address*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
            placeholder="Enter Your Email Address"
            register={register}
            error={errors.email}
          />
          <button className={styles.submitMob} onClick={handleSubmit(onSubmit)} ><div >Submit</div><RightArrow className={styles.arrowMob}/></button>
      </div>
   </div>)
};

export default NewsLetter;