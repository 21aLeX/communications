
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


const Tables = () => {

    const rows = [
       { name:'a',c:5},
       { name:'b',c:6},
       { name:'c',c:7},
       { name:'d',c:8},
       { name:'f',c:9}
       
      ];
    return (
        <TableContainer sx={{  }}  >
      <Table sx={{ maxWidth: 850,marginRight:'auto',marginLeft:'auto' }} aria-label="simple table">
        <TableHead>
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
          
          <TableRow><TableCell 
  >
        <KeyboardArrowDownIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> Name</TableCell>
        <TableCell>
        <KeyboardArrowUpIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} /></TableCell>
        
        <TableCell></TableCell>
        
        <TableCell></TableCell></TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.c}</TableCell>        
              <TableCell>
        <EditIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              </TableCell>          
              <TableCell>
              <ClearSharpIcon sx={{ color: 'red', mr: 1, my: 0.5 }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
};

export default Tables;