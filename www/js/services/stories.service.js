angular
  .module('hn-ionic.services')
  .factory('storiesService', storiesService);

function storiesService($resource) {
  var url = 'https://hacker-news.firebaseio.com/v0/item/:id.json';
  var paramDefaults = {id: '@id'}
  var actions = {
    'top': {
      method: 'GET',
      isArray: true,
      url: 'https://hacker-news.firebaseio.com/v0/topstories.json'
    },
    'new': {
      method: 'GET',
      isArray: true,
      url: 'https://hacker-news.firebaseio.com/v0/newstories.json'
    },
    'best': {
      method: 'GET',
      isArray: true,
      url: 'https://hacker-news.firebaseio.com/v0/beststories.json'
    },
    'ask': {
      method: 'GET',
      isArray: true,
      url: 'https://hacker-news.firebaseio.com/v0/askstories.json'
    },
    'show': {
      method: 'GET',
      isArray: true,
      url: 'https://hacker-news.firebaseio.com/v0/showstories.json'
    },
    'job': {
      method: 'GET',
      isArray: true,
      url: 'https://hacker-news.firebaseio.com/v0/jobstories.json'
    }
  };

  return $resource(url, paramDefaults, actions);
}
