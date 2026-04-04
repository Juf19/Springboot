import logo from './logo.svg';
import './App.css';
import ListaClientes from './Componentes/ListaClientes';
import AgregarClientes from './Componentes/AgregarClientes';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='container'>
          <Routes>
            <Route path="/" element={<AgregarClientes />}></Route>
            <Route path="/ListaClientes" element={<ListaClientes />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
