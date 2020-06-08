import * as angular from "angular"

class SingleUserViewController{

  // je fais ma requete HTTP pour récupérer mes données depuis l'API
  public constructor(private $http: angular.IHttpService, $scope: any, $location: any){
    // je recupere le nom d'utilisateur via mon URL
    var userName = $location.path();
    console.log(userName)
  // je creer une variable avec toutes mes infos pour passer ma requete
    // var request = {
    //   // la methode de la requete
    //   method: 'GET',
    //   // l'url a laquelle j'adresse ma requete
    //   url: 'http://127.0.0.1:5000/users/{userName}',
    //   // et les headers pour m'eviter les problemes de CORS
    //   headers: {
    //     'Access-Control-Allow-Origin': 'http://localhost:8000'
    //   },
    // }

    // $http(request).then(function success(response) {
    //     // je stocke les données récupérées dans une variable que je pourrai transmettre a ma vue
    //   $scope.userInfos = response.data;
    //   // je verifie en console ce que me renvoie la requete
    //   console.log($scope.userInfos);
    // }, function error(response){
    //   // en cas d'echec, je transmet le status d'erreur a ma vue
    //   $scope.userInfos = response.statusText;
    //   // je verifie en console ce que me renvoie la requete
    //   console.log($scope.userInfos);
    // })
  }

  public $onInit(): void{
  }

}

var app = angular.module('homeApp')
app.component('oaSingleUserView', {
  template: require('./oa_single_user.html'),
  controller: SingleUserViewController,
})
