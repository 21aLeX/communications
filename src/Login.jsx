import React, { useState } from 'react';
import {connect} from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import s from './Style/Login.module.css'

const Login = (props) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin =(e)=>{
        console.log('input>',e.target.value)
        setLogin(e.target.value)

    }
    const handleSubmit=(e)=>{
e.preventDefault();
console.log('submit>', login)
    }
    return (
        <div className={s.container} >
        <form onSubmit={handleSubmit}>
                <div>
                    <TextField
                    value={login}
                    onChange={handleLogin}
                        color="secondary"
                        label="Login"
                        variant="standard"
                    /></div>
                <div> <TextField
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    color="secondary"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                /></div>
                    <Button type='submit' variant="outlined" color="secondary"
                        style={{
                            top: 5
                        }}
                    >Sign in</Button>
    </form>
        </div>);

    
};
function mapStateToProps(state){
        console.log('mapStateToProps>',state)
        return{
            login:state.login
        }
    }
export default connect(mapStateToProps)(Login)