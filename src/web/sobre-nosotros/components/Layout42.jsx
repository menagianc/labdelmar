"use client";

import React from "react";

export function Layout42() {
  return (
    <section id="relume" className="bg-very-light px-[5%] py-16 md:py-24 lg:py-28 min-h-[300px] gradient-bg-section">
      {/* Gradient Background Animation */}
      <div className="gradients-container">
        <div className="gradient-circle gradient-circle-1"></div>
        <div className="gradient-circle gradient-circle-2"></div>
        <div className="gradient-circle gradient-circle-3"></div>
        <div className="gradient-circle gradient-circle-4"></div>
        <div className="gradient-circle gradient-circle-5"></div>
      </div>
      <div className="container flex items-center justify-center relative z-10">
        <h3 className="text-center text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl">
          Comprometidos con la salud: más de 25 años de excelencia en servicios clínicos.
        </h3>
      </div>
    </section>
  );
}
