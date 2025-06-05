import React from "react";
import { LabLocations } from "./components/LabLocations";
import { Title } from "../../components/Title";
import { Header46 } from "./components/Header46";

export default function Page() {
  return (
    <div>
      <Title title="Sucursales" />
      <Header46/>
      <LabLocations />
    </div>
  );
}
