app.controller('HomeCtrl', ['$scope', 'Country', function ( $scope, Country ) {

	var home = this;

	home.search = {};
	home.search.countries = Country.countries;

	home.getCountry = function ( country ) {
		Country.getDetail(country.name).then(function( countryDetail ) {
			console.log( countryDetail );
		}, function () {
			console.error('Unknown error occured while trying to fetch the country.');
		});
	}

}]);