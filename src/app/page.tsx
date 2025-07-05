import Image from "next/image";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import { BackgroundPattern } from "../components/BackgroundPatternt";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/DATA/resume";
import About from "@/components/About";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="max-w-2xl justify-center mx-auto px-6 py-6">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto ">
        {
          DATA.projects.map((project) => (
            <ProjectCard
              href={project.href}
              key={project.title}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
              video={project.video}
              links={project.links}
            />
          ))
        }
      </div>
    </div>
  );
}
