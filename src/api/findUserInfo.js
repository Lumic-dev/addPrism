import axios from "./axios";
import { handleApiError, handleConnectionError } from "./handleError";

// 비밀번호 찾기
const findPw = async (data) => {
    try {
        const res = await axios.post("/user/find_user_pw", data);
        if (!handleConnectionError(res.data)) {
            return;
        }
        console.log(res.data);
        if (res.data === "ok") {
            alert("임시 비밀번호가 메일로 전송되었습니다.");
            window.location.replace("/user/login");
        } else {
            alert("해당하는 정보를 찾을 수 없습니다.");
        }
    } catch (error) {
        handleApiError(error);
    }
};

export { findPw };
