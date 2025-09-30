import React from 'react'
import { useSelector } from 'react-redux'

const Hero = () => {
  const heroData = useSelector(state => state.api.data?.hero)

  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-24 bg-white dark:bg-gray-900 
                        text-gray-800 dark:text-gray-200 transition-colors duration-300 min-h-[80vh] flex items-center">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full">
        
        {/* Left Text */}
        <div className="flex-1 flex flex-col space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hi <span role="img" aria-label="wave">👋</span>,
          </h1>
          <h2 className="text-4xl md:text-6xl font-extrabold">
            My name is{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-400 bg-clip-text text-transparent">
              {heroData?.name || "Loading..."}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
            {heroData?.hero_about || "I build things for the web"}
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0 w-40 h-40 md:w-60 md:h-60 rounded-full p-1 
                        bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-400 shadow-lg">
          <img
            src={heroData?.imgUrl || "/placeholder.png"}
            alt={heroData?.name || "Hero"}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
