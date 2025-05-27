"use client";

import React from "react";
import teamMember1 from "../../../assets/teams/MaríaMMeléndez.jpg";
import teamMember2 from "../../../assets/teams/JoseINáter.jpg";
import teamMember3 from "../../../assets/teams/GreisaFigueroa.jpg";
import teamMember4 from "../../../assets/teams/KeishlaMartínez.jpg";
import youtubeFrame from "../../../assets/teams/youtube_frame.png";

export function Team13() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Nuestro equipo
          </h2>
          <p className="md:text-md">
            Conoce a nuestros profesionales altamente capacitados.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-16 justify-center">
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <img
                src={teamMember1}
                alt="Lcda. María M. Meléndez"
                className="size-48 min-h-48 min-w-48 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">Lcda. María M. Meléndez</h5>
              <h6 className="md:text-md">Directora - Presidente</h6>
            </div>

          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <img
                src={teamMember2}
                alt="Jose I. Náter"
                className="size-48 min-h-48 min-w-48 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">Jose I. Náter</h5>
              <h6 className="md:text-md">Director Administrativo</h6>
            </div>

          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <img
                src={teamMember3}
                alt="Lcda. Greisa Figueroa"
                className="size-48 min-h-48 min-w-48 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">Lcda. Greisa Figueroa</h5>
              <h6 className="md:text-md">Supervisora de Laboratorio</h6>
            </div>

          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <img
                src={teamMember4}
                alt="Keishla Martínez"
                className="size-48 min-h-48 min-w-48 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">Keishla Martínez</h5>
              <h6 className="md:text-md">Directora de Facturación</h6>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
