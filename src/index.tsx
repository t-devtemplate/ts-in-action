import React from 'react';
import ReactDOM from 'react-dom'

// import Hello from './components/demo/Hello'
// import HelloClass from './components/demo/HelloClass'
import HelloHOC from './components/demo/HelloHOC';

ReactDOM.render(
  <HelloHOC name="TypeScript!" loading={false}/>,
  document.querySelectorAll('.app')[0]
)




