import { useEffect, useState } from "react";

export function useOfferCountdown() {
  const [timeLeft, setTimeLeft] = useState<{ d: number; h: number; m: number; s: number } | null>(null);

  useEffect(() => {
    const getInitialTimes = () => {
      const now = Date.now();
      let offerStart = parseInt(localStorage.getItem("offerStart") || "0");
      let offerExpiry = parseInt(localStorage.getItem("offerExpiry") || "0");

      if (!offerStart || now > offerExpiry) {
        offerStart = now;
        offerExpiry = offerStart + 2 * 60 * 60 * 1000; // 2 hours

        localStorage.setItem("offerStart", offerStart.toString());
        localStorage.setItem("offerExpiry", offerExpiry.toString());
      }

      return offerExpiry;
    };

    let offerExpiry = getInitialTimes();

    const interval = setInterval(() => {
      const now = Date.now();
      const remaining = offerExpiry - now;

      if (remaining <= 0) {
        // Restart immediately for the next 2 hours
        const newStart = now;
        const newExpiry = newStart + 2 * 60 * 60 * 1000;

        localStorage.setItem("offerStart", newStart.toString());
        localStorage.setItem("offerExpiry", newExpiry.toString());

        offerExpiry = newExpiry; // update the reference for the next iteration
      }

      const d = Math.floor(remaining / (1000 * 60 * 60 * 24));
      const h = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((remaining % (1000 * 60)) / 1000);

      setTimeLeft({ d, h, m, s });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return timeLeft;
}
