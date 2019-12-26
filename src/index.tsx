import React from 'react';
import ReactDOM from 'react-dom';

// import Hello from './components/demo/Hello';
// import HelloClass from './components/demo/HelloClass';
// import HelloHOC from './components/demo/HelloHOC';
// import HelloHooks from './components/demo/HelloHooks';
import App from './components/App';

ReactDOM.render(
    // <Hello name="TypeScript" />,
    // <HelloClass name="TypeScript" />,
    // <HelloHOC name="TypeScript" loading={false} />,
    // <HelloHooks name="TypeScript" />,
    <App />,
    document.querySelectorAll('.app')[0]
);
