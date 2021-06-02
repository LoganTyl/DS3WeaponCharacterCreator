import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import NavBar from "./navBarComponent";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import AccountUpdate from "./AccountUpdate";
import WeaponDisplay from "./WeaponDisplay";
import WeaponUpdate from "./WeaponUpdate";
import CharacterDisplay from "./CharacterDisplay";
import CharacterUpdate from "./CharacterUpdate";

class App extends Component{
  constructor(props){
    super(props)
  }

  state = {
      isSignedIn: false
  }

//
  componentDidUpdate(){
      console.log(this.props.location);
  }

  renderNavBar(){
      if(this.state.isSignedIn){
          return <NavBar />
      }
      return null;
  }

  render() {
    return(
        <Router>
            <>
                <div className="application">
                    {this.renderNavBar()}
                    <div className="appContent">
                        <Switch>
                            <Redirect exact from="/" to="/signIn" />
                            <Route exact path="/home">
                                <Home />
                            </Route>
                            <Route exact path="/accountUpdate">
                                <AccountUpdate />
                            </Route>
                            <Route exact path="/signIn">
                                <SignIn />
                            </Route>
                            <Route exact path="/signUp">
                                <SignUp />
                            </Route>
                            <Route exact path="/weaponDisplay">
                                <WeaponDisplay />
                            </Route>
                            <Route exact path="/characterDisplay">
                                <CharacterDisplay />
                            </Route>
                            <Route exact path="/weaponUpdate">
                                <WeaponUpdate />
                            </Route>
                            <Route exact path="/characterUpdate">
                                <CharacterUpdate />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </>
        </Router>
        
    );
  }
}

export default App;
