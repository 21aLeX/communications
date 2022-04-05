import React from 'react';
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


const SortContact = () => {

  const rows = [
    { name: 'a', c: 5 },
    { name: 'b', c: 6 },
    { name: 'c', c: 7 },
    { name: 'd', c: 8 },
    { name: 'f', c: 9 }

  ];
  return (

    <TableRow><TableCell
    >
      <KeyboardArrowDownIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> Name</TableCell>
      <TableCell>
        <KeyboardArrowUpIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} /></TableCell>

      <TableCell></TableCell>

      <TableCell></TableCell></TableRow>
  );
};

export default SortContact;