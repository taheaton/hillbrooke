import angular from 'angular';
import '../app-core/index';

 import ContentController from './controllers/content.controller';
// import CarsAddController from './controllers/cars-add.controller';
// import CarSingleController from './controllers/car-single.controller';

 import ContentService from './services/content.service';
// import UploadService from './services/upload.service';
// import MainService from './services/maintenance.service';

// import carItem from './directives/car.directive';
// import addImage from './directives/addImage.directive';

angular
  .module('app.content', ['app.core'])
   .controller('ContentController', ContentController)
  // .controller('CarsAddController', CarsAddController)
  // .controller('CarSingleController', CarSingleController)
   .service('ContentService', ContentService)
  // .service('UploadService', UploadService)
  // .service('MainService', MainService)
  // .directive('carItem', carItem)
  // .directive('addImage', addImage)
;