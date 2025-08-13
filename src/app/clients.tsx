"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const CLIENTS = [
  "coinbase",
  "spotify",
  "pinterest",
  "google",
  "amazon",
  "netflix",
];

export function Clients() {
  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center">
        <Typography variant="h6" color="blue-gray" className="mb-8">
          My Work & Creations
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {/* {CLIENTS.map((logo, key) => (
            <Image
              key={key}
              alt={logo}
              width={768}
              height={768}
              className="w-40"
              src={`/logos/logo-${logo}.svg`}
            />
          ))} */}
          <p>Here you'll find projects and ideas that reflect my skills and passion. Stay tuned for exciting updates!</p>
        </div>
      </div>
    </section>
  );
}

export default Clients;
