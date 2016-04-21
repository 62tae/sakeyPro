(function () {
    'use strict';
    
    angular
        .module('app')
        .controller('Products.MainController', Controller);
        
    function Controller($scope, ProductsService) {
        var vm = this;
        
        vm.products = [];
        vm.deleteProduct = deleteProduct;
        
        initController();
        
        function initController() {
            loadProducts();
            
            // reload products when updated
            $scope.$on('products-updated', loadProducts);
        }
        
        function loadProducts() {
            vm.products = ProductsService.GetAll();
        }
        
        function deleteProduct(id) {
            ProductsService.Delete(id);
            loadProducts();
        }
    }
}) ();