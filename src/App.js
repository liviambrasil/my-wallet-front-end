import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
import Entry from "./pages/Entry";
import Exit from "./pages/Exit"
import GlobalStyle from "./styles/GlobalStyle";
import UserContext from "./context/UserContext";
import { useState } from "react";

function App() {

  const [user, setUser] = useState()

  return (
    <UserContext.Provider value={ {user, setUser} }>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/entry">
            <Entry />
          </Route>
          <Route path="/exit">
            <Exit />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
