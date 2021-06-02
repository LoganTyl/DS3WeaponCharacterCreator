import React from "react";

const NavBar = props => {
    return(
        <>
            <nav className="navBar">
                <div className="navLinks">
                    <a href="/">Home</a>
                    <a href="/accountUpdate">Update Account</a>
                    <a href="/signIn">Logout</a>
                </div>
            </nav>
        </>
    )
}

export default NavBar;