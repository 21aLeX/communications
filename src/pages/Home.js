import {Routes, Route} from 'react-router-dom'
import Login from './Login'
import {useAuth} from '../hooks/use-auth'


const Home =()=> {
    const {isAuth, login} = useAuth()
console.log(isAuth)

    return isAuth ? 
    <div>Welcome</div>
    :
    (
        <Routes>
      
  <Route path='*' element={<Login to='login' replace />} />
        </Routes>
    )
}

export default Home