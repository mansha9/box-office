import React from "react";
import {Switch, Route} from 'react-router-dom';
import Navs from './components/Navs';
import Home from './pages/Home';
import Starred from './pages/Starred';

// here we have used exact which is said to be true as it does't require the equals to [exact={true}] statement in react:
function App() {
  return (
    <div>

      <Navs />
  <Switch>
    <Route exact path="/"> 
     <Home /> 
    </Route>

      <Route exact path="/starred"> 
      <Starred /> 
      </Route>

      <Route>
        <div>
          Not found
        </div>
      </Route>

  </Switch>
  </div>
  );
}

export default App;
