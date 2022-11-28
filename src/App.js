import { Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog';
import Shop from './pages/Shop';
import Home from './pages/Home/Home';
import About from './pages/About';
import Register from './pages/Registration/register';
import './pages/Home/Home.css';
import './pages/Registration/register.css'

function App() {
  return (
    <div className="App">
       <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route  path='/shop' element={< Shop />}></Route>
          <Route  path='/blog' element={< Blog />}></Route>
          <Route  path='/about' element={< About />}></Route>
          <Route path = '/register' element = {<Register/>} ></Route>
          
          
        </Routes>
    
    </div>
  );
}

export default App;
