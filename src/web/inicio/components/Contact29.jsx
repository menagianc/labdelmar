"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@relume_io/relume-ui";
import React from "react";

export function Contact29() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 flex max-w-lg flex-col justify-start md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Ubicaciones</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Sucursales
          </h2>
          <p className="md:text-md">
            Encuentra nuestras sucursales en Vega Baja y Manatí.
          </p>
        </div>
        <Tabs
          orientation="vertical"
          className="relative grid auto-cols-fr grid-cols-1 gap-12 md:grid-cols-[.5fr_1fr] md:gap-y-16 lg:gap-x-20 lg:gap-y-16"
        >
          <TabsList className="relative grid h-full auto-cols-fr grid-cols-1 gap-x-4 gap-y-10">
            <TabsTrigger
              value="tab-1"
              className="items-start justify-start border-0 border-l-2 border-border-primary border-transparent px-0 py-0 pl-8 data-[state=active]:border-black data-[state=active]:bg-background-primary data-[state=active]:text-text-primary"
            >
              <div className="text-left">
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Vega Baja
                </h3>
                <p className="inline-block whitespace-normal">
                  Calle Principal 123, Vega Baja, PR 00693
                </p>
                <div className="mt-5 font-semibold md:mt-6">
                  <p>View Map</p>
                </div>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="tab-2"
              className="items-start justify-start border-0 border-l-2 border-border-primary border-transparent px-0 py-0 pl-8 data-[state=active]:border-black data-[state=active]:bg-background-primary data-[state=active]:text-text-primary"
            >
              <div className="text-left">
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Manatí
                </h3>
                <p className="inline-block whitespace-normal">
                  Avenida Central 456, Manatí, PR 00674
                </p>
                <div className="mt-5 font-semibold md:mt-6">
                  <p>View Map</p>
                </div>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="tab-3"
              className="items-start justify-start border-0 border-l-2 border-border-primary border-transparent px-0 py-0 pl-8 data-[state=active]:border-black data-[state=active]:bg-background-primary data-[state=active]:text-text-primary"
            >
              <div className="text-left">
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  London
                </h3>
                <p className="inline-block whitespace-normal">
                  123 Sample St, London W1C 1DE, United Kingdom
                </p>
                <div className="mt-5 font-semibold md:mt-6">
                  <p>View Map</p>
                </div>
              </div>
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="tab-1"
            className="data-[state=active]:animate-tabs"
          >
            <div className="relative size-full">
              <img
                src="https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-map-image.svg"
                alt="Relume placeholder map image"
                className="size-full object-cover"
              />
            </div>
          </TabsContent>
          <TabsContent
            value="tab-2"
            className="data-[state=active]:animate-tabs"
          >
            <div className="relative size-full">
              <img
                src="https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-map-image.svg"
                alt="Relume placeholder map image"
                className="size-full object-cover"
              />
            </div>
          </TabsContent>
          <TabsContent
            value="tab-3"
            className="data-[state=active]:animate-tabs"
          >
            <div className="relative size-full">
              <img
                src="https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-map-image.svg"
                alt="Relume placeholder map image"
                className="size-full object-cover"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
