module.exports = {
  root: true,
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
  },
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
    },
  },
  "plugins": [
    "import",
    "react-hooks",
  ],
  "rules": {
    'no-console': 0,
    'no-unused-vars': 1,
    'no-unexpected-multiline': 0,
    'no-empty': 1,
    semi: [ 2, 'always', ],
    'eol-last': [ 1, 'never', ],
    'space-before-function-paren': [ 1, 'never', ],
    'comma-dangle': [ 1, {
      'arrays': 'always',
      'objects': 'always',
    }, ],
    'array-bracket-spacing': [ 1, 'always', ],
    
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
    "react/display-name": 1,
  },
};