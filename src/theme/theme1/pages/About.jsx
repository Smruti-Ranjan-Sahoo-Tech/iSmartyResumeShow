import React from 'react';
import { useSelector } from 'react-redux';

// Helper function to format ISO date strings to "Mon YYYY"
const formatDate = (isoDate) => {
  if (!isoDate) return '';
  const date = new Date(isoDate);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
  }).format(date);
};

const About = () => {
  const aboutData = useSelector(state => state.api.data?.aboutMe);
  const workExperience = aboutData?.w_experience || [];
  const education = aboutData?.education || [];

  return (
    <section className="max-w-5xl min-h-screen mx-auto px-4 py-16">
      
      {/* About Me Section */}
      <h2 className="text-3xl font-bold text-blue-900 mb-4">
        About Me
      </h2>
      <p className="text-gray-600 mb-10 max-w-2xl">
        {aboutData?.about_me || "Loading about me data..."}
      </p>

      {/* Work Experience Section */}
      <h2 className="text-3xl font-bold text-blue-900 mb-10 mt-10">
        Work Experience
      </h2>
      <div className="space-y-6">
        {workExperience.map((job, index) => (
          <React.Fragment key={job._id || index}>
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800">
                  {job.role}
                </h3>
                <p className="text-gray-500 mt-1">
                  {job.companyName} | {job.location}
                </p>
              </div>
              <div className="flex-shrink-0 text-right">
                <span className={`inline-block text-xs font-medium px-2 py-1 rounded-full 
                  ${job.job_type === 'Full-time' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>
                  {job.job_type}
                </span>
                <p className="text-sm text-gray-500 mt-1">
                  {formatDate(job.job_start)} - {formatDate(job.job_end)}
                </p>
              </div>
            </div>
            {/* Horizontal line after each item */}
            {index < workExperience.length - 1 && <hr className="my-6 border-gray-300" />}
          </React.Fragment>
        ))}
      </div>

      {/* Education Section */}
      <h2 className="text-3xl font-bold text-blue-900 mb-10 mt-10">
        Education
      </h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <React.Fragment key={edu._id || index}>
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800">
                  {edu.cource_type}
                </h3>
                <p className="text-gray-500 mt-1">
                  {edu.cource_name} | {edu.location}
                </p>
              </div>
              <div className="flex-shrink-0 text-right">
                <span className={`inline-block text-xs font-medium px-2 py-1 rounded-full 
                  ${edu.cource_roll === 'Full-time' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>
                  {edu.cource_roll}
                </span>
                <p className="text-sm text-gray-500 mt-1">
                  {formatDate(edu.cource_start)} - {formatDate(edu.cource_end)}
                </p>
              </div>
            </div>
            {/* Horizontal line after each item */}
            {index < education.length - 1 && <hr className="my-6 border-gray-300" />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default About;