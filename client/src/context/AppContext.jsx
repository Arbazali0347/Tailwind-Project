import React, { createContext } from 'react'

export const AppContextProvider = createContext()
const AppContext = ({children}) => {
    const value = {
      Cards: [
        {
          image: "https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, corrupti nihil minima dolores quis.",
          tag: "Satisfied"
        },
        {
          image: "https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, corrupti nihil minima dolores quis.",
          tag: "Satisfied"
        },
        {
          image: "https://images.unsplash.com/photo-1541560052-5e137f229371?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, corrupti nihil minima dolores quis.",
          tag: "Satisfied"
        },
        {
          image: "https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, corrupti nihil minima dolores quis.",
          tag: "Satisfied"
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