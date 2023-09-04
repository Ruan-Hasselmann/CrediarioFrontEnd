import './App.css';
import ListAll from './components/ListAll';
import CreateClient from './components/CreateClient';

// import { useState, useEffect } from 'react';

// const url = "http://localhost:8080/clientes";

function App() {

  // const [clientes, setClientes] = useState([])

  // useEffect(() => {

  //   async function fetchData() {
  //     const res = await fetch(url);

  //     const data = await res.json();

  //     setClientes(data);
  //   }
    
  //   fetchData();
  // }, []);

  // console.log(clientes);

  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <ListAll />
      <CreateClient />
    </div>
  );
}

export default App;
