import React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import EditIcon from '@mui/icons-material/Edit';


const ListContact= () => {

  const rows = [
    { name: 'a', c: 5 },
    { name: 'b', c: 6 },
    { name: 'c', c: 7 },
    { name: 'd', c: 8 },
    { name: 'f', c: 9 }

  ];
  return (
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
      
  );
};

export default ListContact;