import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './componentes/NavBar';
import { CounterContextProvider } from './context/CounterContext';

//Paginas
import Home from './pages/Home';
import Missao from './pages/Missao';
import Vagas from './pages/Vagas';

function App() {
  return (
    <div className="App">
      
      <h2>Context Api</h2>

<BrowserRouter>

<NavBar />

<Routes>

<Route path='/' element={<Home />} />
<Route path='/missao' element={<Missao />} />
<Route path='/vagas' element={<Vagas />} />




</Routes>




</BrowserRouter>



    </div>
  );
}

export default App;
