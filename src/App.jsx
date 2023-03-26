import { useRef, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Footer from './components/Footer';
import MainContents from './components/MainContents';
import Topbar from './components/Topbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <MainContents />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
