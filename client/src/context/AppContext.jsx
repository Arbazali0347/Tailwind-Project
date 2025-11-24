import React, { createContext } from 'react'
import img from "../assets/MyImange.png"
import img1 from "../assets/MyImage2.jpg"
import img2 from "../assets/MyImage3.jpg"
import img3 from "../assets/MyImage5.png"

export const AppContextProvider = createContext()

const AppContext = ({ children }) => {
  const value = {
    Cards: [
      {
        image: img,
        desc: "Focused on mastering full-stack development and turning ideas into real digital experiences with consistency and discipline.",
        tag: "Developer"
      },
      {
        image: img1,
        desc: "Learning every single day improving skills in React, Node, and modern web technologies to build smarter, faster applications.",
        tag: "Learning"
      },
      {
        image: img2,
        desc: "Exploring AI tools to enhance creativity and boost productivity in every project I build.",
        tag: "AI + Web"
      },
      {
        image: img3,
        desc: "Driven by passion and goals creating a future where my work speaks louder than my words.",
        tag: "Mindset"
      },
    ]
  }

  return (
    <div>
      <AppContextProvider.Provider value={value}>
        {children}
      </AppContextProvider.Provider>
    </div>
  )
}

export default AppContext
