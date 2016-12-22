// var helloer = require('./hello.js');
import React from 'react';
import {render} from 'react-dom';
import Helloer from './hello.js';

render(<Helloer />,document.getElementById('app'));
// document.getElementById('app').appendChild(helloer());