import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from "./components/Wrapper";
import EmployeeDirectory from "./components/EmployeeDirectory";

function App() {
  return (
    <Wrapper>
      <EmployeeDirectory />
    </Wrapper>
  );
}

export default App;