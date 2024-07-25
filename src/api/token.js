import axios from "./axios";
import {
    handleApiError,
    handleConnectionError,
    handleTokenError,
} from "./handleError";

const getToken = () => {
    console.log("로컬 토큰 : " + sessionStorage.getItem("localToken"));
    console.log("카카오 토큰 : " + sessionStorage.getItem("kakaoToken"));

    if (sessionStorage.getItem("localToken") !== null) {
        let tokenData = {
            type: "local",
            token: sessionStorage.getItem("localToken"),
        };
        return tokenData;
    } else if (sessionStorage.getItem("kakaoToken") !== null) {
        let tokenData = {
            type: "kakao",
            token: sessionStorage.getItem("kakaoToken"),
        };
        return tokenData;
    }
};

const getUserId = () => {
    return sessionStorage.getItem("userId");
};

const setUserId = (userId) => {
    sessionStorage.setItem("userId", userId);
};

const setLocalToken = (token) => {
    sessionStorage.setItem("localToken", token);
};

const getHeaders = () => {
    const token = getToken();

    return {
        Authorization: `Bearer ${token.token}`,
        "Content-Type": "application/json",
    };
};

// 토큰체크
const tokenCheck = async (success) => {
    try {
        const tokenData = getToken();
        console.log(tokenData.type);
        if (tokenData.type == "local") {
            const userId = getUserId();
            const headers = getHeaders();

            const res = await axios.post(
                "/user/checkToken",
                { tokenType: tokenData.type },
                {
                    headers: headers,
                }
            );

            if (!handleConnectionError(res.data)) {
                return;
            }

            if (!userId) {
                setUserId(res.data.id);
            } else {
                if (res.data.res === "renew") {
                    setLocalToken(res.data.Atoken);
                    setUserId(res.data.id);
                } else if (userId !== res.data.id) {
                    handleTokenError(
                        "아이디값이랑 토큰값 불일치로 인해 로그아웃 됩니다."
                    );
                }
            }
            success(res.data);
        } else if (tokenData.type == "kakao") {
            const userId = getUserId();
            const headers = getHeaders();
            console.log("카카오 토큰 " + headers);

            const res = await axios.post(
                "/user/checkToken",
                { tokenType: tokenData.type },
                {
                    headers: headers,
                }
            );

            if (!handleConnectionError(res.data)) {
                return;
            }

            if (!userId) {
                setUserId(res.data.id);
            } else {
                if (res.data.res === "renew") {
                    setLocalToken(res.data.Atoken);
                    setUserId(res.data.id);
                } else if (userId !== res.data.id) {
                    handleTokenError(
                        "아이디값이랑 토큰값 불일치로 인해 로그아웃 됩니다."
                    );
                }
            }
            success(res.data);
        } else {
            console.log("삑남");
        }
    } catch (error) {
        handleApiError(error);
    }
};

export { tokenCheck };
