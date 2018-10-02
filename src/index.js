import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {makeMainRoutes} from './routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(makeMainRoutes(), document.getElementById('root'));
registerServiceWorker();
