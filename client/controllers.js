angular.module('Coworkers.controllers', ['ngResource', 'Coworkers.factories', 'Coworkers.services'])
.controller('LoginController', ['$scope', '$location', 'UserService', function($scope, $location, UserService) {
    $scope.login = function() {
        UserService.login($scope.email, $scope.password)
        .then(function() {
            console.log('Good match')
            userLink();
        }, function(err) {
            console.log(err);
        })
    }

    $scope.logout = function() {
        UserService.logout();
        redirect();
    }

    $scope.go = function() {
        UserService.me().then(function() {
        redirect();
        })
    }

    function redirect() {
        var dest = $location.search().dest;
        if (!dest) { dest = '/'; }
        $location.replace().path(dest).search('dest', null);
    }
    function userLink() {
        window.location.assign('/users');
    }
}])
.controller('UsersController', ['$scope', '$location', '$routeParams', 'UserFactory', 'UserService', function($scope, $location, $routeParams, UserFactory, UserService) {
    $scope.users=UserFactory.query({ id : $routeParams.userid });
}])

.controller('SignupController', ['$scope', 'UserService', function($scope, UserService){

}])

.controller('ProfileViewController', ['$scope', function($scope){

}])

.controller('UserProfileController', ['$scope', 'UserFactory', '$routeParams', '$location', function($scope, UserFactory, $routeParams, $location){
    $scope.user = UserFactory.get({ id: $routeParams.id });
    console.log($routeParams.id)
}])