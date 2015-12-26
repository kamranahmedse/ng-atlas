app.controller('MapCtrl', ['$scope', '$state', 'Country', function ($scope, $state, Country) {

	var mapCtrl = this,
		countryName = $state.params.name,
		selectedCountry = Country.selected,
		latitude = null,
		longitude = null;

	/**
	 * Refreshes the map based upon the passed parameters
	 */
	var refreshMap = function ( latitude, longitude, center ) {

		center = center || 9;

		mapCtrl.map = {
			center: {
				latitude: latitude, 
				longitude: longitude 
			},
			zoom: center
		};
	};

	// If the country is available
	if ( selectedCountry ) {

		latitude = selectedCountry.latlng[0];
		longitude = selectedCountry.latlng[1];

		refreshMap( latitude, longitude );

	} else if( countryName ) {

		Country.selectedName = countryName;

		// Fetch the country;
		Country.getDetail(countryName).then(function( countryDetail ) {
			Country.selected = selectedCountry = countryDetail[0];   	  // Populate in the service so to reuse it in other controllers

			latitude  = selectedCountry.latlng[0];
			longitude = selectedCountry.latlng[1];

			refreshMap(latitude, longitude);

		}, function () {
			console.error('Unknown error occured while trying to fetch the country.');
		});

	}

}]);