app.config(function ( $stateProvider) {
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