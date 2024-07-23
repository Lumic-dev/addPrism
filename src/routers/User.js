import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Login from "pages/login/Login";
import Register from "pages/login/Register";
import FindId from "pages/login/FindId";
import FindPw from "pages/login/FindPw";

export default function User() {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/Regist" element={<Register></Register>}></Route>
                <Route path="/FindId" element={<FindId></FindId>}></Route>
                <Route path="/FindPw" element={<FindPw></FindPw>}></Route>
            </Routes>
        </>
    );
}
