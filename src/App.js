import React, { useState } from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import Form from "./Components/Counter/Form";
import CounterFunction from "./Components/Counter/CounterFunction";

function App() {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // toggleShow 1st method or directly in the button
  const handleClickShow = () => {
    setShow(!show);
  };

  const handleChangeFName = (e) => {
    setFirstName(e.target.value);
  };

  return (
    <div className="App">
      <Form
        setLastName={setLastName}
        handleChangeFName={handleChangeFName}
        setFirstName={setFirstName}
        firstName={firstName}
        lastName={lastName}
      />
      <h3>
        Name : {firstName} {lastName}
      </h3>
      <Button variant="success" onClick={handleClickShow} className="showBtn">
        {show ? "Hide Counter" : "Show Counter"}
      </Button>

      {show && <CounterFunction />}
    </div>
  );
}

export default App;
