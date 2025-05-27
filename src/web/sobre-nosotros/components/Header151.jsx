"use client";

import { VideoIframe } from "@relume_io/relume-ui";
import React from "react";
import youtubeFrame from "../../../assets/teams/youtube_frame.png";
import { FaCirclePlay } from "react-icons/fa6";


export function Header151() {
  const [playVideo, setPlayVideo] = React.useState(false);
  return (
    <section id="relume">
      <div className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="flex w-full max-w-lg flex-col">
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Sobre Nosostros
            </h1>
            <p className="md:text-md">
              Desde su fundación, el Laboratorio Clínico del Mar ha
              estado a la vanguardia de la atención médica en Puerto Rico.
              Con más de 25 años de experiencia, nuestra misión es proporcionar
              un servicio al paciente excepcional, garantizando resultados rápidos
              y precisos. Nos enorgullece contar con un equipo altamente
              cualificado y tecnología avanzada para satisfacer
              las necesidades de nuestros pacientes.
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex size-full items-center justify-center max-w-3xl mx-auto">
        {playVideo ? (
          <VideoIframe video="https://www.youtube.com/embed/BXoryZQR5pI?autoplay=1" />
        ) : (
          <button
            className="relative flex size-full items-center justify-center w-full"
            style={{ outline: "none" }}
            aria-label="Play video"
            onClick={() => setPlayVideo(true)}
          >
            <img
              src={youtubeFrame}
              alt="YouTube video thumbnail"
              className="aspect-video size-full object-cover"
            />
            <span className="absolute inset-0 z-10 bg-black/20" />
            <FaCirclePlay className="absolute z-20 size-16 text-white" />
          </button>
        )}
      </div>
    </section>
  );
}
