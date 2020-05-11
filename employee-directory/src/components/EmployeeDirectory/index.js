import React from "react";
import "./style.css";
import { Table } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Title from "../Title";
import SearchForm from "../SearchForm";
import TableBody from "../TableBody";
import TableHeader from "../TableHeader";
import API from "../../utils/API";

class EmployeeDirectory extends React.Component {
    state = {
        employees: [],
        sortID: "desc",
        sortName: "asc",
        search: ""
    }

    componentDidMount = () => {
        this.getEmployeeData();
    }
    
    getEmployeeData = () => {
        API.search()
        .then(res => {
            const empList = this.createEmpList(res.data.data);
            this.setState({employees: empList});
        })
        .catch(err => console.log(err));
    }

    // Create and return a list(array) of employee data objects with id, name(full), photo, and email properties.
    createEmpList = list => {
        return list.map(emp => {
            const empData = {
                id: emp.id,
                name: `${emp.first_name} ${emp.last_name}`,
                photo: emp.avatar,
                email: emp.email
            }
            return empData;
        });
    }

    // Create and return a filtered list of employees.
    createFilteredEmpList = search => {
        let filteredList = this.state.employees.filter(item => {
            return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });
        return filteredList;
    }

    handleInput = event => {
        this.setState({search: event.target.value});
    }

    handleSortByID = event => {
        event.preventDefault();
        this.setState({employees: this.state.employees.sort((a, b) => {
            if(this.state.sortID === "asc") {
                this.setState({sortID: "desc"});
                return a.id - b.id;
            } else {
                this.setState({sortID: "asc"});
                return b.id - a.id;
            } 
        })});
    }

    handleSortByName = event => {
        event.preventDefault();
        this.setState({employees: this.state.employees.sort((a, b) => {
            const x = a.name.toLowerCase();
            const y = b.name.toLowerCase();
            if(this.state.sortName === "asc") {
                this.setState({sortName: "desc"});
                return x < y ? -1 : 1;
            } else {
                this.setState({sortName: "asc"});
                return x > y ? -1 : 1;
            }
        })});
    }

    render() {
        let filteredEmpList = this.createFilteredEmpList(this.state.search);

        return (
            <div>
                <Title>Employee Directory</Title>
                <Container>
                    <SearchForm
                        handleInput={this.handleInput}
                    />
                </Container>
                <Container>
                    <Table variant="dark" hover>
                        <TableHeader
                            headerID="ID"
                            handleSortByID={this.handleSortByID}
                            headerPhoto="Photo"
                            headerName="Name"
                            handleSortByName={this.handleSortByName}
                            headerEmail="Email"
                        />
                        <TableBody
                            filteredEmpList={filteredEmpList}
                        />
                    </Table>
                </Container>
            </div>
        );
    } 
}

export default EmployeeDirectory;