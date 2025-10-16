import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'

const Nav = () => {
  const dispatch = useDispatch()
  const apiState = useSelector(state => state.api.data)
  const [isOpen, setIsOpen] = useState(false)
  const { userId } = useParams()

  useEffect(() => {
    console.log("API State:", apiState)
  }, [apiState])

  const brandName = apiState?.hero?.name?.split(' ')[0] || "Portfolio"
  const navIcons = apiState?.contact?.socialMedias?.slice(0, 3) || []

  // ✅ Dynamic routes based on userId
  const navLinks = [
    { name: "Home", href: `/${userId}` },
    { name: "About", href: `/${userId}/about` },
    { name: "Tech Stack", href: `/${userId}/tech-stack` },
    { name: "Projects", href: `/${userId}/projects` },
    { name: "Contact", href: `/${userId}/contact` }
  ]

  return (
  <header className='sticky top-0 z-50 shadow-md
    dark:shadow dark:shadow-blue-50/20
    bg-white/90 dark:bg-gray-900/90'>
      <nav className="
        mx-auto max-w-5xl flex items-center justify-between px-4 py-3
        transition-colors duration-500
      ">
        {/* ✅ Brand */}
        <Link
          to={`/${userId}`}
          className="max-w-[140px] sm:max-w-none truncate 
             text-2xl font-bold italic 
             text-gray-800 dark:text-white"
          title={`${brandName}'s Resume`}
        >
          {brandName}'s Resume
        </Link>

        {/* ✅ Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 font-medium">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-3">
            {navIcons.map(icon => (
              <a key={icon._id} href={icon.your_Link} target="_blank" rel="noreferrer">
                <img
                  src={icon.icon}
                  alt={icon.name}
                  className="w-6 h-6 rounded-full hover:scale-110 transition-transform ring-1 ring-gray-300 dark:ring-gray-700"
                />
              </a>
            ))}
          </div>
        </div>

        {/* ✅ Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-gray-800 dark:text-gray-200"
          onClick={() => setIsOpen(true)}
        >
          <FaBars />
        </button>
      </nav>

      {/* ✅ Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 
          bg-white dark:bg-gray-900 shadow-lg 
          transform transition-transform duration-300 z-[150]
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">{brandName}</h2>
          <button
            className="text-2xl text-gray-800 dark:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        <ul className="flex flex-col gap-5 p-6 font-medium">
          {navLinks.map(link => (
            <li key={link.href}>
              <Link
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-4 px-6 mt-6">
          {navIcons.map(icon => (
            <a key={icon._id} href={icon.your_Link} target="_blank" rel="noreferrer">
              <img
                src={icon.icon}
                alt={icon.name}
                className="w-7 h-7 rounded-full hover:scale-110 transition-transform ring-1 ring-gray-300 dark:ring-gray-700"
              />
            </a>
          ))}
        </div>
      </div>

      {/* ✅ Blurred Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[140]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  )
}

export default Nav
