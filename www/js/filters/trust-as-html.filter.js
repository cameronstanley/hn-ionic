angular
  .module('hn-ionic.filters')
  .filter('trustAsHtml', trustAsHtml);

function trustAsHtml($sce) {
  return filter;

  function filter(input) {
    return $sce.trustAsHtml(input);
  }
}
