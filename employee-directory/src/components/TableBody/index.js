import React from "react";
import TableRow from "../TableRow";

function TableBody(props) {
    return (
        <tbody>
        {
            props.filteredEmpList.map(employee => (
                <TableRow 
                    key={employee.id}
                    id={employee.id}
                    photo={employee.photo}
                    name={employee.name}
                    email={employee.email}
                />
            ))
        }
    </tbody>
    )
}

export default TableBody;