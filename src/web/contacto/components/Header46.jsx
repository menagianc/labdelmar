"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";
import lab2Image from "../../../assets/labs/lab-2-1.jpg";

export function Header46() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-lg mb-12">
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
            Contáctanos Hoy
          </h1>
          <p className="md:text-md">
            Estamos aquí para ayudarte. No dudes en comunicarte con nosotros
            para cualquier consulta.
          </p>
        </div>
        <div className="container">
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
              <a className="text-white underline hover:text-gray-200" href="mailto:example@email.com">
                example@email.com
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
              <a className="text-white underline hover:text-gray-200" href="tel:+17878588362">
                +1 787 858 8362
              </a>
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <BiMap className="size-8" />
              </div>
              <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl">
                Oficina
              </h3>
              <p className="mb-2">Laboratorio Clínico Del Mar II<br />Carr. #2 km 42.3  Bo Algarrobo<br />Vega Baja PR 00693</p>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Obtener Direcciones"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  onClick={() => window.open('https://www.google.com/maps/search/Laboratorio+Clinico+Del+Mar+II/@18.441815,-66.427881,15z/data=!3m1!4b1?entry=ttu', '_blank')}
                >
                  Obtener Direcciones
                </Button>
              </div>
            </div>
          </div>
          <div>
            <img
              src={lab2Image}
              alt="Laboratorio Clínico Del Mar II"
              className="size-full rounded-image object-cover"
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
