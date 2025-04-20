import { useEffect, useState } from "react";

export function useOfferCountdown() {
  const [timeLeft, setTimeLeft] = useState<{ d: number; h: number; m: number; s: number } | null>(null);

  useEffect(() => {
    const now = new Date().getTime();

    const offerStart = parseInt(localStorage.getItem("offerStart") || "0");
    const nextReset = parseInt(localStorage.getItem("nextReset") || "0");

    if (!offerStart || now > nextReset) {
      const newStart = now;
      const newExpiry = newStart + 2 * 60 * 60 * 1000; // 2 hours
      const newReset = newStart + 30 * 24 * 60 * 60 * 1000; // 30 days

      localStorage.setItem("offerStart", newStart.toString());
      localStorage.setItem("offerExpiry", newExpiry.toString());
      localStorage.setItem("nextReset", newReset.toString());
    }

    const offerExpiry = parseInt(localStorage.getItem("offerExpiry") || "0");

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const remaining = offerExpiry - now;

      if (remaining <= 0) {
        setTimeLeft(null);
        clearInterval(interval);
      } else {
        const d = Math.floor(remaining / (1000 * 60 * 60 * 24));
        const h = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((remaining % (1000 * 60)) / 1000);

        setTimeLeft({ d, h, m, s });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return timeLeft;
}
