import React, { useState } from 'react'
import { FaGithub, FaLink } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Projects = () => {
  const projectsData = useSelector(state => state.api?.data?.projects?.project)
  console.log(projectsData, "Projects Data")

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 dark:text-blue-400">
          Projects
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Things I've built so far
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData?.map(project => {
          const [expanded, setExpanded] = useState(false)

          return (
            <div
              key={project._id}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300
                       bg-white dark:bg-gray-800 flex flex-col"
            >
              {/* Project Image */}
              <img
                src={project.p_imgUrl}
                alt={project.p_title}
                className="w-full h-40 object-cover"
              />

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {project.p_title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm text-gray-600 dark:text-gray-400 flex-grow ${
                    expanded ? '' : 'line-clamp-3'
                  }`}
                >
                  {project.p_description}
                </p>
                {project.p_description?.length > 100 && (
                  <button
                    onClick={() => setExpanded(!expanded)}
                    className="mt-1 text-purple-600 dark:text-purple-400 text-sm font-medium hover:underline self-start"
                  >
                    {expanded ? 'Read less' : 'Read more...'}
                  </button>
                )}

                {/* Tech stack */}
                <div className="mt-3 text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-medium">Tech stack:</span> {project.p_technologies}
                </div>

                {/* Links */}
                <div className="flex justify-between gap-4 mt-4 text-sm">
                  <a
                    href={project.p_livePreview}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    <FaLink /> Live Preview
                  </a>
                  <a
                    href={project.p_viewCoads}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    <FaGithub /> View Code
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
