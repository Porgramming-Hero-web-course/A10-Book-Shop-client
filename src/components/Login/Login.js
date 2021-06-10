import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const [error, setError] = useState();
    let { from } = location.state || { from: { pathname: "/" } };
   
    const handleGoogleSignIn = () => {
        const GoogleProvider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(GoogleProvider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                const loggedInUser = {name: user.displayName, email: user.email, img: user.photoURL}
                localStorage.setItem('user', JSON.stringify(loggedInUser));
                history.replace(from)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                setError(errorMessage);
                // ...
            });

    }


    return (
        <div className='App'>
            <button className="btn btn-primary" onClick={handleGoogleSignIn}>Login via Google</button>
            <p>{error}</p>
        </div>
    );
};

export default Login;