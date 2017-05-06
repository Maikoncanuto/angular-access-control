app.service("UsuarioService", function($location, $cookies){
    this.validaLogin = function(usuario){
        var usuarios = [
            {username: "Maikoncanuto", password: "123", admin: true},
            {username: "Erik", password: "456", admin: true},
            {username: "Carla", password: "789", admin: false},
            {username: "Jessica", password: "789", admin: false},
            {username: "Chayenne", password: "789", admin: false},
            {username: "Bruno", password: "789", admin: true}
        ];

        angular.forEach(usuarios, function(valor, index){
            if(valor.username == usuario.username && valor.password == usuario.password){
                delete valor.password;

                //Adicinando usuário na sessão.
                $cookies.putObject("usuarioLogado", valor);
                $location.path("/home");
            }
        });
    }

    this.logout = function(){
        //Removendo usuário da sessão.
        $cookies.remove("usuarioLogado");
        $location.path("/");
    }
});