// ReactMemo.js
import React, { useState } from 'react';

function ReactMemoComponent({ name }) {
  console.log(`ReactMemoComponent rendered with name: ${name}`);
  return <p>{name}</p>;
}

const ReactMemo = React.memo(ReactMemoComponent);

function ReactMemoContainer() {
  const [name, setName] = useState('John');

  return (
    <div>
      <p>ReactMemo example</p>
      <ReactMemo name={name} />
      <button onClick={() => setName('Jane')}>Change name</button>
    </div>
  );
}

export default ReactMemoContainer;