import $ from 'jquery';

$('.app').css('color', 'red');

globalLib({x: 1});

globalLib.doSomething();

import moduleLib from './module-lib';
moduleLib.doSomething();

import umdLib from './umd-lib';
umdLib.doSomething();
