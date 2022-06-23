import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {useEffect, useState} from 'react';
import {Authentication} from '../../api/authentication';
import {User} from '../../api/users';


// function createData(
//   id: number,
//   firstName: string,
//   lastName: string,
//   progress: string,
//   track: string,
//   email: string,
//   cv: string,
// ) {
//   return {id, firstName, lastName, progress, track, email, cv};
// }

// const rows = [
//   createData(1, 'Aizada', 'Turarova', 'stepik', 'frontend', 'aizada.turarova@gmail.com', 'cv'),
//   createData(1, 'Aizada', 'Turarova', 'stepik', 'frontend', 'aizada.turarova@gmail.com', 'cv'),
//   createData(1, 'Aizada', 'Turarova', 'stepik', 'frontend', 'aizada.turarova@gmail.com', 'cv'),
//   createData(1, 'Aizada', 'Turarova', 'stepik', 'frontend', 'aizada.turarova@gmail.com', 'cv'),
//   createData(1, 'Aizada', 'Turarova', 'stepik', 'frontend', 'aizada.turarova@gmail.com', 'cv'),
// ];


export function DataTable() {
  const [users, setUsers] = useState([]);
  const [progress, setProgress] = useState(0);

  const screening = new Authentication();
  const userData = new User();

  async function getAllUsers() {
    const data = await screening.getAll();
    console.log("data: ", data);
    setUsers(data);
  }

  async function deleteUser(id) {
    const screeningData = await userData.deleteUser(id);
    window.location.reload();
  }

  const handleChange=(e)=>{
    console.log(e);
    userData.changeStatus(e.target.value);
    setProgress(e.target.value);
  }
  

  useEffect(() => {
    getAllUsers();
  }, []);

  console.log("users::::" , users);

  return (
    <TableContainer component={Paper}>
      
      <Table sx={{minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{fontWeight: 'bold'}} align="left">id</TableCell>
            <TableCell style={{fontWeight: 'bold'}} align="left">First name</TableCell>
            <TableCell style={{fontWeight: 'bold'}} align="left">Middle name</TableCell>
            <TableCell style={{fontWeight: 'bold'}} align="left">Last name</TableCell>
            <TableCell style={{fontWeight: 'bold'}} align="left">Status</TableCell>
            <TableCell style={{fontWeight: 'bold'}} align="left">Email</TableCell>
            <TableCell style={{fontWeight: 'bold'}} align="left">Cv</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow key={row.id}
              sx={{'&:last-child td, &:last-child th': {border: 0}}}
            >
              <TableCell align="left" component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left" component="th" scope="row">
              {row.name}
              </TableCell>
              <TableCell align="left" component="th" scope="row">
              {row.middleName}
              </TableCell>
              <TableCell align="left">{row.surname}</TableCell>
              <TableCell align="left"><Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={""}
                label="Age"
                onChange={handleChange}
              > 
                <MenuItem value={0}>CV</MenuItem>
                <MenuItem value={1}>Stepik</MenuItem>
                <MenuItem value={2}>Easyhire</MenuItem>
                <MenuItem value={3}>Zoom interview</MenuItem>

              </Select></TableCell>
              {/* <TableCell align="left">{row.track}</TableCell> */}
              <TableCell align="left">{row.email}</TableCell>
              {/* <TableCell align="left">{row.cv}</TableCell> */}
              <TableCell align="left"><Button onClick={() => deleteUser(row.id)} variant="outlined"
                                              color="error">delete</Button></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
