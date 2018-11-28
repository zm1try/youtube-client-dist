/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/App.js":
/*!***********************!*\
  !*** ./src/js/App.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _searchBar = __webpack_require__(/*! ./components/searchBar/searchBar */ "./src/js/components/searchBar/searchBar.js");

var _searchBar2 = _interopRequireDefault(_searchBar);

var _slider = __webpack_require__(/*! ./components/slider/slider */ "./src/js/components/slider/slider.js");

var _slider2 = _interopRequireDefault(_slider);

var _paging = __webpack_require__(/*! ./components/paging/paging */ "./src/js/components/paging/paging.js");

var _paging2 = _interopRequireDefault(_paging);

var _fetchVideoItems = __webpack_require__(/*! ./modules/fetchVideoItems */ "./src/js/modules/fetchVideoItems.js");

var _fetchVideoItems2 = _interopRequireDefault(_fetchVideoItems);

var _getNumberOfBlocks = __webpack_require__(/*! ./modules/getNumberOfBlocks */ "./src/js/modules/getNumberOfBlocks.js");

var _getNumberOfBlocks2 = _interopRequireDefault(_getNumberOfBlocks);

var _shouldPreloadChunk = __webpack_require__(/*! ./modules/shouldPreloadChunk */ "./src/js/modules/shouldPreloadChunk.js");

var _shouldPreloadChunk2 = _interopRequireDefault(_shouldPreloadChunk);

