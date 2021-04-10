import React, {useEffect,useState} from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "../SignUp/Signup";
import Login from "../Login/Login";
import GoogleLogin from "../GoogleLogin/Login";
import Home from "../App/App";
import SideMenu from "../Employment/components__employment/SideMenu";
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import Header from "../Employment/components__employment/Header";
import PageHeader from '../Employment/components__employment/PageHeader';
import Employees from "../Employment/Employees/Employees";
import db, {auth} from "../../firebase"


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: '#3c44b126'
    },
    secondary: {
      main: "#f83245",
      light: '#f8324526'
    },
    background: {
      default: "#f4f5fd"
    },
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    }
  },
  props:{
    MuiIconButton:{
      disableRipple:true
    }
  }
})


const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
})

function App() {

  const[rooms,setRooms] = useState([]);

const database = () => {
  db.collection('Rooms').onSnapshot((onSnapshot) => {
    setRooms(onSnapshot.docs.map((doc) => {
      // console.log(doc.data())
      return {id: doc.id, name: doc.data().EMPLOYEE};
    }))
  })
}

useEffect(() =>{
  database();
}, [])

console.log(rooms)


  const classes = useStyles();
  return (
    <Router>
    <div className="App">
    <Switch>
     <Route path ="/Login">
    <Login/>
    </Route>
    <Route path ="/signup">
    <Signup/>
    </Route>
    <Route path ="/GoogleLogin">
    <GoogleLogin/>
    </Route>
    <ThemeProvider theme={theme}>
    <Route path ="/Employees">
   
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <Employees />
      </div>
      <CssBaseline />
    
    </Route>
    </ThemeProvider>
    <Route exact path ="/">
    <Home/>
    </Route>
    </Switch> 
   </div>
    </Router>
  );
}

export default App;
