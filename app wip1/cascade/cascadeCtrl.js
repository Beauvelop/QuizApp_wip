angular.module("quizApp")
  .controller("cascadeCtrl", function($scope) {
    $scope.author = "Beau";

    $scope.tech = [
      'angular',
      'html',
      'css',
      'Angular UI Router'
    ];

  })
