import { Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop/Shop';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Register from './pages/Registration/register';
import Login from './pages/Login/Login';
import './pages/Home/Home.css';
import './pages/Registration/register.css'
import './pages/Login/Login.css'
import './pages/Shop/shop.css'
import './pages/About/about.css'

function App() {
  return (
    <div className="App">
       <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route  path='/shop' element={< Shop />}></Route>
          <Route  path='/about' element={< About />}></Route>
          <Route path = '/register' element = {<Register/>} ></Route>
          <Route path = '/login'   element ={<Login/>} ></Route>
           
          
        </Routes>
    
    </div>
  );
}

export default App;
