import { Footer } from './footer'
import { Navbar } from './navbar'
import { Routes, Route, Outlet, Link } from 'react-router-dom'
const Layout: React.FC = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen font-sans antialiased bg-lava-black-900">
      {/* Aligned to the top */}
      <div className="flex-1">
        <Navbar />
        <main>
          {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
          <Outlet />
        </main>
      </div>
      {/* Aligned to the bottom */}
      {/*  <Footer /> */}
    </div>
  )
}

export default Layout
