import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
import SendMail from './SendMail';
import WelcomePage from './WelcomePage';

class App extends Component {
  render() {
    return (
      <Container style={{ margin: '20vw 20vh', fontSize: '2em'}}>
        <BrowserRouter>
          <Switch>
            <Route path="/askForCookiesRecipe" component={SendMail} />
            <Route exact path="/" component={WelcomePage} />
          </Switch>
        </BrowserRouter>
      </Container>
    );
  }
}

export default App;
