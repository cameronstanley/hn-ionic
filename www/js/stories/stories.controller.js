angular
  .module('hn-ionic')
  .controller('StoriesController', StoriesController);

function StoriesController($ionicLoading, $scope, $stateParams, storiesService) {
  $scope.loadMore = loadMore;
  $scope.page = 0;
  $scope.storyIds = [];
  $scope.stories = [];
  $scope.type = $stateParams.type;

  var perPage = 20;

  getStoryIds();

  function getStoryIds() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-spinner></ion-spinner>'
    });

    switch ($scope.type) {
      case 'top':
        storiesService.top(_getStoryIdsSuccess);
        break;
      case 'new':
        storiesService.new(_getStoryIdsSuccess);
        break;
      case 'best':
        storiesService.best(_getStoryIdsSuccess);
        break;
      case 'ask':
        storiesService.ask(_getStoryIdsSuccess);
        break;
      case 'show':
        storiesService.show(_getStoryIdsSuccess);
        break;
      case 'job':
        storiesService.job(_getStoryIdsSuccess);
        break;
      default:
        storiesService.top(_getStoryIdsSuccess);
    }
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

  function _getStoryIdsSuccess(response) {
    $scope.storyIds = response;
    loadMore();
  }
}
