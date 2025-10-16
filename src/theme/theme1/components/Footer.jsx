import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Footer = () => {
  const apiData = useSelector(state => state.api.data)
  const { userId } = useParams()
  const contactData = apiData?.contact || null
  const footerBrand = apiData?.hero?.name?.split(' ')[0] || "Portfolio"
  const footerIcons = Array.isArray(contactData?.socialMedias)
    ? contactData.socialMedias.slice(0, 3)
    : []

  const phone = contactData?.phone || null
  const email = contactData?.email || null

  const footerLinks = [
    { name: "Home", href: `/${userId}` },
    { name: "About", href: `/${userId}/about` },
    { name: "Tech Stack", href: `/${userId}/tech-stack` },
    { name: "Projects", href: `/${userId}/projects` },
    { name: "Contact", href: `/${userId}/contact` }
  ]


  return (
    <footer className="bg-gray-50 dark:bg-gray-950 py-8 border-t border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 text-sm">
      <div className="max-w-6xl mx-auto px-4">

        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <a
            href="/"
            className="text-2xl font-bold italic text-purple-900 dark:text-purple-300"
            title={`${footerBrand}'s Resume`}
          >
            {footerBrand}'s Resume
          </a>

          {/* Contact + Icons */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <ul className="flex gap-6 items-center">
              {phone && (
                <li>
                  <a href={`tel:${phone}`} className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition">
                    <img className="md:hidden size-6" src="https://img.icons8.com/?size=100&id=ufkkYBXJSuPy&format=png&color=000000" alt="Phone" />
                    <span className="hidden sm:block">{phone}</span>
                  </a>
                </li>
              )}
              {email && (
                <li>
                  <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition">
                    <img className="md:hidden size-6" src="https://img.icons8.com/?size=100&id=qyRpAggnV0zH&format=png&color=000000" alt={email || 'Email'} />
                    <span className="hidden sm:block">{email}</span>
                  </a>
                </li>
              )}
            </ul>

            {/* Social Icons */}
            <ul className="flex gap-4">
              {footerIcons.map((icon, idx) => (
                <li key={icon._id || idx}>
                  <a href={icon.your_Link} target="_blank" rel="noreferrer" className="hover:opacity-75 transition">
                    <img className="size-8 rounded-full" src={icon.icon} alt={icon.name} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="my-6 border-gray-300 dark:border-gray-700" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Nav links */}
          <ul className="flex gap-6 text-gray-600 dark:text-gray-400 text-sm md:flex">
            {footerLinks.map((data, idx) => (
              <li key={idx}>
                <a href={data.href} className="hover:text-purple-600 dark:hover:text-purple-400 transition">{data.name}</a>
              </li>
            ))}
          </ul>

          {/* Credit */}
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            Designed and built by{" "}
            <a href="https://ismartfolio.netlify.app/" className="text-purple-600 dark:text-purple-400 font-medium hover:underline">iSmartFolio</a> with{" "}
            <span className="text-pink-500 dark:text-pink-400 font-medium">❤️ Coffee</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
