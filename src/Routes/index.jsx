import { Route, Switch } from "react-router-dom";
import HomeLogin from "../pages/HomeLogin";
import Register from "../pages/Register";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <HomeLogin />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
    </Switch>
  );
}

export default Routes;
