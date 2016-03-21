define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _commonAttributeManager) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var MdFooter = (function () {
    function MdFooter(element) {
      _classCallCheck(this, _MdFooter);

      this.element = element;
      this.attributeManager = new _commonAttributeManager.AttributeManager(this.element);
    }

    MdFooter.prototype.bind = function bind() {
      this.attributeManager.addClasses('page-footer');
    };

    MdFooter.prototype.unbind = function unbind() {
      this.attributeManager.removeClasses('page-footer');
    };

    var _MdFooter = MdFooter;
    MdFooter = _aureliaDependencyInjection.inject(Element)(MdFooter) || MdFooter;
    MdFooter = _aureliaTemplating.customAttribute('md-footer')(MdFooter) || MdFooter;
    return MdFooter;
  })();

  exports.MdFooter = MdFooter;
});