var _settings = __webpack_require__(/*! ./settings/settings */ "./src/js/settings/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App() {
    _classCallCheck(this, App);

    this.state = {
      offset: 0,
      searchQuery: '',
      pageSize: (0, _getNumberOfBlocks2.default)(),
      isLoading: false,
      itemsQueue: [],
      animationClass: _settings.animationClasses.getFromBottom
    };

    this.setState = this.setState.bind(this);
    this.loadPrevPage = this.loadPrevPage.bind(this);
    this.loadNextPage = this.loadNextPage.bind(this);
    this.rotateItemsQueue = this.rotateItemsQueue.bind(this);
    this.loadVideoItems = this.loadVideoItems.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.shouldPreloadPrevChunck = this.shouldPreloadPrevChunck.bind(this);
    this.shouldPreloadNextChunk = this.shouldPreloadNextChunk.bind(this);
    this.render = this.render.bind(this);
  }

  _createClass(App, [{
    key: 'init',
    value: function init() {
      var _this = this;

      this.component = document.createElement('main');
      this.component.classList.add('main-view');
      window.addEventListener('resize', this.onWindowResize);

      var searchBar = _searchBar2.default;

      this.component.appendChild(searchBar({
        onInputChange: this.onInputChange,
        searchQuery: this.state.searchQuery
      }));

      this.sliderRenderFunction = _slider2.default;

      this.slider = this.sliderRenderFunction({
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        onTouchStart: this.onTouchStart,
        onTouchEnd: this.onTouchEnd,
        animationClass: this.state.animationClass,
        videoItems: this.getCurrentPageItems()
      });

      this.component.appendChild(this.slider);

      this.pagingRenderFunction = _paging2.default;

      this.paging = this.pagingRenderFunction({
        loadPrevPage: this.loadPrevPage,
        loadNextPage: this.loadNextPage,
        currentPage: this.getCurrentPageNumber()
      });

      this.component.appendChild(this.paging);

      this.loadVideoItems(null, function (chunk) {
        return _this.setState({
          currentChunk: _extends({ chunkNumber: 0 }, chunk),
          isLoading: false
        });
      });
    }
  }, {
    key: 'setState',
    value: function setState(newState) {
      this.state = _extends({}, this.state, newState);

      this.render();
    }
  }, {
    key: 'loadPrevChunk',
    value: function loadPrevChunk() {
      var _this2 = this;

      var currentChunk = this.state.currentChunk;
      var chunkNumber = currentChunk.chunkNumber,
          prevPageToken = currentChunk.prevPageToken;


      if (prevPageToken) {
        this.loadVideoItems(prevPageToken, function (chunk) {
          return _this2.setState({
            prevChunk: _extends({ chunkNumber: chunkNumber - 1 }, chunk),
            isLoading: false
          });
        });
      }
    }
  }, {
    key: 'loadNextChunk',
    value: function loadNextChunk() {
      var _this3 = this;

      var currentChunk = this.state.currentChunk;
      var chunkNumber = currentChunk.chunkNumber,
          nextPageToken = currentChunk.nextPageToken;


      if (nextPageToken) {
        this.loadVideoItems(nextPageToken, function (chunk) {
          return _this3.setState({
            nextChunk: _extends({ chunkNumber: chunkNumber + 1 }, chunk),
            isLoading: false
          });
        });
      }
    }
  }, {
    key: 'shouldPreloadPrevChunck',
    value: function shouldPreloadPrevChunck(offset) {
      var _state = this.state,
          prevChunk = _state.prevChunk,
          prevPageToken = _state.currentChunk.prevPageToken;

      return (0, _shouldPreloadChunk2.default)(prevChunk, prevPageToken, offset, 1 - _settings.PRELOAD_ITEMS_RATIO, function (left, right) {
        return left < right;
      });
    }
  }, {
    key: 'shouldPreloadNextChunk',
    value: function shouldPreloadNextChunk(offset) {
      var _state2 = this.state,
          nextChunk = _state2.nextChunk,
          nextPageToken = _state2.currentChunk.nextPageToken;

      return (0, _shouldPreloadChunk2.default)(nextChunk, nextPageToken, offset, _settings.PRELOAD_ITEMS_RATIO, function (left, right) {
        return left > right;
      });
    }
  }, {
    key: 'loadPrevPage',
    value: function loadPrevPage() {
      var _state3 = this.state,
          offset = _state3.offset,
          pageSize = _state3.pageSize,
          currentChunk = _state3.currentChunk,
          prevChunk = _state3.prevChunk,
          itemsQueue = _state3.itemsQueue,
          isLoading = _state3.isLoading;


      if (isLoading) {
        this.setState({
          itemsQueue: [].concat(_toConsumableArray(itemsQueue), [this.loadNextPage]),
          isLoading: true
        });
        return;
      }

      var chunkStartOffset = currentChunk.chunkNumber * _settings.CHUNK_SIZE;
      var newOffset = offset - pageSize;
      if (newOffset >= chunkStartOffset) {
        var shouldPreloadItems = this.shouldPreloadPrevChunck(newOffset);
        if (shouldPreloadItems) {
          this.loadPrevChunk();
        }
        this.setState({ offset: newOffset, animationClass: _settings.animationClasses.getFromLeft });
        return;
      }
      if (prevChunk) {
        this.setState({
          prevChunk: null,
          currentChunk: prevChunk,
          nextChunk: currentChunk,
          offset: newOffset,
          animationClass: _settings.animationClasses.getFromLeft
        });
      } else {
        this.setState({ offset: 0, animationClass: _settings.animationClasses.getFromLeft });
      }
    }
  }, {
    key: 'loadNextPage',
    value: function loadNextPage() {
      var _state4 = this.state,
          offset = _state4.offset,
          pageSize = _state4.pageSize,
          currentChunk = _state4.currentChunk,
          nextChunk = _state4.nextChunk,
          itemsQueue = _state4.itemsQueue,
          isLoading = _state4.isLoading;


      if (isLoading) {
        this.setState({
          itemsQueue: [].concat(_toConsumableArray(itemsQueue), [this.loadNextPage]),
          isLoading: true
        });
        return;
      }

      var chunkStartOffset = (currentChunk.chunkNumber + 1) * _settings.CHUNK_SIZE;
      var newOffset = offset + pageSize;
      if (newOffset < chunkStartOffset) {
        var shouldPreloadItems = this.shouldPreloadNextChunk(newOffset);
        if (shouldPreloadItems) {
          this.loadNextChunk();
        }
        this.setState({ offset: newOffset, animationClass: _settings.animationClasses.getFromRight });
      } else if (nextChunk) {
        this.setState({
          prevChunk: currentChunk,
          currentChunk: nextChunk,
          nextChunk: null,
          offset: newOffset,
          animationClass: _settings.animationClasses.getFromRight
        });
      }
    }
  }, {
    key: 'rotateItemsQueue',
    value: function rotateItemsQueue() {
      var _state5 = this.state,
          itemsQueue = _state5.itemsQueue,
          isLoading = _state5.isLoading;


      if (!itemsQueue.length || isLoading) {
        return;
      }

      var _itemsQueue = _toArray(itemsQueue),
          rotateCallback = _itemsQueue[0],
          rest = _itemsQueue.slice(1);

      this.setState({ itemsQueue: rest });
      rotateCallback();
      this.rotateItemsQueue();
    }
  }, {
    key: 'loadVideoItems',
    value: function loadVideoItems(pageToken, callback) {
      var searchQuery = this.state.searchQuery;

      var result = (0, _fetchVideoItems2.default)({ searchQuery: searchQuery, pageToken: pageToken }).then(callback).then(this.rotateItemsQueue).then(this.render).catch(function (err) {
        throw err;
      });
      this.setState({ isLoading: true });
      return result;
    }
  }, {
    key: 'onInputChange',
    value: function onInputChange(event) {
      var _this4 = this;

      this.setState({
        searchQuery: event.target.value,
        prevChunk: null,
        nextChunk: null,
        currentChunk: null
      });
      this.setState({
        offset: 0,
        animationClass: _settings.animationClasses.getFromBottom
      });
      this.loadVideoItems(null, function (chunk) {
        return _this4.setState({
          currentChunk: _extends({ chunkNumber: 0 }, chunk),
          isLoading: false
        });
      });
    }
  }, {
    key: 'onWindowResize',
    value: function onWindowResize() {
      var pageSize = this.state.pageSize;

      var newPageSize = (0, _getNumberOfBlocks2.default)();
      if (pageSize !== newPageSize) {
        this.setState({ pageSize: newPageSize });
        this.render();
      }
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(e) {
      var clientX = e.clientX;

      this.clientX = clientX;
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp(e) {
      var clientX = e.clientX;

      if (this.clientX - clientX < 0) {
        this.loadPrevPage();
      }
      if (this.clientX - clientX > 0) {
        this.loadNextPage();
      }
    }
  }, {
    key: 'onTouchStart',
    value: function onTouchStart(e) {
      var changedTouches = e.changedTouches;

      this.clientX = changedTouches[0].clientX;
    }
  }, {
    key: 'onTouchEnd',
    value: function onTouchEnd(e) {
      var changedTouches = e.changedTouches;
      var clientX = changedTouches[0].clientX;

      if (this.clientX - clientX < 0) {
        this.loadPrevPage();
      }
      if (this.clientX - clientX > 0) {
        this.loadNextPage();
      }
    }
  }, {
    key: 'getCurrentPageNumber',
    value: function getCurrentPageNumber() {
      var _state6 = this.state,
          offset = _state6.offset,
          pageSize = _state6.pageSize;

      return Math.floor(offset / pageSize) + 1;
    }
  }, {
    key: 'getCurrentPageItems',
    value: function getCurrentPageItems() {
      var _state7 = this.state,
          offset = _state7.offset,
          currentChunk = _state7.currentChunk,
          prevChunk = _state7.prevChunk,
          nextChunk = _state7.nextChunk,
          pageSize = _state7.pageSize;


      if (!currentChunk) {
        return [];
      }

      var startOffset = prevChunk ? prevChunk.chunkNumber * _settings.CHUNK_SIZE : currentChunk.chunkNumber * _settings.CHUNK_SIZE;
      var itemsOffset = offset - startOffset;
      var items = [];
      if (prevChunk) {
        items.push.apply(items, _toConsumableArray(prevChunk.items));
      }
      items.push.apply(items, _toConsumableArray(currentChunk.items));
      if (nextChunk) {
        items.push.apply(items, _toConsumableArray(nextChunk.items));
      }

      return items.slice(itemsOffset, itemsOffset + pageSize);
    }
  }, {
    key: 'render',
    value: function render() {
      var slider = this.sliderRenderFunction({
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        onTouchStart: this.onTouchStart,
        onTouchEnd: this.onTouchEnd,
        animationClass: this.state.animationClass,
        videoItems: this.getCurrentPageItems()
      });

      if (this.slider !== slider && !this.isLoading) {
        this.component.replaceChild(slider, this.slider);
        this.slider = slider;
      }

      var paging = this.pagingRenderFunction({
        loadPrevPage: this.loadPrevPage,
        loadNextPage: this.loadNextPage,
        currentPage: this.getCurrentPageNumber()
      });

      if (this.paging !== paging) {
        this.component.replaceChild(paging, this.paging);
        this.paging = paging;
      }

      return this.component;
    }
  }]);

  return App;
}();

exports.default = App;

/***/ }),

