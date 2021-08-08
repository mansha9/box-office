import React from "react";
import {Switch, Route} from 'react-router-dom'
// here we have used exact which is said to be true as it does't require the equals to [exact={true}] statement in react:
function App() {
  return (
  <Switch>
    <Route exact path="/"> 
      This is home page
      </Route>

      <Route exact path="/starred"> 
      This is starred
      </Route>

      <Route>
        This is 404 page
      </Route>

  </Switch>
  );
}

export default App;
