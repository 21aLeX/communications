import React, { useState } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
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
          label="Search..."
          variant="standard"
        />
      </TableCell>
    </TableRow>
  );
};

export default SortContact;