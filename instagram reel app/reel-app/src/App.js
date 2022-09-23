import './App.css' ;
import React, { useContext } from 'react' ;
import Feed from './components/Feed';
import { Redirect, Route , Switch} from 'react-router-dom'
import Login from './components/Login';
import PageNotFound from './components/PageNotFound';
import Profile from './components/Profile';
import Signup from './components/Signup';
import {AuthContextProvider,AuthContext} from './context/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Switch>
        <PrivateRoute path = "/feed" comp={Feed}>
        </PrivateRoute>
        <Route path = "/login">
          <Login></Login>
        </Route>
        <Route path = "/signup">
          <Signup></Signup>
        </Route>
        <PrivateRoute path = "/profile" comp={Profile}>
        </PrivateRoute>
        <Route>
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
    </AuthContextProvider>
  );
}

function PrivateRoute(props){
  let Component = props.comp;
  console.log(props);
  let userObj = useContext(AuthContext);
  return(
    <Route
      {...props}
      render ={
      (props)=>{
        return userObj != null ? <Component {...props}/> : <Redirect to='/login' {...props}/>
        }
      }
    ></Route>
  )
}

export default App ;
