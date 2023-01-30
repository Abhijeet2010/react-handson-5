import React, { useState } from "react";

const withCounter = (WrappedComponent) => {
  return function CounterHOC(props) {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount(count + 1);
    };

    return (
      <WrappedComponent
        count={count}
        incrementCount={incrementCount}
        {...props}
      />
    );
  };
};

const Counter = ({ count, incrementCount }) => {
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default withCounter(Counter);
