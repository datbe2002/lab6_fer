import './App.css'
import { Box, Grid, Button } from '@mui/material';
import ContactForm from './Component/ContactForm';
import UserInput from './Component/UserInput';
import { useState } from 'react';
import NavBar from './Component/NavBar';

function App() {
  const [isToggled, setIsToggled] = useState(false)
  return (

    <div className="App">
      <div>{<NavBar />}</div>

      <Grid container spacing={2} columns={16}>
        <Grid item xs={5}>

          {!isToggled ? (<div>
            <h2>Hi, this is a Form click the button to open the form</h2>
            <Button sx={{
              backgroundColor: "#1976D2", color: "white", fontWeight: "bold", marginLeft: "10rem", "&:hover": {
                backgroundColor: "#154178"
              }
            }} onClick={() => setIsToggled(!isToggled)}>Add information</Button></div>) : (<ContactForm />)}
        </Grid>
        <Grid item xs={11}>
          <UserInput />
        </Grid>
      </Grid>
    </div >

  )
}

export default App
