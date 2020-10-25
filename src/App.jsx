import React, { useState } from 'react';
import { hot } from 'react-hot-loader';

const TestApp = () => {
  const [word, setWord] = useState('World');

  return (
    <p>Hello {word}!!</p>
  );
};

export default hot(module)(TestApp);