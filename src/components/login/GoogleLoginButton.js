import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { googleLogin } from "api/login";

const GoogleLoginButton = () => {
    const id = '990459561290-b7hlncolnfh5o8d0cqffrvpe5107lg6h.apps.googleusercontent.com';

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
