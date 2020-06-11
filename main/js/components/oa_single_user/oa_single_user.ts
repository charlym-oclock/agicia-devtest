import * as angular from "angular"
import { runInNewContext } from "vm"

class SingleUserViewController {

  public userInfos: any = []

  public uName: string = ""

  public constructor(private $http: angular.IHttpService) {
  }

  // je creer une methode qui va aller chercher mes infos sur l'API
  public getData(id: any): void {
    this.uName = id;
    // je fais ma requete HTTP pour récupérer mes données depuis l'API
    // je commence par creer une variable avec toutes mes infos pour passer ma requete
    var request = {
      // la methode de la requete
      method: 'GET',
      // l'url a laquelle j'adresse ma requete
      url: `http://127.0.0.1:5000/users/${this.uName}`,
      // et les headers pour m'eviter les problemes de CORS
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:8000'
      },
    }

    this.$http(request).then((response): void => {
      // je stocke les données récupérées dans une variable que je pourrai transmettre a ma vue
      this.userInfos = response.data;
      // je verifie en console ce que me renvoie la requete
      console.log(this.userInfos);
    })


  }

  // j'instancie la methode $routerOnActivate pour acceder aux elements de l'URL
  public $routerOnActivate(next: any, previous: any): void {
    this.getData(next.params.id)
  }

  public $onInit(): void {
  }

}

var app = angular.module('homeApp')
app.component('oaSingleUserView', {
  template: require('./oa_single_user.html'),
  controller: SingleUserViewController,
})
