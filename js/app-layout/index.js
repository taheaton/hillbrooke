import angular from 'angular';

import HomeController from './controllers/home.controller';
import PictureService from './services/picture.service';
import LogoutService from './services/logout.service';
angular
  .module('app.layout', [])
  .controller('HomeController', HomeController)
  .service('PictureService', PictureService)
  .service('LogoutService', LogoutService)
;