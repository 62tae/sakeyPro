(function () {
	'use strict';
	
	angular
		.module('app',['ui.router'])
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
			});
	}
})