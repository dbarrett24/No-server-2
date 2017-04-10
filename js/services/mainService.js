angular.module('app').service('mainService', function($http){
    
// *****************************
    this.test1 = "Service is working";
// *****************************

    this.getCardData = function(){
        return $http({
            method: "GET",
            url: "./items.json"
        }).then(function(response){
            if(response.status === 200){
                console.log(response.data);
                return response.data;
            }
        })
    }
});