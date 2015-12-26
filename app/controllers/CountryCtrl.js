app.controller('CountryCtrl', ['$scope', '$state', 'Country', function ( $scope, $state, Country ) {

	var countryName = $state.params.name,
		countryCtrl = this; 

	// If we already have the current country fetched
	if ( Country.selected && Country.selected.name === countryName ) {
		countryCtrl.selected = Country.selected;
	} else if ( countryName ){

		// Fetch the country
		Country.selectedName = countryName;

		Country.getDetail(countryName).then(function( countryDetail ) {
			countryCtrl.selected = countryDetail[0];
			Country.selected = countryDetail[0];   	  // Populate in the service so to reuse it in other controllers
		}, function () {
			console.error('Unknown error occured while trying to fetch the country.');
		});
	}


}]);