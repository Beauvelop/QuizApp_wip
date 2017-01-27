.directive("postAnswerDir", function($scope) {
  return {
    // scope: {},
    restrict: "E",
    replace: true, //makes it easier to go into the children of the div
    template: "<div>\n  <input type=\"text\" placeholder=\"answer\" ng-model=\"userAns\">\n  <button type=\"submit\" ng-click=\"counterInc()\">Submit</button>\n </div>",
    link: function(scope) {
      scope.$watch('userAns', function(value) {
        if (value === $scope.item[$scope.counter].answer) {
          console.log("This is the val: " + value);
        }

      })
    }
  }
})
