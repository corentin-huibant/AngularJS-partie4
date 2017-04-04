'use strict';
var app = angular.module('myApp', ['ngRoute'])
        .run(function($rootScope, $http) {
            //récupération du fichier json avec la directive $http et la méthode get        
            $http.get('voiture.json')
                //méthode .then (ensuite) pour lancer une fonction qui prend en paramètre takes
               .then(function(takes) {
                   // variable recups est égale aux informations (data) stockées dans le paramètre takes
                   $rootScope.cars = takes.data;  
                 });
});
//Déclaration de mes routes pour la partie quatre consacrées à AngularJS
app.config(['$routeProvider', function($routeProvider) {
        $routeProvider
        //quand url d'origine, présenter l'exercice 1 à la vue
                .when('/', {
                    templateUrl: 'exercice1.html',
                    controller: 'myCtrl'
                })
        //quand url/exercice2, présenter l'exercice 2 à la vue
                .when('/exercice2', {
                    templateUrl: 'exercice2.html',
                    controller: 'scdCtrl'
                })
        //quand url/exercice3, présenter l'exercice 3 à la vue
                .when('/exercice3', {
                    templateUrl: 'exercice3.html',
                    controller: 'triCtrl'
                })
        //quand url/exercice4, présenter l'exercice 4 à la vue
                .when('/exercice4', {
                    templateUrl: 'exercice4.html',
                    controller: 'fourthCtrl'
                })
        //quand url/exercice4, présenter l'exercice 4 à la vue
                .when('/exercice5', {
                    templateUrl: 'exercice5.html',
                    controller: 'fifthCtrl'
                })
        //quand url/exercice4, présenter l'exercice 4 à la vue
                .when('/exercice6', {
                    templateUrl: 'exercice6.html',
                    controller: 'sixthCtrl'
                })
        
                .when('/searching/:query', {
                    templateUrl: 'searching.html',
                    controller: 'searching'
                })
                
                .when('/info/:id', {
                    templateUrl: 'info.html',
                    controller: 'info'
                })
        //sinon, redirection vers l'url d'origine
                .otherwise({
                    redirectTo: '/'
                });
}]);


app.controller('myCtrl', ['$scope', function($scope){
        $scope.number = 0; //Déclaration de la variable number via l'objet $scope
}]);
app.controller('scdCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
           $scope.query = "";
            $scope.search = function() {
                $location.path('/searching/' + $scope.query);
            }; 
}]);
app.controller('triCtrl', ['$scope', '$http', function($scope, $http){

}]);
app.controller('fourthCtrl', ['$scope', '$http', function($scope, $http){

}]);
app.controller('fifthCtrl', ['$scope', function($scope){
}]);
app.controller('sixthCtrl', ['$scope', '$http', function($scope, $http){

}]);
app.controller('searching', ['$scope', '$routeParams', '$location', function($scope, $routeParams, $location) { 
        $scope.query = $routeParams.query;
        $scope.link = function() {
            $location.path(/info/ + $scope.cars.id)
        } ;  
}]);
app.controller('info', ['$scope', '$routeParams', function($scope, $routeParams) { 
        $scope.query = $routeParams.query;
}]);