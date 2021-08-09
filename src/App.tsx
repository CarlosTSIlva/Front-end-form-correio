import React from "react";
import Select from "./Pages/Select";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./Pages/Main";
import GlobalContext from "./hooks";
import Finish from "./Pages/Finish";

function App() {
  return (
    <GlobalContext>
      <ChakraProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact={true} component={MainPage} />
            <Route path="/selecione" component={Select} />
            <Route path="/finish" component={Finish} />
          </Switch>
        </BrowserRouter>
      </ChakraProvider>
    </GlobalContext>
  );
}

export default App;
