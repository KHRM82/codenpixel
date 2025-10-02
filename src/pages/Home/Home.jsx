import React from "react";
import { Link } from "react-router-dom";
import { programs } from "../../data/programs";
import { instructors } from "../../data/instructors";

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl animate-float"></div>
          <div
            className="absolute top-0 right-0 w-72 h-72 bg-indigo-500 rounded-full mix-blend-soft-light filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-0 left-1/4 w-72 h-72 bg-pink-500 rounded-full mix-blend-soft-light filter blur-3xl animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Launch Your Tech Career <br />
            <span className="hero-gradient">With CODEnPIXEL</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Remote internship programs designed to give students real-world
            experience in web development, graphic design, app development, and
            more.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/programs"
              className="btn-primary px-8 py-4 text-lg font-semibold"
            >
              Explore Programs
            </Link>
            <Link
              to="/instructors"
              className="px-8 py-4 rounded-full text-lg font-semibold border border-primary text-primary hover:bg-primary/10 transition"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Our Internship Programs
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Choose from our specialized remote internship programs designed to
            give you practical experience and mentorship.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div
                key={program.id}
                className="card-glass p-8 program-card rounded-xl"
              >
                <div className="w-16 h-16 rounded-full bg-indigo-900/30 flex items-center justify-center mb-6">
                  <span className="text-2xl">{program.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                <p className="text-gray-300 mb-6">{program.description}</p>
                <div className="mb-6">
                  {program.skills.map((skill, index) => (
                    <span key={index} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
                <Link
                  to="/programs"
                  className="text-primary font-medium hover:text-primary/80 transition flex items-center"
                >
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Preview Section */}
      <section className="py-20 px-4 gradient-bg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Meet Our Instructors
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Learn from industry professionals with real-world experience and a
            passion for teaching.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {instructors.slice(0, 4).map((instructor) => (
              <div
                key={instructor.id}
                className="card-glass p-6 instructor-card rounded-xl text-center"
              >
                <div className="w-24 h-24 rounded-full bg-gray-700 mx-auto mb-6 overflow-hidden flex items-center justify-center">
                  {instructor.image ? (
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-3xl font-bold text-white">
                      {instructor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{instructor.name}</h3>
                <p className="text-primary mb-4">{instructor.role}</p>
                <p className="text-gray-300 text-sm mb-6 line-clamp-3">
                  {instructor.bio}
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={`mailto:${instructor.email}`}
                    className="text-gray-400 hover:text-white transition"
                  >
                    <i className="far fa-envelope"></i>
                  </a>
                  <a
                    href={instructor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/instructors" className="btn-primary px-6 py-3">
              View All Instructors
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center card-glass p-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join students who have launched their tech careers through
            CODEnPIXEL internships
          </p>
          <Link
            to="/contact"
            className="btn-primary px-8 py-4 text-lg font-semibold"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
