angular
  .module('hn-ionic.services')
  .factory('itemsService', itemsService);

function itemsService($resource) {
  var url = 'https://hacker-news.firebaseio.com/v0/item/:id.json';
  var paramDefaults = {id: '@id'}

  return $resource(url, paramDefaults);
}
