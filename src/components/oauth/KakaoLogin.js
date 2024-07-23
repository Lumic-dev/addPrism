import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { kakaoLogin } from "api/login";

export default function KakaoLogin() {
    const navi = useNavigate();

    useEffect(() => {
        const code = new URL(document.location.toString()).searchParams.get(
            "code"
        );
        const codeData = {
            code: code,
        };
        const loginResult = kakaoLogin(codeData);
    }, []);

    return <div></div>;
}
