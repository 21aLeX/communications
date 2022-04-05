import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { useAuth } from '../hooks/use-auth'
import { useDispatch } from 'react-redux'
import { removeUser } from '../store/slice/userSlice.js'
import Tables from '../components/Tables';


const Home = () => {
    let { isAuth, sing } = useAuth()
    
    const dispatch = useDispatch()
    return isAuth ?
        <div> 
            <AppBar position="static">
      <Container maxWidth="xl">
            <button
                onClick={() => {
                    dispatch(removeUser())
                }}
            >выход</button>
                </Container></AppBar>
                
    <Tables/>
        </div>
        :
        (
            <Routes>

                <Route path='*' element={<Login to='login' replace />} />
            </Routes>
        )
}

export default Home