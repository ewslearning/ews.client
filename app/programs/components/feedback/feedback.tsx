import classes from "./feedback.module.css";
import Feed from '@assets/icons/feedbackIcon.svg';
import AjayImg from '@assets/images/ajay-full.png';
import FeedBackCarousel, { FeedBackCarouselProps } from "./carousel/carousel";

const FeedBack: React.FC = () => {
    const  feedbackItems : FeedBackCarouselProps = {items : [
        {
          image: AjayImg,
          feedback:
            "Taking the Waste Management Recycling Program course was transformative! The engaging content and passionate instructors opened my eyes to practical ways to live sustainably.",
          name: "Ajay Kushwa",
          position: "Sustainability Manager",
        },
        {
          image: AjayImg,
          feedback:
            "This program made me rethink my approach to waste management. It was an enlightening experience!",
          name: "Neelabh Sawarn",
          position: "Environmental Scientist",
        },
        {
          image: AjayImg,
          feedback:
            "Amazing course! It gave me the tools and knowledge to implement green practices at my workplace.",
          name: "Saurabh",
          position: "Eco Consultant",
        },
      ]};
      
      

return (<div className={classes.parentContainer}>
    <div className={classes.subContainer}>
             <div className={classes.headerContainer}>
            <Feed className={classes.icon}/>
            <span className={classes.headerText}>Feedback from Learners</span>
            </div>
            <div className={classes.subTextContainer}>
            <div className={classes.subText}>Trusted</div>
            <div className={classes.subTextBlack}>&nbsp;By All</div>
            </div>
            <p className={classes.description}>We deliver reliable courses that 
earn the confidence of clients 
across industries. Experience 
the difference that trust makes</p>

            <h3 className={classes.subTitle}>100 % Completion 
            Rate</h3>
            </div>

             <div className={classes.carousel}>
                <FeedBackCarousel items={feedbackItems.items} />
                </div>
          </div>);

};

export default FeedBack;
