angular.module("quizApp")
  .controller("myCtrl", function($scope, myService) {
    $scope.item = {} //to iterate over in ng-repeat
    $scope.counter = 1; //to increment on click
    $scope.userResponses = {
      total: {
        correct: 0,
        incorrect: 0
      },
      trivia: {
        correct: 0,
        incorrect: 0,
      }
    }; //object to contain accumulated answers

    var promise = myService.getList1();
    promise.then(function(data) {
      $scope.item = data.data;
      // console.log($scope.item);
    })


    // console.log("userResponses:");
    // console.dir($scope.userResponses.total.correct);

    $scope.responseSet = function(ans) {
      console.log(ans);
      $scope.ans = ans;
    }

    $scope.onSubmit = function(entry) {
      let corr = $scope.item[$scope.counter].answer;
      let ans = $scope.ans;
      $scope.counter++;
      if (corr === ans) {
        $scope.userResponses.total.correct++;
        $scope.userResponses.trivia.correct++;
        console.log("Right!");
      } else if (corr !== ans) {
        $scope.userResponses.total.incorrect++;
        $scope.userResponses.trivia.incorrect++;
        console.log("Wrong!");
      }
      // $scope.scores();
      console.log("$.uR.total.corr: " + $scope.userResponses.total.correct);
    }


    $scope.scores = function() {
      $scope.summary = $scope.userResponses.total;
      $scope.sumTrivia = $scope.userResponses.trivia;
    }
    $scope.scores();
  }) //end of controller
