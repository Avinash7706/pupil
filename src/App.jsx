import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './Home';
import Contact from './routes/Contact';
import ThankYou from './routes/Thanks';
import Blog from './routes/Blog';
import NoPageFound from './routes/NoPageFound';

function RedirectHandler() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith('/start-interview/')) {
      const target = 'https://www.prompthire.in' + location.pathname;
      window.location.replace(target);
    }
  }, [location.pathname]);

  return null;
}







function App() {
  useEffect(() => {
    window.scrollTo(0, 0); //  scroll to top on mount
  }, []);
  return (
    <Router>
      <RedirectHandler />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NoPageFound />} />
        
      </Routes>
    </Router>
  );
}

export default App;
