import React from "react";
import { Form } from "react-bootstrap";

function SearchForm(props) {
    return (
        <Form.Group>
            <Form.Control
                type="text"
                placeholder="Search for employee's name"
                onChange={props.handleInput}
            />
        </Form.Group>
    );
}

export default SearchForm;