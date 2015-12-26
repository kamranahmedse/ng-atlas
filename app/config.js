app.config(function ( $stateProvider, $urlRouterProvider ) {

 	$urlRouterProvider.otherwise("/index");

	$stateProvider
		.state('index', {
			url: "",
			controller: 'HomeCtrl as homeCtrl',
			templateUrl: 'views/home.html'
		})
		.state('index.slashFix', {
			url: "/",
			controller: 'HomeCtrl as homeCtrl',
			templateUrl: 'views/home.html'
		})
		.state('index.country', {
			url: "/country/{name}",
			controller: 'CountryCtrl as countryCtrl',
			templateUrl: 'views/partials/country/basic-detail.html'	
		})
		.state('index.map', {
			url: "/country/{name}/map",
			controller: 'MapCtrl as mapCtrl',
			templateUrl: 'views/partials/country/map.html'	
		})
		.state('explore', {
			url: "/explore",
			controller: 'ExploreCtrl as exploreCtrl',
			templateUrl: 'views/explore.html'
		})
		.state('about', {
			url: "/about",
			controller: 'ExploreCtrl as aboutCtrl',
			templateUrl: 'views/about.html'
		});
});