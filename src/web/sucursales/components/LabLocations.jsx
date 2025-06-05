"use client";

import React, { useState } from "react";
import { RxChevronRight } from "react-icons/rx";
import { Slideshow } from "./Slideshow";

// Import all lab images
import lab1_1 from '../../../assets/labs/lab-1-1.jpg';
import lab1_2 from '../../../assets/labs/lab-1-2.jpg';
import lab1_3 from '../../../assets/labs/lab-1-3.jpg';
import lab1_4 from '../../../assets/labs/lab-1-4.jpg';
import lab1_5 from '../../../assets/labs/lab-1-5.jpg';
import lab2_1 from '../../../assets/labs/lab-2-1.jpg';
import lab2_2 from '../../../assets/labs/lab-2-2.jpg';
import lab2_3 from '../../../assets/labs/lab-2-3.jpg';
import lab2_4 from '../../../assets/labs/lab-2-4.jpg';
import lab3_1 from '../../../assets/labs/lab-3-1.jpg';
import lab3_2 from '../../../assets/labs/lab-3-2.jpg';
import lab3_3 from '../../../assets/labs/lab-3-3.jpg';
import lab3_4 from '../../../assets/labs/lab-3-4.jpg';
import lab3_5 from '../../../assets/labs/lab-3-5.jpg';
import lab3_6 from '../../../assets/labs/lab-3-6.jpg';

