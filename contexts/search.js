import React, { createContext, useContext, useState, useRef } from 'react'

const SearchContext = createContext('')

export function SearchProvider({ children }) {
    const [search, setSearch] = useState('')
    const discoverRef = useRef(null)

    function setSearchFilter(text) {
        if (window.location.pathname === '/') {
            discoverRef.current.scrollIntoView({ behavior: 'smooth' })
        }
        setSearch(text)
    }

    return (
        <SearchContext.Provider
            value={{ search, setSearchFilter, discoverRef }}
        >
            {children}
        </SearchContext.Provider>
    )
}

export function useSearchContext() {
    return useContext(SearchContext)
}
