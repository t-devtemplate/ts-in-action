import React from 'react';
import ReactDOM from 'react-dom'

// import Hello from './components/demo/Hello'
// import HelloClass from './components/demo/HelloClass'
// import HelloHOC from './components/demo/HelloHOC';
import HelloHooks from './components/demo/HelloHooks';

ReactDOM.render(
  // <HelloClass name="TypeScript!" />
  // <HelloHOC name="TypeScript!" />
  <HelloHooks name="TypeScript!" />,
  document.querySelectorAll('.app')[0]
)




