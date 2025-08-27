import React from "react";
const About = () => {
  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">
          About CODEnPIXEL
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Learn more about our mission, vision, and the team behind CODEnPIXEL.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300 mb-6">
              At CODEnPIXEL, our mission is to bridge the gap between academic
              learning and professional practice by providing students with
              hands-on experience through remote internship programs. We believe
              in empowering the next generation of tech professionals with the
              skills, knowledge, and confidence needed to succeed in the
              industry.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-300">
              We envision a world where every student has access to quality
              internship opportunities regardless of their location or
              background. By connecting talented students with industry
              professionals, we aim to create a diverse and inclusive tech
              community that drives innovation and positive change.
            </p>
          </div>
        </div>

        <div className="card-glass p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Why Choose CODEnPIXEL?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-indigo-900/30 flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Mentors</h3>
              <p className="text-gray-300">
                Learn from industry professionals with real-world experience.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-900/30 flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Real Projects</h3>
              <p className="text-gray-300">
                Work on meaningful projects that enhance your portfolio.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-pink-900/30 flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Remote Flexibility</h3>
              <p className="text-gray-300">
                Learn from anywhere at your own pace with our remote programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
