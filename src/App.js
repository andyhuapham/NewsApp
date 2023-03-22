import React from 'react'
import { Routes, Route } from 'react-router-dom'

import TopNews from './components/TopNews'
import Search from './components/search/Search'

import './styles/main.css'
import Layout from './components/Layout'
import Categories from './components/Categories'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TopNews />} />
        <Route path="/search" replace element={<Search />} />
        <Route path="/categories" replace element={<Categories />} />
      </Route>
    </Routes>
  )
}

export default App
