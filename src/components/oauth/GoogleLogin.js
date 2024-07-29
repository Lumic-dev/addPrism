import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { googleLogin } from "api/login";

export default function GoogleLogin() {
    const navi = useNavigate();

    useEffect(() => {
        const data = new URL(document.location.toString()).searchParams;
        console.log(data);
        const loginResult = googleLogin(codeData);
        console.log(loginResult);
    }, []);

    return <div></div>;
}
