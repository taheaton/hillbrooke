import angular from 'angular';

import HomeController from './controllers/home.controller';
import PictureService from './services/picture.service';

angular
  .module('app.layout', [])
  .controller('HomeController', HomeController)
  .service('PictureService', PictureService)
;