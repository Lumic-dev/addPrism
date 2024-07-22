import React from "react";
import { Route, Routes } from "react-router-dom";
import KakaoLogin from "components/oauth/KakaoLogin";

export default function Oauth() {
    return (
        <Routes>
            <Route
                path="/kakao/callback"
                element={<KakaoLogin></KakaoLogin>}
            ></Route>
        </Routes>
    );
}
