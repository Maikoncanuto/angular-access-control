let app = angular.module('myApp', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider){

    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .when('/livros', {
            templateUrl: 'views/livros.html',
            controller: 'LivroController'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        })
        .when('/usuarios', {
            templateUrl: 'views/usuarios.html',
            controller: 'UsuarioController'
        })
        .when('/acessoNegado', {
            templateUrl: 'views/acessoNegado.html',
            controller: 'AcessoNegadoController'
        })
        .otherwise({redirectTo: '/home'});
});

//Controle de acesso, definição para rotas e perfis. 
app.run(function($rootScope, $location, $cookies){
    var rotasBloqueadasNaoLogados = ["/usuarios", "/livros"];
    var rotasBloqueadasComuns = ['/usuarios'];

    //$locationChangeStart - Chamado antes do controller e página serem chamados. 
    //$locationChangeSuccess - Chamado depois da pagina e controller serem chamados. 
    $rootScope.$on("$locationChangeStart", function(){

        //Pegando usuário da sessão
        let usuarioLogado = $cookies.getObject("usuarioLogado");

        if(usuarioLogado == null && rotasBloqueadasNaoLogados.indexOf($location.path()) != -1){
            $location.path("/acessoNegado");
        }else if(usuarioLogado != null && rotasBloqueadasComuns.indexOf($location.path()) != -1 && usuarioLogado.admin == false){
            $location.path("/acessoNegado");
        }

        $rootScope.usuarioLogado = usuarioLogado;
    });
});

