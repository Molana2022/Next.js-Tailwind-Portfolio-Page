"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  DocumentTextIcon,
  ComputerDesktopIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";
import Link from 'next/link';

const RESUME_ITEMS = [
  {
    icon: AcademicCapIcon,
    children: "M.Sc. in Software Engineering",
  },
  {
    icon: DocumentTextIcon,
    children: "B.Sc. in Software Engineering ",
  },
  {
    icon: ComputerDesktopIcon,
    children: "The Complete Full-Stack Web Development Bootcamp (Udemy) – In Progress",
  },
];

export function Resume() {
  return (
    <section className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray">
            My Resume
          </Typography>
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500">
           Experienced and passionate Front-End Developer with over 6 years of hands-on experience building modern, user-friendly web applications and websites. Proficient in React.js, JavaScript, Next.js, and Tailwind CSS. Dedicated to writing clean, maintainable code and designing intuitive user interfaces. A creative, team-oriented professional eager to deliver innovative solutions in agile environments.
          </Typography>
          <Link  href="/CV_Nasim_Molana.pdf" target="_blank" rel="noopener noreferrer">
          
            <Button
              variant="text"
              color="gray"
              className="flex items-center gap-2"
            >
              view more
              <ArrowRightIcon
                strokeWidth={3}
                className="h-3.5 w-3.5 text-gray-900"
              />
            </Button>
          </Link>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
