"use client";

import { useState } from "react";
import { Award, Clock, CheckCircle, Sparkles,  ArrowRight } from "lucide-react";
import styles from "./get-certified.module.css";
import Button from "@app/home/components/common/button/button";
import { useOfferCountdown } from "@app/young-guardians-of-the-planet/services/use-countdown";

export default function CertificationSection() {
  const [isAnimating, setIsAnimating] = useState(false);
  const timeLeft = useOfferCountdown();

  const offerActive = timeLeft && (timeLeft.d || timeLeft.h || timeLeft.m || timeLeft.s);

  return (
    <div className={styles.wrapper}>
      <div className={styles.sectionContainer}>
        <div className={styles.decorativeBg}>
          <div className={styles.blurTopRight}></div>
          <div className={styles.blurBottomLeft}></div>
        </div>

        <div className={styles.gridContainer}>
          {/* LEFT INFO SECTION */}
          <div className={styles.infoSection}>
            <div className={styles.badge}>
              <Award className={styles.badgeIcon} />
              <span className={styles.badgeText}>Official Recognition</span>
            </div>

            <h2 className={styles.title}>
              Get Certified as a<br />
              <span className={styles.titleHighlightWrapper}>
                <span className={styles.titleHighlight}>Young Sustainability Champion</span>
                <span className={styles.titleUnderline}></span>
              </span>
            </h2>

            <p className={styles.description}>
              Upon completion, students receive a Certificate of Recognition and join an exclusive community of young
              environmental leaders making real change in their communities.
            </p>

            <ul className={styles.featureList}>
              {[
                "Official digital certificate to showcase your achievement",
                "Join a network of like-minded young environmental advocates",
                "Exclusive access to sustainability resources and future programs",
                "Recognition on our Young Champions online directory",
              ].map((item, i) => (
                <li key={i} className={styles.featureItem}>
                  <CheckCircle className={styles.featureIcon} />
                  <span className={styles.featureText}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT OFFER SECTION */}
          <div className={styles.offerSection}>
            {offerActive ? (
              <>
                <div
                  className={`${styles.offerBanner} ${isAnimating ? styles.animated : ""}`}
                  onMouseEnter={() => setIsAnimating(true)}
                  onMouseLeave={() => setIsAnimating(false)}
                >
                  Limited Time Offer!
                </div>

                <div className={styles.offerCard}>
                  <div className={styles.cardContent}>
                    <Sparkles className={styles.cardIcon} />

                    <h3 className={styles.cardTitle}>Special 50% Discount</h3>

                    <p className={styles.cardText}>
                      Become a certified Young Sustainability Champion and start making a difference today!
                    </p>

                    <div className={styles.priceGroup}>
                      <span className={styles.originalPrice}>₹2,999</span>
                      <span className={styles.discountedPrice}>₹1,499</span>
                    </div>

                    <div className={styles.timerBox}>
                      <Clock className={styles.timerIcon} />
                      <span className={styles.timerText}>
                        Offer ends in{" "}
                        <span className={styles.timerBold}>
                           {String(timeLeft.h).padStart(2, "0")}h{" "}
                          {String(timeLeft.m).padStart(2, "0")}m{" "}
                          {String(timeLeft.s).padStart(2, "0")}s
                        </span>
                      </span>
                    </div>

                    <Button className={styles.ctaButton}>
                      Claim Your Discount
                      <ArrowRight className={styles.ctaIcon} />
                    </Button>

                    <p className={styles.footnote}>
                      Join 5,000+ teens already certified as Young Sustainability Champions
                    </p>
                  </div>
                </div>
              </>
            ) : (
                <div className={styles.offerCard}>
                <div className={styles.cardContent}>
                  <Sparkles className={styles.cardIcon} />
              
                  <h3 className={styles.cardTitle}>Your Journey Starts Here</h3>
              
                  <p className={styles.cardText}>
                  Become a certified Young Sustainability Champion and gain the tools, knowledge, and recognition to drive real change in your community.
                  </p>
              
                  <div className={styles.priceGroup}>
                    <span className={styles.onlyPrice}>₹2,999</span>
                  </div>
              
                  <Button className={styles.ctaButton}>
                    Enroll Now
                    <ArrowRight className={styles.ctaIcon} />
                  </Button>
              
                  <p className={styles.footnote}>
                    Thousands have already joined — now it&apos;s your turn to lead the way.
                  </p>
                </div>
              </div>
              
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
