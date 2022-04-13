import React, { useMemo, useState, useRef } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import TtyIcon from '@mui/icons-material/Tty';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CreateContact from './CreateContact';
import ListContact from './ListContact';
import { useDispatch } from 'react-redux';
import { setSearch } from '../store/slice/searchSlice';


const SortContact = () => {
  const [search, getSearch] = useState('')
  const dispatch = useDispatch();

  const searchChenge = (e) => {
    getSearch(e)
    dispatch(setSearch(e))
  }
  return (

    <TableRow>
      <TableCell colSpan={5}>
        <TextField
          value={search}
          onChange={e => searchChenge(e.target.value)}
          fullWidth
          id="standard-basic"
          label="Search..."
          variant="standard" /></TableCell>
    </TableRow>
  );
};

export default SortContact;