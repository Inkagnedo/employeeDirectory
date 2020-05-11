import React from "react";
import "./style.css";
import { Image } from "react-bootstrap";

function TableRow(props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td><Image src={props.photo} alt="face" roundedCircle></Image></td>
            <td>{props.name}</td>
            <td>{props.email}</td>
        </tr>
    );
}

export default TableRow;