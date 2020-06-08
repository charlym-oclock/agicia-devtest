import * as angular from "angular"

class UsersViewController{

  // ma liste d'utilisateurs en data locale
  // public users: any[] = [
  //   {name : 'charly', age : 28, sex : 'male'},
  //   {name : 'amelie', age : 24, sex : 'female'},
  //   {name : 'arthur', age : 45, sex : 'male'},
  //   {name : 'annie', age : 69, sex : 'female'},
  //   {name : 'nicolas', age : 12, sex : 'male'},
  //   {name : 'clementine', age : 11, sex : 'female'},
  // ]

  // maintenant je fais ma requete HTTP pour récupérer mes données depuis l'API
  public constructor(private $http: angular.IHttpService, $scope: any){
    // je creer une variable avec toutes mes infos pour passer ma requete
    var request = {
      // la methode de la requete
      method: 'GET',
      // l'url a laquelle j'adresse ma requete
      url: 'http://127.0.0.1:5000/users',
      // et les headers pour m'eviter les problemes de CORS
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:8000'
      },
    }

    $http(request).then(function success(response) {
        // je stocke les données récupérées dans une variable que je pourrai transmettre a ma vue
      $scope.usersList = response.data;
      // je verifie en console ce que me renvoie la requete
      console.log($scope.usersList);
    }, function error(response){
      // en cas d'echec, je transmet le status d'erreur a ma vue
      $scope.usersList = response.statusText;
      // je verifie en console ce que me renvoie la requete
      console.log($scope.usersList);
    })
  }

  public $onInit(): void{
  }

}

var app = angular.module('homeApp')
app.component('oaUsersView', {
  template: require('./oa_users.html'),
  controller: UsersViewController,
})
