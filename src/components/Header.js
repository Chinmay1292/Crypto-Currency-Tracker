import { AppBar, Container, MenuItem, Select, Toolbar, Typography, makeStyles, createTheme, ThemeProvider } from '@material-ui/core'
import React from 'react'
import {useNavigate} from 'react-router-dom';

const useStyles = makeStyles(()=>({
    title:{
        flex: 1,
        color: 'crimson',
        fontFamily: "Poppins",
        fontWeight: "bold",
        cursor: "pointer",
    }
}))

const Header = () => {
const classes = useStyles();
const history = useNavigate();
const darkTheme = createTheme({
    palette:{
        primary:{
            main: "#fff",
        },
        type: "dark",
    }
});

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
        <Container>
            <Toolbar>
                <Typography onClick={()=>history("/")}className={classes.title}>
                    Crypto Currency Tracker
                </Typography>
                <Select variant='outlined' style={{width:100, height:40, marginLeft:15,}}>
                    <MenuItem value={'USD'}>USD</MenuItem>
                    <MenuItem value={'INR'}>INR</MenuItem>
                </Select>
            </Toolbar>
        </Container>

    </AppBar>
    </ThemeProvider>
  )
}

export default Header
