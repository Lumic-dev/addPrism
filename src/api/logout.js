import { handleApiError } from "./handleError";

// 로그아웃
const logout = async () => {
    try {
        sessionStorage.removeItem("localToken");
        sessionStorage.removeItem("kakaoToken");
        sessionStorage.removeItem("userId");
        window.location.replace("/");
    } catch (error) {
        handleApiError(error);
    }
};

export { logout };
