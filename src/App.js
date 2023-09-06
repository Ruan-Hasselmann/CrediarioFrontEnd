import './App.css';
import ListAll from './pages/ListAll';
import CreateClient from './pages/CreateClient';
import Navbar from './components/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ListAll />} />
          <Route path='/create' element={<CreateClient />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
