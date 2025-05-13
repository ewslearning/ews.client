import React from "react";
import Image from "next/image";
import styles from "./partners.module.css";
import Rentokill from '@assets/partners/rentokil.png';
import Ficci from '@assets/partners/ficci.png';
import MsmeBangalore from '@assets/partners/msme.png';
import Weee from '@assets/partners/weee.png';
import Giz from '@assets/partners/giz.png';
import Iswa from '@assets/partners/iswa.png';
import Ungc from '@assets/partners/ungc.png';
import TvsSensingSolutions from '@assets/partners/tvs.png';
import GodrejAstecLifeSciences from '@assets/partners/godrej.png';
import IntellicomSolutions from '@assets/partners/intellicom.png';
import ForthCodeTechnologies from '@assets/partners/forthecode.png';
import Goldenseams from '@assets/partners/goldenseams.png';
import AppartmentAdda from '@assets/partners/appartment.png';
import Mahindra from '@assets/partners/mahindra.png';
import HkbkCollegeOfEng from '@assets/partners/hkbk.png';
import Texecom from '@assets/partners/texecom.png';
import Dozee from '@assets/partners/dozee.png';
import OneSb from '@assets/partners/onesb.png';
import Marquee from "react-fast-marquee";

const imageTextData1 = 
  [
    { src: Rentokill, text: "RENTOKIL" },
    { src: Ficci, text: "FICCI" },
    { src: MsmeBangalore, text: "MSME\nBANGALORE" },
    { src: Weee, text: "WEEE" },
    { src: Giz, text: "GIZ" },
    { src: Iswa, text: "ISWA" },
    { src: Ungc, text: "UNGC" },
    { src: TvsSensingSolutions, text: "TVS Sensing\nSolutions" },
    { src: GodrejAstecLifeSciences, text: "Godrej Astec\nLife Sciences" },
  ];
  const imageTextData2 =[
    { src: IntellicomSolutions, text: "INTELLICOM\nSOLUTIONS" },
    { src: ForthCodeTechnologies, text: "FORTHCODE\nTECHNOLOGIES" },
    { src: Goldenseams, text: "Goldenseams" },
    { src: AppartmentAdda, text: "APPARTMENT\nADDA" },
    { src: Mahindra, text: "Mahindra" },
    { src: HkbkCollegeOfEng, text: "HKBK COLLEGE\nOF ENGINEERING" },
    { src: Texecom, text: "Texecom" },
    { src: Dozee, text: "Dozee" },
    { src: OneSb, text: "ONE SB" },
  ];



const ImageTextMarquee: React.FC = () => {
  return (
    <div className={styles.container}>
      <Marquee direction="left" className={styles.marqueeTop}>
      {imageTextData1.map((item, itemIndex) => (
        <div
          key={itemIndex}
          className={`${styles.marquee}`}
        >
          <div className={styles.marqueeContent}>
            <div key={itemIndex} className={styles.imageTextCombo}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.src}
                    alt={item.text}
                    className={styles.image}
                  />
                </div>
                <span className={styles.text}>
                  {item.text.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </span>
              </div>
          </div>
        </div>
      ))}
      </Marquee>
      <Marquee direction="right">
      {imageTextData2.map((item, itemIndex) => (
        <div
          key={itemIndex}
          className={`${styles.marquee}`}
        >
          <div className={styles.marqueeContent}>
            <div key={itemIndex} className={styles.imageTextCombo}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.src}
                    alt={item.text}
                    className={styles.image}
                  />
                </div>
                <span className={styles.text}>
                  {item.text.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </span>
              </div>
          </div>
        </div>
      ))}
      </Marquee>
    </div>
  );
};

export default ImageTextMarquee;