/***/ "./src/js/components/paging/paging.js":
/*!********************************************!*\
  !*** ./src/js/components/paging/paging.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _settings = __webpack_require__(/*! ../../settings/settings */ "./src/js/settings/settings.js");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var componentClassName = 'paging';
var controlsBlockClassName = componentClassName + '-controls';
var pagingItemClassName = controlsBlockClassName + '__item';

var paging = function paging(_ref) {
  var _pagingItemPrev$class, _pagingItemNext$class;

  var loadPrevPage = _ref.loadPrevPage,
      currentPage = _ref.currentPage,
      loadNextPage = _ref.loadNextPage;

  var component = document.createElement('div');
  component.classList.add(componentClassName);

  var controlsBlock = document.createElement('div');
  controlsBlock.classList.add(controlsBlockClassName);

  var pagingItemPrev = document.createElement('span');
  (_pagingItemPrev$class = pagingItemPrev.classList).add.apply(_pagingItemPrev$class, [pagingItemClassName].concat(_toConsumableArray(_settings.prevIcon)));
  pagingItemPrev.addEventListener('click', loadPrevPage);

  var pagingItemCurrent = document.createElement('span');
  pagingItemCurrent.classList.add(pagingItemClassName);
  pagingItemCurrent.innerText = currentPage;

  var pagingItemNext = document.createElement('span');
  (_pagingItemNext$class = pagingItemNext.classList).add.apply(_pagingItemNext$class, [pagingItemClassName].concat(_toConsumableArray(_settings.nextIcon)));
  pagingItemNext.addEventListener('click', loadNextPage);

  controlsBlock.appendChild(pagingItemPrev);
  controlsBlock.appendChild(pagingItemCurrent);
  controlsBlock.appendChild(pagingItemNext);
  component.appendChild(controlsBlock);

  return component;
};

