const getToken = () => {
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

export { getToken, getUserId, setUserId, setLocalToken, getHeaders };
