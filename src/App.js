import React from "react";
import SignUp from "./components/SignUp"
import Login from "./components/Login"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <>
   
   <Router>
            <Switch>
                <Route exact path='/'>
                    <SignUp/>
                </Route>
                <Route exact path="/Login">
                  <Login/>
                </Route>
            </Switch>
        </Router>
    
    </>
  );
}


export default App;

