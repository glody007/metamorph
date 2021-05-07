import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home";
import NavBar from "./components/Header/NavBar";
import Ide from "./views/Ide/Ide";
import NotFound from "./views/NotFound";

const App = () => {
  return (
    <div>
      <NavBar style={{position: "fixed"}}/>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Ide" component={Ide} />
        <Route exact path="/">
          <Redirect to="/Ide" />
        </Route>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
