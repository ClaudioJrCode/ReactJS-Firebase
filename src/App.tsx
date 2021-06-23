import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import './styles/global.scss';
import {NewRoom } from "./pages/NewRoom"
//a rota principal precisa do 'exact' para conseguir acessar outros endereços ja que todos começam com /
function App() {
  return (
    <BrowserRouter>
    
    <Route path='/' exact component={Home} /> 
    <Route path='/rooms/new' component={NewRoom} />
    </BrowserRouter>
  );
}

export default App;
