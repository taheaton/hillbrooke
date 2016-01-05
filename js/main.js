// Import our core files
import angular from 'angular';
import 'angular-ui-router';
import 'angular-animate';

// Import config, run & constant, value blocks
import config from './config';

// Import our Controllers
import HomeController from './controllers/home.controller';
// import CarsController from './controllers/cars.controller';
// import CarsAddController from './controllers/cars-add.controller';

// Import our Constants
import PARSE from './constants/parse.constant';

// Import our Services
//import CarService from './services/car.service';

// Call our `angular` global object to add our blocks to
angular
  // Define our Module - common practice is to use 'app'
  .module('app', ['ui.router', 'ngAnimate'])
  // Our Configuration Block
  .config(config)
  // Register our Constants
  .constant('PARSE', PARSE)
  // Register our Controllers
   .controller('HomeController', HomeController)
  // .controller('CarsController', CarsController)
  // .controller('CarsAddController', CarsAddController)
  // Register our Services
  //.service('CarService', CarService)
;