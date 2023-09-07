//Styles
import './App.css';

//Pages
import Home from './pages/Home';
import CreateClient from './pages/create/CreateClient';
import SearchClient from './pages/read/SearchClient';
import UpdateClient from './pages/update/UpdateClient';

//Components
import Navbar from './components/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<CreateClient />} />
          <Route path='/search' element={<SearchClient />} />
          <Route path='/update' element={<UpdateClient />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
