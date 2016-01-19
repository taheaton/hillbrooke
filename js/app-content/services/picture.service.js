let PictureService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/picture';

  this.getAllPictures = getAllPictures;
  this.addPicture = addPicture;

  function Picture (pictureObj) {
    this.category = pictureObj.category;

    this.url = pictureObj.url;
  };

  function getAllPictures () {
    return $http.get(url, PARSE.CONFIG);
  };

   function addPicture (pictureObj) {
     let c = new Picture(pictureObj);
     return $http.post(url, c, PARSE.CONFIG);
   };


};

PictureService.$inject = ['$http', 'PARSE'];

export default PictureService;