import React, { useState } from 'react';
import cl from '../style/Modal.module.css'
import CheckIcon from '@mui/icons-material/Check';
import { AccountCircle } from '@mui/icons-material';
import TtyIcon from '@mui/icons-material/Tty';
import { IconButton, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { changeContact } from '../store/slice/contactSlice ';
import { useSelector } from 'react-redux';

const Modall = () => {
    const visible = useSelector(state => state.visibles);
    console.log(visible)
    const [name, setName] = useState('')
    const [telephone, setTelephone] = useState('')
    const dispatch = useDispatch();

    const rootClasses = [cl.myModal]
if(visible.visible){
rootClasses.push(cl.active)
}

    const change = (e) => {
        e.preventDefault();
        dispatch(changeContact({ name, telephone }))
        setName('')
        setTelephone('')
    }
    return (
        <div className={rootClasses.join(' ')}>
            <div className={cl.myModalContent}>
                <form onSubmit={change}>
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField
                        value={name}
                        onChange={e => setName(e.target.value)}
                        id="input-with-sx" label="Name contact" variant="standard" />
                    <TtyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField
                        value={telephone}
                        onChange={e => setTelephone(e.target.value)}
                        id="input-with-sx" label="Telephone" variant="standard" />
                    <IconButton type='submite' size="large">
                        <CheckIcon sx={{ color: 'green' }} />
                    </IconButton></form>
            </div>

        </div>
    );
};

export default Modall