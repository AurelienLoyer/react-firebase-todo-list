import React, { Component } from "react";
import firebase, { auth, provider } from "./firebase.js";
import logo from "./img/unicorn-icon.png";
import "./App.css";

import Listitems from "./components/Listitems.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "toto",
      items: [],
      user: null
    };
  }

  componentDidMount() {
    // AUTH
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });

    // DATABASE
    const itemsRef = firebase.database().ref("items");

    itemsRef.on("value", snapshot => {
      const items = snapshot.val();
      this.setState({
        items
      });
    });
  }

  login = () => {
    auth.signInWithPopup(provider).then(result => {
      this.setState({
        user: result.user
      });
    });
  };

  logout = () => {
    auth.signOut().then(() => {
      this.setState({
        user: null
      });
    });
  };

  render() {

    const list = (title, part) =>
      this.state.items &&
      this.state.items[part] &&
      this.state.items[part].length > 0 && (
        <Listitems title={title} items={this.state.items[part]} />
      );

    return (
      <div className="App">
        <header className="App-header">
          <div>
            <h1 className="App-title">
              <img src={logo} className="App-logo" alt="logo" />
              Todo List
            </h1>
          </div>
          {this.state.user ? (
            <div className="user-profile">
              <button onClick={this.logout}>Log Out</button>
              <img src={this.state.user.photoURL} alt="you" />
            </div>
          ) : (
            <div>
              <button onClick={this.login}>Log In</button>
            </div>
          )}
        </header>
        <div className="App-core">
          {list("TODO part", "todo")}
          {list("DOING part", "doing")}
          {list("DONE part", "done")}
        </div>
      </div>
    );
  }
}

export default App;
