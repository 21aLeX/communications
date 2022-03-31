import {Routes, Route} from 'react-router-dom'
import * as React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
function App() {

  return (
      <Routes>
        <Route path='login' element={<Login/>}/>
        <Route exact path="*" element={<Home/>}/>
      </Routes>
     );
            }
export default App;