exports.default = paging;

/***/ }),

/***/ "./src/js/components/searchBar/searchBar.js":
/*!**************************************************!*\
  !*** ./src/js/components/searchBar/searchBar.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _settings = __webpack_require__(/*! ../../settings/settings */ "./src/js/settings/settings.js");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var componentClassName = 'search-bar';
var searchBarFromClassName = componentClassName + '__form';
var searchBarIconClassName = componentClassName + '__icon';
var searchBarInputClassName = componentClassName + '__input';

var searchBar = function searchBar(_ref) {
  var _searchBarIcon$classL;

  var onInputChange = _ref.onInputChange,
      searchQuery = _ref.searchQuery;

  var component = document.createElement('div');
  component.classList.add(componentClassName);

  var searchBarForm = document.createElement('form');
  searchBarForm.classList.add(searchBarFromClassName);

  var searchBarIcon = document.createElement('label');
  searchBarIcon.htmlFor = searchBarInputClassName;
  (_searchBarIcon$classL = searchBarIcon.classList).add.apply(_searchBarIcon$classL, [searchBarIconClassName].concat(_toConsumableArray(_settings.searchIcon)));

  var searchBarInput = document.createElement('input');
  searchBarInput.classList.add(searchBarInputClassName);
  searchBarInput.id = searchBarInputClassName;
  searchBarInput.type = 'text';
  searchBarInput.placeholder = 'Search...';
  searchBarInput.value = searchQuery;
  searchBarInput.addEventListener('input', onInputChange);

  searchBarForm.appendChild(searchBarIcon);
  searchBarForm.appendChild(searchBarInput);
  component.appendChild(searchBarForm);

  return component;
};

exports.default = searchBar;

/***/ }),

/***/ "./src/js/components/slider/slider.js":
/*!********************************************!*\
  !*** ./src/js/components/slider/slider.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _videoBlock = __webpack_require__(/*! ./videoBlock */ "./src/js/components/slider/videoBlock.js");

