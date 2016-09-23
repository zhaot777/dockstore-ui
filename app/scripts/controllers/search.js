/*
 *    Copyright 2016 OICR
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

'use strict';

/**
 * @ngdoc function
 * @name dockstore.ui.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the dockstore.ui
 */
angular.module('dockstore.ui')
  .controller('SearchCtrl', [
    '$scope',
    '$rootScope',
    '$q',
    '$window',
    '$location',
    '$auth',
    '$routeParams',
    'ContainerService',
    'UserService',
    'TokenService',
    'NotificationService',
    function ($scope, $rootScope, $q, $window, $location, $auth, $routeParams,
        ContainerService, UserService, TokenService, NtfnService) {

      $scope.userObj = UserService.getUserObj();

      $scope.listPublishedContainers = function() {
        return ContainerService.getPublishedContainerList()
          .then(
            function(containers) {
              $scope.containers = containers;
              console.log($scope.containers);
            },
            function(response) {
              var message = '[HTTP ' + response.status + '] ' +
                  response.statusText + ': ' + response.data;
              NtfnService.popError('List Published Containers', message);
              return $q.reject(response);
            }
          );
      };

      $scope.listCrossSitePublishedContainers = function() {
        return ContainerService.getCrossSitePublishedContainerList()
          .then(
            function(containers) {
              console.log(containers);
              $scope.containers = $.merge($scope.containers, containers);
            },
            function(response) {
              var message = '[HTTP ' + response.status + '] ' +
                  response.statusText + ': ' + response.data;
              NtfnService.popError('List Published Containers', message);
              return $q.reject(response);
            }
          );
      };

      if ($auth.isAuthenticated()) {
        TokenService.getUserTokenStatusSet($scope.userObj.id)
          .then(
            function(tokenStatusSet) {
              $scope.tokenStatusSet = tokenStatusSet;
              if (!tokenStatusSet.github) {
                $window.location.href = '/onboarding';
              }
            }
          );
      }

      if ($routeParams.searchQueryContainer) {
        $rootScope.searchQueryContainer = $routeParams.searchQueryContainer;
      }

      $scope.$watch('searchQueryContainer', function(newValue, oldValue) {
              $rootScope.searchQueryContainer = newValue;
            });

            $scope.$watch('searchQueryWorkflow', function(newValue, oldValue) {
              $rootScope.searchQueryWorkflow = newValue;
            });

            $scope.$on('$routeChangeStart', function(event, next, current) {
              if ($location.url().indexOf('/search-containers') === -1) {
                $scope.searchQueryContainer = '';
              }
            });

            $scope.$on('$routeChangeStart', function(event, next, current) {
              if ($location.url().indexOf('/search-workflows') === -1) {
                $scope.searchQueryWorkflow = '';
              }
            });

      $scope.listPublishedContainers();
      $scope.listCrossSitePublishedContainers();
      
      $("#toolSearch").focus();

  }]);
