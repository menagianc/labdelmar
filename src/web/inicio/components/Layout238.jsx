"use client";

import React from "react";

export function Layout238() {
  return (
    <section id="relume" className="bg-very-light px-[5%] py-16 md:py-24 lg:py-28 gradient-bg-section">
      {/* Gradient Background Animation */}
      <div className="gradients-container">
        <div className="gradient-circle gradient-circle-1"></div>
        <div className="gradient-circle gradient-circle-2"></div>
        <div className="gradient-circle gradient-circle-3"></div>
        <div className="gradient-circle gradient-circle-4"></div>
        <div className="gradient-circle gradient-circle-5"></div>
      </div>
      <div className="container relative z-10">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl">
              Servicios de salud a tu alcance para tu tranquilidad y bienestar.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                alt="Relume logo"
                className="size-12"
              />
            </div>
            <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
              Pruebas Regulares
            </h3>
            <p>
              Realizamos pruebas periódicas que garantizan un seguimiento
              efectivo de tu salud.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                alt="Relume logo"
                className="size-12"
              />
            </div>
            <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
              Pruebas de COVID-19
            </h3>
            <p>
              Ofrecemos pruebas serológicas, de antígeno y
              moleculares de COVID-19.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                alt="Relume logo"
                className="size-12"
              />
            </div>
            <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
              Servicio a Domicilio
            </h3>
            <p>Facilitamos la toma de muestras en la comodidad de tu hogar.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
