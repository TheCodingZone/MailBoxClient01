import logo from './logo.svg';
import './App.css';
import Navbar from './Componants/Navbar/Navbar';
import { BrowserRouter ,Route,Routes } from 'react-router-dom';
import Signup from './Componants/Signup/Signup';

function App() {
  return (
   <BrowserRouter>
    <Navbar/>
   <Routes>

   <Route path='/Signup' element={<Signup/>}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
