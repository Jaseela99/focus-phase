import React from 'react';
import Input from './Components/Input';
/* import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Signin from './Components/Signin';
 */
function App() {
  return (
    <div className="App">
       <Input/>
      {/* <BrowserRouter>
        <Nav/>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Signin/>}/>
      </Routes>
      
      </BrowserRouter> */}
      
    </div>
  );
}

export default App;
