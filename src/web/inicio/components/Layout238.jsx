"use client";

import React from "react";
import { LuTestTubeDiagonal } from "react-icons/lu";
import { PiCarProfileBold } from "react-icons/pi";
import { FaVirusCovid } from "react-icons/fa6";

export function Layout238() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">

      <div className="container relative z-10">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl text-accent">
              Servicios de salud a tu alcance para tu tranquilidad y bienestar.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <LuTestTubeDiagonal className="size-12" color="#111f6acc" aria-label="Pruebas Regulares" />
            </div>
            <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl text-accent">
              Pruebas Regulares
            </h3>
            <p>
              Realizamos pruebas periódicas que garantizan un seguimiento
              efectivo de tu salud.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <FaVirusCovid className="size-12" color="#111f6acc" aria-label="Pruebas de COVID-19" />
            </div>
            <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl text-accent">
              Pruebas de COVID-19
            </h3>
            <p>
              Ofrecemos pruebas serológicas, de antígeno y
              moleculares de COVID-19.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <PiCarProfileBold className="size-12" color="#111f6acc" aria-label="Servicio a Domicilio" />
            </div>
            <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl text-accent">
              Servicio a Domicilio
            </h3>
            <p>Facilitamos la toma de muestras en la comodidad de tu hogar.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
