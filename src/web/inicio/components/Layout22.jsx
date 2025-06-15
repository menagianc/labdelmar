"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import domicilioImage from "../../../assets/labs/lab-2-1.jpg";
import { Link } from "react-router-dom";

export function Layout22() {
  return (
    <section id="relume" className="section section-light px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Servicio a Domicilio
            </h2>
            <p className="md:text-md">
            Llevamos nuestros servicios de laboratorio a la comodidad
            de tu hogar con la misma calidad profesional y estándares
            de bioseguridad. Perfecto para quienes valoran su tiempo y
            buscan conveniencia sin comprometer la excelencia en sus
            resultados.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link to="/domicilio">
              <Button title="Solicitar servicio" variant="secondary">
                Solicitar servicio
              </Button>
              </Link>
            </div>
          </div>
          <div>
            <img
              src={domicilioImage}
              className="w-full rounded-image object-cover"
              alt="Servicio a domicilio - Laboratorio Clínico del Mar"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
