var geoModule = angular.module("toguro.geolocation", ["geolocationServices"]);

geoModule.controller("geolocation", ["$scope", "$rootScope", "GeoService", "$location", function ( $scope, $rootScope, GeoService, $location ) {
  $scope.geolocationInfo = [];

  $scope.getLocation = function () {  
    GeoService.get( { host: $scope.hostname }, 
      function ( response ) {      
        $scope.message = 'Fandangosssssss!';
        $scope.geolocationInfo = response; 

        console.log( $scope.geolocationInfo );
      }, 
      function ( response ) {       
        $scope.message = response.data.error;      
      }
    );
  };
}]);