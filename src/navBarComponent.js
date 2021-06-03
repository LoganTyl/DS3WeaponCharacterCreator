import React from "react";
import { withAuthenticator } from "aws-amplify-react";

signOut = () => {
    Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

const NavBar = props => {
    return(
        <>
            <nav className="navBar">
                <div className="navLinks">
                    <a href="/">Home</a>
                    <a href="/characterUpdate">Add Character</a>
                    <a href="/weaponUpdate">Add Weapon</a>
                    <a href="/signIn">Logout</a>
                </div>
            </nav>
        </>
    )
}

export default NavBar;