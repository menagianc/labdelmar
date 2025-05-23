"use client";

import React from "react";

export function Contact28() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mr-auto mb-12 flex max-w-lg flex-col justify-start text-left md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Ubicaciones</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Sucursales
          </h2>
          <p className="md:text-md">
            Encuentra nuestras sucursales en Vega Baja y Manatí.
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <strong>Vega Baja:</strong> <a href="tel:7878588362" className="text-blue-700 underline hover:text-blue-900">787-858-8362</a> - Ext. 1
            </li>
            <li>
              <strong>Manatí:</strong> <a href="tel:7872218362" className="text-blue-700 underline hover:text-blue-900">787-221-8362</a> - Ext. 2
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
