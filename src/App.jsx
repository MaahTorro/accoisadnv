import './App.css'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Route, Routes ,BrowserRouter } from "react-router-dom";
                                      

function App() {

  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/sobre" element={<Sobre/>}/>
    {/* <Route path="/contato" element={<Contato/>}/> */}
    <Route></Route>
    </Routes>
    </BrowserRouter>
    </div>
    
  )
}

export default App