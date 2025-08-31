import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const CAMPAIGN_KEY = "lp_deadline_gestao_blindada_v1";
const INITIAL_DURATION = 7 * 60 * 60 + 16 * 60; // 7h16m in seconds

interface CountdownBannerProps {
  onCtaClick?: () => void;
}

export const CountdownBanner: React.FC<CountdownBannerProps> = ({
  onCtaClick,
}) => {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isExpired, setIsExpired] = useState(false);

  // Initialize timer from localStorage or create new deadline
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CAMPAIGN_KEY);
      const now = Math.floor(Date.now() / 1000);

      if (stored) {
        const deadline = parseInt(stored, 10);
        const remaining = deadline - now;

        if (remaining <= 0) {
          setIsExpired(true);
          setTimeLeft(0);
        } else {
          setTimeLeft(remaining);
        }
      } else {
        // First visit - set new deadline
        const deadline = now + INITIAL_DURATION;
        localStorage.setItem(CAMPAIGN_KEY, deadline.toString());
        setTimeLeft(INITIAL_DURATION);
      }
    } catch (error) {
      // Fallback if localStorage is not available
      setTimeLeft(INITIAL_DURATION);
    }
  }, []);

  // Update timer every second
  useEffect(() => {
    if (timeLeft === null || isExpired) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === null || prev <= 1) {
          setIsExpired(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, isExpired]);

  // Format time as HH:MM:SS
  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      // Default behavior - scroll to formulario or open WhatsApp
      const formulario = document.getElementById("formulario");
      if (formulario) {
        formulario.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  if (timeLeft === null) {
    // Loading state - show static message
    return (
      <>
        <div className="h-20 sm:h-16 lg:h-16" aria-hidden="true" />
        <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3 -mt-0.5 pb-1.5 sm:mt-0 sm:pb-3 flex items-center justify-center">
            <span className="text-sm font-raleway font-medium uppercase tracking-wide">
              Condição exclusiva ativa por tempo limitado
            </span>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Spacer to prevent layout shift */}
      <div className="h-20 sm:h-16 lg:h-16" aria-hidden="true" />

      {/* Fixed banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3 -mt-0.5 pb-1.5 sm:mt-0 sm:pb-3">
          {isExpired ? (
            // Expired state
            <div
              className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3"
              aria-live="polite"
            >
              <div className="text-sm sm:text-base font-raleway font-bold text-center sm:text-left uppercase tracking-wide">
                Fale com nosso time de vendas agora mesmo!
              </div>
              <Button
                onClick={handleCtaClick}
                className="bg-white text-red-600 hover:bg-gray-100 font-raleway font-bold text-xs sm:text-sm uppercase tracking-wide px-4 sm:px-6 py-2 rounded-full shadow-md transition-all duration-300 min-h-[44px] w-full sm:w-auto whitespace-nowrap"
              >
                Falar no WhatsApp agora
              </Button>
            </div>
          ) : (
            // Countdown state
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
              {/* Left: Label + Timer */}
              <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-3 text-center sm:text-left my-0.5 -mb-px sm:my-0 sm:mb-0">
                <span className="text-xs sm:text-sm font-raleway font-medium uppercase tracking-wide">
                  {timeLeft < 60
                    ? "Últimos segundos:"
                    : "Condição exclusiva termina em:"}
                </span>
                <div
                  className={`font-mono text-lg sm:text-xl lg:text-2xl font-light tracking-wider ${timeLeft < 600 ? "animate-pulse" : ""}`}
                  role="timer"
                  aria-live="polite"
                  aria-label={`Tempo restante: ${formatTime(timeLeft)}`}
                >
                  <span className="sr-only">Tempo restante:</span>
                  {formatTime(timeLeft)}
                </div>
              </div>

              {/* Warning Text */}
              <span className="text-xs opacity-90 text-center">
                Preço e bônus podem mudar após o prazo
              </span>

              {/* Right: CTA */}
              <div className="flex flex-col items-center gap-1 w-full sm:w-auto">
                <Button
                  onClick={handleCtaClick}
                  className="bg-white text-red-600 hover:bg-gray-100 font-raleway font-bold text-xs sm:text-sm uppercase tracking-wide px-4 sm:px-6 py-2 rounded-full shadow-md transition-all duration-300 min-h-[44px] w-full sm:w-auto whitespace-nowrap"
                >
                  Quero minha vaga agora
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
