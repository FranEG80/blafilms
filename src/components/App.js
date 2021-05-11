import React, { useState, useEffect } from 'react'
import './App.css'
import DivElement from './atom/DivElement'
import SearchBar from './molecule/SearchBar'
import NoResults from './molecule/NoResults/NoResults'
import ResultsSearch from './molecule/ResultsSearch'

function App() {
  const [searchResult, setSearchResult] = useState()

  useEffect(() => {
    const search = async () => {
      const response = await fetch(
        'http://www.omdbapi.com/?apikey=a461e386&s=king&page=1',
      )

      const data = await response.json()

      if (!searchResult) {
        setSearchResult(data)
      }
    }

    search()
  })

  return (
    <DivElement className="App">
      <SearchBar/>
      {!searchResult ? (
        <NoResults />
      ) : (
        <ResultsSearch searchResult={searchResult} />
      )}
    </DivElement>
  )
}

export default App
