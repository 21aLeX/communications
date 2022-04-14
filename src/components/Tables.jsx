import React from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import CreateContact from './CreateContact';
import ListContact from './ListContact';
import SearchContact from './SearchContact';


const Tables = () => {
  return (
    <TableContainer>
      <Table
        sx={{ maxWidth: 850, minWidth: 850, marginRight: 'auto', marginLeft: 'auto' }}
        aria-label="simple table"
      >
        <TableHead>
          <CreateContact />
          <SearchContact />
        </TableHead>
        <ListContact />
      </Table>
    </TableContainer>
  );
};

export default Tables;