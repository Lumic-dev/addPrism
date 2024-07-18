import axios from "./axios";
import { handleApiError, handleConnectionError } from "./handleError";

// 비밀번호 찾기
const findPw = async (data) => {
    try {
        const res = await axios.post("/user/find_user_pw", data);
        if (!handleConnectionError(res.data)) {
            return;
        }
        success(res.data);
    } catch (error) {
        handleApiError(error);
    }
};

export { findPw };
