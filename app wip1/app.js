angular.module("quizApp", ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/');
    // $urlRouterProvider.otherwise('/'); //if you go to wrong url--redirect

    $stateProvider
      .state('home', {
        controller: 'homeCtrl',
        url: '/',
        templateUrl: './home/home.html'
      })
      .state('trivia', {
        controller: 'triviaCtrl',
        url: '/trivia',
        templateUrl: './trivia/trivia.html'
      })
      .state('vocab', {
        controller: 'vocabCtrl',
        url: '/vocab', //cascade/cascadeCtrl.js
        templateUrl: './vocab/vocab.html'
      })
      .state('cascade', {
        controller: 'cascadeCtrl',
        url: '/cascade', //cascade/cascadeCtrl.js
        templateUrl: './cascade/cascade.html'
      })
  })
