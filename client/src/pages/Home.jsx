import React, { useContext } from 'react'
import { AppContextProvider } from '../context/AppContext'
import Section1 from '../components/section1/Section1'
import Section2 from '../components/section2/section2'


const Home = () => {
    const { name } = useContext(AppContextProvider)
    return (
        <div>
            <Section1/>
        </div>
    )
}

export default Home