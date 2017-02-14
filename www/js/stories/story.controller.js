angular
  .module('hn-ionic')
  .controller('StoryController', StoryController);

function StoryController($cordovaInAppBrowser, $scope, $stateParams, itemsService) {
  $scope.story = {};

  getStory();

  function getStory() {
    itemsService.get({id: $stateParams.id}, function(response) {
      $scope.story = response;

      if ($scope.story.url) {
        var options = {
          location: 'yes',
          clearcache: 'yes',
          toolbar: 'yes'
        };

        document.addEventListener("deviceready", function () {
          $cordovaInAppBrowser.open($scope.story.url, '#story-content', options);
        }, false);
      }
    });
  }
}
