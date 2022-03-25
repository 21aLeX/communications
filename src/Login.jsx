import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import s from './Style/Login.module.css'

const Login = (props) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [btn, setBtn] = useState(true)

    const handleState = (e) => { 
            checkBtn()     
        if (e.target.id == 'mui-1')
            setLogin(e.target.value)
        if (e.target.id == 'mui-2')
            setPassword(e.target.value)      
    }
    const checkBtn = (e)=>{
        
        if(login && password)
        setBtn(false)
        if(!login || !password)
        setBtn(true)
    }
    const checkState = (e) => {
        if (!login || !password)
            e.target.classList.add(s.color)
        if (login || password)
            e.target.classList.remove(s.color)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit>', login)
    }
    return (
        <div className={s.container} >
            <form onSubmit={handleSubmit}>
                <div>
                    <TextField
                        value={login}
                        onBlur={checkState}
                        onChange={handleState}
                        color="secondary"
                        label="Login"
                        variant="standard"
                    /></div>
                <div> <TextField
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
function mapStateToProps(state) {
    console.log('mapStateToProps>', state)
    return {
        login: state.login
    }
}
export default connect(mapStateToProps)(Login)