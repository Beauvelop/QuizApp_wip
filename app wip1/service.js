angular.module("quizApp")
  .service("myService", function($http, $q) {

    var deferred = $q.defer();

    $http.get('./dataObj.json')
      .then(function(data) {
        deferred.resolve(data);
      })

    this.getList1 = function() {
      return deferred.promise;
    }



  })
