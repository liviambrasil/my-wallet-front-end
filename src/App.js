import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
import Registry from "./pages/Registry";
import GlobalStyle from "./styles/GlobalStyle";
import UserContext from "./context/UserContext";
import { useEffect, useState } from "react";


function App() {

  const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')))

  return (

      <BrowserRouter>
        <GlobalStyle />
        <UserContext.Provider value={ {user, setUser} }>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/entry">
            <Registry />
          </Route>
          <Route path="/exit">
            <Registry />
          </Route>
        </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    
  );
}


export default App;
