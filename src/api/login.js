import axios from "./axios";
import { handleApiError, handleConnectionError } from "./handleError";

// 로그인
const login = async (data) => {
    try {
        const res = await axios.post("/user/loginUser", data);
        if (!handleConnectionError(res.data)) {
            return 1;
        }
        if (res.data.loginCheck === "success") {
            sessionStorage.setItem("localToken", res.data.token);
            return "ok";
        } else {
            alert("아이디 또는 비밀번호가 틀렸습니다.");
            return "fail";
        }
    } catch (error) {
        handleApiError(error);
    }
};

// 구글 로그인
const googleLogin = async (data) => {
    try {
        const accessToken = await axios.post(`${process.env.REACT_APP_GOOGLE_REDIRECT_URI}`, {
            code: data
        });
        console.log(accessToken);
        return accessToken;
    } catch (error) {
        handleApiError(error);
    }
    // try {
    //     const credential = data.credential;
    //     const res = await axios.post('/user/google_login_test', { credential });
    //     if (!handleConnectionError(res.data)) {
    //         return;
    //     }
    //     console.log(res.data);
    // } catch (error) {
    //     handleApiError(error);
    // }
};
//카카오 로그인
const kakaoLogin = async (data) => {
    try {
        const res = await axios.post("/user/kakao_login", data);
        console.log(res.data);
        if (res.data.loginCheck === "success") {
            sessionStorage.setItem("kakaoToken", res.data.token);
            sessionStorage.setItem("userId", res.data.user_id);
            window.location.replace("/");
        }
    } catch (error) {
        handleApiError(error);
    }
};

export { login, googleLogin, kakaoLogin };
