import {useSelector} from 'react-redux'

export function useAuth(){
    const {login, password}= useSelector(state=>state.user)

    return{
        isAuth: !!login,
        password,
    }
}