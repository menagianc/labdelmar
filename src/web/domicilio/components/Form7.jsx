"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Input,
  Label,
  Button,
} from "@relume_io/relume-ui";
// Import Button component directly without type imports
import { BiEnvelope, BiPhone } from "react-icons/bi";

// Default props defined directly

// Using plain JS component

export const Form7Defaults = {
  heading: "Soliticar Servicio",
  description:
    "Llenar el formulario para solicitar el servicio de laboratorio a domicilio.",
  buttons: [
    { 
      title: "Enviar solicitud", 
      size: "sm", 
      className: "bg-background-alternative text-text-alternative border-none transition-all duration-300 hover:brightness-110 active:scale-[0.98] active:brightness-95" 
    },
  ],
};

export const Form7 = (props) => {
  const { heading, description, buttons } = {
    ...Form7Defaults,
    ...props,
  };

  const [nombreInput, setNombreInput] = useState("");
  const [apellidoMaternoInput, setApellidoMaternoInput] = useState("");
  const [apellidoPaternoInput, setApellidoPaternoInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [telefonoInput, setTelefonoInput] = useState("");
  const [direccionInput, setDireccionInput] = useState("");
  const [ciudadInput, setCiudadInput] = useState("");
  const [codigoPostalInput, setCodigoPostalInput] = useState("");
  const [planPrimarioFile, setPlanPrimarioFile] = useState(null);
  const [planSecundarioFile, setPlanSecundarioFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      nombreInput,
      apellidoMaternoInput,
      apellidoPaternoInput,
      emailInput,
      telefonoInput,
      direccionInput,
      ciudadInput,
      codigoPostalInput,
      planPrimarioFile: planPrimarioFile ? planPrimarioFile.name : null,
      planSecundarioFile: planSecundarioFile ? planSecundarioFile.name : null,
    });
  };

  const selectItems = [
    { value: "first-choice", label: "First Choice" },
    { value: "second-choice", label: "Second Choice" },
    { value: "third-choice", label: "Third Choice" },
  ];

  return (
    <section id="relume" className="section section-light px-[5%] py-16 md:py-24 lg:py-28">
      <div className="grid grid-cols-[1fr] gap-6 md:grid-cols-1 lg:grid-cols-[0.75fr_1fr] lg:gap-12">
        <div className="pb-5 md:pb-6">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
          <p className="mt-2">{description}</p>
        </div>
        <form onSubmit={handleSubmit} className="grid auto-cols-fr grid-cols-1 gap-6">
          <div className="grid w-full max-w-md grid-cols-1 gap-6 md:grid-cols-3 md:gap-4">
            <div className="grid w-full items-center">
              <Label htmlFor="nombre" className="mb-2">
                Nombre
              </Label>
              <Input
                type="text"
                id="nombre"
                value={nombreInput}
                onChange={(e) => setNombreInput(e.target.value)}
              />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="apellidoMaterno" className="mb-2">
                Apellido Materno
              </Label>
              <Input
                type="text"
                id="apellidoMaterno"
                value={apellidoMaternoInput}
                onChange={(e) => setApellidoMaternoInput(e.target.value)}
              />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="apellidoPaterno" className="mb-2">
                Apellido Paterno
              </Label>
              <Input
                type="text"
                id="apellidoPaterno"
                value={apellidoPaternoInput}
                placeholder="Opcional"
                onChange={(e) => setApellidoPaternoInput(e.target.value)}
              />
            </div>
          </div>
          <div className="grid w-full max-w-md grid-cols-1 gap-6 md:grid-cols-2 md:gap-4">
            <div className="grid w-full items-center">
              <Label htmlFor="email" className="mb-2">
                Correo Electrónico
              </Label>
              <Input
                type="email"
                id="email"
                value={emailInput}
                icon={<BiEnvelope className="size-6" />}
                placeholder="ejemplo@email.com"
                onChange={(e) => setEmailInput(e.target.value)}
              />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="telefono" className="mb-2">
                Número de Teléfono
              </Label>
              <Input
                type="tel"
                id="telefono"
                value={telefonoInput}
                icon={<BiPhone className="size-6" />}
                placeholder="(555) 555-5555"
                onChange={(e) => setTelefonoInput(e.target.value)}
              />
            </div>
          </div>

          <div className="grid w-full max-w-md items-center">
            <Label htmlFor="direccion" className="mb-2">
              Dirección Física
            </Label>
            <Input
              type="text"
              id="direccion"
              value={direccionInput}
              onChange={(e) => setDireccionInput(e.target.value)}
            />
          </div>
          <div className="grid w-full max-w-md grid-cols-1 gap-6 md:grid-cols-2 md:gap-4">
            <div className="grid w-full items-center">
              <Label htmlFor="ciudad" className="mb-2">
                Ciudad
              </Label>
              <Input
                type="text"
                id="ciudad"
                value={ciudadInput}
                onChange={(e) => setCiudadInput(e.target.value)}
              />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="codigoPostal" className="mb-2">
                Código Postal
              </Label>
              <Input
                type="text"
                id="codigoPostal"
                value={codigoPostalInput}
                onChange={(e) => setCodigoPostalInput(e.target.value)}
              />
            </div>
          </div>
          
          <div className="grid w-full max-w-md grid-cols-1 gap-6 md:grid-cols-2 md:gap-4">
            <div className="grid w-full items-center">
              <Label htmlFor="planPrimario" className="mb-2">
                Plan Primario
              </Label>
              <Input
                type="file"
                id="planPrimario"
                onChange={(e) => setPlanPrimarioFile(e.target.files[0])}
                className="bg-[var(--background-accent)] text-white file:bg-[var(--accent-light)] file:text-[var(--background-main)] file:border-none hover:brightness-110 transition-all duration-300"
              />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="planSecundario" className="mb-2">
                Plan Secundario (Opcional)
              </Label>
              <Input
                type="file"
                id="planSecundario"
                onChange={(e) => setPlanSecundarioFile(e.target.files[0])}
                className="bg-[var(--background-accent)] text-white file:bg-[var(--accent-light)] file:text-[var(--background-main)] file:border-none hover:brightness-110 transition-all duration-300"
              />
            </div>
          </div>
          <div className="grid w-full max-w-md grid-cols-1 gap-6">
            <div className="flex items-center justify-end gap-4">
              {buttons.map((button, index) => (
                <Button 
                  key={index} 
                  {...button}
                  className={`px-6 py-2 rounded-none font-medium ${button.className}`}
                  style={{ background: 'linear-gradient(75deg, var(--background-accent) 0%, var(--accent-light) 100%)' }}
                >
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

