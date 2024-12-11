
import styles from "./packages-card.module.css";
import CheckIcon from "../../assets/icons/check-circle-icon.svg";

export interface PackagesCardProps {
   Icon:  React.FC<React.SVGProps<SVGElement>>;
   title: string;
   description: string;
   price: number;
   features: string[];
}

const PackagesCard: React.FC<PackagesCardProps> = ({Icon, title, description, price, features}) => {
   return (<div className={styles.parentContainer}>
      <div className={styles.headerContainer}>
         <Icon className={styles.diamondIcon}/>
         <h6 className={styles.heading}>{title}</h6></div>
         <p className={styles.description}>{description}</p>
         <div className={styles.price}>${price} USD</div>
         <div className={styles.features}>
        {features.map((feature, index) => (
          <div
            key={index} >
            <CheckIcon className={styles.checkIcon}/>{feature}
          </div>
        ))}
      </div>
      
   </div>)
};

export default PackagesCard;