import * as angular from "angular"

class UsersViewController{

  public constructor(){}

  public $onInit(): void{
  }

}

var app = angular.module('homeApp')
app.component('oaUsersView', {
  template: require('./oa_users.html'),
  controller: UsersViewController,
})
