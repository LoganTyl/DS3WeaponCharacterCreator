import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {Hub} from 'aws-amplify';
// import {AmplifySignOut} from "@aws-amplify/ui-react";
import { Auth } from 'aws-amplify';
import NavBar from "./navBarComponent";
import Home from "./Home";
import WeaponDisplay from "./WeaponDisplay";
import WeaponUpdate from "./WeaponUpdate";
import CharacterDisplay from "./CharacterDisplay";
import CharacterUpdate from "./CharacterUpdate";

class App extends Component{
    constructor(props){
        super(props)

        Hub.listen('auth', (data) => {
            const {payload} = data;
            this.onAuthEvent(payload);
            console.log(payload)
            console.log("New console write line")
            console.log('A new auth event has happened: ', data.payload.data.username + ' has ' + data.payload.event);
            this.setState({
                payloadData: payload.data
            })
            // use payloadData.attributes.sub for userID
        })
    }

    state = {
        isSignedIn: false,
        payloadData: null
    }

    componentDidUpdate(){
        console.log(this.props.location);
    }

    componentDidMount(){
        {this.onSignOutClick()}
    }

    async onSignOutClick() {
        await Auth.signOut()
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }  

    onAuthEvent(payload){
        console.log(payload.event)
        if(payload.event === "signIn"){
            this.setState({
                isSignedIn: true
            })
        }
        else if(payload.event === "signOut"){
            this.setState({
                isSignedIn: false
            })
        }
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
                                <Redirect exact from="/" to="/home" />
                                <Route exact path="/home">
                                    <Home payload={this.state.payloadData} />
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
                    {/* <AmplifySignOut /> */}
                </>
            </Router>
        );
    }
}

export default App;
