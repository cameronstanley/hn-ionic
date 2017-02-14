angular
  .module('hn-ionic.components')
  .directive('commentCard', commentCard);

function commentCard(RecursionHelper, itemsService) {
  var directive = {
    restrict: 'E',
    scope: { commentId: '=' },
    template: '<div class="item item-text-wrap">' +
      '<p>{{comment.by}} <span am-time-ago="comment.time | amFromUnix"></span></p>' +
      '<div ng-bind-html="comment.text | trustAsHtml"></div>' +
      '<comment-card ng-repeat="childId in comment.kids" comment-id="childId" class="card"></comment-card>' +
      '</div>',
		compile: function(element) {
			return RecursionHelper.compile(element, function(scope, iElement, iAttrs, controller, transcludeFn){
				scope.comment = {};

				itemsService.get({id: scope.commentId}, function(response) {
					scope.comment = response;
				});
			});
		}
  };
  return directive;
}
