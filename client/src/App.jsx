import React from 'react'
import Navbar from "./components/Navbar"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import AddReceipe from './components/AddReceipe';
import Saved from './components/Saved';
import Home from './components/Home';
import Profile from './components/Profile';
import FetchReceipeByid from './components/FetchReceipeByid';
import Detail from './components/Detail';

const App = () => {
  return (
<>
<Router>
<Navbar/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/Profile' element={<Profile/>}/>
<Route path='/Saved' element={<Saved/>}/>
<Route path='/add' element={<AddReceipe/>}/>    
<Route path='/:id' element={<Detail/>}/>

</Routes> 
</Router>
</>
  );
};

export default App;
