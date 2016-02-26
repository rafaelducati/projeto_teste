angular.module("toguro", [ "ngRoute", "ngResource", "toguro.geolocation"]);

var toguroModule = angular.module("toguro");

toguroModule.config(["$routeProvider", function ( $routeProvider ) {
		$routeProvider.when('/geolocation', { templateUrl: "app/common/views/geolocation.html", controller: 'geolocation' }).otherwise("/geolocation");
	} 		
]);;var geoModule = angular.module("toguro.geolocation", ["geolocationServices"]);

geoModule.controller("geolocation", ["$scope", "$rootScope", "GeoService", "$location", function ( $scope, $rootScope, GeoService, $location ) {
  $scope.geolocationInfo = [];

  $scope.getLocation = function () {  
    GeoService.get( { host: $scope.hostname }, 
      function ( response ) {      
        $scope.message = 'Test app!';
        $scope.geolocationInfo = response; 

        console.log( $scope.geolocationInfo );
      }, 
      function ( response ) {       
        $scope.message = response.data.error;      
      }
    );
  };
}]);;var geolocationServices = angular.module("geolocationServices", ["ngResource"]);

geolocationServices.factory('GeoService', ['$resource', function ( $resource ) {
  return $resource('http://ip-api.com/json/:host', {}, { 
    get: {
      method:"GET",
      params: {
        host: null
      }
    }
  });
}]); 