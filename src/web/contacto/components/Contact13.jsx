"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";

export function Contact13() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Contacto</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Contáctanos
          </h2>
          <p className="md:text-md">
            Estamos aquí para ayudarte con tus consultas.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 md:gap-x-20 md:gap-y-16 lg:grid-cols-[0.5fr_1fr]">
          <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-10">
            <div>
              <div className="mb-3 md:mb-4">
                <BiEnvelope className="size-8" />
              </div>
              <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl">
                Correo
              </h3>
              <p className="mb-2">Escríbenos a nuestro email</p>
              <a className="underline" href="#">
                hello@relume.io
              </a>
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <BiPhone className="size-8" />
              </div>
              <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl">
                Teléfono
              </h3>
              <p className="mb-2">Llámanos para más información</p>
              <a className="underline" href="#">
                +1 (555) 123-4567
              </a>
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <BiMap className="size-8" />
              </div>
              <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl">
                Oficina
              </h3>
              <p className="mb-2">Calle Principal 123, Vega Baja, PR 00693</p>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Obtener Direcciones"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Obtener Direcciones
                </Button>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              alt="Relume placeholder image"
              className="size-full rounded-image object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
