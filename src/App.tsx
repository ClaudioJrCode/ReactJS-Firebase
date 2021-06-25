
//criação de rotas
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom"
import { AuthContextProvider } from './contexts/AuthContext'
import { Room } from "./pages/Room";



//a rota principal precisa do 'exact' para conseguir acessar outros endereços ja que todos começam com /

function App() {



  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch> 
        <Route path='/' exact component={Home} />
        <Route path='/rooms/new' exact component={NewRoom} />
        <Route path='/rooms/:id' component={Room} />
        </Switch> 
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
