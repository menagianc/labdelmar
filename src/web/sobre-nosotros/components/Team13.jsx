"use client";

import React from "react";
import { BiLogoDribbble, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export function Team13() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Equipo</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Nuestro equipo
          </h2>
          <p className="md:text-md">
            Conoce a nuestros profesionales altamente capacitados.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col items-start">
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">Dr. Juan</h5>
              <h6 className="md:text-md">Médico General</h6>
            </div>
            <p>
              Experto en diagnóstico clínico con más de 15 años de experiencia.
            </p>
            <div className="mt-6 flex gap-3.5">
              <a href="#">
                <BiLogoLinkedinSquare className="size-6" />
              </a>
              <a href="#">
                <FaXTwitter className="size-6 p-0.5" />
              </a>
              <a href="#">
                <BiLogoDribbble className="size-6" />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">Dra. María</h5>
              <h6 className="md:text-md">Bioquímica Clínica</h6>
            </div>
            <p>Especialista en análisis bioquímicos y pruebas moleculares.</p>
            <div className="mt-6 flex gap-3.5">
              <a href="#">
                <BiLogoLinkedinSquare className="size-6" />
              </a>
              <a href="#">
                <FaXTwitter className="size-6 p-0.5" />
              </a>
              <a href="#">
                <BiLogoDribbble className="size-6" />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">Ing. Carlos</h5>
              <h6 className="md:text-md">Técnico de Laboratorio</h6>
            </div>
            <p>
              Responsable del mantenimiento de equipos y calidad de pruebas.
            </p>
            <div className="mt-6 flex gap-3.5">
              <a href="#">
                <BiLogoLinkedinSquare className="size-6" />
              </a>
              <a href="#">
                <FaXTwitter className="size-6 p-0.5" />
              </a>
              <a href="#">
                <BiLogoDribbble className="size-6" />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">Dra. Ana</h5>
              <h6 className="md:text-md">Patóloga</h6>
            </div>
            <p>Experta en diagnósticos histopatológicos y citológicos.</p>
            <div className="mt-6 flex gap-3.5">
              <a href="#">
                <BiLogoLinkedinSquare className="size-6" />
              </a>
              <a href="#">
                <FaXTwitter className="size-6 p-0.5" />
              </a>
              <a href="#">
                <BiLogoDribbble className="size-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-14 w-full max-w-md md:mt-20 lg:mt-24" />
      </div>
    </section>
  );
}
