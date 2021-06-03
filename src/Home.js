import React from "react";
import {withAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";


const Home = props => {
    return(
        <>
            <nav className="navBar">
                <div className="navLinks">
                    <a href="/">Home</a>
                    <a href="/accountUpdate">Home</a>
                    <a href="/signIn">Home</a>
                </div>
            </nav>
            {/* <AmplifySignOut /> */}
        </>
    )
}

// export default withAuthenticator(Home);
export default Home;