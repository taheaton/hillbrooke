let contentItem = function($state, ContentService) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      content: '=',
    },
    template: `
      <div class="links">
        <div class="panelRight">
          <ul>
          <li><span class="bold">Summary:  </span>{{ movie.plot }}</li><hr>
          <li><span class="bold">Starring:  </span>{{ movie.actor }}</li>
          <li><span class="bold">Released:  </span>{{ movie.year }}</li>
         
           <li><span class="bold">Genre:  </span>{{ movie.genre }}</li>
           <li><span class="bold">Director:  </span>{{ movie.director }}</li>
           <li><span class="bold">Writer:  </span>{{ movie.writer }}</li>
           <li><span class="bold">Sidekick ID:  </span><a href>{{ movie.id }}</a></li>
           
           
           
           <li><span class="bold">Awards:  </span>{{ movie.awards }}</li>
          
          </ul>
          <p><i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>   <i class="fa fa-film"></i>
        </div>

      </div>

    `,
    controller: 'ContentController as vm',
     link: function (scope, element, attrs) {
       element.on('click', function () {
         $state.go('root.content');
       });
     }
  };

};

contentItem.$inject = ['$state', 'ContentService'];

export default contentItem;