import React, { useState } from "react";
import styled from "styled-components";

export default function Sounds() {
    const [seleted, setSelected] = useState("sample1");

    return (
        <Container>
            <div className="select-box">
                <h1>{seleted}</h1>
            </div>
        </Container>
    );
}

const Container = styled.div`
    .select-box {
        h1 {
            font-size: 34px;
        }
    }
`;
