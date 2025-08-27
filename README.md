CODEnPIXEL - Student Internship Platform

A modern, responsive website for CODEnPIXEL, a platform that connects students with remote internship opportunities in web development, graphic design, app development, and other tech fields.

🌟 Features
Responsive Design: Works perfectly on desktop, tablet, and mobile devices

Modern UI: Dark theme with smooth animations

Multi-page Navigation: Built with React Router for seamless page transitions

Instructor Profiles: Showcase of experienced instructors with contact information

Program Listings: Detailed information about available internship programs

Project Gallery: Display of projects created by instructors and students

Contact Form: Functional contact form for prospective students

🛠️ Built With
Frontend Framework: React 19.1.1

Build Tool: Vite 7.1.2

Styling: Tailwind CSS 4.1.12

Routing: React Router DOM 7.8.2

Icons: Heroicons React 2.2.0

UI Components: Headless UI React 2.2.7

Animations: Framer Motion 12.23.12

📦 Installation
Clone the repository:

bash
git clone <your-repo-url>
cd codenpixel-frontend
Install dependencies:

bash
npm install
Start the development server:

bash
npm run dev
Open your browser and navigate to http://localhost:5173

🚀 Available Scripts
npm run dev - Start the development server

npm run build - Build the project for production

npm run preview - Preview the production build

npm run lint - Run ESLint for code quality

🎨 Customization
Adding New Instructors
Edit src/data/instructors.js to add new instructor profiles:

javascript
{
id: 5,
name: "Instructor Name",
role: "Instructor Role",
bio: "Instructor bio...",
email: "instructor@email.com",
linkedin: "https://linkedin.com/in/username",
image: "/instructors/filename.jpg",
skills: ["Skill 1", "Skill 2", "Skill 3"]
}
Adding New Programs
Edit src/data/programs.js to add new internship programs:

javascript
{
id: 4,
title: "Program Name",
description: "Program description...",
icon: "🎯",
skills: ["Skill 1", "Skill 2"],
duration: "3-6 months",
level: "Beginner to Advanced"
}
Styling Modifications
Global styles: src/index.css

Color scheme: tailwind.config.js

Component-specific styles: Individual component files

🌐 Deployment
Build for Production
bash
npm run build
Deploy to Netlify
Build the project: npm run build

Drag and drop the dist folder to Netlify

Deploy to Vercel
Install Vercel CLI: npm i -g vercel

Run: vercel in the project directory

🤝 Contributing
Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
This project is licensed under the MIT License - see the LICENSE.md file for details.

📞 Contact
For questions about this project, please contact:

Email: codenpixel95@gmail.com

Website: https://codenpixel.org

🙏 Acknowledgments
Vite for the fast build tool

Tailwind CSS for the utility-first CSS framework

React Router for client-side routing

Heroicons for the beautiful icon set

CODEnPIXEL - Empowering students with remote internship opportunities in technology.
