import { Route, Switch } from "react-router-dom";
import HomeLogin from "../pages/HomeLogin";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <HomeLogin />
      </Route>
    </Switch>
  );
}

export default Routes;
