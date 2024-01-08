import React from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorOverlay from './components/ErrorOverlay';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import useFetch from './hooks/useFetch';
import useDocumentTitle from './hooks/useDocumentTitle'; // Adjust the path

function App() {
  const data = useFetch('./data/data.json');
  const { documentTitle, setDocumentTitle } = useDocumentTitle('Home');

  if (data === undefined) {
    return <ErrorOverlay />;
  }

  return (
    <Router>
      <div className='App'>
        <div className='app-content'>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<Home data={data} setTitle={() => setDocumentTitle('Home')} />}
            />
            <Route
              path="/about"
              element={<About data={data} setTitle={() => setDocumentTitle('About')} />}
            />
            <Route
              path="/projects"
              element={<Projects data={data} setTitle={() => setDocumentTitle('Projects')} />}
            />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;