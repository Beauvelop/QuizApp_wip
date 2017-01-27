angular.module("quizApp")
  .controller("myCtrl", function($scope, myService) {
    $scope.item = {} //to iterate over in ng-repeat
    $scope.counter = 1; //to increment on click

    var promise = myService.getList1();
    promise.then(function(data) {
      console.log('data.data[x].title: ' + data.data[1].title);
      $scope.item = data.data;
      console.log($scope.item);
    })

    $scope.userResponseModel = {
      correct: 0,
      incorrect: 0,
      triviaCorrect: 0,
      triviaIncorrect: 0
    }; //object to contain accumulated answers
    //
    $scope.onSubmit = function(entry) {
      //
      //   console.log("entry is: " + entry);
      $scope.counter++;
      //   console.log('counter now is: ' + $scope.counter);
      //   //   console.log("Entry: " + $scope.item.answer);
      //   //
      //   //
      //   //   if (entry === $scope.item.answer) {
      //   //     console.log("nice!");
      //   //     $scope.userResponseModel.correct += 1;
      //   //   } else if (entry === "undefined" || entry !== $scope.item.answer) {
      //   //     console.log("You suck!");
      //   //     $scope.userResponseModel.incorrect += 1;
      //   //   }
      //   //   console.log("Wrong: " + $scope.userResponseModel.incorrect + " Right: " +
      //   //     $scope.userResponseModel.correct);
      //   //
      //   //
    }
  })
