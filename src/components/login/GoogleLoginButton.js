import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { googleLogin } from "api/login";

const GoogleLoginButton = () => {
    const id = `${process.env.REACT_APP_GOOGLE_API_KEY}`;
    return (
        <GoogleOAuthProvider clientId={id}>
            <GoogleLogin
                onSuccess={response => {
                    googleLogin(response);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
                useOneTap
            />
        </GoogleOAuthProvider>
    );
};

export default GoogleLoginButton;
