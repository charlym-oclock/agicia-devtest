import * as angular from "angular"

class SingleUserViewController{

  // je fais ma requete HTTP pour récupérer mes données depuis l'API
  public constructor(private $http: angular.IHttpService, $scope: any, $location: any){
    // je recupere le nom d'utilisateur via mon URL
    var userName = "j'arrive bien sur la page d'une personne";
    console.log(userName)
  }

  public $onInit(): void{
  }

}

var app = angular.module('homeApp')
app.component('oaSingleUserView', {
  template: require('./oa_single_user.html'),
  controller: SingleUserViewController,
})
