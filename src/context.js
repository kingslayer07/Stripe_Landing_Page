import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext() 

export const AppProvider = ({children}) =>{
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
    const [location, setLocation] = useState({})
    const [page, setPage] = useState({ page: '', links: []})

    const openSidebar = () =>{
        setIsSidebarOpen(true)
    }
    const openSubmenu = (text, cordinates) =>{
        setIsSubmenuOpen(true)
        const page = sublinks.find((link) => link.page === text)
        setPage(page)
        
        
        setLocation(cordinates)
    }
    const closeSidebar = () =>{
        setIsSidebarOpen(false)
    }
    const closeSubmenu = () =>{
        setIsSubmenuOpen(false)
    }
    

    return <AppContext.Provider value={{isSidebarOpen, isSubmenuOpen, page, location , openSidebar, openSubmenu, closeSidebar, closeSubmenu}}>{children}</AppContext.Provider>

}
export const useGlobalContext = () =>{
    return useContext(AppContext);
}