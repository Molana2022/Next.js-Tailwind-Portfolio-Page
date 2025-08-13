// src/app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const PROJECTS = [
  { slug: "portfolio", title: " Personal Website", summary: "New version of personal website built with Next.js and Tailwind CSS." },
  { slug: "cms",       title: "CMS System",  summary: "A lightweight CMS built with Laravel and several custom modules." },
];

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = PROJECTS.find(p => p.slug === params.slug);
  if (!project) return { title: "Project not found!" };
  return { title: `${project.title} | Projects` };
}

export default function ProjectPage({ params }: Props) {
  const project = PROJECTS.find(p => p.slug === params.slug);

  if (!project) {
    notFound(); // Redirect to 404 Page using App Router
  }

  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold">{project!.title}</h1>
      <p className="mt-3 text-gray-700">{project!.summary}</p>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">Details</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Slug: <code className="font-mono">{project!.slug}</code></li>
          <li>Technologies: Next.js, Tailwind, Material Tailwind</li>
          <li>Status: In development</li>
        </ul>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  return PROJECTS.map(p => ({ slug: p.slug }));
}
