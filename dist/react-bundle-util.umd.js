(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
	typeof define === 'function' && define.amd ? define('react-bundle-util', ['react'], factory) :
	(global['react-bundle-util'] = factory(global.React));
}(this, (function (React) { 'use strict';

React = 'default' in React ? React['default'] : React;

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var AsyncComponent = function (_React$Component) {
    inherits(AsyncComponent, _React$Component);

    function AsyncComponent(props) {
        classCallCheck(this, AsyncComponent);

        var _this = possibleConstructorReturn(this, (AsyncComponent.__proto__ || Object.getPrototypeOf(AsyncComponent)).call(this, props));

        _this.state = {
            component: null
        };
        var promise = props.__asyncLoadPromise,
            resolver = props.__asyncLoadResolver;

        var resolve = function resolve(component) {
            var def = component ? component.default : null;
            _this.setState({ component: def ? def : component });
        };
        var reject = function reject(err) {
            throw err;
        };
        if (resolver) {
            resolver(resolve, reject);
        } else {
            promise.then(resolve, reject);
        }
        return _this;
    }

    createClass(AsyncComponent, [{
        key: 'render',
        value: function render() {
            var Component = this.state.component;

            return Component ? React.createElement(Component, this.props) : null;
        }
    }]);
    return AsyncComponent;
}(React.Component);

function getPrototypes(func) {
    var prototypes = [];
    if (typeof func === 'function') {
        var objectPrototype = Object.prototype,
            prototype = func.prototype;
        while (prototype && prototype !== objectPrototype) {
            prototypes.push(prototype);
            prototype = Object.getPrototypeOf(prototype);
        }
    }
    return prototypes;
}

var index = (function (promise) {
    var AsyncComponentBundle = null;
    if (promise && typeof promise.then === 'function') {
        AsyncComponentBundle = function AsyncComponentBundle(props) {
            return React.createElement(AsyncComponent, _extends({ __asyncLoadPromise: promise }, props));
        };
    } else if (typeof promise === 'function' && !getPrototypes(promise).some(function (proto) {
        return proto === React.Component.prototype;
    })) {
        AsyncComponentBundle = function AsyncComponentBundle(props) {
            return React.createElement(AsyncComponent, _extends({ __asyncLoadResolver: promise }, props));
        };
    }
    if (AsyncComponentBundle) {
        AsyncComponentBundle.displayName = 'AsyncComponentBundle';
        return AsyncComponentBundle;
    }
    return promise;
});

return index;

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGFyL1dvcmtzcGFjZS9yZWFjdC1idW5kbGUtdXRpbC9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgQXN5bmNDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY29tcG9uZW50OiBudWxsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHtfX2FzeW5jTG9hZFByb21pc2U6IHByb21pc2UsIF9fYXN5bmNMb2FkUmVzb2x2ZXI6IHJlc29sdmVyfSA9IHByb3BzO1xuICAgICAgICBjb25zdCByZXNvbHZlID0gY29tcG9uZW50ID0+IHtcbiAgICAgICAgICAgIGxldCBkZWYgPSBjb21wb25lbnQgPyBjb21wb25lbnQuZGVmYXVsdCA6IG51bGw7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjb21wb25lbnQ6IGRlZiA/IGRlZiA6IGNvbXBvbmVudH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZWplY3QgPSBlcnIgPT4ge1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9O1xuICAgICAgICBpZiAocmVzb2x2ZXIpIHtcbiAgICAgICAgICAgIHJlc29sdmVyKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9taXNlLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2NvbXBvbmVudDogQ29tcG9uZW50fSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHJldHVybiBDb21wb25lbnQgPyA8Q29tcG9uZW50IHsuLi50aGlzLnByb3BzfS8+IDogbnVsbDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldFByb3RvdHlwZXMoZnVuYykge1xuICAgIGNvbnN0IHByb3RvdHlwZXMgPSBbXTtcbiAgICBpZiAodHlwZW9mIGZ1bmMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbGV0IG9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGUsXG4gICAgICAgICAgICBwcm90b3R5cGUgPSBmdW5jLnByb3RvdHlwZTtcbiAgICAgICAgd2hpbGUgKHByb3RvdHlwZSAmJiBwcm90b3R5cGUgIT09IG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICAgICAgcHJvdG90eXBlcy5wdXNoKHByb3RvdHlwZSk7XG4gICAgICAgICAgICBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG90eXBlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvdG90eXBlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvbWlzZSA9PiB7XG4gICAgbGV0IEFzeW5jQ29tcG9uZW50QnVuZGxlID0gbnVsbDtcbiAgICBpZiAocHJvbWlzZSAmJiB0eXBlb2YgcHJvbWlzZS50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIEFzeW5jQ29tcG9uZW50QnVuZGxlID0gcHJvcHMgPT4gPEFzeW5jQ29tcG9uZW50IF9fYXN5bmNMb2FkUHJvbWlzZT17cHJvbWlzZX0gey4uLnByb3BzfS8+O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHByb21pc2UgPT09ICdmdW5jdGlvbicgJiYgIWdldFByb3RvdHlwZXMocHJvbWlzZSkuc29tZShwcm90byA9PiBwcm90byA9PT0gUmVhY3QuQ29tcG9uZW50LnByb3RvdHlwZSkpIHtcbiAgICAgICAgQXN5bmNDb21wb25lbnRCdW5kbGUgPSBwcm9wcyA9PiA8QXN5bmNDb21wb25lbnQgX19hc3luY0xvYWRSZXNvbHZlcj17cHJvbWlzZX0gey4uLnByb3BzfS8+O1xuICAgIH1cbiAgICBpZiAoQXN5bmNDb21wb25lbnRCdW5kbGUpIHtcbiAgICAgICAgQXN5bmNDb21wb25lbnRCdW5kbGUuZGlzcGxheU5hbWUgPSAnQXN5bmNDb21wb25lbnRCdW5kbGUnO1xuICAgICAgICByZXR1cm4gQXN5bmNDb21wb25lbnRCdW5kbGU7XG4gICAgfVxuICAgIHJldHVybiBwcm9taXNlO1xufTsiXSwibmFtZXMiOlsiQXN5bmNDb21wb25lbnQiLCJwcm9wcyIsInN0YXRlIiwicHJvbWlzZSIsIl9fYXN5bmNMb2FkUHJvbWlzZSIsInJlc29sdmVyIiwiX19hc3luY0xvYWRSZXNvbHZlciIsInJlc29sdmUiLCJkZWYiLCJjb21wb25lbnQiLCJkZWZhdWx0Iiwic2V0U3RhdGUiLCJyZWplY3QiLCJlcnIiLCJ0aGVuIiwiQ29tcG9uZW50IiwiUmVhY3QiLCJnZXRQcm90b3R5cGVzIiwiZnVuYyIsInByb3RvdHlwZXMiLCJvYmplY3RQcm90b3R5cGUiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJwdXNoIiwiZ2V0UHJvdG90eXBlT2YiLCJBc3luY0NvbXBvbmVudEJ1bmRsZSIsInNvbWUiLCJwcm90byIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BOzs7NEJBRVVDLEtBQVosRUFBbUI7OzttSUFDVEEsS0FEUzs7Y0FFVkMsS0FBTCxHQUFhO3VCQUNFO1NBRGY7WUFHMkJDLE9BTFosR0FLc0RGLEtBTHRELENBS1JHLGtCQUxRO1lBSzBDQyxRQUwxQyxHQUtzREosS0FMdEQsQ0FLcUJLLG1CQUxyQjs7WUFNVEMsVUFBVSxTQUFWQSxPQUFVLFlBQWE7Z0JBQ3JCQyxNQUFNQyxZQUFZQSxVQUFVQyxPQUF0QixHQUFnQyxJQUExQztrQkFDS0MsUUFBTCxDQUFjLEVBQUNGLFdBQVdELE1BQU1BLEdBQU4sR0FBWUMsU0FBeEIsRUFBZDtTQUZKO1lBSU1HLFNBQVMsU0FBVEEsTUFBUyxNQUFPO2tCQUNaQyxHQUFOO1NBREo7WUFHSVIsUUFBSixFQUFjO3FCQUNERSxPQUFULEVBQWtCSyxNQUFsQjtTQURKLE1BRU87b0JBQ0tFLElBQVIsQ0FBYVAsT0FBYixFQUFzQkssTUFBdEI7Ozs7Ozs7aUNBSUM7Z0JBQ2FHLFNBRGIsR0FDMEIsS0FBS2IsS0FEL0IsQ0FDRU8sU0FERjs7bUJBRUVNLFlBQVksb0JBQUMsU0FBRCxFQUFlLEtBQUtkLEtBQXBCLENBQVosR0FBMkMsSUFBbEQ7Ozs7RUF4QnFCZSxNQUFNRDs7QUE0Qm5DLFNBQVNFLGFBQVQsQ0FBdUJDLElBQXZCLEVBQTZCO1FBQ25CQyxhQUFhLEVBQW5CO1FBQ0ksT0FBT0QsSUFBUCxLQUFnQixVQUFwQixFQUFnQztZQUN4QkUsa0JBQWtCQyxPQUFPQyxTQUE3QjtZQUNJQSxZQUFZSixLQUFLSSxTQURyQjtlQUVPQSxhQUFhQSxjQUFjRixlQUFsQyxFQUFtRDt1QkFDcENHLElBQVgsQ0FBZ0JELFNBQWhCO3dCQUNZRCxPQUFPRyxjQUFQLENBQXNCRixTQUF0QixDQUFaOzs7V0FHREgsVUFBUDs7O0FBR0osYUFBZSxtQkFBVztRQUNsQk0sdUJBQXVCLElBQTNCO1FBQ0l0QixXQUFXLE9BQU9BLFFBQVFXLElBQWYsS0FBd0IsVUFBdkMsRUFBbUQ7K0JBQ3hCO21CQUFTLG9CQUFDLGNBQUQsYUFBZ0Isb0JBQW9CWCxPQUFwQyxJQUFpREYsS0FBakQsRUFBVDtTQUF2QjtLQURKLE1BRU8sSUFBSSxPQUFPRSxPQUFQLEtBQW1CLFVBQW5CLElBQWlDLENBQUNjLGNBQWNkLE9BQWQsRUFBdUJ1QixJQUF2QixDQUE0QjtlQUFTQyxVQUFVWCxNQUFNRCxTQUFOLENBQWdCTyxTQUFuQztLQUE1QixDQUF0QyxFQUFpSDsrQkFDN0Y7bUJBQVMsb0JBQUMsY0FBRCxhQUFnQixxQkFBcUJuQixPQUFyQyxJQUFrREYsS0FBbEQsRUFBVDtTQUF2Qjs7UUFFQXdCLG9CQUFKLEVBQTBCOzZCQUNERyxXQUFyQixHQUFtQyxzQkFBbkM7ZUFDT0gsb0JBQVA7O1dBRUd0QixPQUFQO0NBWEo7Ozs7In0=