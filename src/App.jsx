import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import MainContents from './components/MainContents';
import Topbar from './components/Topbar';
import { PUBLIC_URL } from './config/constants';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={PUBLIC_URL}>
        <Topbar />
        <MainContents />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
