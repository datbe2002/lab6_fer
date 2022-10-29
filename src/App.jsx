import './App.css'
import { Box, Grid, Button } from '@mui/material';
import ContactForm from './Component/ContactForm';
import UserInput from './Component/UserInput';
import { useState } from 'react';

function App() {
  const [isToggled, setIsToggled] = useState(false)
  return (
    <div className="App">
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={5}>

              {!isToggled ? (<>
                <h2>Hi, this is a Form click the button to open the form</h2>
                <Button sx={{
                  backgroundColor: "#236DC9", color: "white", fontWeight: "bold", "&:hover": {
                    backgroundColor: "#154178"
                  }
                }} onClick={() => setIsToggled(!isToggled)}>Add a information</Button></>) : (<ContactForm />)}
            </Grid>
            <Grid item xs={11}>
              <UserInput />
            </Grid>
          </Grid>
        </Box>
      </div>
    </div >

  )
}

export default App
