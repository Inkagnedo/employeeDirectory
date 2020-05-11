import React from "react";
import Container from "react-bootstrap/Container";
import "./style.css";

function Title(props) {
    return (
        <Container>
            <h1 className="title">{props.children}</h1>
        </Container>
    )
}

export default Title;