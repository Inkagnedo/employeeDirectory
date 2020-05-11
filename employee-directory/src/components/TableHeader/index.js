import React from "react";


function TableHeader(props) {
    return (
        <thead>
        <tr>
            <th onClick={props.handleSortByID}>{props.headerID}</th>
            <th>{props.headerPhoto}</th>
            <th onClick={props.handleSortByName}>{props.headerName}</th>
            <th>{props.headerEmail}</th>
        </tr>
        </thead>
    )
}

export default TableHeader;