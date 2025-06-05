"use client";

import { VideoIframe } from "@relume_io/relume-ui";
import React from "react";
import { FaCirclePlay } from "react-icons/fa6";

// Direct import
import youtubeFrame from "../../../assets/teams/youtube_frame.png";

export function Header151() {
  const [playVideo, setPlayVideo] = React.useState(false);
  return (
    <section id="relume">
      <div className="section section-dark px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="flex w-full max-w-lg flex-col">
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Sobre Nosostros
            </h1>
            <p className="md:text-md">
            <span className="text-4xl font-bold">Comprometidos con la salud: más de 25 años de excelencia en servicios clínicos.</span>
            <br />
            <br />
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
      <div className="relative max-w-3xl mx-auto">
        {playVideo ? (
          <VideoIframe video="https://www.youtube.com/embed/BXoryZQR5pI?autoplay=1" />
        ) : (
          <button
            className="relative w-full block bg-transparent"
            style={{ outline: "none" }}
            aria-label="Play video"
            onClick={() => setPlayVideo(true)}
          >
            {/* Thumbnail container */}
            <div className="relative">
              {/* Force image display with inline styles */}
              <img
                src={youtubeFrame}
                alt="YouTube video thumbnail"
                style={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  visibility: "visible",
                  backgroundColor: "transparent"
                }}
              />
              {/* Overlay */}
              <div 
                className="absolute inset-0" 
                style={{ backgroundColor: "rgba(0,0,0,0.2)", zIndex: 10 }}
              ></div>
              {/* Play button */}
              <FaCirclePlay 
                style={{ 
                  position: "absolute", 
                  top: "50%", 
                  left: "50%", 
                  transform: "translate(-50%, -50%)", 
                  zIndex: 20,
                  width: "4rem",
                  height: "4rem",
                  color: "white"
                }} 
              />
            </div>
          </button>
        )}
      </div>
    </section>
  );
}
