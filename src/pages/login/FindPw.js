import React, { useState } from "react";

import LoginInput from "components/input/Input";

import { findPw } from "api/findUserInfo";

import * as Style from "../../assets/styleComponent/login/login";

export default function FindPw() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");

    const onChange = (e) => {
        let tName = e.target.name;
        let tValue = e.target.value;
        switch (tName) {
            case "id":
                setId(tValue);
                break;
            case "name":
                setName(tValue);
                break;
        }
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: name,
            id: id,
        };
        const sendInfo = findPw(data);
        if (sendInfo === "ok") {
            alert("해당 메일로 임시 비밀번호가 전송되었습니다.");
        }
    };
    return (
        <Style.Form onSubmit={onSubmit}>
            <div className="form-box">
                <h1>비밀번호를 찾고자하는 아이디와 이름 입력해주세요.</h1>
                <LoginInput
                    type="text"
                    name="id"
                    placeholder="아이디"
                    onChange={onChange}
                ></LoginInput>
                <LoginInput
                    type="text"
                    name="name"
                    placeholder="이름"
                    onChange={onChange}
                ></LoginInput>
                <input type="submit" />
            </div>
        </Style.Form>
    );
}
