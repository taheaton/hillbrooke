// Import our core files
import angular from 'angular';

// Import our sub modules
import './app-core/index';
import './app-layout/index';
import './app-content/index';
import './app-user/index';


angular
  .module('app', ['app.core', 
                  'app.layout', 
                  'app.content', 
                  'app.user'])
;