export function LabLocations() {
  const [activeMap, setActiveMap] = useState(null);

  const toggleMap = (mapId) => {
    if (activeMap === mapId) {
      setActiveMap(null); // Close the map if it's already open
    } else {
      setActiveMap(mapId); // Open the clicked map and close any other
    }
  };

  // Group labs by location
  const vegaBajaLabs = [
    {
      id: "lab1",
      name: "Laboratorio Clínico Del Mar I",
      address: "Urb. San Demetrio, Núm. 6 Bloque 1, Vega Baja PR 00693",
      phone: "787-858-8362",
      extension: "1",
      hours: {
        weekdays: "Lunes a Viernes: 6:30 AM – 3:00 PM",
        saturday: "Sábado: 7:30 AM – 11:30 AM"
      },
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2675.699285379783!2d-66.40597912690791!3d18.483196346065327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c031712cfcf8c69%3A0x93f89fe66dc2b97f!2sDel%20Mar%20Clinical%20Laboratory!5e0!3m2!1sen!2spr!4v1747968276121!5m2!1sen!2spr",
      googleMapsUrl: "https://www.google.com/maps/search/Laboratorio+Cl%C3%ADnico+Del+Mar+I/@18.483196,-66.403790,19z/data=!3m1!4b1?entry=ttu",
      images: [lab1_1, lab1_2, lab1_3, lab1_4, lab1_5]
    },
    {
      id: "lab2",
      name: "Laboratorio Clínico Del Mar II",
      address: "Carr. #2 km 42.3, Bo Algarrobo, Vega Baja PR 00693 (4245 Carr. #2 Vega Baja PR 00693)",
      phone: "787-858-8362",
      extension: "2",
      hours: {
        weekdays: "Lunes a Viernes: 5:30 AM – 4:00 PM",
        saturday: "Sábado: 7:00 AM – 12:00 PM"
      },
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1338.1722836320484!2d-66.42788126183277!3d18.441814690099765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c031701ba589c6d%3A0x234aba3d4ac7cdc3!2sLaboratorio%20Cl%C3%ADnico%20Del%20Mar%20II!5e0!3m2!1sen!2spr!4v1747968352646!5m2!1sen!2spr",
      googleMapsUrl: "https://www.google.com/maps/search/Laboratorio+Cl%C3%ADnico+Del+Mar+II/@18.441815,-66.427881,19z/data=!3m1!4b1?entry=ttu",
      images: [lab2_1, lab2_2, lab2_3, lab2_4]
    },
    {
      id: "lab4",
      name: "Laboratorio Clínico Del Mar IV",
      address: "Urb. Monte Carlo, Calle Marginal 113, Vega Baja PR 00693",
      phone: "787-858-8362",
      extension: "4",
      hours: {
        weekdays: "Lunes a Viernes: 6:00 AM – 3:00 PM",
        saturday: "Sábado: 7:30 AM – 11:30 AM"
      },
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d946.2036425259821!2d-66.3952792895134!3d18.446726517205864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c0317092bfe1849%3A0x2f254ebef566bdb0!2sLaboratorio%20Cl%C3%ADnico%20Del%20Mar%204!5e0!3m2!1sen!2spr!4v1747968435718!5m2!1sen!2spr",
      googleMapsUrl: "https://www.google.com/maps/search/Laboratorio+Cl%C3%ADnico+Del+Mar+IV/@18.446727,-66.395279,19z/data=!3m1!4b1?entry=ttu",
      images: [] // No specific images for lab 4 in the provided assets
    }
  ];

  const manatiLabs = [
    {
      id: "lab3",
      name: "Laboratorio Clínico Del Mar III",
      address: "Centro Comercial Plaza Puerta del Sol, Carr. #2 KM 50.2, Manatí PR 00674",
      phone: "787-858-8362",
      extension: "3",
      hours: {
        weekdays: "Lunes a Viernes: 6:30 AM – 3:00 PM",
        saturday: "Sábado: 7:00 AM – 11:30 AM"
      },
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d281.33428255838555!2d-66.49330320155946!3d18.430687246212123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c0319efa20e0e29%3A0x6826e34e3ce01ed8!2sLaboratorio%20del%20Mar!5e0!3m2!1sen!2spr!4v1747968311539!5m2!1sen!2spr",
      googleMapsUrl: "https://www.google.com/maps/search/Laboratorio+Cl%C3%ADnico+Del+Mar+III/@18.430687,-66.493303,19z/data=!3m1!4b1?entry=ttu",
      images: [lab3_1, lab3_2, lab3_3, lab3_4, lab3_5, lab3_6]
    }
  ];

  const renderLabCard = (lab) => (
    <div key={lab.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-64 md:h-auto">
          {lab.images && lab.images.length > 0 ? (
            <Slideshow images={lab.images} />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">No hay imágenes disponibles</p>
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">{lab.name}</h3>
          <p className="inline-block whitespace-normal">{lab.address}</p>
          <p className="mt-2 text-sm">
            <strong>Teléfono:</strong>{" "}
            <a href={`tel:${lab.phone}`} className="text-blue-700 hover:text-blue-900 hover:underline">
              {lab.phone} - Ext. {lab.extension}
            </a>
          </p>
          <p className="mt-2 text-sm">
            <strong>Horario:</strong><br />
            {lab.hours.weekdays}<br />
            {lab.hours.saturday}
          </p>
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-4">
            <button
              onClick={() => toggleMap(lab.id)}
              className="text-sm font-semibold text-[#044a56] flex items-center"
            >
              {activeMap === lab.id ? 'Ocultar Mapa' : 'Ver Mapa'}
              <svg 
                className={`ml-2 w-5 h-5 transition-transform duration-300 ${activeMap === lab.id ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <a 
              href={lab.googleMapsUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#044a56] flex items-center"
            >
              Obtener Direcciones
              <RxChevronRight className="ml-1" />
            </a>
          </div>
        </div>
      </div>
      {activeMap === lab.id && (
        <div className="relative w-full h-[300px] transition-all duration-300 ease-in-out">
          <iframe 
            src={lab.mapUrl}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title={`Mapa ${lab.name}`}
          ></iframe>
        </div>
      )}
    </div>
  );

  return (
    <section id="relume" className="section section-light px-[5%] py-16 md:py-24 lg:py-28">
        {/* Vega Baja Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b pb-2">Vega Baja</h2>
          <div className="space-y-8">
            {vegaBajaLabs.map(renderLabCard)}
          </div>
        </div>

        {/* Manatí Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b pb-2">Manatí</h2>
          <div className="space-y-8">
            {manatiLabs.map(renderLabCard)}
          </div>
        </div>
    </section>
  );
}
