angular.module("quizApp")
  .controller("triviaCtrl", function($scope) {
    $scope.author = "Beau";

    $scope.tech = [
      'angular',
      'html',
      'css',
      'Angular UI Router'
    ];

  })
