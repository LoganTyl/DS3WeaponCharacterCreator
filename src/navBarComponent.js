import React from "react";

// signOut = () => {
//     Auth.signOut()
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
// }
// Test line for refreshing amplify




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