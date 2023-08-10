import { Routes, Route } from 'react-router-dom'
import Page404 from './pages/404'
import Layout from './pages/layout'

import { ImprintPage } from './pages/imprint'
import { PrivacyPolicyPage } from './pages/privacy-policy'
import { ContactPage } from './pages/contact'
import { HomePage } from './pages/home'

function App() {
  return (
    <>
      {/* <div className="flex flex-col justify-between min-h-screen font-sans antialiased bg-lava-black-900">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/imprint" element={<ImprintPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
