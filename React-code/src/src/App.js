import './App.css';
import { Footer } from './components/Footer.jsx';
import Header from './components/Header.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import ViewWeather from './components/ViewWeather.jsx';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/weather' element={<ViewWeather />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
