import * as angular from "angular"

class UsersListViewController {

  public usersList: any = []

  public inputValue: string = ""

  // je fais ma requete HTTP pour récupérer mes données depuis l'API
  public constructor(private $http: angular.IHttpService) {

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

    $http(request).then((response): void => {
      // je stocke les données récupérées dans une variable que je pourrai transmettre a ma vue
      this.usersList = response.data;
      // je verifie en console ce que me renvoie la requete
      console.log(this.usersList);
    })
    // a voir comment gérer les erreur?
    //   .error((response) : void => {
    //     // en cas d'echec, je transmet le status d'erreur a ma vue
    //     this.usersList = response.statusText;
    //     // je verifie en console ce que me renvoie la requete
    //     console.log(this.usersList);
    //   })
  }


  // je creer une methode qui va aller chercher mes infos sur l'API
  public getData(name: any): void {
    this.inputValue = name;
    // je fais ma requete HTTP pour récupérer mes données depuis l'API
    // je commence par creer une variable avec toutes mes infos pour passer ma requete
    var request = {
      // la methode de la requete
      method: 'GET',
      // l'url a laquelle j'adresse ma requete
      url: `http://127.0.0.1:5000/users/${name}`,
      // et les headers pour m'eviter les problemes de CORS
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:8000'
      },
    }

    this.$http(request).then((response): void => {
      // je stocke les données récupérées dans une variable que je pourrai transmettre a ma vue
      this.usersList = response.data;
      // je verifie en console ce que me renvoie la requete
      console.log(this.usersList);
    })
  }

  public $onInit(): void {
  }

}

var app = angular.module('homeApp')
app.component('oaUsersListView', {
  template: require('./oa_users_list.html'),
  controller: UsersListViewController,
})