'use strict';

System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-task-queue', '../common/attributes', './input-update-service', '../common/events'], function (_export, _context) {
  var bindable, customElement, bindingMode, inject, TaskQueue, getBooleanFromAttributeValue, MdInputUpdateService, fireEvent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _class3, _temp, MdInput;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  return {
    setters: [function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
      customElement = _aureliaTemplating.customElement;
    }, function (_aureliaBinding) {
      bindingMode = _aureliaBinding.bindingMode;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTaskQueue) {
      TaskQueue = _aureliaTaskQueue.TaskQueue;
    }, function (_commonAttributes) {
      getBooleanFromAttributeValue = _commonAttributes.getBooleanFromAttributeValue;
    }, function (_inputUpdateService) {
      MdInputUpdateService = _inputUpdateService.MdInputUpdateService;
    }, function (_commonEvents) {
      fireEvent = _commonEvents.fireEvent;
    }],
    execute: function () {
      _export('MdInput', MdInput = (_dec = customElement('md-input'), _dec2 = inject(Element, TaskQueue, MdInputUpdateService), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable({
        defaultBindingMode: bindingMode.oneTime
      }), _dec6 = bindable({
        defaultBindingMode: bindingMode.oneTime
      }), _dec7 = bindable({
        defaultBindingMode: bindingMode.oneTime
      }), _dec8 = bindable({
        defaultBindingMode: bindingMode.oneTime
      }), _dec9 = bindable({
        defaultBindingMode: bindingMode.oneTime
      }), _dec10 = bindable({
        defaultBindingMode: bindingMode.oneTime
      }), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable({
        defaultBindingMode: bindingMode.twoWay
      }), _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = function () {
        function MdInput(element, taskQueue, updateService) {
          _classCallCheck(this, MdInput);

          _initDefineProp(this, 'mdLabel', _descriptor, this);

          _initDefineProp(this, 'mdDisabled', _descriptor2, this);

          _initDefineProp(this, 'mdPlaceholder', _descriptor3, this);

          _initDefineProp(this, 'mdTextArea', _descriptor4, this);

          _initDefineProp(this, 'mdType', _descriptor5, this);

          _initDefineProp(this, 'mdStep', _descriptor6, this);

          _initDefineProp(this, 'mdValidate', _descriptor7, this);

          _initDefineProp(this, 'mdShowErrortext', _descriptor8, this);

          _initDefineProp(this, 'mdValidateError', _descriptor9, this);

          _initDefineProp(this, 'mdValidateSuccess', _descriptor10, this);

          _initDefineProp(this, 'mdValue', _descriptor11, this);

          this._suspendUpdate = false;

          this.element = element;
          this.taskQueue = taskQueue;
          this.controlId = 'md-input-' + MdInput.id++;
          this.updateService = updateService;
        }

        MdInput.prototype.bind = function bind() {
          this.mdTextArea = getBooleanFromAttributeValue(this.mdTextArea);
          this.mdShowErrortext = getBooleanFromAttributeValue(this.mdShowErrortext);
        };

        MdInput.prototype.attached = function attached() {
          if (getBooleanFromAttributeValue(this.mdValidate)) {
            this.input.classList.add('validate');
          }
          if (this.mdValidateError) {
            this.label.setAttribute('data-error', this.mdValidateError);
          }
          if (this.mdValidateSuccess) {
            this.label.setAttribute('data-success', this.mdValidateSuccess);
          }
          if (this.mdPlaceholder) {
            this.input.setAttribute('placeholder', this.mdPlaceholder);
          }
          if (this.mdShowErrortext) {
            this.input.setAttribute('data-show-errortext', this.mdShowErrortext);
          }
          this.updateService.update();

          if (this.mdType === 'time') {
            $(this.input).siblings('label').addClass('active');
          }
        };

        MdInput.prototype.blur = function blur() {
          fireEvent(this.element, 'blur');
        };

        MdInput.prototype.mdValueChanged = function mdValueChanged() {
          if (!$(this.input).is(':focus')) {
            this.updateService.update();
          }
          if (this.mdTextArea) {
            $(this.input).trigger('autoresize');
          }
        };

        return MdInput;
      }(), _class3.id = 0, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'mdLabel', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'mdDisabled', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'mdPlaceholder', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'mdTextArea', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'mdType', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
          return 'text';
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'mdStep', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
          return 'any';
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'mdValidate', [_dec9], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'mdShowErrortext', [_dec10], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'mdValidateError', [_dec11], {
        enumerable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'mdValidateSuccess', [_dec12], {
        enumerable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'mdValue', [_dec13], {
        enumerable: true,
        initializer: function initializer() {
          return '';
        }
      })), _class2)) || _class) || _class));

      _export('MdInput', MdInput);
    }
  };
});
//# sourceMappingURL=../dist/dev/input/input.js.map
