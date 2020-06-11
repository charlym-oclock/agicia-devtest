import * as angular from "angular"
import * as router from "@angular/router/angular1/angular_1_router"
// Log to force import
console.log(router)

class AppController {

  public constructor(public $location: angular.ILocationService) {
  }

  public isActive(destination: any): boolean {
    return destination === this.$location.path();
  }

  public $onInit(): void{
  }
}

// Add fake module from odfplus
var app = angular.module('templates', []);

// App
var app = angular.module('homeApp', [
  'templates',
  'ngComponentRouter',
])

app.config(($httpProvider: any): void => {
  $httpProvider.interceptors.push('responseObserver');
})

app.config(['$qProvider', ($qProvider: any): void => {
  $qProvider.errorOnUnhandledRejections(false)
}])

app.factory('responseObserver', ($q: any, $window: any): any => {
  return {
    'responseError': (errorResponse: any): void => {
      switch (errorResponse.status) {
        case 404:
          $window.location = '/#!/404';
          break;
        case 500:
          $window.location = '/#!/500';
          break;
      }
      return $q.reject(errorResponse);
    }
  };
});

app.component('oaHome', {
  template: require('./app.html'),
  controller: AppController,
  $routeConfig: [
    { path: '/', name: 'OaHomeView', component: 'oaHomeView', useAsDefault: true },
    { path: '/todo', name: 'OaTodoView', component: 'oaTodoView' },
    { path: '/users/...', name: 'OaUsers', component: 'oaUsers' },
  ]
} as any)
app.value('$routerRootComponent', 'oaHome');
