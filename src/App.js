import './App.css';

import Navbar from "./components/Navbar/Navbar";
import ListaEpisodios from './pages/listaEpisodios';


function App() {
  return (
    <div className='App'>
      <Navbar/>
      <ListaEpisodios/>
    </div>
  );
}

export default App;
