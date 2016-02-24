angular.module("toguro", [ "ngRoute", "ngResource", "toguro.geolocation"]);

var toguroModule = angular.module("toguro");

toguroModule.config(["$routeProvider", function ( $routeProvider ) {
		$routeProvider.when('/geolocation', { templateUrl: "app/common/views/geolocation.html", controller: 'geolocation' }).otherwise("/geolocation");
	} 		
]);