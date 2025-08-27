import React from "react";
import { programs } from "../../data/programs";

const Programs = () => {
  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Our Programs</h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Explore our comprehensive internship programs designed to kickstart
          your tech career.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div key={program.id} className="card-glass p-8 rounded-xl">
              <div className="w-16 h-16 rounded-full bg-indigo-900/30 flex items-center justify-center mb-6">
                <span className="text-2xl">{program.icon}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
              <p className="text-gray-300 mb-6">{program.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">Skills You'll Learn:</h4>
                <div className="flex flex-wrap">
                  {program.skills.map((skill, index) => (
                    <span key={index} className="skill-pill mb-2">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <p className="text-gray-300">
                  <span className="font-semibold">Duration:</span>{" "}
                  {program.duration}
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold">Level:</span> {program.level}
                </p>
              </div>

              <button className="btn-primary w-full">Apply Now</button>
            </div>
          ))}
        </div>

        <div className="card-glass p-8 rounded-xl mt-12">
          <h2 className="text-2xl font-bold mb-4">Program Benefits</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Hands-on experience with real-world projects</li>
            <li>Mentorship from industry professionals</li>
            <li>Portfolio development and review</li>
            <li>Career guidance and job placement support</li>
            <li>Flexible remote learning schedule</li>
            <li>Certificate of completion</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Programs;
