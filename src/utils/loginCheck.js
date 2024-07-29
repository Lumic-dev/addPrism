//로그인체크
const loginCheck = (isAlert) => {
    const pass = () => {
        if (sessionStorage.getItem("localToken") === null) {
            if (sessionStorage.getItem("kakaoToken") === null) {
                return false;
            }
        }
        if (sessionStorage.getItem("userId") === null) {
            return false;
        }
        return true;
    };
    if (isAlert) {
        if (pass === false) {
            alert("로그인 후 이용가능합니다.");
            return true;
        }
    } else {
        if (pass === true) {
            alert("로그인중에는 접근 하실 수 없습니다.");
            return false;
        }
    }
};

export default loginCheck;
