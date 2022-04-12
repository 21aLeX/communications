import React, { useMemo, useState, useRef } from 'react';
import cl from '../style/Modal.module.css'
import CheckIcon from '@mui/icons-material/Check';
import { AccountCircle } from '@mui/icons-material';
import TtyIcon from '@mui/icons-material/Tty';
import { IconButton, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { changeContact } from '../store/slice/contactSlice ';
import { useSelector } from 'react-redux';
import { setVisible } from '../store/slice/visibleModalSlise';

const Modall = () => {
    const visible = useSelector(state => state.visibles);

    const [name, setName] = useState('')
    const [telephone, setTelephone] = useState('')
    const dispatch = useDispatch();
    const rootClasses = [cl.myModal]
    console.log(useSelector(state => state.contact.contact))
    const contact = useSelector(state => state.contact.contact.filter(c => c.id == visible.id).pop());

    const n = useMemo(() => {
        if (visible.visible) {
            setName(contact.name)
            setTelephone(contact.telephone)
        }
    }
        , [visible.visible]);
    if (visible.visible) {
        rootClasses.push(cl.active)
    }



    const change = (e) => {
        rootClasses.pop()
        e.preventDefault();
        dispatch(changeContact({ name, telephone, visible }))
        dispatch(setVisible({ visible: false, id: '' }))
        setName('')
        setTelephone('')
    }
    return (
        <div className={rootClasses.join(' ')}>
            <div className={cl.myModalContent}>
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

                <form onSubmit={change}> <IconButton type='submite' size="large">
                    <CheckIcon sx={{ color: 'green' }} />
                </IconButton></form>
            </div>

        </div>
    );
};

export default Modall