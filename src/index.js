import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import './App.css';
import registerServiceWorker from './registerServiceWorker';

const Card = (props) => {
  return (
    <div>
      <img src={props.avatar} />
      <div className="info" >
        <div id="name">{props.name}</div>
        <div>{props.companyName}</div>
      </div>
    </div>
  )
}

const CardList = (props) => {
  return (
    <div className="container">
      {props.cards.map(card => <Card {...card} />)}
    </div>
  );
};

class Form extends React.Component {
  state = {
    userName: ''
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Event : submitted", this.state.userName);
    axios.get(`https://api.github.com/users/${this.state.userName}`);
      // .then(resp => {
      //   console.log(resp);
      // });
  };

  render () {
    return (
       <form onSubmit={this.handleSubmit}>
        <input type="text"
          value={this.state.userName}
          onChange={(event) => this.setState({userName: event.target.value})}
          placeholder="GitHub UserName" required/>
        <button type="submit">Add Card</button>
      </form>
    );
  }
}

class App extends React.Component {
  state = {
    cards: [
      {
        name: "Alan Mills",
        companyName: "Company TBA",
        avatar: "https://avatars0.githubusercontent.com/u/8049836?v=4"
      },
      {
        name: "Alan Mills",
        companyName: "Company TBA",
        avatar: "https://avatars0.githubusercontent.com/u/8049836?v=4"
      }
    ]
  };
  addNewCard= (cardInfo) => {
    console.log(cardInfo);
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.addNewCard}/>
        <CardList cards={this.state.cards}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
