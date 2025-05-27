"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import vegaBajaImage from "../../../assets/labs/lab-1-3.jpg";
import manatiImage from "../../../assets/labs/lab-3-3.jpg";

export function Header46() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-lg">
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
            Sucursales
          </h1>
          <p className="md:text-md">
            Descubre nuestras sucursales en Vega Baja y Manatí, donde la salud
            es prioridad.
          </p>
        </div>
        {/* Grid for branch locations */}
        <div className="grid auto-cols-fr grid-cols-1 items-center gap-x-12 gap-y-12 md:grid-cols-2 md:gap-16 mt-12">
          {/* Vega Baja */}
          <div className="flex flex-col items-start justify-start text-left">
            <div className="mb-6 aspect-[3/2] md:mb-8">
              <img
                src={vegaBajaImage}
                className="h-full w-full rounded-image object-cover"
                alt="Sucursal Vega Baja"
              />
            </div>
            <h3 className="mb-3 text-2xl leading-[1.4] font-bold md:text-3xl lg:mb-4 lg:text-4xl">Vega Baja</h3>
            <p className="text-center">Calle Principal 123, Vega Baja, PR 00693</p>
            <div className="mt-5 md:mt-6">
              <Button
                title="Obtener Direcciones"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                aria-label="Obtener Direcciones Vega Baja"
              >
                Obtener Direcciones
              </Button>
            </div>
          </div>
          {/* Manatí */}
          <div className="flex flex-col items-start justify-start text-left">
            <div className="mb-6 aspect-[3/2] md:mb-8">
              <img
                src={manatiImage}
                className="h-full w-full rounded-image object-cover"
                alt="Sucursal Manatí"
              />
            </div>
            <h3 className="mb-3 text-2xl leading-[1.4] font-bold md:text-3xl lg:mb-4 lg:text-4xl">Manatí</h3>
            <p className="text-center">Avenida Central 456, Manatí, PR 00674</p>
            <div className="mt-5 md:mt-6">
              <Button
                title="Obtener Direcciones"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                aria-label="Obtener Direcciones Manatí"
              >
                Obtener Direcciones
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
