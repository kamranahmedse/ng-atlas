app.controller('HomeCtrl', ['$scope', '$state', 'Country', function ( $scope, $state, Country ) {

    var homeCtrl = this,
        countryName = $state.params.name;

    homeCtrl.search = {};
    homeCtrl.search.countries = Country.countries;

    // If the user reached this page through URL directly
    if ( countryName && !homeCtrl.search.selected ) {
        homeCtrl.search.selected = {};
        homeCtrl.search.selected.name = countryName;
    };

    /**
     * Gets the country detail through the restcountries.eu API
     * @param  {string} country The name of country
     * @return {null}
     */
    homeCtrl.loadCountry = function ( country ) {

        Country.selectedName = country.name;

        // Redirect to the country detail page
        $state.go('index.country', { 
            name    : country.name 
        });
    }

}]);