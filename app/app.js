(function () {
	'use strict';
	
	angular
		.module('app',['ui.router', 'ngAnimate'])
		.config(config)
		.run(run);
		
	function config($stateProvider, $urlRouterProvider) {
		// default route 
		$urlRouterProvider
			.state('home',{
				url: '/',
				templateUrl: 'home/index.html',
				controller: 'Home.IndexController',
				controllerAs: 'vm',
				data: { activeTab: 'home' }
			})
			.state('account', {
				url: '/account',
				templateUrl: 'account/index.html',
				controller: 'Account.IndexController',
				controllerAs: 'vm',
				data: { activeTab: 'account' }
			})
			.state('products', {
				url: '/products',
				templateUrl: 'products/index.html',
				controller: 'Products.IndexController',
				controllerAs: 'vm',
				data: {activeTab: 'products'}
			});
	}
	
	function run($http, $rootScope, $window, ProductService) {
		// add some initial products
		if(ProductService.GetAll().length === 0){
			ProductService.Save({name: 'Boardies', price: '25.00'});
			ProductService.Save({name: 'Singlet', price: '9.50'});
			ProductService.Save({name: 'Thongs (Filp Flops)', price: '12.95'});
		}
		// add JWT token as default auth header
		$http.defaults.headers.common['Authorization'] = 'Bearer' + $window.jwToken;
		
		// update active tab on state change
		$rootScope.$on('$stateChangeSuccess', function (event, toState, toPrams, fromState, fromParams) {
			$rootScope.activeTab = toState.data.activeTab;
		});
	}
	
	// manually bootstrap angular the JWT token is retrieved from the server
	$(function(){
		// get JWT token from server
		$.get('/app/token', function(token){
			window.jwtToken = token;
			
			angular.bootstrap(document, ['app']);
		});
	});
})();