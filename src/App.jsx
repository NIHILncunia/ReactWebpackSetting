import React, { useState, useCallback } from 'react';
import { css } from '@emotion/react';
// import PropTypes from 'prop-types';

const App = () => {
  const [ name, setName, ] = useState('React');

  const onclickButton = useCallback(() => {
    if (name === 'React') {
      setName('Vue');
    } else {
      setName('React');
    }
  }, [ name, ]);

  const Color = css`
    color: #ffffff;
    background: #333333;
    padding: 10px;
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

// shape: PropTypes.shape({
//   item: PropTypes.string.isRequired,
// });

export default App;