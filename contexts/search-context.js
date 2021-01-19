import React, { createContext, useContext, useState } from 'react'

const SearchContext = createContext('')

export function SearchProvider({ children }) {
    const [search, setSearch] = useState('')

    function setSearchFilter(text) {
        setSearch(text)
    }

    return (
        <SearchContext.Provider value={[search, setSearchFilter]}>
            {children}
        </SearchContext.Provider>
    )
}

export function useSearchContext() {
    return useContext(SearchContext)
}
