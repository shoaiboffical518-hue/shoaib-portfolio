import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink } from "lucide-react";
import { Project } from "../types";
import { staggerContainer, fadeInUp } from "../utils/animations";

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const projects: Project[] = [

    {
        id: 4,
      title: "Arsons Pharma - Pharmaceutical Company",
      description:
        "Next.js educational website for an institute, featuring responsive design, SEO optimization, and easy content management.",
      image: "/arsons.png",
      technologies: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
      liveUrl: "https://arsonspharma.com/",
      githubUrl: "#",
    },

       {
        id: 4,
      title: "Secret Glamor - Ecommerce Store",
      description:
        "Next.js educational website for an institute, featuring responsive design, SEO optimization, and easy content management.",
      image: "/secretglamor.png",
      technologies: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
      liveUrl: "https://secretglamor.com/",
      githubUrl: "#",
    },

      {
        id: 4,
      title: "Oreal - Ecommerce Store",
      description:
        "Next.js educational website for an institute, featuring responsive design, SEO optimization, and easy content management.",
      image: "/oreal.png",
      technologies: ["Wocommerce", "Elementor", "Elementor Pro", "Custom Integrations"],
      liveUrl: "https://orealonline.com/",
      githubUrl: "#",
    },

    {
         id: 4,
      title: "Snack Shack Pk - Ecommerce Store and Restaurant",
      description:
        "Next.js educational website for an institute, featuring responsive design, SEO optimization, and easy content management.",
      image: "/snackshack.png",
      technologies: ["Wocommerce", "Elementor", "Elementor Pro", "Custom Integrations"],
      liveUrl: "https://snackshackpk.com/",
      githubUrl: "#",
    },

     {
         id: 4,
      title: "Bajwa Vision - Motorcycle Clothing Manufacturers",
      description:
        "Next.js educational website for an institute, featuring responsive design, SEO optimization, and easy content management.",
      image: "/BajwaVision.png",
      technologies: ["Wocommerce", "Elementor", "Elementor Pro", "Custom Integrations"],
      liveUrl: "https://bajwavision.com/",
      githubUrl: "#",
    },

    {
         id: 4,
      title: "Thrift Finds - Ecommerce Store",
      description:
        "Next.js educational website for an institute, featuring responsive design, SEO optimization, and easy content management.",
      image: "/Thriftfinds.png",
      technologies: ["Wocommerce", "Elementor", "Elementor Pro", "Custom Integrations"],
      liveUrl: "https://thriftfinds.pk/",
      githubUrl: "#",
    },
    
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-10 bg-gradient-to-b from-black to-gray-900 relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Ecommerce Projects
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className="group relative bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
            >
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm" />

              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              </div>

              <div className="relative p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-gray-700 text-blue-400 rounded-full border border-blue-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Live Demo</span>
                  </a>
                  {/* <a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a> */}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
