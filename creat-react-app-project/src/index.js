import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './containers/HomePage/index.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HomePage />, document.getElementById('root'));
registerServiceWorker();
