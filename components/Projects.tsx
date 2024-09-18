"use client";

import { useState } from "react";
import ProjectModal from "./ProjectModal";
import Image from "next/image";

export interface Project {
  title: string;
  description: string;
  imageUrls: string[];
  url: string;
  techStack: string[];
}

const projects: Project[] = [
  {
    title: "Scheduler Reminder via WhatsApp",
    description:
      "Developed a scheduling program using Python and Google Apps Script to send automated reminders via WhatsApp, improving task management efficiency for users",
    imageUrls: ["/images/whatsapp-reminder.png"],
    url: "https://www.google.com/",
    techStack: ["Google Apps Script", "Python"],
  },
  {
    title: "Monitoring Dashboard with Looker Studio",
    description:
      "Built a comprehensive monitoring dashboard using Looker Studio to visualize key metrics, enhancing data-driven decision-making for the organization",
    imageUrls: ["/images/looker-dashboard-1.png", "/images/looker-dashboard-2.png", "/images/looker-dashboard-3.png"],
    url: "https://www.google.com/",
    techStack: ["Google Looker Studio", "Google Apps Script", "Python"],
  },
  {
    title: "Transition Service Back Office",
    description:
      "Website that designed to streamline the process of relocating residents to the new location. This feature allows back-office administrators to manage resident data and departure schedules, providing a dashboard with insights into users, housing details, and the status of the relocation process. The system automatically maps residents to available housing based on predefined allocation criteria.",
    imageUrls: ["/images/transisi-1.png", "/images/transisi-2.png", "/images/transisi-3.png", "/images/transisi-4.png", "/images/transisi-5.png"],
    url: "https://www.google.com/",
    techStack: ["Next.js", "Node.js", "Ant Design"],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section 
      id="projects" 
      className="mb-16 pt-6 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-40" aria-label="Selected projects"
    >
      <div className="sticky top-0 left-0 p-4 w-screen bg-background/75 backdrop-blur z-50 lg:hidden">
        <h1 className="text-xl font-bold text-yellow-900">Projects</h1>
      </div>
      <div className="px-4">
        <ul className="group/list">
        {projects.map((project, index) => (
          <li key={index} className="mb-12" onClick={() => handleCardClick(project)}>
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4  lg:hover:!blur-none lg:group-hover/list:blur-[2px]">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:shadow-[inset_0_0_1px_1px_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <div className="inline-flex items-baseline font-medium leading-tight text-textPrimary hover:text-yellow-900 focus-visible:text-yellow-900 group/link text-base cursor-pointer" aria-label={`${project.title} (opens in a new tab)`}>
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>{project.title} 
                      <span className="inline-block">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                          <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </span>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal">{project.description}</p>
              </div>
              <Image
                src={project.imageUrls[0]}
                alt={project.title}
                loading="lazy"
                width={200}
                height={48}
                decoding="async" 
                data-nimg="1"
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                style={{color: "transparent"}}
              />
            </div>
          </li>
        ))}
        </ul>
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </section>
  );
}
