import React, { useState } from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'

function App() {

  const [login , setLogin] = useState(false);
  const [user , setuser] = useState('Guest');
  const [userinfo , setInfo] = useState({});
  if(login){
    return(
      <BrowserRouter>
      <Routes>
        <Route path={`/${user}`} element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    )
  }
  return(
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login setLogin={setLogin} setuser={setuser} setInfo={setInfo}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
