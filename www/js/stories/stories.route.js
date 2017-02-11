angular
  .module('hn-ionic')
  .config(routes);

function routes($stateProvider) {
  $stateProvider
    .state('app.stories', {
      url: '/stories',
      views: {
        'menuContent': {
          templateUrl: 'templates/stories.html',
          controller: 'StoriesController'
        }
      }
    });
}
