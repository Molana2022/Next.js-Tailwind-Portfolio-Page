"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";
import ModalTerms from "../components/ModalTerms";


function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Frontend Developer & Content Creator
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            Hi! I&apos;m Nasim Molana, a frontend developer from Iran currently living in Germany.
            I’m passionate about painting, dancing, and meditation, and besides coding, I actively create content for social media.
            This is where I blend creativity with technology and share my exciting projects with the world.
          </Typography>
          <div className="grid">
            <Typography
              variant="small"
              className="mb-2 text-gray-900 font-medium"
            >
              Your email
            </Typography>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              {/* @ts-ignore */}
              <Input color="gray" label="Enter your email" size="lg" />
              <Button color="gray" className="w-full px-4 md:w-[12rem]">
                Get in Touch
              </Button>
            </div>
          </div>
          <Typography variant="small" className="font-normal !text-gray-500">
            Read my <ModalTerms />
          </Typography>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/image-7.jpg"
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
