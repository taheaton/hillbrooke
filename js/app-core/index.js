import angular from 'angular';

import 'angular-ui-router';
import 'angular-cookies';

import config from './config';
import run from './run';
import PARSE from './constants/parse.constant';


angular
  .module('app.core', ['ui.router', 'ngCookies'])
  .config(config)
  .constant('PARSE', PARSE)
  .run(run)
;