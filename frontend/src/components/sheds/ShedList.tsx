// ShedsList.tsx
import React from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import classes from './ShedList.module.css';


interface Shed {
  _id: string;
  location: string;
  manager: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}


interface ShedsListProps {
  sheds: Shed[];
}


const ShedsList: React.FC<ShedsListProps> = ({ sheds }) => {
  return (
    <TableContainer component={Paper}
    className={classes.tableContainer}
    style={{ maxHeight: '800px', overflowY: 'auto' }}>
      <Table className={classes.table}>
          <TableHead className={classes.tableHeader}>
          <TableRow className={classes.tableHeader}>
            <TableCell variant="head">Location</TableCell>
            <TableCell>Manager</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>City</TableCell>
            <TableCell>State</TableCell>
            <TableCell>Pincode</TableCell>
            <TableCell>Country</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sheds.map((shed) => (
            <TableRow key={shed._id}>
              <TableCell>{shed.location}</TableCell>
              <TableCell>{shed.manager}</TableCell>
              <TableCell>{shed.address}</TableCell>
              <TableCell>{shed.city}</TableCell>
              <TableCell>{shed.state}</TableCell>
              <TableCell>{shed.pincode}</TableCell>
              <TableCell>{shed.country}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};


export default ShedsList;





