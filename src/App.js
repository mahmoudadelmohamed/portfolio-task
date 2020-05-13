import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './container/Navbar/Navbar';
import Home from './container/Home/Home';
import DetailsPage from './container/DetailsPage/DetailsPage';
import './App.scss';


class App extends Component  {
  state = {
    darkMode: false
  }
  render() {
    const Toggle = () => {
      this.setState({
        darkMode: !this.state.darkMode
      })
    }
    return (
      <div className={this.state.darkMode ? 'dark' : null}>
      <Navbar toggle={Toggle} darkmode={this.state.darkMode}/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/details/:id" component={DetailsPage}  />
       </Switch>
       </div>
    );
  }

}

export default App;
