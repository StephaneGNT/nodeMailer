import React, { Component } from 'react';
import axios from 'axios';
import { Col, Button } from 'reactstrap';

class SendMail extends Component {
  constructor(props){
    super(props);
    this.state={
      mail: '',
      title: '',
      content: '',
    }
  }
  
  sendMail = () => {
    axios.post('http://localhost:5000/api/askForCookiesRecipe', this.state);
  }

  render () {
    return (
      <Col style={{ display: 'flex', flexDirection: 'column' }}>
        <input
          onChange = {e => this.setState({mail: e.target.value})}
          placeholder="Adresse mail à conacter"
          style={{ margin: '10px 0'}}
        />
        <input
          onChange = {e => this.setState({title: e.target.value})}
          placeholder="Titre du mail"
          style={{ margin: '10px 0'}}
        />
        <textarea
          onChange = {e => this.setState({content: e.target.value})}
          placeholder="Contenu du mail"
          style={{ margin: '10px 0'}}
        />
        <Button onClick = {() => this.sendMail()}>Envoyer</Button>
    </Col>
    )
  }
}

export default SendMail