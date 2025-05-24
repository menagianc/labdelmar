"use client";

import React, { useState } from "react";

export function Contact29() {
  const [activeMap, setActiveMap] = useState(null);

  const toggleMap = (mapId) => {
    if (activeMap === mapId) {
      setActiveMap(null); // Close the map if it's already open
    } else {
      setActiveMap(mapId); // Open the clicked map and close any other
    }
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 flex max-w-lg flex-col justify-start md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Ubicaciones</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Sucursales
          </h2>
          <p className="md:text-md">
            Encuentra nuestras sucursales en Vega Baja y Manatí. Contamos con cuatro ubicaciones para servirte mejor.
          </p>
        </div>
        <div className="flex flex-col gap-10">
          {/* Location 1 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <div 
              className="text-left p-6 cursor-pointer" 
              onClick={() => toggleMap('map1')}
            >
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Laboratorio Clínico Del Mar I
              </h3>
              <p className="inline-block whitespace-normal">
                Urb. San Demetrio, Núm. 6 Bloque 1, Vega Baja PR 00693
              </p>
              <p className="mt-2 text-sm">
                <strong>Teléfono:</strong>{" "}
                <a href="tel:7878588362" className="hover:underline">
                  787-858-8362 - Ext. 1
                </a>
              </p>
              <p className="mt-2 text-sm">
                <strong>Horario:</strong><br />
                Lunes a Viernes: 6:30 AM – 3:00 PM<br />
                Sábado: 7:30 AM – 11:30 AM
              </p>
              <div className="mt-4 text-sm font-semibold text-[#044a56] flex items-center" data-component-name="Contact29">
                {activeMap === 'map1' ? 'Ocultar Mapa' : 'Ver Mapa'}
                <svg 
                  className={`ml-2 w-5 h-5 transition-transform duration-300 ${activeMap === 'map1' ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
            {activeMap === 'map1' && (
              <div className="relative w-full h-[300px] transition-all duration-300 ease-in-out">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2675.699285379783!2d-66.40597912690791!3d18.483196346065327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c031712cfcf8c69%3A0x93f89fe66dc2b97f!2sDel%20Mar%20Clinical%20Laboratory!5e0!3m2!1sen!2spr!4v1747968276121!5m2!1sen!2spr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa Laboratorio Clínico Del Mar I"
                ></iframe>
              </div>
            )}
          </div>

          {/* Location 2 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <div 
              className="text-left p-6 cursor-pointer" 
              onClick={() => toggleMap('map2')}
            >
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Laboratorio Clínico Del Mar II
              </h3>
              <p className="inline-block whitespace-normal">
                Carr. #2 km 42.3, Bo Algarrobo, Vega Baja PR 00693<br />
                (4245 Carr. #2 Vega Baja PR 00693)
              </p>
              <p className="mt-2 text-sm">
                <strong>Teléfono:</strong>{" "}
                <a href="tel:7878588362" className="hover:underline">
                  787-858-8362 - Ext. 2
                </a>
              </p>
              <p className="mt-2 text-sm">
                <strong>Horario:</strong><br />
                Lunes a Viernes: 5:30 AM – 4:00 PM<br />
                Sábado: 7:00 AM – 12:00 PM
              </p>
              <div className="mt-4 text-sm font-semibold text-[#044a56] flex items-center">
                {activeMap === 'map2' ? 'Ocultar Mapa' : 'Ver Mapa'}
                <svg 
                  className={`ml-2 w-5 h-5 transition-transform duration-300 ${activeMap === 'map2' ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
            {activeMap === 'map2' && (
              <div className="relative w-full h-[300px] transition-all duration-300 ease-in-out">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1338.1722836320484!2d-66.42788126183277!3d18.441814690099765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c031701ba589c6d%3A0x234aba3d4ac7cdc3!2sLaboratorio%20Cl%C3%ADnico%20Del%20Mar%20II!5e0!3m2!1sen!2spr!4v1747968352646!5m2!1sen!2spr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa Laboratorio Clínico Del Mar II"
                ></iframe>
              </div>
            )}
          </div>

          {/* Location 3 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <div 
              className="text-left p-6 cursor-pointer" 
              onClick={() => toggleMap('map3')}
            >
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Laboratorio Clínico Del Mar III
              </h3>
              <p className="inline-block whitespace-normal">
                Centro Comercial Plaza Puerta del Sol, Carr. #2 KM 50.2, Manatí PR 00674
              </p>
              <p className="mt-2 text-sm">
                <strong>Teléfono:</strong>{" "}
                <a href="tel:7878588362" className="hover:underline">
                  787-858-8362 - Ext. 3
                </a>
              </p>
              <p className="mt-2 text-sm">
                <strong>Horario:</strong><br />
                Lunes a Viernes: 6:30 AM – 3:00 PM<br />
                Sábado: 7:00 AM – 11:30 AM
              </p>
              <div className="mt-4 text-sm font-semibold text-[#044a56] flex items-center">
                {activeMap === 'map3' ? 'Ocultar Mapa' : 'Ver Mapa'}
                <svg 
                  className={`ml-2 w-5 h-5 transition-transform duration-300 ${activeMap === 'map3' ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
            {activeMap === 'map3' && (
              <div className="relative w-full h-[300px] transition-all duration-300 ease-in-out">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d281.33428255838555!2d-66.49330320155946!3d18.430687246212123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c0319efa20e0e29%3A0x6826e34e3ce01ed8!2sLaboratorio%20del%20Mar!5e0!3m2!1sen!2spr!4v1747968311539!5m2!1sen!2spr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa Laboratorio Clínico Del Mar III"
                ></iframe>
              </div>
            )}
          </div>

          {/* Location 4 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <div 
              className="text-left p-6 cursor-pointer" 
              onClick={() => toggleMap('map4')}
            >
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                Laboratorio Clínico Del Mar IV
              </h3>
              <p className="inline-block whitespace-normal">
                Urb. Monte Carlo, Calle Marginal 113, Vega Baja PR 00693
              </p>
              <p className="mt-2 text-sm">
                <strong>Teléfono:</strong>{" "}
                <a href="tel:7878588362" className="hover:underline">
                  787-858-8362 - Ext. 4
                </a>
              </p>
              <p className="mt-2 text-sm">
                <strong>Horario:</strong><br />
                Lunes a Viernes: 6:00 AM – 3:00 PM<br />
                Sábado: 7:30 AM – 11:30 AM
              </p>
              <div className="mt-4 text-sm font-semibold text-[#044a56] flex items-center">
                {activeMap === 'map4' ? 'Ocultar Mapa' : 'Ver Mapa'}
                <svg 
                  className={`ml-2 w-5 h-5 transition-transform duration-300 ${activeMap === 'map4' ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
            {activeMap === 'map4' && (
              <div className="relative w-full h-[300px] transition-all duration-300 ease-in-out">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d946.2036425259821!2d-66.3952792895134!3d18.446726517205864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c0317092bfe1849%3A0x2f254ebef566bdb0!2sLaboratorio%20Cl%C3%ADnico%20Del%20Mar%204!5e0!3m2!1sen!2spr!4v1747968435718!5m2!1sen!2spr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa Laboratorio Clínico Del Mar IV"
                ></iframe>
              </div>
            )}  
          </div>
        </div>
      </div>
    </section>
  );
}
