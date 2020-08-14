import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
//components
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} exact component={HomePage} />
        {/* redirect all of the wrong routes to the home page */}
        <Redirect to={"/"} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