var _videoBlock2 = _interopRequireDefault(_videoBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentClassName = 'slider';
var blocksContainerClassName = componentClassName + '__blocks-container';

var slider = function slider(_ref) {
  var onMouseDown = _ref.onMouseDown,
      onMouseUp = _ref.onMouseUp,
      onTouchStart = _ref.onTouchStart,
      onTouchEnd = _ref.onTouchEnd,
      videoItems = _ref.videoItems,
      animationClass = _ref.animationClass;

  var clientX = 0;

  var component = document.createElement('div');
  component.classList.add(componentClassName);

  var blocksContainer = document.createElement('div');
  blocksContainer.classList.add(blocksContainerClassName, animationClass);

  component.addEventListener('mousedown', function (e) {
    clientX = e.clientX;

    onMouseDown(e);
  });
  component.addEventListener('mouseup', function (e) {
    blocksContainer.style.left = 0;
    onMouseUp(e);
  });
  component.addEventListener('mousemove', function (e) {
    if (e.buttons === 1) {
      blocksContainer.style.left = e.clientX - clientX + 'px';
    }
  });
  component.addEventListener('touchstart', function (e) {
    var changedTouch = e.changedTouches[0];
    clientX = changedTouch.clientX;

    onTouchStart(e);
  });
  component.addEventListener('touchend', function (e) {
    blocksContainer.style.left = 0;
    onTouchEnd(e);
  });
  component.addEventListener('touchmove', function (e) {
    blocksContainer.style.left = e.changedTouches[0].clientX - clientX + 'px';
  });

  if (videoItems) {
    videoItems.forEach(function (videoItem) {
      return blocksContainer.appendChild((0, _videoBlock2.default)(videoItem));
    });
  }

  component.appendChild(blocksContainer);

  return component;
};

exports.default = slider;

/***/ }),

/***/ "./src/js/components/slider/videoBlock.js":
/*!************************************************!*\
  !*** ./src/js/components/slider/videoBlock.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _settings = __webpack_require__(/*! ../../settings/settings */ "./src/js/settings/settings.js");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var componentClassName = 'video-block';
var contentClassName = componentClassName + '__content';
var previewClassName = componentClassName + '__preview';
var previewImageClassName = previewClassName + '-image';
var previewNameClassName = previewClassName + '-name';
var infoItemsClassName = componentClassName + '__info-items';
var infoItemsItemClassName = infoItemsClassName + '-item';
var infoItemsItemIconClassName = infoItemsItemClassName + '-icon';
var infoItemsItemTextClassName = infoItemsItemClassName + '-text';
var descriptionClassName = componentClassName + '__description';

