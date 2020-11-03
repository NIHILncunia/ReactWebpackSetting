import React, { useState } from 'react';

const TestApp = () => {
  const [name, setName] = useState('React');

  return (
    <p>Hello {name}!!</p>
  );
};

export default TestApp;