angular
  .module('hn-ionic')
  .controller('StoriesController', StoriesController);

function StoriesController($scope, storiesService) {
  $scope.loadMore = loadMore;
  $scope.page = 0;
  $scope.storyIds = [];
  $scope.stories = [];

  getTopStoryIds();

  function getTopStoryIds() {
    storiesService.top(function(response) {
      $scope.storyIds = response;
      loadMore();
    });
  }

  function loadMore() {
    for (var i = 0; i < 20 && i + $scope.page * 20 < $scope.storyIds.length; i++) {
      storiesService.get({id: $scope.storyIds[i + ($scope.page * 20)]}, function(response) {
        $scope.stories.push(response);
      });
    }

    $scope.$broadcast('scroll.infiniteScrollComplete');
    $scope.page++;
  }
}
