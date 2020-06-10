import * as angular from "angular"

class UsersController {

  public constructor() { }

  public $onInit(): void {
  }
}

var users = angular.module('homeApp')
users.component('oaUsers', {
  template: require('./oa_users.html'),
  controller: UsersController,
  $routeConfig: [
    { path: '/list', name: 'OaUsersListView', component: 'oaUsersListView', useAsDefault: true },
    { path: '/:id', name: 'OaSingleUserView', component: 'oaSingleUserView' },
  ]
} as any)
users.value('$routerRootComponent', 'oaHome');
