import React, {Component} from "react";
import { Auth } from 'aws-amplify';

class NavBar extends Component {    
    async onSignOutClick() {
        await Auth.signOut()
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }  

    render(){
        return(
            <>
                <nav className="navBar">
                    <div className="navLinks">
                        <a href="/">Home</a>
                        <a href="/characterUpdate">Add Character</a>
                        <a href="/weaponUpdate">Add Weapon</a>
                        <a href="/home" onClick={this.onSignOutClick}>Logout</a>
                    </div>
                </nav>
            </>
        )
    }
}

export default NavBar;