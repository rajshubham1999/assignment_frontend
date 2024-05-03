
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

import Navbar from './components/Nabar/Navbar';
import Fashion from './components/Fashion/Fashion';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
   
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/fashion" element={<Fashion/>}/>
      </Routes>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
