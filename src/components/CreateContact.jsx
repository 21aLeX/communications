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
import AddIcon from '@mui/icons-material/Add';


const CreateContact = () => {

  const rows = [
    { name: 'a', c: 5 },
    { name: 'b', c: 6 },
    { name: 'c', c: 7 },
    { name: 'd', c: 8 },
    { name: 'f', c: 9 }

  ];
  return (
          <TableRow>
            <TableCell>
              <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField id="input-with-sx" label="Name contact" variant="standard" />
            </TableCell>
            <TableCell align="right">
              <TtyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField id="input-with-sx" label="Telephone" variant="standard" />
            </TableCell>
            <TableCell>
              <AddIcon sx={{ color: 'green', mr: 1, my: 0.5 }} />
            </TableCell><TableCell></TableCell>
          </TableRow>

          
  );
};

export default CreateContact;