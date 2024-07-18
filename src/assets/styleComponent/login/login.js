import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
    padding: 50px 0px;
    .form-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
        border: 1px solid #ddd;
        border-radius: 15px;
        padding: 40px 15px 40px 15px;
    }

    h1 {
        font-size: 20px;
        margin-bottom: 20px;
    }

    input {
        width: 320px;
        line-height: 24px;
    }

    input[type="submit"] {
        border: none;
        background-color: #444;
        color: #fff;
        line-height: 24px;
        padding: 5px;
        cursor: pointer;
        margin-top: 20px;
    }
    .find-info-box {
        padding-top: 20px;
        span {
            padding: 0px 10px;
            cursor: default;
        }
        .link {
            cursor: pointer;
        }
    }
`;
