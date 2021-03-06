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
 * @ngdoc directive
 * @name dockstore.ui.directive:workflowFileViewer
 * @description
 * # workflowFileViewer
 */
angular.module('dockstore.ui')
  .directive('workflowFileViewer', function () {
    return {
      restrict: 'AE',
      controller: 'WorkflowFileViewerCtrl',
      scope: {
        type: '@',
        workflowObj: '=',
        isEnabled: '='
      },
      templateUrl: 'templates/workflowfileviewer.html',
      link: function postLink(scope, element, attrs) {
        scope.$watch('workflowObj.path', function(newValue, oldValue) {
          if (newValue) {
            scope.setDocument();
            scope.checkDescriptor();
          }
        });
        scope.$on('refreshFiles', function(event) {
          scope.setDocument();
          scope.refreshDocument();
        });
        scope.$on('checkDescPageType', function(event) {
          scope.checkDescriptor();
        });
        scope.$watchGroup(
          ['selVersionName','descriptor'],
          function(newValues, oldValues) {
            scope.refreshDocumentType();
          });
        scope.$watchGroup(
          ['workflowObj.id', 'selSecondaryDescriptorName'],
          function(newValues, oldValues) {
            scope.refreshDocument();
          });
      }
    };
  });
