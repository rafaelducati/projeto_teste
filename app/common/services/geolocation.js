var geolocationServices = angular.module("geolocationServices", ["ngResource"]);

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