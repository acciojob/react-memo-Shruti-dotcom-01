// UseMemo.js
import React, { useMemo } from 'react';

function UseMemo() {
  const [count, setCount] = React.useState(0);

  const expensiveCalculation = useMemo(() => {
    console.log('Expensive calculation');
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>UseMemo example</p>
      <p>Count: {count}</p>
      <p>Expensive calculation: {expensiveCalculation}</p>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
    </div>
  );
}

export default UseMemo;