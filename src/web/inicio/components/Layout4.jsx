"use client";

import React from "react";
import resultadosImage from "../../../assets/section/resultados.jpg";

export function Layout4() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Resultados rápidos y eficientes para ti.
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              En Laboratorio Clínico del Mar, ofrecemos servicios de pruebas
              rápidas y precisas. 
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Resultados en corto tiempo
                </h6>
                <p>
                  Resultados listos de 1 a 2 horas para algunas de nuestras pruebas.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Resultados online
                </h6>
                <p>
                  Recibe tus resultados directamente en tu
                  correo electrónico para mayor comodidad.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={resultadosImage}
              className="w-full rounded-image object-cover"
              alt="Resultados de laboratorio"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
