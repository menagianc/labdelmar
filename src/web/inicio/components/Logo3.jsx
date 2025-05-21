"use client";

import React from "react";
// Import insurance logo images
import firstmedicalLogo from "../../../assets/ins-logos/FIRSTMEDICAL.png";
import hoffaLogo from "../../../assets/ins-logos/HOFFA.png";
import humanaLogo from "../../../assets/ins-logos/HUMANA.png";
import mapfreLogo from "../../../assets/ins-logos/MAPFRE.png";
import mcsLogo from "../../../assets/ins-logos/MCS.png";
import medicareLogo from "../../../assets/ins-logos/MEDICARE.png";
import mmmLogo from "../../../assets/ins-logos/MMM.png";
import panAmericanLogo from "../../../assets/ins-logos/PAN-AMERICAN-LIFE.png";
import planMenonitaLogo from "../../../assets/ins-logos/PLAN-MENONITA.png";
import planVitalLogo from "../../../assets/ins-logos/PLAN-VITAL.png";
import prossamLogo from "../../../assets/ins-logos/PROSSAM.png";
import triplesLogo from "../../../assets/ins-logos/TRIPLES.png";

export function Logo3() {
  // Array of insurance logos with their alt text
  const insuranceLogos = [
    { src: firstmedicalLogo, alt: "First Medical logo" },
    { src: hoffaLogo, alt: "HOFFA logo" },
    { src: humanaLogo, alt: "Humana logo" },
    { src: mapfreLogo, alt: "MAPFRE logo" },
    { src: mcsLogo, alt: "MCS logo" },
    { src: medicareLogo, alt: "Medicare logo" },
    { src: mmmLogo, alt: "MMM logo" },
    { src: panAmericanLogo, alt: "Pan-American Life logo" },
    { src: planMenonitaLogo, alt: "Plan Menonita logo" },
    { src: planVitalLogo, alt: "Plan Vital logo" },
    { src: prossamLogo, alt: "PROSSAM logo" },
    { src: triplesLogo, alt: "Triple-S logo" }
  ];
  return (
    <section id="relume" className="overflow-hidden py-12 md:py-16 lg:py-20">
      <div className="container mb-8 w-full max-w-lg px-[5%] md:mb-10 lg:mb-12">
        <h1 className="text-center text-base leading-[1.2] font-bold md:text-md md:leading-[1.2]">
          Aceptamos la gran mayoría de los planes médicos
        </h1>
      </div>
      <div className="flex items-center pt-7 md:pt-0">
        <div className="flex shrink-0 animate-loop-horizontally items-center">
          {insuranceLogos.map((logo, index) => (
            <img
              key={`logo-first-${index}`}
              className="mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14"
              src={logo.src}
              alt={logo.alt}
            />
          ))}
        </div>
        <div className="flex shrink-0 animate-loop-horizontally items-center">
          {insuranceLogos.map((logo, index) => (
            <img
              key={`logo-second-${index}`}
              className="mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14"
              src={logo.src}
              alt={logo.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
