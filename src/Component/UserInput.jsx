// import { Button } from "react-materialize";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import { useState } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { deleteUserForm, updateUserFormName } from "../Redux/Form";

export default function UserInput() {
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.form.value);
    const [newUsername, setNewUsername] = useState('');
    return (
        <Box>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Program</TableCell>
                            <TableCell>Message</TableCell>
                            <TableCell>Input Data</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userList.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>{user.program}</TableCell>
                                <TableCell>{user.message}</TableCell>
                                <TableCell>
                                    <Box
                                        component="form"
                                        sx={{
                                            "& > :not(style)": { m: 1, width: "16ch" },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            id="outlined-basic"
                                            multiline
                                            label="Your Name"
                                            variant="outlined"
                                            onChange={(e) => setNewUsername(e.target.value)}
                                        />
                                    </Box>
                                </TableCell>
                                <TableCell sx={{ display: "flex", paddingTop: "2.3rem", borderBottom: "none" }}>
                                    <Button sx={{
                                        color: "white", fontWeight: "bold", backgroundColor: "#09BFB8", "&:hover": {
                                            color: 'white',
                                            backgroundColor: '#034C49'
                                        },
                                    }} onClick={() => { dispatch(updateUserFormName({ id: user.id, name: newUsername })); }}>Update</Button>
                                    <Button sx={{
                                        color: "white", fontWeight: "bold", backgroundColor: "#D53032", marginLeft: "1rem", "&:hover": {
                                            color: 'white',
                                            backgroundColor: '#7F1C1E'
                                        },
                                    }} onClick={() => { dispatch(deleteUserForm({ id: user.id })); }}> Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>

    )
}


