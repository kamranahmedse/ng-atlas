app.config(function ( $stateProvider, $urlRouterProvider ) {

 	$urlRouterProvider.otherwise("/index");

	$stateProvider
		.state('index', {
			url: "",
			controller: 'HomeCtrl as home',
			templateUrl: 'views/home.html'
		})
		.state('index.slashFix', {
			url: "/",
			controller: 'HomeCtrl as home',
			templateUrl: 'views/home.html'
		})
		.state('index.country', {
			url: "/country/{name}",
			controller: 'CountryCtrl as country',
			templateUrl: 'views/partials/country/basic-detail.html'	
		})
		.state('index.map', {
			url: "/country/{name}/map",
			controller: 'CountryCtrl as country',
			templateUrl: 'views/partials/country/map.html'	
		})
		.state('explore', {
			url: "/explore",
			controller: 'ExploreCtrl as explore',
			templateUrl: 'views/explore.html'
		})
		.state('about', {
			url: "/about",
			controller: 'ExploreCtrl as about',
			templateUrl: 'views/about.html'
		});
});