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

describe('Service: ContainerService', function () {

  // load the service's module
  beforeEach(module('dockstore.ui'));

  // instantiate service
  var ContainerService;
  beforeEach(inject(function (_ContainerService_) {
    ContainerService = _ContainerService_;
  }));

  it('should do something', function () {
    expect(!!ContainerService).toBe(true);
  });

});
