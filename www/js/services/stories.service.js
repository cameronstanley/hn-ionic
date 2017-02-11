angular
  .module('hn-ionic')
  .factory('storiesService', storiesService);

function storiesService($resource) {
  var url = 'https://hacker-news.firebaseio.com/v0/item/:id.json';
  var paramDefaults = {id: '@id'}
  var actions = {
    'top': {
      method: 'GET',
      isArray: true,
      url: 'https://hacker-news.firebaseio.com/v0/topstories.json'
    }
  };

  return $resource(url, paramDefaults, actions);
}
