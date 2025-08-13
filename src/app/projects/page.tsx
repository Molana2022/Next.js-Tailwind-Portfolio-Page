// src/app/projects/page.tsx
import Link from "next/link";

const PROJECTS = [
  { slug: "portfolio", title: "Personal Website", summary: "New version of personal website built with Next.js and Tailwind CSS." },
  { slug: "cms",       title: "CMS System",  summary: "A lightweight CMS built with Laravel and several custom modules." },
];

export default function ProjectsListPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <p className="text-gray-600 mb-8">
Below is a list of projects I’ve worked on — click any project to see more details.      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="block border rounded-lg p-6 shadow hover:shadow-lg transition-shadow bg-white"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 text-sm">{project.summary}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
