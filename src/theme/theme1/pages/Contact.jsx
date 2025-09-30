import React from 'react'
import { useSelector } from 'react-redux'
import { FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  const contactData = useSelector(state => state.api.data?.contact)
  const socialMedias = contactData?.socialMedias || []

  return (
    <section className="max-w-5xl mx-auto px-4 py-16 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full text-center bg-white dark:bg-gray-900 p-6 md:p-10 ">

        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-blue-400 mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          For any questions or collaborations, feel free to drop me an email.
        </p>

        {/* Email Box */}
        <a
          href={`mailto:${contactData?.email}`}
          className="inline-flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 text-base sm:text-lg md:text-xl font-medium px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full 
                     bg-gradient-to-r from-purple-500 to-blue-500 text-white 
                     shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto"
        >
          <FaEnvelope className="text-xl md:text-2xl" />
          {contactData?.email || "Loading..."}
        </a>

        {/* Social Media Links */}
        {socialMedias.length > 0 && (
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {socialMedias.map(social => (
              <a
                key={social._id}
                href={social.your_Link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center w-20 sm:w-24 p-2 hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mb-2"
                />
                <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{social.name}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Contact
