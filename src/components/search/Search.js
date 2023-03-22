/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useSearchNewsMutation } from '../../api/apiSlice'
import { useSelector } from 'react-redux'
import Card from '../card/Card'
import { useDebounce } from '../../hooks'
import './search.css'
import Loading from '../loading/Loading'
import NotFound from '../noFound/NotFound'
import Details from '../details/Details'

const Search = () => {
  const [query, setQuery] = useState('')
  const { country } = useSelector((state) => state.country)
  const [selectedData, setSelectedData] = useState(null)
  const [
    searchNews,
    { data: searchResults, isLoading, isSuccess, isError, error },
  ] = useSearchNewsMutation()

  const handleInputChange = (event) => {
    setQuery(event.target.value)
  }

  const updateData = (data) => {
    setSelectedData(data)
  }

  useDebounce(
    () => {
      searchNews({
        query,
        code: country.code,
      })
    },
    1000,
    query,
  )

  useEffect(() => {
    searchNews({
      query,
      code: country.code,
    })
  }, [country])

  let content
  if (isLoading || !isSuccess) {
    content = <Loading />
  }

  if (isError) {
    content = <NotFound msg={error} />
  }
  if (searchResults) {
    content = <Card data={searchResults} handleChange={updateData} />
  }

  return (
    <div style={{ marginBottom: '10px' }}>
      {!selectedData && (
        <>
          <h1 style={{ marginLeft: '20px' }}>
            Search top news from {country.name} by term:
          </h1>
          <div className="search-container">
            <form>
              <input
                type="text"
                id="search-input"
                placeholder="Search term..."
                value={query}
                onChange={handleInputChange}
              />
            </form>
          </div>
        </>
      )}
      {!selectedData && content}
      {selectedData && (
        <Details data={selectedData} backToList={() => updateData(null)} />
      )}
    </div>
  )
}

export default Search
