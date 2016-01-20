let ContentController = function(ContentService, $cookies) {
  
   let vm = this;
   let user = $cookies.get('hillbrooke-name');
   vm.user = user;
   console.log(user);

 //   vm.content = [];
 //   vm.clicked = clicked;

 //   activate();

 //   function activate () {
 //     Service.getAllContent().then( (res) => {
 //       vm.content = res.data.results;
 //     });
 //   }

 //   function clicked (content) {
 //     console.log('clicked', content.name);
 //   }
  
  };

ContentController.$inject = ['ContentService', '$cookies'];

export default ContentController;