import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Talent from './pages/Talent'
import Academy from './pages/Academy'
import DigitalQMS from './pages/DigitalQMS'
import Services from './pages/Services'
import SkillAssessment from './pages/services/SkillAssessment'
import Training from './pages/services/Training'
import GapAnalysis from './pages/services/GapAnalysis'
import AuditOutsourcing from './pages/services/AuditOutsourcing'
import Industries from './pages/Industries'
import IndustriesAutomotive from './pages/IndustriesAutomotive'
import About from './pages/About'
import Resources from './pages/Resources'
import Blogs from './pages/resources/Blogs'
import BlogPost from './pages/resources/BlogPost'
import Brochures from './pages/resources/Brochures'
import CaseStudies from './pages/resources/CaseStudies'
import Infographics from './pages/resources/Infographics'
import Contact from './pages/Contact'
import YOA from './pages/YOA'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="yoa" element={<YOA />} />
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="talent" element={<Talent />} />
          <Route path="academy" element={<Academy />} />
          <Route path="digital-qms" element={<DigitalQMS />} />
          <Route path="services" element={<Services />} />
          <Route path="services/skill-assessment" element={<SkillAssessment />} />
          <Route path="services/training" element={<Training />} />
          <Route path="services/gap-analysis" element={<GapAnalysis />} />
          <Route path="services/audit-outsourcing" element={<AuditOutsourcing />} />
          <Route path="industries" element={<Industries />} />
          <Route path="industries/automotive" element={<IndustriesAutomotive />} />
          <Route path="about" element={<About />} />
          <Route path="resources" element={<Resources />} />
          <Route path="resources/blogs" element={<Blogs />} />
          <Route path="resources/blogs/:slug" element={<BlogPost />} />
          <Route path="resources/brochures" element={<Brochures />} />
          <Route path="resources/case-studies" element={<CaseStudies />} />
          <Route path="resources/infographics" element={<Infographics />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
