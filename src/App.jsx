import React from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorOverlay from './components/ErrorOverlay';
import { BrowserRouter as Router } from 'react-router-dom';
import useFetch from './hooks/useFetch';
import useDocumentTitle from './hooks/useDocumentTitle';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  const data = useFetch('./data/data.json');
  const { setDocumentTitle } = useDocumentTitle('Home');

  if (data === undefined) {
    return <ErrorOverlay />;
  }

  return (
    <div className='App'>
      <Router basename="/">
        <div className='app-content'>
          <Navbar />
          <main>
            <AnimatedRoutes
              data={data}
              setDocumentTitle={setDocumentTitle}
            />
          </main>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
