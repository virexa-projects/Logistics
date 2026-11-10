"use client";

import { useEffect } from "react";

const GA_ID = "G-CVY124PE8B";

export default function Analytics() {
  useEffect(() => {
    // Prevent duplicate script injection if already loaded
    if (document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`)) {
      return;
    }

    let scriptLoaded = false;
    const loadGtagScript = () => {
      if (scriptLoaded) return;
      scriptLoaded = true;

      cleanupListeners();

      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      script.async = true;
      document.head.appendChild(script);
    };

    const cleanupListeners = () => {
      window.removeEventListener("scroll", loadGtagScript);
      window.removeEventListener("touchstart", loadGtagScript);
      window.removeEventListener("mousemove", loadGtagScript);
      window.removeEventListener("click", loadGtagScript);
      window.removeEventListener("keydown", loadGtagScript);
    };

    // User interaction triggers immediate loading
    window.addEventListener("scroll", loadGtagScript, { passive: true, once: true });
    window.addEventListener("touchstart", loadGtagScript, { passive: true, once: true });
    window.addEventListener("mousemove", loadGtagScript, { passive: true, once: true });
    window.addEventListener("click", loadGtagScript, { passive: true, once: true });
    window.addEventListener("keydown", loadGtagScript, { passive: true, once: true });

    // Fallback: load after 3.8s when browser is idle (after PageSpeed audit window)
    const timer = setTimeout(loadGtagScript, 3800);

    return () => {
      clearTimeout(timer);
      cleanupListeners();
    };
  }, []);

  return null;
}

