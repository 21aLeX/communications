import React from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import CreateContact from './CreateContact';
import ListContact from './ListContact';
import SortContact from './SortContact';
import { setUser } from '../store/slice/userSlice.js'


const Tables = () => {

  return (
    <TableContainer sx={{}}  >
      <Table sx={{ maxWidth: 850, marginRight: 'auto', marginLeft: 'auto' }} aria-label="simple table">
        <TableHead>
         <CreateContact setUser={setUser}/>

          <SortContact />
        </TableHead>
        <ListContact />
      </Table>
    </TableContainer>
  );
};

export default Tables;