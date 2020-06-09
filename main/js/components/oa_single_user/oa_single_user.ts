import * as angular from "angular"

class SingleUserViewController{

  public constructor(private $http: angular.IHttpService, $scope: any) {
    
    // je fais un test avec une variable locale (ca fonctionne)
    var userName = 'sylvain';
    // je test ma methode getData afin de voir si je recupere bien le nom dans l'URL
    this.getData();
    // syntaxe que je devrais utiliser
    // var userName = this.getData(next.params.id)
    // je fais ma requete HTTP pour récupérer mes données depuis l'API
    // je commence par creer une variable avec toutes mes infos pour passer ma requete
    var request = {
      // la methode de la requete
      method: 'GET',
      // l'url a laquelle j'adresse ma requete
      url: `http://127.0.0.1:5000/users/${userName}`,
      // et les headers pour m'eviter les problemes de CORS
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:8000'
      },
    }

    $http(request).then(function success(response) {
        // je stocke les données récupérées dans une variable que je pourrai transmettre a ma vue
      $scope.userInfos = response.data;
      // je verifie en console ce que me renvoie la requete
      console.log($scope.userInfos);
    }, function error(response){
      // en cas d'echec, je transmet le status d'erreur a ma vue
      $scope.userInfos = response.statusText;
      // je verifie en console ce que me renvoie la requete
      console.log($scope.userInfos);
    })
  }

  // je creer une methode qui va aller chercher mes infos dans l'URL
  // j'imagine que pour appeler la fonction getData(next.params.item), je dois indiquer quelquechose dans les parametres, mais je ne parviens pas a trouver quoi...
  public getData = function () {
    // appelle de la methode routeOnActivate
    this.$routerOnActivate = function(next: any){
      // je stocke l'info de l'URL dans une variable
      var userName = next.params.id;
      // je verifie que j'ai bien la bonne info (la reponse est oui)
      console.log(userName);
    };
  }

  // j'instancie la methode $routerOnActivate pour acceder aux elements de l'URL. La doc me montre qu'ici, je peux acceder a ce qui m'interesse par next.params.id, mais impossible de retourner le resultat pour y acceder dans le reste de ma classe.
  public $routerOnActivate(next: any, previous: any) : void {
  }

  public $onInit(): void{
  }

}

var app = angular.module('homeApp')
app.component('oaSingleUserView', {
  template: require('./oa_single_user.html'),
  controller: SingleUserViewController,
})
