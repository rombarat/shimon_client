import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Services from './Services.jsx';
import Portfolio from './Portfolio.jsx';
import Process from './Process.jsx';
import Contact from './Contact.jsx';

function PagesContent() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/process" element={<Process />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default function Pages() {
  return (
    <Router>
      <PagesContent />
    </Router>
  );
}
