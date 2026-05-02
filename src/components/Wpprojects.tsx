import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink } from "lucide-react";
import { Project } from "../types";
import { staggerContainer, fadeInUp } from "../utils/animations";

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects: Project[] = [
    {
      id: 1,
      title: "Infinity Up - Game Development Company",
      description:
        "A high-performance, responsive WordPress showcase featuring custom layouts and interactive elements to highlight global gaming projects and XR solutions.",
      image: "./InfinityUp.png",
      technologies: ["Wordpress", "Elementor", "Elementor Pro", "Custom CSS"],
      liveUrl: "https://infinityup.org/", // Add live link if available
      githubUrl: "#",
    },

 {
      id: 2,
      title: "Data Prism - Software Company",
      description:
        "A sleek, professional WordPress site for a software agency, featuring a mobile-first layout and fast-loading pages optimized for SEO.",
      image: "/dataprism.png",
      technologies: ["Wordpress", "Elementor", "Elementor Pro", "Custom CSS"],
      liveUrl: "https://thedataprism.com/",
      githubUrl: "#",
    },

    {
      id: 3,
      title: "Nextsol- Digital Marketing Agency",
      description:
        "A modern WordPress platform for a digital agency, designed with a focus on conversion-optimized layouts and high-speed performance.",
      image: "/nextsol.png",
      technologies: ["Wordpress", "Elementor", "Elementor Pro", "Custom CSS"],
      liveUrl: "https://www.nextsol.pk/",
      githubUrl: "#",
    },
   
    {
      id: 4,
      title: "Influx - Digital Marketing Agency",
      description:
        "A streamlined agency website built on WordPress, focusing on technical SEO and efficient service management to showcase digital expertise.",
      image: "/influx.png",
     technologies: ["Wordpress", "Elementor", "Elementor Pro", "Custom CSS"],
      liveUrl: "https://influx.pk/",
      githubUrl: "#",
    },


      {
        id: 5,
      title: "Mental Health Billing - SRG",
      description:
        "A secure and professional WordPress site for medical billing services, featuring a clean UI and responsive service breakdowns.",
      image: "/medicalbilling.png",
     technologies: ["Wordpress", "Elementor", "Elementor Pro", "Custom CSS"],
      liveUrl: "https://mentalhealthbillingsrg.com/",
      githubUrl: "#",
    },

        {
        id: 6,
      title: "Scafa - Culinary Educational Institute",
      description:
        "A visually rich WordPress site for a culinary institute, designed to showcase professional cooking courses with a premium interface.",
      image: "/scafa.webp",
     technologies: ["Wordpress", "Elementor", "Elementor Pro", "Custom CSS"],
      liveUrl: "https://scafa.pk/",
      githubUrl: "#",
    },

     {
        id: 7,
      title: "Techpulx - Digital Marketing Agency",
      description:
        "A dynamic agency website developed in WordPress, featuring strategic SEO integration and a high-impact mobile-responsive design.",
      image: "/techpulx.png",
      technologies: ["Wordpress", "Elementor", "Elementor Pro", "Custom CSS"],
      liveUrl: "https://www.techpulx.com/",
      githubUrl: "#",
    },

     {
        id: 8,
      title: "Unique Solution - Fabric Industry in Oman",
      description:
        "Next.js educational website for an institute, featuring responsive design, SEO optimization, and easy content management.",
      image: "/UniqeSolution.png",
      technologies: ["Wordpress", "Elementor", "Elementor Pro", "Custom CSS"],
      liveUrl: "https://uniquesolutionsintl.com/",
      githubUrl: "#",
    },

      {
        id: 9,
      title: "Cosmo Solaris - Solar Panel Installation Company",
      description:
        "A conversion-focused WordPress site for a solar energy provider, featuring intuitive navigation and optimized lead generation layouts.",
      image: "/cosmosolaris.png",
      technologies: ["Wordpress", "Elementor", "Elementor Pro", "Custom CSS"],
      liveUrl: "https://cosmosolaris.com/",
      githubUrl: "#",
    },

    
     {
        id: 10,
      title: "Green Guard Mold Removal - HackenSack NJ",
      description:
        "A local service WordPress website for a mold remediation company, optimized for fast load times and high search engine visibility.",
      image: "/hackensack.png",
      technologies: ["Wordpress", "Elementor", "Elementor Pro", "Custom CSS"],
      liveUrl: "https://greenguardmoldhackensack.com/",
      githubUrl: "#",
    },

     {
        id: 11,
      title: "New Jersey Mold Specialist",
      description:
        "A robust WordPress platform for specialized environmental services, utilizing custom CSS to provide a precise and professional user experience.",
      image: "/njmold.png",
      technologies: ["Wordpress", "Elementor", "Elementor Pro", "Custom CSS"],
      liveUrl: "https://njmoldspecialist.com/",
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
          initial="visible"
          animate={inView ? "visible" : "hidden"}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          WordPress Projects
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
