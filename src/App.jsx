import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Talent from './pages/Talent'
import Academy from './pages/Academy'
import DigitalQMS from './pages/DigitalQMS'
import Services from './pages/Services'
import About from './pages/About'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
import YOA from './pages/YOA'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="talent" element={<Talent />} />
          <Route path="academy" element={<Academy />} />
          <Route path="digital-qms" element={<DigitalQMS />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="resources" element={<Resources />} />
          <Route path="contact" element={<Contact />} />
          <Route path="yoa" element={<YOA />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
