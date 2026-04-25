import logo from './logo.svg';
import './App.css';
import ListaClientes from './Componentes/ListaClientes';
import AgregarClientes from './Componentes/AgregarClientes';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import EditarClientes from './Componentes/EditarClientes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='container'>
          <Routes>
            <Route path="/" element={<ListaClientes />}></Route>
            <Route path="/AgregarClientes" element={<AgregarClientes />}></Route>
            <Route path="/EditarClientes/:id" element={<EditarClientes />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
