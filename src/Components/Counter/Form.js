import React from "react";
import "./Form.css";
const Form = ({
  handleChangeFName,
  setLastName,
  setFirstName,
  firstName,
  lastName,
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter firstName ..."
        className="inputs"
        onChange={handleChangeFName}
        value={firstName}
      />
      <input
        type="text"
        placeholder="Enter lastName ..."
        className="inputs"
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
      />
      <button
        onClick={() => {
          setLastName("");
          setFirstName("");
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Form;
