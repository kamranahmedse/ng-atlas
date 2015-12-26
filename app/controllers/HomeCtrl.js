app.controller('HomeCtrl', ['$scope', '$state', 'Country', function ( $scope, $state, Country ) {

	var home = this;

	home.search = {};
	home.search.countries = Country.countries;

	/**
	 * Gets the country detail through the restcountries.eu API
	 * @param  {string} country The name of country
	 * @return {null}
	 */
	home.loadCountry = function ( country ) {
		$state.go('index.country', { 
			name	: country.name 
		});
	}

}]);