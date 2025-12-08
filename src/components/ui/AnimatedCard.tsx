import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, Project } from "../ProjectsData";
import { ProjectDetailPage } from "../ProjectsDetail";
import { ArrowRight } from "lucide-react";

interface AnimatedCardProps {
  project: Project;
  onClick: () => void;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ project, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="cursor-pointer"
    >
      <div className="group relative rounded-lg p-[2px] transition-all duration-300 hover:scale-[1.02] overflow-hidden">
        {/* Animated border */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-border rounded-lg" />

        {/* Card content */}
        <div className="relative bg-gray-900 rounded-lg overflow-hidden h-full">
          <div className="relative w-full">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-36 sm:h-42 lg:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/10" />
          </div>

          <div className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-100 line-clamp-1">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4 text-sm sm:text-base line-clamp-2">
              {project.shortDescription}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs sm:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-start">
              <button className="w-[20vh] flex items-center gap-1 text-sm text-white sm:text-base font-medium">
                View Detail
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface ProjectsProps {
  onViewChange?: (isDetailView: boolean) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onViewChange }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showDetail, setShowDetail] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setShowDetail(true);
    onViewChange?.(true);
  };

  const handleBack = () => {
    setShowDetail(false);
    onViewChange?.(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {!showDetail ? (
          <motion.section
            key="projects-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            id="projects"
            className="py-20 bg-gray-800"
          >
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">
                  My Projects
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {projectsData.map((project) => (
                  <AnimatedCard
                    key={project.id}
                    project={project}
                    onClick={() => handleProjectClick(project)}
                  />
                ))}
              </div>
            </div>
          </motion.section>
        ) : (
          selectedProject && (
            <motion.div
              key="project-detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectDetailPage project={selectedProject} onBack={handleBack} />
            </motion.div>
          )
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;