import React from 'react';
import { Container } from '@material-ui/core'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavbarComponent from './components/Navbar/NavbarComponent'
import HomeComponent from "./components/Home/HomeComponent";
import AuthComponent from './components/Auth/AuthComponent'

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <NavbarComponent />
        <Switch>
          <Route path="/" exact component={ HomeComponent }/>
          <Route path="/auth" exact component={ AuthComponent }/>
        </Switch>
      </Container>
    </BrowserRouter>
  )
}
export default App