"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";
import contactImage from "../../../assets/labs/lab-1-4.jpg";

export function Contact13() {
  return (
    <section id="relume" className="section section-light px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col gap-y-10 max-w-2xl mx-auto">
          <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-10">
            <div>
              <div className="mb-3 md:mb-4">
                <BiEnvelope className="size-8" />
              </div>
              <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl">
                Correo
              </h3>
              <p className="mb-2">Escríbenos a nuestro email</p>
              <a className="contact-link" href="mailto:hello@relume.io">
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
              <a className="contact-link" href="tel:+17878588362">
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
              <p className="mb-2">Calle Principal 123, Vega Baja, PR 00693</p>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Obtener Direcciones"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  onClick={() => window.open('https://www.google.com/maps/search/Laboratorio+Clinico+Del+Mar/@18.441815,-66.427881,15z/data=!3m1!4b1?entry=ttu', '_blank')}
                >
                  Obtener Direcciones
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
