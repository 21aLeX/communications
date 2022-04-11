import React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import EditIcon from '@mui/icons-material/Edit';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux'
import {deleteContact} from '../store/slice/contactSlice '
import { IconButton, Modal } from '@mui/material';
import { setVisible } from '../store/slice/visibleModalSlise';


const ListContact= () => {
  const listContact = useSelector(state=> state.contact.contact);
  const dispatch=useDispatch()
  
  return (
        <TableBody>
          {listContact.map((listContact, index) => (
            <TableRow
              key={index+1}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >{index+1}</TableCell>
              <TableCell component="th" scope="row">
                {listContact.name}
              </TableCell>
              <TableCell>{listContact.telephone}</TableCell>
              <TableCell>
              <IconButton 
              onClick={()=>dispatch(setVisible({visible:true, id:listContact.id}))} 
              sx={{ color: 'action.active'}}>
                <EditIcon/>
              </IconButton>
              </TableCell>
              <TableCell>
              <IconButton onClick={()=>dispatch(deleteContact(listContact.id))} size="large">
                <ClearSharpIcon sx={{ color: 'red' }} />
              </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      
  );
};

export default ListContact;