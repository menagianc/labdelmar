"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import slideshow1 from "../../../assets/header/slideshow-1.jpg";
import slideshow2 from "../../../assets/header/slideshow-2.jpg";
import slideshow3 from "../../../assets/header/slideshow-3.jpg";
import slideshow4 from "../../../assets/header/slideshow-4.jpg";
import slideshow5 from "../../../assets/header/slideshow-5.jpg";
import slideshow6 from "../../../assets/header/slideshow-6.jpg";
import slideshow7 from "../../../assets/header/slideshow-7.jpg";
import slideshow8 from "../../../assets/header/slideshow-8.jpg";
import slideshow9 from "../../../assets/header/slideshow-9.jpg";
import slideshow10 from "../../../assets/header/slideshow-10.jpg";
// Duplicates of slideshow1 and slideshow6 to make 12 total
const slideshow1Dup = slideshow1;
const slideshow6Dup = slideshow6;

export function Header76() {
  return (
    <section
      id="relume"
      className="grid grid-cols-1 gap-y-16 pt-16 md:grid-flow-row md:pt-24 lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:pt-0"
    >
      <div className="mx-[5%] max-w-[40rem] justify-self-start lg:mr-20 lg:ml-[5vw] lg:justify-self-end">
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
          Laboratorio Clínico del Mar: Excelencia en Salud
        </h1>
        <p className="md:text-md">
          En Laboratorio Clínico del Mar, nos dedicamos a ofrecer resultados
          rápidos y precisos para el bienestar de nuestros pacientes. Con más de
          <strong> 25 años de experiencia</strong>, garantizamos atención de calidad y servicios a
          domicilio en Vega Baja y Manatí.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
          <Button title="Surcusales">Surcusales</Button>
          <Button title="Llamar" variant="secondary">
            Llamar
          </Button>
        </div>
      </div>
      <div className="h-[30rem] overflow-hidden pr-[5vw] pl-[5vw] md:h-[40rem] lg:h-screen lg:pl-0">
        <div className="grid w-full grid-cols-2 gap-x-4">
          <div className="-mt-[120%] grid size-full animate-loop-vertically columns-2 grid-cols-1 gap-4 self-center">
            {[slideshow1, slideshow2, slideshow3, slideshow4, slideshow5, slideshow6, slideshow7, slideshow8, slideshow9, slideshow10, slideshow1Dup, slideshow6Dup].map((img, idx) => (
              <div className="grid size-full grid-cols-1 gap-4" key={"first-col-"+idx}>
                <div className="relative w-full pt-[120%]">
                  <img
                    className="absolute inset-0 size-full rounded-image object-cover"
                    src={img}
                    alt={`Slideshow ${idx+1}`}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="grid size-full animate-loop-vertically grid-cols-1 gap-4">
            {[
              slideshow6, slideshow7, slideshow8, slideshow9, slideshow10, slideshow1Dup, slideshow6Dup, slideshow1, slideshow2, slideshow3, slideshow4, slideshow5
            ].map((img, idx) => (
              <div className="grid size-full grid-cols-1 gap-4" key={"second-col-"+idx}>
                <div className="relative w-full pt-[120%]">
                  <img
                    className="absolute inset-0 size-full rounded-image object-cover"
                    src={img}
                    alt={`Slideshow ${[6,7,8,9,10,1,6,1,2,3,4,5][idx]}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

