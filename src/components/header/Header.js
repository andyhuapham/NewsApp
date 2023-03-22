import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { changeCountry } from '../../store/slices/countrySlice'
import './header.css'

const Header = () => {
  const dispatch = useDispatch()
  const { country } = useSelector((state) => state.country)

  const handleChangeCountry = (code, name) => {
    dispatch(changeCountry({ code, name }))
  }

  return (
    <header>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'NavLink active' : 'NavLink'
              }
            >
              <span>Top News</span>
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="categories"
              className={({ isActive }) =>
                isActive ? 'NavLink active' : 'NavLink'
              }
            >
              Categories
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="search"
              className={({ isActive }) =>
                isActive ? 'NavLink active' : 'NavLink'
              }
            >
              Search
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="button-group">
        <button
          className={`${country.code === 'us' ? 'button active' : 'button'}`}
          onClick={() => handleChangeCountry('us', 'United States')}
        >
          US
        </button>
        <button
          className={`${country.code === 'gb' ? 'button active' : 'button'}`}
          onClick={() => handleChangeCountry('gb', 'Great Britain')}
        >
          GB
        </button>
      </div>
    </header>
  )
}

export default Header
