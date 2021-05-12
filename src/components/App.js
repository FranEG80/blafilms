import React, { useState, useEffect } from 'react'
import './App.css'
import DivElement from './atom/DivElement'
import SearchBar from './molecule/SearchBar'
import NoResults from './molecule/NoResults/NoResults'
import ResultsSearch from './molecule/ResultsSearch'
import { getFilms } from '../services/getData'
import ActivityIndicator from './molecule/ActivityIndicator'
import Modal from './molecule/Modal'
import useSearchFilms, { INITIAL_PAGE } from './useSearchFilms'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [param, setParam] = useState('')

  const {data: searchResult, error, actualPage, hasMore, receivedData, resetData, handleChangePage} = useSearchFilms()
  

  useEffect(()=> {
    if (param !== '') {
      setIsLoading(true) 
    }
    if (param === '') {
      setIsLoading(false)
      resetData()
    }
  }, [param, resetData, actualPage])

  useEffect(()=> {
    if (isLoading) {
      const search = async () => {
        const response = await getFilms({search: param, p: actualPage})
        receivedData({...response, actualPage})
        setIsLoading(false)
      }
      search()
    }
  }, [isLoading, param, actualPage, receivedData])

  const handleSearch = (value) => setParam(value)

  return (
    <DivElement className="App">
      <SearchBar onChange={handleSearch} btnDisabled={isLoading}/>
      {error && <Modal error message={error} />}
      {!isLoading && !searchResult && <NoResults/> }
      {isLoading && <ActivityIndicator/>}
      {
        !isLoading && (
          searchResult.length === 0
            ? <NoResults param={param}/>
            : <ResultsSearch 
                searchResult={searchResult} 
                hasMore={hasMore} 
                hasLess={actualPage > INITIAL_PAGE} 
                onChangePage={(toPlus)=> handleChangePage({toPlus})}
              />
        )
      }
    </DivElement>
  )
}

export default App
