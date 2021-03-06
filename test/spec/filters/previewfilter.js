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

describe('Filter: PreviewFilter', function () {

  // load the filter's module
  beforeEach(module('dockstore.ui'));

  // initialize a new instance of the filter before each test
  var PreviewFilter;
  beforeEach(inject(function ($filter) {
    PreviewFilter = $filter('PreviewFilter');
  }));

  // it('should return the input prefixed with "PreviewFilter filter:"', function () {
  //   var text = 'angularjs';
  //   expect(PreviewFilter(text)).toBe('PreviewFilter filter: ' + text);
  // });

});
