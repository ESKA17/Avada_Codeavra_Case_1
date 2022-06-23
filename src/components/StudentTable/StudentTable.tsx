import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';



function createData(
  id: number,
  firstName: string,
  lastName: string,
  progress: string,
  track: string,
  email: string,
  cv: string
) {
  return { id, firstName, lastName, progress, track, email, cv };
}

const rows = [
  createData(1, 'Aizada', 'Turarova', 'stepik', 'frontend', 'aizada.turarova@gmail.com', 'cv'),
  createData(1, 'Aizada', 'Turarova', 'stepik', 'frontend', 'aizada.turarova@gmail.com', 'cv'),
  createData(1, 'Aizada', 'Turarova', 'stepik', 'frontend', 'aizada.turarova@gmail.com', 'cv'),
  createData(1, 'Aizada', 'Turarova', 'stepik', 'frontend', 'aizada.turarova@gmail.com', 'cv'),
  createData(1, 'Aizada', 'Turarova', 'stepik', 'frontend', 'aizada.turarova@gmail.com', 'cv'),
];

export  function DataTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow >
            <TableCell style={{fontWeight: 'bold'}} align="left">id</TableCell>
            <TableCell style={{fontWeight: 'bold'}} align="left">First name</TableCell>
            <TableCell style={{fontWeight: 'bold'}} align="left">Last name</TableCell>
            <TableCell style={{fontWeight: 'bold'}} align="left">Progress</TableCell>
            <TableCell style={{fontWeight: 'bold'}} align="left">Track</TableCell>
            <TableCell style={{fontWeight: 'bold'}} align="left">Email</TableCell>
            <TableCell style={{fontWeight: 'bold'}} align="left">Cv</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              // key={r}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell align="left" component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left" component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell align="left">{row.lastName}</TableCell>
              <TableCell align="left"><Select
                                          labelId="demo-simple-select-label"
                                          id="demo-simple-select"
                                          value={""}
                                          label="Age"
                                          // onChange={}
                                           >
          <MenuItem value={10}>0</MenuItem>
          <MenuItem value={20}>1</MenuItem>
          <MenuItem value={30}>2</MenuItem>
          <MenuItem value={30}>3</MenuItem>

        </Select></TableCell>
              <TableCell align="left">{row.track}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.cv}</TableCell>
              <TableCell align="left"><Button variant="outlined" color='error'>delete</Button></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
