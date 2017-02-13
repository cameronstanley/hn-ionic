angular
  .module('hn-ionic')
  .config(routes);

function routes($stateProvider) {
  $stateProvider
    .state('app.stories', {
      url: '/stories?type',
      views: {
        'menuContent': {
          templateUrl: 'templates/stories.html',
          controller: 'StoriesController'
        }
      }
    })

    .state('app.story', {
      url: '/stories/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/story.html',
          controller: 'StoryController'
        }
      }
    });
}
