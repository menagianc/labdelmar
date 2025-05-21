"use client";

import React from "react";

export function Layout4() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Eficiencia</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Resultados Rápidos y Eficientes para Ti
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              En Laboratorio Clínico del Mar, ofrecemos servicios de pruebas
              rápidas y precisas. 
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Resultados en Corto Tiempo
                </h6>
                <p>
                  Resultados listos de 1 a 2 horas para algunas de nuestras pruebas.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Resultados Online
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
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
