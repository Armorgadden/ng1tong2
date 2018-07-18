'use strict';
import * as module from 'angular';
import * as inject from 'angular';
import * as describe from 'angular';
import * as it from 'angular';
import * as expect from 'angular';
import * as beforeEach from 'angular';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});