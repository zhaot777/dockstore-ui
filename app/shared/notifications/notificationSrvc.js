angular.module('dockstore.ui')
  .service('NtfnService', ['toaster', '$timeout',
      function(toaster, $timeout) {

    this.popInfo = function(title, message) {
      toaster.pop('info', title, message);
    };

    this.popSuccess = function(title, message) {
      toaster.pop('success', title, message);
    };

    this.popWarning = function(title, message) {
      toaster.pop('warning', title, message);
    };

    this.popError = function(title, message) {
      toaster.pop('error', title, message);
    };

    this.clearAll = function(sel) {
      sel = (typeof sel !== 'undefined') ? sel : '*';
      $timeout(function() { toaster.clear(sel); }, 1000);
    };

  }]);