var videoBlock = function videoBlock(_ref) {
  var _infoItemsItemIconAut, _infoItemsItemIconDat, _infoItemsItemIconVie;

  var link = _ref.link,
      title = _ref.title,
      description = _ref.description,
      channelTitle = _ref.channelTitle,
      publishedAt = _ref.publishedAt,
      viewCount = _ref.viewCount,
      thumbnails = _ref.thumbnails;

  var component = document.createElement('div');
  component.classList.add(componentClassName);

  var preview = document.createElement('div');
  preview.classList.add(previewClassName);

  var url = thumbnails.url;

  var previewImage = document.createElement('img');
  previewImage.classList.add(previewImageClassName);
  previewImage.src = url;
  previewImage.alt = 'Video preview';

  var previewName = document.createElement('div');
  previewName.classList.add(previewNameClassName);

  var previewNameLink = document.createElement('a');
  previewNameLink.href = link;
  previewNameLink.innerText = title;
  previewNameLink.target = '_blank';

  previewName.appendChild(previewNameLink);

  preview.appendChild(previewImage);
  preview.appendChild(previewName);

  var infoItems = document.createElement('div');
  infoItems.classList.add(infoItemsClassName);

  var infoItemsItemAuthor = document.createElement('div');
  infoItemsItemAuthor.classList.add(infoItemsItemClassName);

  var infoItemsItemIconAuthor = document.createElement('span');
  (_infoItemsItemIconAut = infoItemsItemIconAuthor.classList).add.apply(_infoItemsItemIconAut, [infoItemsItemIconClassName].concat(_toConsumableArray(_settings.authorIcon)));

  var infoItemsItemTextAuthor = document.createElement('div');
  infoItemsItemTextAuthor.classList.toggle(infoItemsItemTextClassName);
  infoItemsItemTextAuthor.innerText = channelTitle;

  infoItemsItemAuthor.appendChild(infoItemsItemIconAuthor);
  infoItemsItemAuthor.appendChild(infoItemsItemTextAuthor);

  var infoItemsItemDate = document.createElement('div');
  infoItemsItemDate.classList.add(infoItemsItemClassName);

  var infoItemsItemIconDate = document.createElement('span');
  (_infoItemsItemIconDat = infoItemsItemIconDate.classList).add.apply(_infoItemsItemIconDat, [infoItemsItemIconClassName].concat(_toConsumableArray(_settings.dateIcon)));

  var infoItemsItemTextDate = document.createElement('div');
  infoItemsItemTextDate.classList.add(infoItemsItemTextClassName);
  infoItemsItemTextDate.innerText = publishedAt;

  infoItemsItemDate.appendChild(infoItemsItemIconDate);
  infoItemsItemDate.appendChild(infoItemsItemTextDate);

  var infoItemsItemViews = document.createElement('div');
  infoItemsItemViews.classList.add(infoItemsItemClassName);

  var infoItemsItemIconViews = document.createElement('span');
  (_infoItemsItemIconVie = infoItemsItemIconViews.classList).add.apply(_infoItemsItemIconVie, [infoItemsItemIconClassName].concat(_toConsumableArray(_settings.eyeIcon)));

  var infoItemsItemTextViews = document.createElement('div');
  infoItemsItemTextViews.classList.add(infoItemsItemTextClassName);
  infoItemsItemTextViews.innerText = viewCount;

  infoItemsItemViews.appendChild(infoItemsItemIconViews);
  infoItemsItemViews.appendChild(infoItemsItemTextViews);

  infoItems.appendChild(infoItemsItemAuthor);
  infoItems.appendChild(infoItemsItemDate);
  infoItems.appendChild(infoItemsItemViews);

  var descriptionElement = document.createElement('div');
  descriptionElement.classList.add(descriptionClassName);

  var descriptionElementParagraph = document.createElement('p');
  descriptionElementParagraph.innerText = description;

  descriptionElement.appendChild(descriptionElementParagraph);

  var contentElement = document.createElement('div');
  contentElement.classList.add(contentClassName);

  contentElement.appendChild(preview);
  contentElement.appendChild(infoItems);
  contentElement.appendChild(descriptionElement);

  component.appendChild(contentElement);

  return component;
};

exports.default = videoBlock;

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _App = __webpack_require__(/*! ./App */ "./src/js/App.js");

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    var app = new _App2.default();
    app.init();
    document.body.appendChild(app.render());
  });
}, true);

/***/ }),

/***/ "./src/js/modules/fetchVideoItems.js":
/*!*******************************************!*\
  !*** ./src/js/modules/fetchVideoItems.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _settings = __webpack_require__(/*! ../settings/settings */ "./src/js/settings/settings.js");

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var fetchChunkInfo = function fetchChunkInfo(_ref) {
  var searchQuery = _ref.searchQuery,
      pageToken = _ref.pageToken;
  return fetch('https://www.googleapis.com/youtube/v3/search?key=' + _settings.API_KEY + '&part=id' + (pageToken ? '&pageToken=' + pageToken : '') + '&q=' + searchQuery + '&type=video&maxResults=' + _settings.CHUNK_SIZE).then(function (response) {
    return response.json();
  }).then(function (_ref2) {
    var prevPageToken = _ref2.prevPageToken,
        nextPageToken = _ref2.nextPageToken,
        items = _ref2.items;
    return {
      videoIds: items.map(function (item) {
        return item.id.videoId;
      }).join(','),
      prevPageToken: prevPageToken,
      nextPageToken: nextPageToken
    };
  }).then(function (pageInfo) {
    return pageInfo;
  });
};

