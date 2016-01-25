let HomeController = function(PARSE, $scope, $timeout, $cookies, UserService) {

  console.log(PARSE);

  let vm = this;
  
  vm.title = 'Home Page';


  let user = ($cookies.get('hillbrooke-name')) ? $cookies.get('hillbrooke-name') : 'Guest';
  vm.user = user;
  console.log(user);

  // vm.addPicture = addPicture;

  // function addPicture (pictureObj) {
  //   PictureService.addPicture(pictureObj).then( (res) => {
  //     console.log(res);
  //   });
  //};
  $scope.logout = function logout() {
    UserService.logout();
    console.log(logout);
  };

  var INTERVAL = 50000,
        slides = [{id:"image00", src:"./images/cover.jpg"},
        {id:"image01", src:"./images/kids.jpg"},
        {id:"image02", src:"./images/party.jpg"},
        {id:"image03", src:"./images/sign.jpg"},
        {id:"image04", src:"./images/swimteam.jpg"},
        {id:"image05", src:"./images/tennis.jpg"}];

    function setCurrentSlideIndex(index) {
        $scope.currentIndex = index;
    }

    function isCurrentSlideIndex(index) {
        return $scope.currentIndex === index;
    }

    function nextSlide() {
        $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        $timeout(nextSlide, INTERVAL);
    }



    function loadSlides() {
        $timeout(nextSlide, INTERVAL);
    }
    
    $scope.slides = slides;
    $scope.currentIndex = 0;
    $scope.setCurrentSlideIndex = setCurrentSlideIndex;
    $scope.isCurrentSlideIndex = isCurrentSlideIndex;

    loadSlides();
};
HomeController.$inject = ['PARSE', '$scope', '$timeout', '$cookies', 'UserService'];

export default HomeController;