import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import s from '../style/Login.module.css'
import axios from 'axios';
import Get from '../Api/Get';
import { useDispatch } from 'react-redux'
import { setUser } from '../store/slice/userSlice.js'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [btn, setBtn] = useState(true)
    let navigate = useNavigate()

    useEffect(() => {
        if (login && password)
            setBtn(false)
        if (!login || !password)
            setBtn(true)
    }, [login, password])

    const handleState = (e) => {
        console.log('e:'+e.target.id)
        if (e.target.id == 'login')
            setLogin(e.target.value)
        if (e.target.id == 'password')
            setPassword(e.target.value)
        if (!e.target.value)
            e.target.classList.add(s.color)
        if (e.target.value && e.target.classList.contains(s.color) == true)
            e.target.classList.remove(s.color)
    }
    const checkState = (e) => {
        if (!e.target.value)
            e.target.classList.add(s.color)

    }
    const dispatch = useDispatch()
    async function handleSubmit(e) {
        e.preventDefault();
        const rest = await Get.getAll(login, password)
        console.log(rest)
        if (rest == 200) {
            sessionStorage.setItem('sing', true)
            dispatch(setUser({
                sing: sessionStorage.getItem('sing'),
            }))
            navigate('/')
        }

    }
    return (
        <div className={s.container} >
            <form onSubmit={handleSubmit}>
                <div>
                    <TextField
                    id ='login'
                        value={login}
                        onBlur={checkState}
                        onChange={handleState}
                        color="secondary"
                        label="Login"
                        variant="standard"
                    /></div>
                <div> <TextField
                id='password'
                    value={password}
                    onBlur={checkState}
                    onChange={handleState}
                    color="secondary"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                /></div>
                <Button disabled={btn} type='submit' variant="outlined" color="secondary"
                    style={{
                        top: 5
                    }}
                >Sign in</Button>
            </form>
        </div>);


};

export default Login