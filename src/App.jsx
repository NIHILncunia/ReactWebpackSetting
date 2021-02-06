import React, { useState } from 'react';
import { css } from '@emotion/react';
// import PropTypes from 'prop-types';

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

// name.propTypes = {
//
// };

// node: PropTypes.node.isRequired,
// string: PropTypes.string.isRequired,
// number: PropTypes.number.isRequired,
// func: PropTypes.func.isRequired,
// object: PropTypes.object.isRequired,
// array: PropTypes.array.isRequired,
// bool: PropTypes.bool.isRequired,
// symbol: PropTypes.symbol.isRequired,
// elementType: PropTypes.elementType.isRequired,

export default App;