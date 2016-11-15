angular.module('oremBaseballApp')
.controller('rosterCtrl', function($scope, rosterService, $stateParams){
  $scope.showVarsity = true;
  $scope.showJv = false;
  $scope.showFrosh = false;

    rosterService.getRoster()
    .then(function(res){
      $scope.roster = res.data;
      console.log($scope.roster);
    }, function(err) {
      console.log(err);
    });

    $scope.playerId = Number($stateParams.id);


});
