import React from "react";
import { instructors } from "../../data/instructors";

const Instructors = () => {
  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Our Instructors</h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Meet the talented professionals who will guide you through your
          learning journey.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="card-glass p-6 rounded-xl">
              <div className="w-32 h-32 rounded-full bg-gray-700 mx-auto mb-6 overflow-hidden flex items-center justify-center">
                {instructor.image ? (
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-4xl font-bold text-white">
                    {instructor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-center mb-2">
                {instructor.name}
              </h3>
              <p className="text-primary text-center mb-4">{instructor.role}</p>
              <p className="text-gray-300 text-sm mb-6">{instructor.bio}</p>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">Skills:</h4>
                <div className="flex flex-wrap">
                  {instructor.skills.map((skill, index) => (
                    <span key={index} className="skill-pill mb-2">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                <a
                  href={`mailto:${instructor.email}`}
                  className="text-gray-400 hover:text-white transition"
                >
                  <i className="far fa-envelope text-lg"></i>
                </a>
                <a
                  href={instructor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  <i className="fab fa-linkedin-in text-lg"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;
