import React from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { addUserForm } from '../Redux/Form';
import { nanoid } from '@reduxjs/toolkit';
import { TextField, Switch, Typography, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Button, Checkbox, Box } from '@mui/material';


export default function ContactForm() {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            id: "",
            name: "",
            email: "",
            phone: "",
            program: 0,
            message: "",
            agree: false
        },
        onSubmit: (values) => {
            const newObject = values
            dispatch(addUserForm({ ...newObject, id: nanoid() }));
            formik.resetForm();
            formik.setFieldValue('agree', true)
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
            email: Yup.string().required("Required.").email("Invalid email"),
            phone: Yup.number().integer().typeError("Please enter a valid number").required("Required."),
            program: Yup.string().typeError("Please select a program."),
            message: Yup.string().required("Required.").min(10, "Must be 10 characters or more"),
            agree: Yup.boolean().oneOf([true], "The terms and conditions must be accepted.")
        }),
    });

    return (
        <Box>
            <form className="infoform" onSubmit={formik.handleSubmit}>
                <h5 style={{ textAlign: "center" }}>Add your information</h5>
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    label="Name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />
                {/* {formik.errors.name && (<Typography variant="caption" color="red">{formik.errors.name}</Typography>)} */}
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    label="Email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                {/* {formik.errors.email && (<Typography variant="caption" color="red">{formik.errors.email}</Typography>)} */}
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    label="Phone"
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                />
                {/* {formik.errors.phone && (<Typography variant="caption" color="red">{formik.errors.phone}</Typography>)} */}
                <FormControl sx={{ m: 1, mt: 3 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">Program of Study</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        label="Program of Stydy"
                        name="program"
                        value={formik.values.program}
                        onChange={formik.handleChange}
                        error={formik.touched.program && Boolean(formik.errors.program)}
                        helperText={formik.touched.program && formik.errors.program}
                    >
                        <MenuItem value={0}>
                            <em>Choose 1 program</em>
                        </MenuItem>
                        <MenuItem value={"Software Engineering"}>Software Engineering</MenuItem>
                        <MenuItem value={"Information System"}>Information System</MenuItem>
                        <MenuItem value={"Information Assurance"}>Information Assurance</MenuItem>
                        <MenuItem value={"Internet of Things"}>Internet of Things</MenuItem>
                        <MenuItem value={"Artificial Intelligence"}>Artificial Intelligence</MenuItem>
                        <MenuItem value={"Digital Art & Design"}>Digital Art & Design</MenuItem>
                    </Select>
                </FormControl>
                {/* {formik.errors.program && (<Typography variant="caption" color="red">{formik.errors.program}</Typography>)} */}
                <TextField
                    id="outlined-multiline-static"
                    label="Message"
                    multiline
                    name='message'
                    rows={4}
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    error={formik.touched.message && Boolean(formik.errors.message)}
                    helperText={formik.touched.message && formik.errors.message}
                />
                {/* {formik.errors.message && (<Typography variant="caption" color="red">{formik.errors.message}</Typography>)} */}
                <FormControlLabel control={<Checkbox />} label="Agree to terms and conditions." name='agree'
                    value={formik.values.agree} onClick={formik.handleChange}
                    error={formik.touched.agree && Boolean(formik.errors.agree)}
                    helperText={formik.touched.agree && formik.errors.agree} />

                {/* {formik.errors.agree && (<Typography variant="caption" color="red">{formik.errors.agree}</Typography>)} */}
                <Button sx={{
                    backgroundColor: "#236DC9", color: "white", fontWeight: "bold", "&:hover": {
                        backgroundColor: "#154178"
                    }
                }} disabled={!formik.dirty} type='submit'>
                    submit
                </Button>
            </form>
        </Box>

    );
}
