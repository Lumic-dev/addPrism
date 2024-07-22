import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "api/login";

import loginCheck from "utils/loginCheck";
import LoginInput from "components/input/Input";

import * as Style from "assets/styleComponent/login/login";

const Login = () => {
    const nav = useNavigate();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=&redirect_uri=&response_type=code`;

    // 로그인 요청
    const onSubmit = async (e) => {
        e.preventDefault();
        const data = {
            id: id,
            pw: password,
        };

        const loginChek = await login(data);

        if (loginChek === "ok") {
            window.location.replace("/");
        }
    };

    // 로그인 되있으면 메인으로
    useEffect(() => {
        if (loginCheck(false) === false) {
            nav("/");
        }
    }, []);

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        switch (name) {
            case "id":
                setId(value);
                break;
            case "password":
                setPassword(value);
                break;
            default:
                break;
        }
    };

    const loginHandler = () => {
        window.location.href = link;
    };
    return (
        <>
            <Style.Form onSubmit={onSubmit}>
                <div className="form-box">
                    <h1>로그인</h1>
                    <LoginInput
                        type="text"
                        name="id"
                        placeholder="아이디"
                        onChange={onChange}
                    ></LoginInput>
                    <LoginInput
                        type="password"
                        name="password"
                        placeholder="비밀번호"
                        onChange={onChange}
                    ></LoginInput>
                    <input type="submit" value="로그인" />
                    <div className="find-info-box">
                        <span
                            className="link"
                            onClick={() => {
                                nav("/user/findId");
                            }}
                        >
                            아이디 찾기
                        </span>
                        <span>|</span>
                        <span
                            className="link"
                            onClick={() => {
                                nav("/user/findPw");
                            }}
                        >
                            비밀번호 찾기
                        </span>
                        <span>|</span>
                        <span onClick={loginHandler}>카카오 로그인</span>
                    </div>
                </div>
            </Style.Form>
        </>
    );
};

export default Login;
