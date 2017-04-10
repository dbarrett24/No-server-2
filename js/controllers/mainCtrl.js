angular.module('app').controller('mainCtrl', function($scope, mainService){

// *****************************
    $scope.test = "Controller is working";
    $scope.test1 = mainService.test1;
// *****************************

    $scope.getCardData = function(){
        mainService.getCardData().then(function(response){
            console.log(response)
            $scope.cardInfo =  response;
        })
    }
    $scope.getCardData();
});