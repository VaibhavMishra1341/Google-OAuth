import React, { useEffect } from 'react'
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script'
import axios from 'axios'

const Login = (props) => {
    const clientId = "770954014094-li1c8gc7g71fiobgf3oahstmc59kkpd0.apps.googleusercontent.com";
    useEffect(() => {
        gapi.load("client:auth2", () => {
            gapi.auth2.init({ clientId: clientId })
        })
    }, [])

    const responseGoogle = (response) => {
        // console.log(response)
        axios.post('http://localhost:8000',
            { idToken: response.tokenId }
        ).then(response => {
            // console.log(response)
            props.response(response)
        })
            .catch(err => { console.log(err) })
    }
    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

export default Login