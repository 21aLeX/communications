import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import { useAuth } from '../hooks/use-auth'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeUser } from '../store/slice/userSlice.js'


const Home = () => {
    let { isAuth, sing } = useAuth()

    const dispatch = useDispatch()
    return isAuth ?
        <div>Welcome
            <button
                onClick={() => {
                    dispatch(removeUser())
                }}
            >выход</button>
        </div>
        :
        (
            <Routes>

                <Route path='*' element={<Login to='login' replace />} />
            </Routes>
        )
}

export default Home