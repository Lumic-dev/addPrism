import axios from "./axios";
import { handleApiError } from "./handleError";
import {
    getToken,
    getUserId,
    setUserId,
    setLocalToken,
    getHeaders,
} from "../utils/token";

// 로그아웃
const logout = async () => {
    let tokenData = getToken();
    let headers = getHeaders();

    if (tokenData.type === "local") {
        try {
            sessionStorage.removeItem("localToken");
            sessionStorage.removeItem("userId");
            window.location.replace("/");
        } catch (error) {
            handleApiError(error);
        }
    } else if (tokenData.type === "kakao") {
        kakaoLogout(headers, tokenData);
    }
};

//카카오 로그아웃
const kakaoLogout = async (headers, tokenData) => {
    try {
        const res = await axios.post(
            "/user/breakToken",
            {
                tokenType: tokenData.type,
            },
            {
                headers: headers,
            }
        );
        if (res.data.logout === "success") {
            sessionStorage.removeItem("kakaoToken");
            sessionStorage.removeItem("userId");
            window.location.replace("/");
        }
    } catch (error) {
        handleApiError(error);
    }
};

export { logout };
