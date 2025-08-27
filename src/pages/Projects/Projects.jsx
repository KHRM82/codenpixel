import React from "react";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Our Projects</h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Explore the amazing projects created by our instructors and students.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="card-glass p-6 rounded-xl">
              <div className="h-48 bg-gray-700 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-4xl">🖥️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-primary mb-2">By {project.instructor}</p>
              <p className="text-gray-300 text-sm mb-4">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold mb-2">Technologies:</h4>
                <div className="flex flex-wrap">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="skill-pill mb-2">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center block"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
