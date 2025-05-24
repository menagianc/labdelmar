"use client";

import React from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoYoutube,
} from "react-icons/bi";
import { Link } from "react-router-dom";

// Add this style block to ensure white underline and text for footer links
const footerUnderlineStyle = `
/* Menu links: only animated underline on hover */
.footer-underline {
  position: relative;
  text-decoration: none;
  color: white;
}
.footer-underline::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background: white;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
}
.footer-underline:hover::after {
  transform: scaleX(1);
}
/* Contact links: always underlined */
.footer-contact-link {
  text-decoration: underline;
  text-decoration-color: white;
  color: white;
}
.footer-contact-link:hover {
  color: white;
  text-decoration-color: white;
}`;

export function Footer3() {
  return (
    <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20" style={{ backgroundColor: '#044a56' }}>
      <style>{footerUnderlineStyle}</style>
      <div className="container">
        {/* Logo inside the container, above the grid */}
        <div className="mb-4">
          <img src="/labdelmar/FooterLogo.svg" alt="Logo image" style={{ width: '90px', height: 'auto' }} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10 pb-12">
          {/* LEFT SIDE: Address, Contact, Socials */}
          <div>
            <div className="mb-6 md:mb-8">
              <p className="mb-1 text-sm font-semibold">Dirección:</p>
              <p className="mb-5 text-sm md:mb-6">PO BOX 2221 Manatí, PR 00674</p>
              <p className="mb-1 text-sm font-semibold">Contacto:</p>
              <a
                href="tel:1800 123 4567"
                className="block text-sm underline-offset-1 footer-contact-link"
              >
                +1 787 858 8362
              </a>
              <a
                href="mailto:example@email.com"
                className="block text-sm underline-offset-1 footer-contact-link"
              >
                example@email.com
              </a>
            </div>
            <div className="grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-3">
              <a href="https://www.facebook.com/labdelmar" target="_blank" rel="noopener noreferrer">
                <BiLogoFacebookCircle className="size-6 text-white" />
              </a>
              <a href="https://www.instagram.com/laboratorioclinicodelmar/" target="_blank" rel="noopener noreferrer">
                <BiLogoInstagram className="size-6 text-white" />
              </a>
            </div>
          </div>
          {/* RIGHT SIDE: Navigation */}
          <div>
            <ul>
              <li className="py-2 text-sm font-semibold">
                <Link to="/inicio" className="footer-underline text-white hover:text-white">Inicio</Link>
              </li>
              <li className="py-2 text-sm font-semibold">
                <Link to="/sobre-nosotros" className="footer-underline text-white hover:text-white">Sobre Nosotros</Link>
              </li>
              <li className="py-2 text-sm font-semibold">
                <Link to="/sucursales" className="footer-underline text-white hover:text-white">Sucursales</Link>
              </li>
              <li className="py-2 text-sm font-semibold">
                <Link to="/contacto" className="footer-underline text-white hover:text-white">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-px w-full bg-white" />
        <div className="flex flex-col-reverse items-start justify-between pt-6 pb-4 text-sm md:flex-row md:items-center md:pt-8 md:pb-0">
          <p className="mt-8 md:mt-0">© {new Date().getFullYear()} Laboratorio Clínico del Mar LLC. All rights reserved.</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0" />
        </div>
      </div>
    </footer>
  );
}
