let ContentService = function($http, PARSE, $cookies) {
  
   let url = PARSE.URL + 'users';

//   this.getAllContent   = getAllContent;
//   this.addCar       = addCar;
//   this.destroy      = destroy;
//   this.toggleFuzzy  = toggleFuzzy;
//   this.getCar       = getCar;
//   this.addImage     = addImage;

 //  function Content (content) {
//     this.make = carObj.make;
//     this.model = carObj.model;
//     this.year = Number(carObj.year);
//     this.name = carObj.name;
//     this.color = carObj.color;
//     this.fuzzydice = true;
//     this.image = carObj.image;
 // }

//   function toggleFuzzy (carObj) {
//     carObj.fuzzydice = carObj.fuzzydice ? false : true;
//     return $http.put(url + '/' + carObj.objectId, carObj, PARSE.CONFIG);
//   }

//   function getAllCars () {
//     return $http.get(url, PARSE.CONFIG);
//   }

//   function getCar (id) {
//     return $http.get(url + '/' + id, PARSE.CONFIG);
//   }

//   function addCar (carObj) {
//     let userId = $cookies.get('car-tracker-user');
//     let c = new Car(carObj);

//     let ACLObj = {};
//     ACLObj[userId] = {
//       read: true,
//       write: true
//     };

//     c.ACL = ACLObj;

//     c.user = {
//       __type: 'Pointer',
//       className: '_User',
//       objectId: userId
//     };

//     return $http.post(url, c, PARSE.CONFIG);
//   }

//   function addImage (imageUrl, car) {
//     car.image = imageUrl;
//     return $http.put(url + '/' + car.objectId, car, PARSE.CONFIG);
//   }

//   function destroy (name) {
//     return console.log(name + ' has been destroyed');
//   }

 };

ContentService.$inject = ['$http', 'PARSE', '$cookies'];

export default ContentService;