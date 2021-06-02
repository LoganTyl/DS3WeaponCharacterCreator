import React from "react";
import {withAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";

const SignIn = props => {
    return(
        <>
            <AmplifySignOut />
        </>
    )
}

export default withAuthenticator(SignIn);