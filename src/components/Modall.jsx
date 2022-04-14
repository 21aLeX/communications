import React, { useMemo, useState, useRef, useEffect } from 'react';
import cl from '../style/Modal.module.css'
import CheckIcon from '@mui/icons-material/Check';
import { AccountCircle } from '@mui/icons-material';
import TtyIcon from '@mui/icons-material/Tty';
import { IconButton, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { changeContact } from '../store/slice/contactSlice ';
import { useSelector } from 'react-redux';
import { setVisible } from '../store/slice/visibleModalSlise';
import s from '../style/Login.module.css';

const Modall = () => {
    const [name, setName] = useState('')
    const [telephone, setTelephone] = useState('')
    const [btn, setBtn] = useState(true)
    const [addGreen, setAddGreen] = useState('')

    const visible = useSelector(state => state.visibles);
    const contact = useSelector(state => state.contact.contact.filter(c => c.id == visible.id).pop());
    const dispatch = useDispatch();

    useMemo(() => {
        if (visible.visible) {
            setName(contact.name)
            setTelephone(contact.telephone)
        }
    }, [visible.visible]);
    useEffect(() => {
        if (telephone) {
            setBtn(false)
            setAddGreen(s.addGreen)
        }
        else {
            setBtn(true)
            setAddGreen('')
        }
    }, [telephone])
    const rootClasses = [cl.myModal]
    if (visible.visible) {
        rootClasses.push(cl.active)
    }
    const handleState = (e) => {
        setTelephone(e.target.value)
        if (e.target.value)
            e.target.classList.remove(s.color)
    }
    const checkState = (e) => {
        if (!e.target.value)
            e.target.classList.add(s.color)
    }
    const change = (e) => {
        e.preventDefault()
        rootClasses.pop()
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
                    label="Name contact" variant="standard" />
                <TtyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField
                    value={telephone}
                    onBlur={checkState}
                    onChange={handleState}
                    label="Telephone" variant="standard" />
                <form onSubmit={change}>
                    <IconButton disabled={btn} type='submite' size="large">
                        <CheckIcon className={addGreen} />
                    </IconButton>
                </form>
            </div>

        </div>
    );
};

export default Modall