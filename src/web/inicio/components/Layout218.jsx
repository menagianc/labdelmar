"use client";

import React from "react";

export function Layout218() {
  return (
    <section id="relume" className="bg-very-light px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Estadísticas que reflejan nuestra experiencia y eficiencia en el
              laboratorio.
            </h3>
            <p className="mb-6 md:mb-8 md:text-md">
              Nuestro laboratorio se destaca
              por su compromiso con la calidad.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  95%
                </h3>
                <p>
                De nuestras
                pruebas son procesadas internamente, garantizando resultados rápidos y precisos.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  25
                </h3>
                <p>Años de servicio al paciente en Puerto Rico.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
