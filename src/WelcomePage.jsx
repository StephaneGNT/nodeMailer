import React, { Component } from 'react';
import { Container, Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class WelcomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      no: false,
    }
  }

  renderNo = () => {
    if(this.state.no) return <p>Bah dégage alors !!</p>
  }

  render () {
    return (
      <Container>
        <Row> T'en veux du cookie ? </Row>
        <Row>
          <Button><Link to="/askForCookiesRecipe"> Oh oui dis ! </Link></Button>
          <Button onClick = {()=>this.setState({no : true})}> Bah non </Button>
        </Row>
        <Row>
          {this.renderNo()}
        </Row>
      </Container>
    )
  }
}

export default WelcomePage