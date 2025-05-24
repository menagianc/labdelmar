import React from "react";
import { LabLocations } from "./components/LabLocations";
import { Title } from "../../components/Title";

export default function Page() {
  return (
    <div>
      <Title title="Sucursales" />
      <LabLocations />
    </div>
  );
}
