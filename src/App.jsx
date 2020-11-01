import React, { useState } from 'react';
import { hot } from 'react-hot-loader';

const TestApp = () => {
  const [name, setName] = useState('React');

  return (
    <p>Hello {name}!!</p>
  );
};

export default hot(module)(TestApp);