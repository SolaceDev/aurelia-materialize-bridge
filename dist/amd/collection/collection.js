define(['exports', 'aurelia-templating'], function (exports, _aureliaTemplating) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var MdCollection = (function () {
    function MdCollection() {
      _classCallCheck(this, _MdCollection);
    }

    var _MdCollection = MdCollection;
    MdCollection = _aureliaTemplating.customElement('md-collection')(MdCollection) || MdCollection;
    return MdCollection;
  })();

  exports.MdCollection = MdCollection;
});