import React, { useState, useEffect } from "react";
import "./Counter.css";

import { Button } from "react-bootstrap";

const CounterFunction = () => {
  const [count, setCount] = useState(0);

  // Component did Mount && will unmout
  useEffect(() => {
    console.log("Component did mount");
  }, []);

  // Component did update in all update
  //   useEffect(() => {
  //     alert("Component did update");
  //   });
  // update only when the counter is updated
  useEffect(() => {
    alert("update");
  }, [count]);
  // component will unmount
  useEffect(() => {
    return () => {
      alert("goodbye");
    };
  }, []);

  //   first method or directly in the button
  const handleClickPlus = () => {
    setCount(count + 1);
  };

  const handleClickMinus = () => {
    count > 0 && setCount(count - 1);
  };

  return (
    <div className="counterPart">
      <div className="counterContent">
        <Button
          variant="success"
          className="addMinusBtn"
          onClick={handleClickPlus}
          //   onClick={()=>setCount(count+1)}
        >
          +
        </Button>
        <h2>{count}</h2>
        <Button
          variant="success"
          className="addMinusBtn"
          onClick={handleClickMinus}
        >
          -
        </Button>
      </div>
    </div>
  );
};

export default CounterFunction;
