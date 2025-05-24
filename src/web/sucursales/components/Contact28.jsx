"use client";

import React from "react";

export function Contact28() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#044a56] text-white">
      <div className="container">
        <div className="mr-auto mb-12 flex max-w-lg flex-col justify-start text-left md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Contáctanos</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Información de Contacto
          </h2>
          <p className="md:text-md">
            Comunícate con nuestras sucursales en Vega Baja y Manatí para más información sobre nuestros servicios.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex flex-col">
              <strong className="text-lg">Vega Baja:</strong> 
              <a href="tel:7878588362" className="text-white underline hover:text-gray-200">787-858-8362</a>
              <span>Extensiones: 1, 2, 4</span>
            </li>
            <li className="flex flex-col">
              <strong className="text-lg">Manatí:</strong> 
              <a href="tel:7878588362" className="text-white underline hover:text-gray-200">787-858-8362</a>
              <span>Extensión: 3</span>
            </li>
            <li className="flex flex-col mt-6">
              <strong className="text-lg">Correo Electrónico:</strong> 
              <a href="mailto:info@labdelmar.com" className="text-white underline hover:text-gray-200">info@labdelmar.com</a>
            </li>
          </ul>
          <div className="mt-8 border-t border-white pt-6">
            <p className="text-sm">Para emergencias o resultados urgentes, favor de comunicarse directamente por teléfono.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
