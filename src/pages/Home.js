import {Routes, Route} from 'react-router-dom'
import Login from './Login'

const Home =()=> {
    return (
        <Routes>
      
  <Route path='/' element={<Login to='/login' replace />} />
        </Routes>
    )
}

export default Home