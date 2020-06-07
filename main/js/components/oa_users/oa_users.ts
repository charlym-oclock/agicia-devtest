import * as angular from "angular"

class UsersViewController{

  public users: any[] = [
    {name : 'charly', age : 28, sex : 'male'},
    {name : 'amelie', age : 24, sex : 'female'},
    {name : 'arthur', age : 45, sex : 'male'},
    {name : 'annie', age : 69, sex : 'female'},
    {name : 'nicolas', age : 12, sex : 'male'},
    {name : 'clementine', age : 11, sex : 'female'},
  ]

  public constructor(){}

  public $onInit(): void{
  }

}

var app = angular.module('homeApp')
app.component('oaUsersView', {
  template: require('./oa_users.html'),
  controller: UsersViewController,
})
