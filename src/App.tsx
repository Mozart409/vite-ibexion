import { Routes, Route, Outlet, Link } from 'react-router-dom'
import Page404 from './pages/404'
import Layout from './pages/layout'
import Home from './pages/home'

function App() {
  return (
    <>
      <div className="flex flex-col justify-between min-h-screen font-sans antialiased bg-lava-black-900">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} /> */}

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
