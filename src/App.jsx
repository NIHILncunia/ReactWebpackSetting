import React, { useState } from 'react';
import { css } from '@emotion/react';

const App = () => {
  const [ name, setName, ] = useState('React');

  const onclickButton = () => {
    if (name === 'React') {
      setName('Vue');
    } else {
      setName('React');
    }
  };

  const Color = css`
    color: red;
  `;

  return (
    <>
      <p css={Color}>Hello {name}!!</p>
      <button onClick={onclickButton}>변경</button>
    </>
  );
};

export default App;