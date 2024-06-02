import './App.css';
import Home from './Pages/Home';
import{BrowserRouter, Routes,Route} from 'react-router-dom';
import Contact from './Pages/Contact';
import About from './Pages/About';
import  Menu  from './Pages/Menu';
import NoPage from './Pages/NoPage';
import Cart from './Pages/Cart';

function App() {

  return (
    <> 
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='*' element={<NoPage/>}/>
        <Route path='Cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>

    </div>
    </>
  );
}

export default App;
