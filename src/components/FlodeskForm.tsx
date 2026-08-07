"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    fd?: (type: string, config: { formId: string; containerEl: string }) => void;
  }
}

const FORM_ID = "6a75af3d372d24d297dcaad7";
const CONTAINER_ID = "fd-form-6a75af3d372d24d297dcaad7";

export function FlodeskForm() {
  useEffect(() => {
    const container = document.getElementById(CONTAINER_ID);
    if (!container) return;

    let userSubmitted = false;
    let redirectStarted = false;

    const successWords = ["thank", "success", "confirm", "check your inbox", "subscribed", "submitted"];

    const redirectAfterSuccess = () => {
      if (redirectStarted || !userSubmitted) return;

      const visibleText = container.textContent?.toLowerCase() ?? "";
      const hasSuccessText = successWords.some((word) => visibleText.includes(word));

      if (hasSuccessText) {
        redirectStarted = true;
        window.setTimeout(() => {
          window.location.href = "/thanks";
        }, 1800);
      }
    };

    const markSubmitted = () => {
      userSubmitted = true;
      window.setTimeout(redirectAfterSuccess, 1200);
      window.setTimeout(redirectAfterSuccess, 2500);
      window.setTimeout(redirectAfterSuccess, 4500);
    };

    container.addEventListener("submit", markSubmitted, true);
    container.addEventListener("click", (event) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("button,input[type='submit']")) {
        markSubmitted();
      }
    }, true);

    const observer = new MutationObserver(redirectAfterSuccess);
    observer.observe(container, { childList: true, subtree: true, characterData: true });

    return () => {
      observer.disconnect();
      container.removeEventListener("submit", markSubmitted, true);
    };
  }, []);

  return (
    <div className="rounded-lg premium-border p-5 shadow-card md:p-7">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyanGlow">Book Consultation</p>
        <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">Start your AI growth plan</h2>
        <p className="mt-3 text-sm leading-7 text-white/62">
          Submit your details below. The form is powered by Flodesk, so your lead capture and email automation stay active.
        </p>
      </div>

      <div className="flodesk-shell">
        <div id="fd-form-6a75af3d372d24d297dcaad7"></div>
      </div>

      <Script
        src="https://assets.flodesk.com/universal.js"
        strategy="afterInteractive"
        onLoad={() => {
          window.fd?.("form", {
            formId: "6a75af3d372d24d297dcaad7",
            containerEl: "#fd-form-6a75af3d372d24d297dcaad7"
          });
        }}
      />
    </div>
  );
}
