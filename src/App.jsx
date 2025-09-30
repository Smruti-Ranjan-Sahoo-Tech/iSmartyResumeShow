import React, { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import API from './API/api'
import { useDispatch, useSelector } from 'react-redux'
import { setApiData } from './Redux/apiReducer'
import { Spinner } from 'flowbite-react'
// import { Helmet } from "react-helmet-async";
const themes = {
  theme1: {
    Nav: lazy(() => import("./theme/theme1/components/Nav.jsx")),
    Home: lazy(() => import("./theme/theme1/pages/home.jsx")),
    About: lazy(() => import("./theme/theme1/pages/About.jsx")),
    TechStack: lazy(() => import("./theme/theme1/pages/TechStack.jsx")),
    Projects: lazy(() => import("./theme/theme1/pages/Projects.jsx")),
    Contact: lazy(() => import("./theme/theme1/pages/Contact.jsx")),
    Footer: lazy(() => import("./theme/theme1/components/Footer.jsx")),
    NotFound:lazy(()=> import("./theme/theme1/pages/NotFound.jsx"))
  }
}

// ✅ Wrap main logic inside AppContent so we can access useParams
const AppContent = () => {
  const { userId } = useParams()  // dynamic userId from URL
  const apiState = useSelector(state => state.api.data)
  const dispatch = useDispatch()

  const theme = 'theme1'
  const { Home, Nav, About, TechStack, Projects, Contact, Footer,NotFound } = themes[theme]

  const apiFind = async () => {
    try {
      const api = await API(userId)   // fetch based on userId
      dispatch(setApiData(api))
    } catch (err) {
      console.error("API fetch failed:", err)
    }
  }

  useEffect(() => {
    if (userId && !apiState) {
      apiFind()
    }
  }, [userId, apiState])

  return (
    <Suspense
      fallback={
        <div className="flex w-full h-screen justify-center items-center bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
          <div className="flex flex-col items-center space-y-4 animate-pulse">
            <Spinner aria-label="Loading content..." size="xl" color="purple" />
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300 animate-bounce">
              Loading theme...
            </p>
          </div>
        </div>
      }
    >
      {/* <Helmet>
        <title>{name}'s Resume</title>
      </Helmet> */}
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tech-stack" element={<TechStack />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Suspense>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      {/* ✅ Define routes with dynamic userId */}
      <Routes>
        <Route path="/:userId/*" element={<AppContent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
