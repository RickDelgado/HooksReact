import { useState } from "react";

const useCounter = (initialValue = 1) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    if (counter === 1) return;
    setCounter((prev) => prev - 1);
  };

  return {
    //properties
    counter,
    //methods
    increment,
    decrement,
  };
};

export default useCounter;
