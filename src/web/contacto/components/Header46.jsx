"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";
import lab2Image from "../../../assets/labs/lab-2-1.jpg";

export function Header46() {
  return (
    <section id="relume" className="section section-dark px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-lg">
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
          Contáctanos
          </h1>
          <p className="md:text-md">
            Estamos aquí para ayudarte con tus consultas.
          </p>
        </div>
      </div>
    </section>
  );
}