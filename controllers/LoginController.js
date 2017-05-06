app.controller("LoginController", function($scope, UsuarioService){
    $scope.logar = function(usuario){
        UsuarioService.validaLogin(usuario);
    }
});