var parseVideoItem = function parseVideoItem(item) {
  var id = item.id;
  var _item$snippet = item.snippet,
      title = _item$snippet.title,
      description = _item$snippet.description,
      channelTitle = _item$snippet.channelTitle,
      publishedAt = _item$snippet.publishedAt,
      thumbnails = _item$snippet.thumbnails;
  var viewCount = item.statistics.viewCount;


  var link = 'https://www.youtube.com/watch?v=' + id;

  return {
    link: link,
    title: title,
    description: description,
    channelTitle: channelTitle,
    publishedAt: publishedAt,
    viewCount: viewCount,
    thumbnails: thumbnails.medium
  };
};

var fetchChunkVideos = function fetchChunkVideos(_ref3) {
  var videoIds = _ref3.videoIds,
      rest = _objectWithoutProperties(_ref3, ['videoIds']);

  return fetch('https://www.googleapis.com/youtube/v3/videos?key=' + _settings.API_KEY + '&id=' + videoIds + '&part=snippet,statistics').then(function (response) {
    return response.json();
  }).then(function (_ref4) {
    var items = _ref4.items;
    return _extends({
      items: items.map(parseVideoItem)
    }, rest);
  });
};

var fetchVideoItems = function fetchVideoItems(searchQuery) {
  return fetchChunkInfo(searchQuery).then(fetchChunkVideos);
};

exports.default = fetchVideoItems;

/***/ }),

/***/ "./src/js/modules/getNumberOfBlocks.js":
/*!*********************************************!*\
  !*** ./src/js/modules/getNumberOfBlocks.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _settings = __webpack_require__(/*! ../settings/settings */ "./src/js/settings/settings.js");

var getNumberOfBlocks = function getNumberOfBlocks() {
  var width = document.getElementsByTagName('body')[0].clientWidth;
  return _settings.BLOCKS_PER_WIDTH[Object.keys(_settings.BLOCKS_PER_WIDTH).find(function (key) {
    return width <= Number(key);
  })] || _settings.BLOCKS_PER_WIDTH.default;
};

exports.default = getNumberOfBlocks;

/***/ }),

/***/ "./src/js/modules/shouldPreloadChunk.js":
/*!**********************************************!*\
  !*** ./src/js/modules/shouldPreloadChunk.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _settings = __webpack_require__(/*! ../settings/settings */ "./src/js/settings/settings.js");

var shouldPreloadChunk = function shouldPreloadChunk(chunkToPreload, pageToken, offset, ratio, comparator) {
  return !!pageToken && !chunkToPreload && comparator(offset % _settings.CHUNK_SIZE / _settings.CHUNK_SIZE, ratio);
};

exports.default = shouldPreloadChunk;

/***/ }),

/***/ "./src/js/settings/settings.js":
/*!*************************************!*\
  !*** ./src/js/settings/settings.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var API_KEY = exports.API_KEY = 'AIzaSyBd4EQYoErcUZxdnGBW2knZeCBmPnN77jw';
var CHUNK_SIZE = exports.CHUNK_SIZE = 16;
var PRELOAD_ITEMS_RATIO = exports.PRELOAD_ITEMS_RATIO = 0.7;
var BLOCKS_PER_WIDTH = exports.BLOCKS_PER_WIDTH = {
  480: 1,
  1280: 2,
  default: 4
};
var animationClasses = exports.animationClasses = {
  getFromBottom: 'get-from-bottom',
  getFromLeft: 'get-from-left',
  getFromRight: 'get-from-right'
};
var prevIcon = exports.prevIcon = ['fas', 'fa-arrow-left'];
var nextIcon = exports.nextIcon = ['fas', 'fa-arrow-right'];
var searchIcon = exports.searchIcon = ['fas', 'fa-search'];
var authorIcon = exports.authorIcon = ['fas', 'fa-user-circle'];
var dateIcon = exports.dateIcon = ['fas', 'fa-calendar'];
var eyeIcon = exports.eyeIcon = ['far', 'fa-eye'];

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!****************************************************!*\
  !*** multi ./src/js/main.js ./src/scss/style.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/main.js */"./src/js/main.js");
module.exports = __webpack_require__(/*! ./src/scss/style.scss */"./src/scss/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map