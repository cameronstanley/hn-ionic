angular
  .module('hn-ionic.filters')
  .filter('capitalize', capitalize);

function capitalize() {
  return filter;

  function filter(input) {
    if (input !== null) {
      input = input.toLowerCase();
      return input.substring(0,1).toUpperCase() + input.substring(1);
    }
  }
}
