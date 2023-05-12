import React from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core'

export default function MyTable(props) {
    // {
    //     fullname: '',
    //     email: '',
    //     password: '',
    //     city: '',
    //     province: '',
    //     postCode: '',
    //     street: '',
    //     streetNumber: ''
    //   }

    return (
        <>
        <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Fullname</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Address</TableCell>
            {/* <TableCell align="right">Delete</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.users.map((user, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">{user.fullname}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                {`${user.street} ${user.streetNumber}, ${user.city} (${user.province}) - ${user.postCode}`}
              </TableCell>
              {/* <TableCell align="right">{user.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
    )
}
