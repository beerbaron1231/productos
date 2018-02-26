define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name paginaApp.controller:HomeCtrl
   * @description
   * # HomeCtrl
   * Controller of the paginaApp
   */
  angular.module('paginaApp.controllers.HomeCtrl', ['firebase'])
    .controller('HomeCtrl',['$scope','$firebaseObject','$firebaseAuth', function ($scope, $firebaseObject,$firebaseAuth) {

      var self = this;
      var config = {
        apiKey: "AIzaSyAjk4IPJzq4a1147ODGaQImG9ny2uovViM",
        authDomain: "test-d94bb.firebaseapp.com",
        databaseURL: "https://test-d94bb.firebaseio.com",
        projectId: "test-d94bb",
        storageBucket: "test-d94bb.appspot.com",
        messagingSenderId: "972107288935"
      };
      firebase.initializeApp(config);
       var ref = firebase.database().ref();
  // download the data into a local object
  $scope.data = $firebaseObject(ref);

      console.log(ref)
      $scope.signIn = function() {
       firebase.auth().signInWithEmailAndPassword($scope.email, $scope.password).then(function(firebaseUsers) {
          console.log(firebaseUsers)
          
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
          console.log(errorCode)
        });
      }
      var provider = new firebase.auth.FacebookAuthProvider();
       $scope.test = function() {
       firebase.auth().signInWithPopup(provider).then(function(firebaseUsers) {
          console.log(firebaseUsers)
          
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
          console.log(errorCode)
        });
     }
    }]);
});
