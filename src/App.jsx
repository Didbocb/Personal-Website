import React from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <div className='app-content'>
          <Navbar />
          <main>
          </main>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;