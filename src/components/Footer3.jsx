"use client";

import React from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoYoutube,
} from "react-icons/bi";
import { Link } from "react-router-dom";

export function Footer3() {
  return (
    <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20" style={{ backgroundColor: '#044a56' }}>
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[4vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
          <div>
            <div className="mb-6 md:mb-8">
              <Link to="/">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
                  alt="Logo image"
                  className="inline-block"
                />
              </Link>
            </div>
            <div className="mb-6 md:mb-8">
              <p className="mb-1 text-sm font-semibold">Dirección:</p>
              <p className="mb-5 text-sm md:mb-6">
                PO BOX 2221 Manatí, PR 00674
              </p>
              <p className="mb-1 text-sm font-semibold">Contacto:</p>
              <a
                href="tel:1800 123 4567"
                className="block text-sm underline decoration-black underline-offset-1"
              >
                +1 787 858 8362
              </a>
              <a
                href="mailto:info@relume.io"
                className="block text-sm underline decoration-black underline-offset-1"
              >
                info@relume.io
              </a>
            </div>
            <div className="grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-3">
              <a href="#">
                <BiLogoFacebookCircle className="size-6" />
              </a>
              <a href="#">
                <BiLogoInstagram className="size-6" />
              </a>
              <a href="#">
                <BiLogoYoutube className="size-6" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
            <ul>
              <li className="py-2 text-sm font-semibold">
                <Link to="/inicio">Inicio</Link>
              </li>
              <li className="py-2 text-sm font-semibold">
                <Link to="/sobre-nosotros">Sobre Nosotros</Link>
              </li>
              <li className="py-2 text-sm font-semibold">
                <Link to="/sucursales">Sucursales</Link>
              </li>
              <li className="py-2 text-sm font-semibold">
                <Link to="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col-reverse items-start justify-between pt-6 pb-4 text-sm md:flex-row md:items-center md:pt-8 md:pb-0">
          <p className="mt-8 md:mt-0">© {new Date().getFullYear()} Laboratorio Clínico del Mar LLC. All rights reserved.</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0" />
        </div>
      </div>
    </footer>
  );
}
