import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { googleLogin } from "api/login";

const GoogleLoginButton = () => {
    const login = useGoogleLogin({
        flow: 'auth-code',
        onSuccess: (response) => {
            const code = decodeURIComponent(response.code);
            // response.code를 PHP 백엔드로 전송
            try {
                const res = googleLogin(code);
                console.log('Credential key:', code);
                console.log('Access Token:', res);
            } catch (error) {
                console.error('Error during authentication:', error);
            }
        },
        onError: (error) => {
            console.error('Login Failed:', error);
        },
    });

    return (
        <div>
            <button onClick={() => login()}>Login with Google</button>
        </div>
    )
};

export default GoogleLoginButton;
