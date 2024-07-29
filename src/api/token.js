import axios from "./axios";
import {
    handleApiError,
    handleConnectionError,
    handleTokenError,
} from "./handleError";
import {
    getToken,
    getUserId,
    setUserId,
    setLocalToken,
    getHeaders,
} from "../utils/token";

// 토큰체크
const tokenCheck = async (success) => {
    try {
        const tokenData = getToken();
        //a

        if (tokenData.type == "local") {
            const userId = getUserId();
            const headers = getHeaders();

            const res = await axios.post(
                "/user/checkToken",
                {
                    tokenType: tokenData.type,
                },
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

export { tokenCheck, getToken, getHeaders };
