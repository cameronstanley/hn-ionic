angular
  .module('hn-ionic')
  .controller('StoriesController', StoriesController);

function StoriesController($ionicLoading, $scope, storiesService) {
  $scope.loadMore = loadMore;
  $scope.page = 0;
  $scope.storyIds = [];
  $scope.stories = [];

  var perPage = 20;

  getTopStoryIds();

  function getTopStoryIds() {
    $ionicLoading.show({
      template: "<p>Loading...</p><ion-spinner></ion-spinner>"
    });

    storiesService.top(function(response) {
      $scope.storyIds = response;
      loadMore();
    });
  }

  function loadMore() {
    for (var i = 0; i < perPage && i + $scope.page * perPage < $scope.storyIds.length; i++) {
      storiesService.get({id: $scope.storyIds[i + ($scope.page * perPage)]}, function(response) {
        $scope.stories.push(response);
      });
    }

    $scope.$broadcast('scroll.infiniteScrollComplete');
    $scope.page++;
    $ionicLoading.hide();
  }
}
