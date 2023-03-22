import React, { useState } from 'react'
import { useGetTopNewsQuery } from '../api/apiSlice'
import { useSelector } from 'react-redux'
import Card from './card/Card'
import Loading from './loading/Loading'
import NotFound from './noFound/NotFound'
import Details from './details/Details'

const TopNews = () => {
  const { country } = useSelector((state) => state.country)
  const { data: topNews, isSuccess, isError, error } = useGetTopNewsQuery(
    country.code,
  )
  const [selectedData, setSelectedData] = useState(null)

  const updateData = (data) => {
    setSelectedData(data)
  }

  let content
  if (!isSuccess) {
    content = <Loading />
  }

  if (isError) {
    content = <NotFound msg={error} />
  }

  if (topNews) {
    content = <Card data={topNews} handleChange={updateData} />
  }

  return (
    <div>
      {!selectedData && (
        <h1 style={{ marginLeft: '20px' }}>Top News from {country.name}</h1>
      )}
      {!selectedData && content}
      {selectedData && (
        <Details data={selectedData} backToList={() => updateData(null)} />
      )}
    </div>
  )
}

export default TopNews
