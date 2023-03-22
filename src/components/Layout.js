import { Outlet } from 'react-router-dom'
import Header from './header/Header'

const Layout = () => {
  return (
    <>
      <Header />
      <div style={{ marginTop: '60px' }}>
        <Outlet />
      </div>
    </>
  )
}

export default Layout
