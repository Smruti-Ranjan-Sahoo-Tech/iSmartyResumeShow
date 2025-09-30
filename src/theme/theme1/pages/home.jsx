import React, { useEffect, useState } from 'react'
import API from '../../../API/api'
import { useSelector } from 'react-redux'
import Hero from '../components/Hero'
import TechStack from '../components/TechStack'
import Projects from '../components/projects'
const home = () => {
    
    // const apiState = useSelector(state => state.api)
    //   console.log("fuckHome",apiState.data)
    return (
        <main className='dark:bg-gray-900'>
            <Hero />
            <TechStack/>
            <Projects />
        </main>
    )
}

export default home