app.controller("PageController", function($scope, UsuarioService){
    $scope.logout = function(){
        UsuarioService.logout();
    }
});