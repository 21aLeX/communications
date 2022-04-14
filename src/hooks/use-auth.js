import { useSelector } from 'react-redux'

export function useAuth() {
    const { sing } = useSelector(state => state.user)
    return {
        isAuth: !!sing,
    }
}