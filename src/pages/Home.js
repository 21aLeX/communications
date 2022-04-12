import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { useAuth } from '../hooks/use-auth'
import { useDispatch } from 'react-redux'
import { removeUser } from '../store/slice/userSlice.js'
import Tables from '../components/Tables';
import Modall from '../components/Modall';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton } from '@mui/material';


const Home = () => {
    let { isAuth, sing } = useAuth()

    const dispatch = useDispatch()
    return isAuth ?
        <div>

            <Modall></Modall>
            <AppBar position="static">
                <Container  align="right" maxWidth="xl">
                   
                        <IconButton onClick={() => {
                            dispatch(removeUser())
                        }} size="large">
              <LogoutIcon sx={{ color: 'red' }} />
            </IconButton>
                </Container></AppBar>

            <Tables />
        </div>
        :
        (
            <Routes>

                <Route path='*' element={<Login to='login' replace />} />
            </Routes>
        )
}

export default Home