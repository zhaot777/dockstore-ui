'use strict';

/**
 * @ngdoc service
 * @name dockstore.ui.WebService
 * @description
 * # WebService
 * Constant in the dockstore.ui.
 */

/*
 * >>>> DO NOT COMMIT THIS FILE <<<<, use locally:
 * git update-index --assume-unchanged app/scripts/services/webservice.js
 */

angular.module('dockstore.ui')
  .constant('WebService', {
    API_URI: 'http://10.0.29.14:8080',
    API_URI_DEBUG: 'http://10.0.29.14:9001/tests/dummy-data',

    GITHUB_AUTH_URL: 'https://github.com/login/oauth/authorize',
    GITHUB_CLIENT_ID: 'c4cdcf1260dac760906e',
    GITHUB_REDIRECT_URI: 'http://10.0.29.14:9001/login',
    GITHUB_SCOPE: 'read:org',

    QUAYIO_AUTH_URL: 'https://quay.io/oauth/authorize',
    QUAYIO_CLIENT_ID: '8ENREB7VAKKDGXJBEFSH',
    QUAYIO_REDIRECT_URI: 'http://10.0.29.14:9001/auth/quay.io',
    QUAYIO_SCOPE: 'repo:read,user:read',

    BITBUCKET_AUTH_URL: 'https://bitbucket.org/site/oauth2/authorize',
    BITBUCKET_CLIENT_ID: 'cgk4MPbN9YErt6cA3d',

    DSCLI_RELEASE_URL: 'https://github.com/ga4gh/dockstore/' +
                        'releases/download/0.3-alpha.0/dockstore'
  });
