"use client";

import React from "react";
import galleryImage from "../../../assets/labs/lab-3-4.jpg";

export function Gallery1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Galería Visual
          </h2>
          <p className="md:text-md">
            Descubre nuestras instalaciones y el equipo profesional.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-8">
          <a href="#" className="size-full">
            <div className="w-full overflow-hidden">
              <img
                src={galleryImage}
                alt="Instalaciones del Laboratorio"
                className="aspect-video size-full rounded-image object-cover"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
