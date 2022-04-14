import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import TtyIcon from '@mui/icons-material/Tty';
import AddIcon from '@mui/icons-material/Add';
import { setContact } from '../store/slice/contactSlice ';
import { IconButton } from '@mui/material';
import s from '../style/Login.module.css';


const CreateContact = (setUser) => {
  const [name, setName] = useState('')
  const [telephone, setTelephone] = useState('')
  const [btn, setBtn] = useState(true)
  const [addGreen, setAddGreen] = useState('')
  const dispatch = useDispatch(setUser);

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
  const addContact = (e) => {
    e.preventDefault()
    dispatch(setContact({ name, telephone }))
    setName('')
    setTelephone('')
  }
  const handleState = (e) => {
    setTelephone(e.target.value)
    if (e.target.value)
      e.target.classList.remove(s.color)
  }
  const checkStateBlure = (e) => {
    if (!e.target.value)
      e.target.classList.add(s.color)
  }

  return (
    <TableRow>
      <TableCell>
      </TableCell>
      <TableCell>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
          value={name}
          onChange={e => setName(e.target.value)}
          label="Name contact" variant="standard" />
      </TableCell>
      <TableCell align="right">
        <TtyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
          value={telephone}
          onBlur={checkStateBlure}
          onChange={handleState}
          label="Telephone" variant="standard" />
      </TableCell>
      <TableCell>
        <form onSubmit={addContact}>
          <IconButton disabled={btn} type='submite' size="large">
            <AddIcon className={addGreen} />
          </IconButton>
        </form>
      </TableCell>
      <TableCell>
      </TableCell>
    </TableRow>


  );
};

export default CreateContact;