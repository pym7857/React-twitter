module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("O40h");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");
var external_next_redux_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_wrapper_);

// EXTERNAL MODULE: external "next-redux-saga"
var external_next_redux_saga_ = __webpack_require__("pEZS");
var external_next_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_saga_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__("zIXN");
var external_react_helmet_default = /*#__PURE__*/__webpack_require__.n(external_react_helmet_);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("doui");

// EXTERNAL MODULE: ./pages/signup.js
var signup = __webpack_require__("vL9u");

// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__("LAVF");

// CONCATENATED MODULE: ./containers/LoginForm.js





 // 커스텀 훅 



var LoginForm_LoginForm = function LoginForm() {
  var _useInput = Object(signup["useInput"])(''),
      _useInput2 = Object(slicedToArray["a" /* default */])(_useInput, 2),
      id = _useInput2[0],
      onChangeId = _useInput2[1];

  var _useInput3 = Object(signup["useInput"])(''),
      _useInput4 = Object(slicedToArray["a" /* default */])(_useInput3, 2),
      password = _useInput4[0],
      onChangePassword = _useInput4[1];

  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return state.user;
  }),
      isLoggingIn = _useSelector.isLoggingIn;

  var dispatch = Object(external_react_redux_["useDispatch"])();
  var onSubmitForm = Object(external_react_["useCallback"])(function (e) {
    // props로 들어가는 함수는 무조건 useCallback
    e.preventDefault();
    return dispatch({
      type: user["r" /* LOG_IN_REQUEST */],
      data: {
        userId: id,
        password: password
      }
    });
  }, [id, password]);
  return /*#__PURE__*/external_react_default.a.createElement(external_antd_["Form"], {
    onSubmit: onSubmitForm,
    style: {
      padding: '10px'
    }
  }, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("label", {
    htmlFor: "user-id"
  }, "\uC544\uC774\uB514"), /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Input"], {
    name: "user-id",
    value: id,
    onChange: onChangeId,
    required: true
  })), /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("label", {
    htmlFor: "user-password"
  }, "\uBE44\uBC00\uBC88\uD638"), /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Input"], {
    name: "user-password",
    type: "password",
    value: password,
    onChange: onChangePassword,
    required: true
  })), /*#__PURE__*/external_react_default.a.createElement("div", {
    style: {
      marginTop: '10px'
    }
  }, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: isLoggingIn
  }, "\uB85C\uADF8\uC778"), /*#__PURE__*/external_react_default.a.createElement(link_default.a, {
    href: "/signup"
  }, /*#__PURE__*/external_react_default.a.createElement("a", null, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Button"], null, "\uD68C\uC6D0\uAC00\uC785")))));
};

/* harmony default export */ var containers_LoginForm = (LoginForm_LoginForm);
// CONCATENATED MODULE: ./containers/UserProfile.js






var UserProfile_UserProfile = function UserProfile() {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var dispatch = Object(external_react_redux_["useDispatch"])();
  var onLogout = Object(external_react_["useCallback"])(function () {
    // useCallback으로 감싸는 이유는 자식컴포넌트에 props로 전달하기 때문
    dispatch({
      type: user["u" /* LOG_OUT_REQUEST */]
    });
  }, []);
  return /*#__PURE__*/external_react_default.a.createElement(external_antd_["Card"], {
    actions: [/*#__PURE__*/external_react_default.a.createElement(link_default.a, {
      href: "/profile",
      key: "twit"
    }, /*#__PURE__*/external_react_default.a.createElement("a", null, /*#__PURE__*/external_react_default.a.createElement("div", null, "\uC9F9\uC9F9", /*#__PURE__*/external_react_default.a.createElement("br", null)))), /*#__PURE__*/external_react_default.a.createElement(link_default.a, {
      href: "/profile",
      key: "following"
    }, /*#__PURE__*/external_react_default.a.createElement("a", null, /*#__PURE__*/external_react_default.a.createElement("div", null, "\uD314\uB85C\uC789", /*#__PURE__*/external_react_default.a.createElement("br", null)))), /*#__PURE__*/external_react_default.a.createElement(link_default.a, {
      href: "/profile",
      key: "follower"
    }, /*#__PURE__*/external_react_default.a.createElement("a", null, /*#__PURE__*/external_react_default.a.createElement("div", null, "\uD314\uB85C\uC6CC", /*#__PURE__*/external_react_default.a.createElement("br", null))))]
  }, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Card"].Meta, {
    avatar: /*#__PURE__*/external_react_default.a.createElement(external_antd_["Avatar"], null, me.nickname[0]),
    title: me.nickname
  }), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Button"], {
    onClick: onLogout
  }, "\uB85C\uADF8\uC544\uC6C3"));
};

/* harmony default export */ var containers_UserProfile = (UserProfile_UserProfile);
// CONCATENATED MODULE: ./components/AppLayout.js









var AppLayout_AppLayout = function AppLayout(_ref) {
  var children = _ref.children;

  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var dispatch = Object(external_react_redux_["useDispatch"])();

  var onSearch = function onSearch(value) {
    /* 프론트에서의 동적 라우팅 */
    router_default.a.push({
      pathname: '/hashtag',
      query: {
        tag: value
      }
    }, "hashtag/".concat(value)); // 내부적으로는 pathname: '/hashtag', query: { tag: value } } 로 접근
    // 외부적으로는 `hashtag/${value}`로 보인다.
  };
  /* useEffect(() => {
    if (!me) {  // 내 정보 없다면 
      dispatch({
        type: LOAD_USER_REQUEST,  // 내 정보 불러오기 ( 쿠키를 이용하여.. -> sagas/user.js의 loadUserAPI() 참조 )
                                  // 로그인을 안한 상태면, 쿠키도 없을테니 LOAD_USER_REQUEST 불가 
      });
    }
  }, []); */


  return /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Menu"], {
    mode: "horizontal"
  }, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Menu"].Item, {
    key: "home"
  }, /*#__PURE__*/external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, /*#__PURE__*/external_react_default.a.createElement("a", null, "\uB178\uB4DC\uBC84\uB4DC"))), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Menu"].Item, {
    key: "profile"
  }, /*#__PURE__*/external_react_default.a.createElement(link_default.a, {
    href: "/profile"
  }, /*#__PURE__*/external_react_default.a.createElement("a", null, "\uD504\uB85C\uD544"))), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Menu"].Item, {
    key: "mail"
  }, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Input"].Search, {
    enterButton: true,
    style: {
      verticalAlign: 'middle'
    },
    onSearch: onSearch
  }))), !me && /*#__PURE__*/external_react_default.a.createElement(link_default.a, {
    href: "/signup"
  }, /*#__PURE__*/external_react_default.a.createElement("a", null, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Button"], null, "\uD68C\uC6D0\uAC00\uC785"))), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Row"], {
    gutter: 10
  }, "   ", /*#__PURE__*/external_react_default.a.createElement(external_antd_["Col"], {
    xs: 24,
    md: 6
  }, me ? /*#__PURE__*/external_react_default.a.createElement(containers_UserProfile, null) : /*#__PURE__*/external_react_default.a.createElement(containers_LoginForm, null)), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Col"], {
    xs: 24,
    md: 12
  }, "\uCE60\uB4DC\uB7F0 ", children), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Col"], {
    xs: 24,
    md: 6
  })));
};

/* harmony default export */ var components_AppLayout = (AppLayout_AppLayout);
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// CONCATENATED MODULE: ./sagas/user.js


var _marked = /*#__PURE__*/regenerator_default.a.mark(login),
    _marked2 = /*#__PURE__*/regenerator_default.a.mark(watchLogin),
    _marked3 = /*#__PURE__*/regenerator_default.a.mark(signUp),
    _marked4 = /*#__PURE__*/regenerator_default.a.mark(watchSignUp),
    _marked5 = /*#__PURE__*/regenerator_default.a.mark(logOut),
    _marked6 = /*#__PURE__*/regenerator_default.a.mark(watchLogOut),
    _marked7 = /*#__PURE__*/regenerator_default.a.mark(loadUser),
    _marked8 = /*#__PURE__*/regenerator_default.a.mark(watchLoadUser),
    _marked9 = /*#__PURE__*/regenerator_default.a.mark(follow),
    _marked10 = /*#__PURE__*/regenerator_default.a.mark(watchFollow),
    _marked11 = /*#__PURE__*/regenerator_default.a.mark(unfollow),
    _marked12 = /*#__PURE__*/regenerator_default.a.mark(watchUnfollow),
    _marked13 = /*#__PURE__*/regenerator_default.a.mark(loadFollowers),
    _marked14 = /*#__PURE__*/regenerator_default.a.mark(watchLoadFollowers),
    _marked15 = /*#__PURE__*/regenerator_default.a.mark(loadFollowings),
    _marked16 = /*#__PURE__*/regenerator_default.a.mark(watchLoadFollowings),
    _marked17 = /*#__PURE__*/regenerator_default.a.mark(removeFollower),
    _marked18 = /*#__PURE__*/regenerator_default.a.mark(watchRemoveFollower),
    _marked19 = /*#__PURE__*/regenerator_default.a.mark(editNickname),
    _marked20 = /*#__PURE__*/regenerator_default.a.mark(watchEditNickname),
    _marked21 = /*#__PURE__*/regenerator_default.a.mark(userSaga);




/**
 * 로그인 3종세트
 */

function loginAPI(loginData) {
  // 서버에 요청을 보내는 부분 
  return external_axios_default.a.post('/user/login', loginData, {
    withCredentials: true
  });
}

function login(action) {
  var result;
  return regenerator_default.a.wrap(function login$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(effects_["call"])(loginAPI, action.data);

        case 3:
          result = _context.sent;
          _context.next = 6;
          return Object(effects_["put"])({
            // put은 dispatch와 동일 
            type: user["s" /* LOG_IN_SUCCESS */],
            data: result.data // axios응답(result)은 응답객체.data안에 들어있다. 

          });

        case 6:
          _context.next = 13;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          _context.next = 13;
          return Object(effects_["put"])({
            type: user["q" /* LOG_IN_FAILURE */]
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}

function watchLogin() {
  return regenerator_default.a.wrap(function watchLogin$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(effects_["takeEvery"])(user["r" /* LOG_IN_REQUEST */], login);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
/**
 * 회원가입 3종세트
 */


function signUpAPI(signUpData) {
  // 서버에 요청을 보내는 부분 
  return external_axios_default.a.post('/user', signUpData); // 백에서 signUpData를 req.body로 받는다.
}

function signUp(action) {
  return regenerator_default.a.wrap(function signUp$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(effects_["call"])(signUpAPI, action.data);

        case 3:
          _context3.next = 5;
          return Object(effects_["put"])({
            type: user["B" /* SIGN_UP_SUCCESS */]
          });

        case 5:
          _context3.next = 12;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          _context3.next = 12;
          return Object(effects_["put"])({
            type: user["z" /* SIGN_UP_FAILURE */],
            error: _context3.t0
          });

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 7]]);
}

function watchSignUp() {
  return regenerator_default.a.wrap(function watchSignUp$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(effects_["takeEvery"])(user["A" /* SIGN_UP_REQUEST */], signUp);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}
/**
 * 로그아웃 3종세트
 */


function logOutAPI() {
  // 서버에 요청을 보내는 부분
  return external_axios_default.a.post('/user/logout', {}, {
    withCredentials: true
  });
}

function logOut() {
  return regenerator_default.a.wrap(function logOut$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(effects_["call"])(logOutAPI);

        case 3:
          _context5.next = 5;
          return Object(effects_["put"])({
            // put은 dispatch 동일
            type: user["v" /* LOG_OUT_SUCCESS */]
          });

        case 5:
          _context5.next = 12;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          console.error(_context5.t0);
          _context5.next = 12;
          return Object(effects_["put"])({
            type: user["t" /* LOG_OUT_FAILURE */],
            error: _context5.t0
          });

        case 12:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 7]]);
}

function watchLogOut() {
  return regenerator_default.a.wrap(function watchLogOut$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(effects_["takeEvery"])(user["u" /* LOG_OUT_REQUEST */], logOut);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}
/**
 * 해당 유저 정보 가져오기 3종세트
 */


function loadUserAPI(userId) {
  // 서버에 요청을 보내는 부분
  return external_axios_default.a.get(userId ? "/user/".concat(userId) : '/user/', {
    // userId가 있으면 남의정보 가져오고
    // 없으면 내정보 가져오기    
    withCredentials: true // 쿠키로 정보가져오기 

  });
}

function loadUser(action) {
  var result;
  return regenerator_default.a.wrap(function loadUser$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return Object(effects_["call"])(loadUserAPI, action.data);

        case 3:
          result = _context7.sent;
          _context7.next = 6;
          return Object(effects_["put"])({
            // put은 dispatch 동일
            type: user["p" /* LOAD_USER_SUCCESS */],
            data: result.data,
            isThisMe: !action.data // 내정보 가져올때는 LOAD_USER_REQUEST에 id값을 안 넣는다.
            // 내정보 가져올때(매개변수 없을때) 
            // -> action.data === false (=값이 없으므로 false)
            // -> !action.data === true
            // -> action.isThisMe===true로 LOAD_USER_SUCCESS에 넘어간다.

          });

        case 6:
          _context7.next = 13;
          break;

        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](0);
          console.error(_context7.t0);
          _context7.next = 13;
          return Object(effects_["put"])({
            type: user["n" /* LOAD_USER_FAILURE */],
            error: _context7.t0
          });

        case 13:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7, null, [[0, 8]]);
}

function watchLoadUser() {
  return regenerator_default.a.wrap(function watchLoadUser$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(effects_["takeEvery"])(user["o" /* LOAD_USER_REQUEST */], loadUser);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}
/**
 * 팔로우 하기 3종세트
 */


function followAPI(userId) {
  // 서버에 요청을 보내는 부분
  return external_axios_default.a.post("/user/".concat(userId, "/follow"), {}, {
    withCredentials: true
  });
}

function follow(action) {
  var result;
  return regenerator_default.a.wrap(function follow$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return Object(effects_["call"])(followAPI, action.data);

        case 3:
          result = _context9.sent;
          _context9.next = 6;
          return Object(effects_["put"])({
            // put은 dispatch 동일
            type: user["g" /* FOLLOW_USER_SUCCESS */],
            data: result.data
          });

        case 6:
          _context9.next = 13;
          break;

        case 8:
          _context9.prev = 8;
          _context9.t0 = _context9["catch"](0);
          console.error(_context9.t0);
          _context9.next = 13;
          return Object(effects_["put"])({
            type: user["e" /* FOLLOW_USER_FAILURE */],
            error: _context9.t0
          });

        case 13:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9, null, [[0, 8]]);
}

function watchFollow() {
  return regenerator_default.a.wrap(function watchFollow$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return Object(effects_["takeEvery"])(user["f" /* FOLLOW_USER_REQUEST */], follow);

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10);
}
/**
 * 언팔로우 하기 3종세트
 */


function unfollowAPI(userId) {
  // 서버에 요청을 보내는 부분
  return external_axios_default.a.delete("/user/".concat(userId, "/follow"), {
    // delete는 data:{} 필요 X
    withCredentials: true
  });
}

function unfollow(action) {
  var result;
  return regenerator_default.a.wrap(function unfollow$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return Object(effects_["call"])(unfollowAPI, action.data);

        case 3:
          result = _context11.sent;
          _context11.next = 6;
          return Object(effects_["put"])({
            // put은 dispatch 동일
            type: user["E" /* UNFOLLOW_USER_SUCCESS */],
            data: result.data
          });

        case 6:
          _context11.next = 13;
          break;

        case 8:
          _context11.prev = 8;
          _context11.t0 = _context11["catch"](0);
          console.error(_context11.t0);
          _context11.next = 13;
          return Object(effects_["put"])({
            type: user["C" /* UNFOLLOW_USER_FAILURE */],
            error: _context11.t0
          });

        case 13:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11, null, [[0, 8]]);
}

function watchUnfollow() {
  return regenerator_default.a.wrap(function watchUnfollow$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return Object(effects_["takeEvery"])(user["D" /* UNFOLLOW_USER_REQUEST */], unfollow);

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12);
}
/**
 * 내 팔로워들 목록 가져오기 3종세트
 */


function loadFollowersAPI(userId) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
  // 기본값 설정 
  // 서버에 요청을 보내는 부분
  return external_axios_default.a.get("/user/".concat(userId || 0, "/followers?offset=").concat(offset, "&limit=").concat(limit), {
    withCredentials: true
  });
}

function loadFollowers(action) {
  var result;
  return regenerator_default.a.wrap(function loadFollowers$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          _context13.next = 3;
          return Object(effects_["call"])(loadFollowersAPI, action.data, action.offset);

        case 3:
          result = _context13.sent;
          _context13.next = 6;
          return Object(effects_["put"])({
            // put은 dispatch 동일
            type: user["j" /* LOAD_FOLLOWERS_SUCCESS */],
            data: result.data
          });

        case 6:
          _context13.next = 13;
          break;

        case 8:
          _context13.prev = 8;
          _context13.t0 = _context13["catch"](0);
          console.error(_context13.t0);
          _context13.next = 13;
          return Object(effects_["put"])({
            type: user["h" /* LOAD_FOLLOWERS_FAILURE */],
            error: _context13.t0
          });

        case 13:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked13, null, [[0, 8]]);
}

function watchLoadFollowers() {
  return regenerator_default.a.wrap(function watchLoadFollowers$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return Object(effects_["takeEvery"])(user["i" /* LOAD_FOLLOWERS_REQUEST */], loadFollowers);

        case 2:
        case "end":
          return _context14.stop();
      }
    }
  }, _marked14);
}
/**
 * 내가 팔로잉 하고있는 사람들 목록 가져오기 3종세트
 */


function loadFollowingsAPI(userId) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
  // 서버에 요청을 보내는 부분
  return external_axios_default.a.get("/user/".concat(userId || 0, "/followings?offset=").concat(offset, "&limit=").concat(limit), {
    withCredentials: true
  });
}

function loadFollowings(action) {
  var result;
  return regenerator_default.a.wrap(function loadFollowings$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          _context15.next = 3;
          return Object(effects_["call"])(loadFollowingsAPI, action.data, action.offset);

        case 3:
          result = _context15.sent;
          _context15.next = 6;
          return Object(effects_["put"])({
            // put은 dispatch 동일
            type: user["m" /* LOAD_FOLLOWINGS_SUCCESS */],
            data: result.data
          });

        case 6:
          _context15.next = 13;
          break;

        case 8:
          _context15.prev = 8;
          _context15.t0 = _context15["catch"](0);
          console.error(_context15.t0);
          _context15.next = 13;
          return Object(effects_["put"])({
            type: user["k" /* LOAD_FOLLOWINGS_FAILURE */],
            error: _context15.t0
          });

        case 13:
        case "end":
          return _context15.stop();
      }
    }
  }, _marked15, null, [[0, 8]]);
}

function watchLoadFollowings() {
  return regenerator_default.a.wrap(function watchLoadFollowings$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return Object(effects_["takeEvery"])(user["l" /* LOAD_FOLLOWINGS_REQUEST */], loadFollowings);

        case 2:
        case "end":
          return _context16.stop();
      }
    }
  }, _marked16);
}
/**
 * 팔로워 한명 삭제하기 3종세트
 */


function removeFollowerAPI(userId) {
  // 서버에 요청을 보내는 부분
  return external_axios_default.a.delete("/user/".concat(userId, "/follower"), {
    withCredentials: true
  });
}

function removeFollower(action) {
  var result;
  return regenerator_default.a.wrap(function removeFollower$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.prev = 0;
          _context17.next = 3;
          return Object(effects_["call"])(removeFollowerAPI, action.data);

        case 3:
          result = _context17.sent;
          _context17.next = 6;
          return Object(effects_["put"])({
            // put은 dispatch 동일
            type: user["y" /* REMOVE_FOLLOWER_SUCCESS */],
            data: result.data
          });

        case 6:
          _context17.next = 13;
          break;

        case 8:
          _context17.prev = 8;
          _context17.t0 = _context17["catch"](0);
          console.error(_context17.t0);
          _context17.next = 13;
          return Object(effects_["put"])({
            type: user["w" /* REMOVE_FOLLOWER_FAILURE */],
            error: _context17.t0
          });

        case 13:
        case "end":
          return _context17.stop();
      }
    }
  }, _marked17, null, [[0, 8]]);
}

function watchRemoveFollower() {
  return regenerator_default.a.wrap(function watchRemoveFollower$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return Object(effects_["takeEvery"])(user["x" /* REMOVE_FOLLOWER_REQUEST */], removeFollower);

        case 2:
        case "end":
          return _context18.stop();
      }
    }
  }, _marked18);
}
/**
 * 닉네임 수정 3종세트
 */


function editNicknameAPI(nickname) {
  // 서버에 요청을 보내는 부분
  return external_axios_default.a.patch('/user/nickname', {
    nickname: nickname
  }, {
    // 부분 수정: patch, 전체 수정: put
    withCredentials: true
  });
}

function editNickname(action) {
  var result;
  return regenerator_default.a.wrap(function editNickname$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          _context19.prev = 0;
          _context19.next = 3;
          return Object(effects_["call"])(editNicknameAPI, action.data);

        case 3:
          result = _context19.sent;
          _context19.next = 6;
          return Object(effects_["put"])({
            // put은 dispatch 동일
            type: user["d" /* EDIT_NICKNAME_SUCCESS */],
            data: result.data
          });

        case 6:
          _context19.next = 13;
          break;

        case 8:
          _context19.prev = 8;
          _context19.t0 = _context19["catch"](0);
          console.error(_context19.t0);
          _context19.next = 13;
          return Object(effects_["put"])({
            type: user["b" /* EDIT_NICKNAME_FAILURE */],
            error: _context19.t0
          });

        case 13:
        case "end":
          return _context19.stop();
      }
    }
  }, _marked19, null, [[0, 8]]);
}

function watchEditNickname() {
  return regenerator_default.a.wrap(function watchEditNickname$(_context20) {
    while (1) {
      switch (_context20.prev = _context20.next) {
        case 0:
          _context20.next = 2;
          return Object(effects_["takeEvery"])(user["c" /* EDIT_NICKNAME_REQUEST */], editNickname);

        case 2:
        case "end":
          return _context20.stop();
      }
    }
  }, _marked20);
}
/* ㅡㅡㅡㅡㅡ main ㅡㅡㅡㅡㅡ*/


function userSaga() {
  return regenerator_default.a.wrap(function userSaga$(_context21) {
    while (1) {
      switch (_context21.prev = _context21.next) {
        case 0:
          _context21.next = 2;
          return Object(effects_["all"])([Object(effects_["fork"])(watchLogin), Object(effects_["fork"])(watchLogOut), Object(effects_["fork"])(watchLoadUser), Object(effects_["fork"])(watchSignUp), Object(effects_["fork"])(watchFollow), Object(effects_["fork"])(watchUnfollow), Object(effects_["fork"])(watchLoadFollowers), Object(effects_["fork"])(watchLoadFollowings), Object(effects_["fork"])(watchRemoveFollower), Object(effects_["fork"])(watchEditNickname)]);

        case 2:
        case "end":
          return _context21.stop();
      }
    }
  }, _marked21);
}

/* harmony default export */ var sagas_user = (userSaga);
// EXTERNAL MODULE: ./reducers/post.js
var post = __webpack_require__("p+NB");

// CONCATENATED MODULE: ./sagas/post.js


var post_marked = /*#__PURE__*/regenerator_default.a.mark(loadMainPosts),
    post_marked2 = /*#__PURE__*/regenerator_default.a.mark(watchLoadMainPosts),
    post_marked3 = /*#__PURE__*/regenerator_default.a.mark(addPost),
    post_marked4 = /*#__PURE__*/regenerator_default.a.mark(watchAddPost),
    post_marked5 = /*#__PURE__*/regenerator_default.a.mark(addComment),
    post_marked6 = /*#__PURE__*/regenerator_default.a.mark(watchAddComment),
    post_marked7 = /*#__PURE__*/regenerator_default.a.mark(loadHashtagPosts),
    post_marked8 = /*#__PURE__*/regenerator_default.a.mark(watchLoadHashtagPosts),
    post_marked9 = /*#__PURE__*/regenerator_default.a.mark(loadComments),
    post_marked10 = /*#__PURE__*/regenerator_default.a.mark(watchLoadComments),
    post_marked11 = /*#__PURE__*/regenerator_default.a.mark(loadUserPosts),
    post_marked12 = /*#__PURE__*/regenerator_default.a.mark(watchLoadUserPosts),
    post_marked13 = /*#__PURE__*/regenerator_default.a.mark(uploadImages),
    post_marked14 = /*#__PURE__*/regenerator_default.a.mark(watchUploadImages),
    post_marked15 = /*#__PURE__*/regenerator_default.a.mark(likePost),
    post_marked16 = /*#__PURE__*/regenerator_default.a.mark(watchLikePost),
    post_marked17 = /*#__PURE__*/regenerator_default.a.mark(unlikePost),
    post_marked18 = /*#__PURE__*/regenerator_default.a.mark(watchUnlikePost),
    post_marked19 = /*#__PURE__*/regenerator_default.a.mark(retweet),
    post_marked20 = /*#__PURE__*/regenerator_default.a.mark(watchRetweet),
    post_marked21 = /*#__PURE__*/regenerator_default.a.mark(removePost),
    _marked22 = /*#__PURE__*/regenerator_default.a.mark(watchRemovePost),
    _marked23 = /*#__PURE__*/regenerator_default.a.mark(loadPost),
    _marked24 = /*#__PURE__*/regenerator_default.a.mark(watchLoadPost),
    _marked25 = /*#__PURE__*/regenerator_default.a.mark(postSaga);





/**
 * 게시글 불러오기 3종세트
 */

function loadMainPostsAPI() {
  var lastId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  // 게시글이 아예 하나도 안불러와져있는 경우, 마지막id가 없기때문에, 그때는 그냥 lastId = 0 으로 설정
  // 서버쪽에서는, lastId가 0이 오면, 게시글 id가 진짜 0인게 아니라, 게시글을 처음부터 불러와야겠다 라고 인식할 것
  // 서버에 요청을 보내는 부분 
  return external_axios_default.a.get("/posts?lastId=".concat(lastId, "&limit=").concat(limit));
}

function loadMainPosts(action) {
  var result;
  return regenerator_default.a.wrap(function loadMainPosts$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(effects_["call"])(loadMainPostsAPI, action.lastId);

        case 3:
          result = _context.sent;
          _context.next = 6;
          return Object(effects_["put"])({
            type: post["r" /* LOAD_MAIN_POSTS_SUCCESS */],
            data: result.data
          });

        case 6:
          _context.next = 13;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          _context.next = 13;
          return Object(effects_["put"])({
            type: post["p" /* LOAD_MAIN_POSTS_FAILURE */],
            error: _context.t0
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, post_marked, null, [[0, 8]]);
}

function watchLoadMainPosts() {
  return regenerator_default.a.wrap(function watchLoadMainPosts$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(effects_["throttle"])(1000, post["q" /* LOAD_MAIN_POSTS_REQUEST */], loadMainPosts);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, post_marked2);
}
/**
 * 게시글 업로드 3종세트
 */


function addPostAPI(formData) {
  // 서버에 요청을 보내는 부분 
  return external_axios_default.a.post('/post', formData, {
    withCredentials: true // 로그인 한 사람만 글을 쓸 수 있도록 쿠키를 보내줘야한다.(쿠키를 보내서 내가 지금 로그인했는지를 인증받아야 한다.)

  });
}

function addPost(action) {
  var result;
  return regenerator_default.a.wrap(function addPost$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(effects_["call"])(addPostAPI, action.data);

        case 3:
          result = _context3.sent;
          _context3.next = 6;
          return Object(effects_["put"])({
            // post reducer의 데이터를 수정하는 부분 
            type: post["f" /* ADD_POST_SUCCESS */],
            data: result.data
          });

        case 6:
          _context3.next = 8;
          return Object(effects_["put"])({
            // user reducer의 데이터를 수정하는 부분 
            type: user["a" /* ADD_POST_TO_ME */],
            data: result.data.id
          });

        case 8:
          _context3.next = 15;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          _context3.next = 15;
          return Object(effects_["put"])({
            type: post["d" /* ADD_POST_FAILURE */],
            error: _context3.t0
          });

        case 15:
        case "end":
          return _context3.stop();
      }
    }
  }, post_marked3, null, [[0, 10]]);
}

function watchAddPost() {
  return regenerator_default.a.wrap(function watchAddPost$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(effects_["takeLatest"])(post["e" /* ADD_POST_REQUEST */], addPost);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, post_marked4);
}
/**
 * 댓글 업로드 3종세트
 */


function addCommentAPI(data) {
  // 서버에 요청을 보내는 부분 
  return external_axios_default.a.post("/post/".concat(data.postId, "/comment"), {
    content: data.content
  }, {
    withCredentials: true
  });
}

function addComment(action) {
  var result;
  return regenerator_default.a.wrap(function addComment$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(effects_["call"])(addCommentAPI, action.data);

        case 3:
          result = _context5.sent;
          _context5.next = 6;
          return Object(effects_["put"])({
            type: post["c" /* ADD_COMMENT_SUCCESS */],
            data: {
              postId: action.data.postId,
              comment: result.data
            }
          });

        case 6:
          _context5.next = 13;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          console.error(_context5.t0);
          _context5.next = 13;
          return Object(effects_["put"])({
            type: post["a" /* ADD_COMMENT_FAILURE */],
            error: _context5.t0
          });

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, post_marked5, null, [[0, 8]]);
}

function watchAddComment() {
  return regenerator_default.a.wrap(function watchAddComment$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(effects_["takeLatest"])(post["b" /* ADD_COMMENT_REQUEST */], addComment);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, post_marked6);
}
/**
 * 특정 해시태그에 해당하는 게시글 가져오기 3종세트
 */


function loadHashtagPostsAPI(tag) {
  var lastId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  return external_axios_default.a.get("/hashtag/".concat(encodeURIComponent(tag), "?lastId=").concat(lastId, "&limit=").concat(limit));
}

function loadHashtagPosts(action) {
  var result;
  return regenerator_default.a.wrap(function loadHashtagPosts$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return Object(effects_["call"])(loadHashtagPostsAPI, action.data, action.lastId);

        case 3:
          result = _context7.sent;
          _context7.next = 6;
          return Object(effects_["put"])({
            type: post["o" /* LOAD_HASHTAG_POSTS_SUCCESS */],
            data: result.data
          });

        case 6:
          _context7.next = 13;
          break;

        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](0);
          console.error(_context7.t0);
          _context7.next = 13;
          return Object(effects_["put"])({
            type: post["m" /* LOAD_HASHTAG_POSTS_FAILURE */],
            error: _context7.t0
          });

        case 13:
        case "end":
          return _context7.stop();
      }
    }
  }, post_marked7, null, [[0, 8]]);
}

function watchLoadHashtagPosts() {
  return regenerator_default.a.wrap(function watchLoadHashtagPosts$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(effects_["takeLatest"])(post["n" /* LOAD_HASHTAG_POSTS_REQUEST */], loadHashtagPosts);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, post_marked8);
}
/**
* 게시글의 모든 댓글들 가져오기 3종세트
*/


function loadCommentsAPI(postId) {
  return external_axios_default.a.get("/post/".concat(postId, "/comments"));
}

function loadComments(action) {
  var result;
  return regenerator_default.a.wrap(function loadComments$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return Object(effects_["call"])(loadCommentsAPI, action.data);

        case 3:
          result = _context9.sent;
          _context9.next = 6;
          return Object(effects_["put"])({
            type: post["l" /* LOAD_COMMENTS_SUCCESS */],
            data: {
              postId: action.data,
              comments: result.data
            }
          });

        case 6:
          _context9.next = 13;
          break;

        case 8:
          _context9.prev = 8;
          _context9.t0 = _context9["catch"](0);
          console.error('왜 댓글안돼=', _context9.t0);
          _context9.next = 13;
          return Object(effects_["put"])({
            type: post["j" /* LOAD_COMMENTS_FAILURE */],
            error: _context9.t0
          });

        case 13:
        case "end":
          return _context9.stop();
      }
    }
  }, post_marked9, null, [[0, 8]]);
}

function watchLoadComments() {
  return regenerator_default.a.wrap(function watchLoadComments$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return Object(effects_["takeLatest"])(post["k" /* LOAD_COMMENTS_REQUEST */], loadComments);

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, post_marked10);
}
/**
 * 특정 id를 가진 user의 게시글들 가져오기 3종세트
 */


function loadUserPostsAPI(id) {
  return external_axios_default.a.get("/user/".concat(id || 0, "/posts"));
}

function loadUserPosts(action) {
  var result;
  return regenerator_default.a.wrap(function loadUserPosts$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return Object(effects_["call"])(loadUserPostsAPI, action.data);

        case 3:
          result = _context11.sent;
          _context11.next = 6;
          return Object(effects_["put"])({
            type: post["x" /* LOAD_USER_POSTS_SUCCESS */],
            data: result.data
          });

        case 6:
          _context11.next = 13;
          break;

        case 8:
          _context11.prev = 8;
          _context11.t0 = _context11["catch"](0);
          console.error(_context11.t0);
          _context11.next = 13;
          return Object(effects_["put"])({
            type: post["v" /* LOAD_USER_POSTS_FAILURE */],
            error: _context11.t0
          });

        case 13:
        case "end":
          return _context11.stop();
      }
    }
  }, post_marked11, null, [[0, 8]]);
}

function watchLoadUserPosts() {
  return regenerator_default.a.wrap(function watchLoadUserPosts$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return Object(effects_["takeLatest"])(post["w" /* LOAD_USER_POSTS_REQUEST */], loadUserPosts);

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, post_marked12);
}
/**
 * 이미지 업로드 3종세트
 */


function uploadImagesAPI(formData) {
  return external_axios_default.a.post('/post/images', formData, {
    // 게시글을 아직 올리지 않은 상태에서 postId알 수 있는 방법이 없음 
    withCredentials: true
  });
}

function uploadImages(action) {
  var result;
  return regenerator_default.a.wrap(function uploadImages$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          _context13.next = 3;
          return Object(effects_["call"])(uploadImagesAPI, action.data);

        case 3:
          result = _context13.sent;
          _context13.next = 6;
          return Object(effects_["put"])({
            type: post["K" /* UPLOAD_IMAGES_SUCCESS */],
            data: result.data
          });

        case 6:
          _context13.next = 13;
          break;

        case 8:
          _context13.prev = 8;
          _context13.t0 = _context13["catch"](0);
          console.error(_context13.t0);
          _context13.next = 13;
          return Object(effects_["put"])({
            type: post["I" /* UPLOAD_IMAGES_FAILURE */],
            error: _context13.t0
          });

        case 13:
        case "end":
          return _context13.stop();
      }
    }
  }, post_marked13, null, [[0, 8]]);
}

function watchUploadImages() {
  return regenerator_default.a.wrap(function watchUploadImages$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return Object(effects_["takeLatest"])(post["J" /* UPLOAD_IMAGES_REQUEST */], uploadImages);

        case 2:
        case "end":
          return _context14.stop();
      }
    }
  }, post_marked14);
}
/**
 * 좋아요 누르기 3종세트
 */


function likePostAPI(postId) {
  return external_axios_default.a.post("/post/".concat(postId, "/like"), {}, {
    // 두번째 인자인 data:{}를 명시는 해놓아야됨 
    withCredentials: true
  });
}

function likePost(action) {
  var result;
  return regenerator_default.a.wrap(function likePost$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          _context15.next = 3;
          return Object(effects_["call"])(likePostAPI, action.data);

        case 3:
          result = _context15.sent;
          _context15.next = 6;
          return Object(effects_["put"])({
            type: post["i" /* LIKE_POST_SUCCESS */],
            data: {
              postId: action.data,
              // 게시글 id
              userId: result.data.userId // 좋아요 누른 사람의 id

            }
          });

        case 6:
          _context15.next = 13;
          break;

        case 8:
          _context15.prev = 8;
          _context15.t0 = _context15["catch"](0);
          console.error(_context15.t0);
          _context15.next = 13;
          return Object(effects_["put"])({
            type: post["g" /* LIKE_POST_FAILURE */],
            error: _context15.t0
          });

        case 13:
        case "end":
          return _context15.stop();
      }
    }
  }, post_marked15, null, [[0, 8]]);
}

function watchLikePost() {
  return regenerator_default.a.wrap(function watchLikePost$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return Object(effects_["takeLatest"])(post["h" /* LIKE_POST_REQUEST */], likePost);

        case 2:
        case "end":
          return _context16.stop();
      }
    }
  }, post_marked16);
}
/**
 * 좋아요 누르기 취소 3종세트
 */


function unlikePostAPI(postId) {
  return external_axios_default.a.delete("/post/".concat(postId, "/like"), {
    // delete는 두번째 인자인 data:{} 부분 없음. 
    withCredentials: true
  });
}

function unlikePost(action) {
  var result;
  return regenerator_default.a.wrap(function unlikePost$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.prev = 0;
          _context17.next = 3;
          return Object(effects_["call"])(unlikePostAPI, action.data);

        case 3:
          result = _context17.sent;
          _context17.next = 6;
          return Object(effects_["put"])({
            type: post["H" /* UNLIKE_POST_SUCCESS */],
            data: {
              postId: action.data,
              // 게시글 id
              userId: result.data.userId // 좋아요 취소한 사람의 id

            }
          });

        case 6:
          _context17.next = 13;
          break;

        case 8:
          _context17.prev = 8;
          _context17.t0 = _context17["catch"](0);
          console.error(_context17.t0);
          _context17.next = 13;
          return Object(effects_["put"])({
            type: post["F" /* UNLIKE_POST_FAILURE */],
            error: _context17.t0
          });

        case 13:
        case "end":
          return _context17.stop();
      }
    }
  }, post_marked17, null, [[0, 8]]);
}

function watchUnlikePost() {
  return regenerator_default.a.wrap(function watchUnlikePost$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return Object(effects_["takeLatest"])(post["G" /* UNLIKE_POST_REQUEST */], unlikePost);

        case 2:
        case "end":
          return _context18.stop();
      }
    }
  }, post_marked18);
}
/**
 * 리트윗 하기 3종세트
 */


function retweetAPI(postId) {
  return external_axios_default.a.post("/post/".concat(postId, "/retweet"), {}, {
    // post 요청 시에는 data가 없더라도 빈 객체 {} 라도 넣어줘야 한다. 
    withCredentials: true
  });
}

function retweet(action) {
  var result;
  return regenerator_default.a.wrap(function retweet$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          _context19.prev = 0;
          _context19.next = 3;
          return Object(effects_["call"])(retweetAPI, action.data);

        case 3:
          result = _context19.sent;
          _context19.next = 6;
          return Object(effects_["put"])({
            type: post["E" /* RETWEET_SUCCESS */],
            data: result.data
          });

        case 6:
          _context19.next = 15;
          break;

        case 8:
          _context19.prev = 8;
          _context19.t0 = _context19["catch"](0);
          console.error(_context19.t0);
          _context19.next = 13;
          return Object(effects_["put"])({
            type: post["C" /* RETWEET_FAILURE */],
            error: _context19.t0
          });

        case 13:
          console.dir(_context19.t0);
          alert(_context19.t0.response && _context19.t0.response.data); // alert로 에러 정보 알려주기 

        case 15:
        case "end":
          return _context19.stop();
      }
    }
  }, post_marked19, null, [[0, 8]]);
}

function watchRetweet() {
  return regenerator_default.a.wrap(function watchRetweet$(_context20) {
    while (1) {
      switch (_context20.prev = _context20.next) {
        case 0:
          _context20.next = 2;
          return Object(effects_["takeLatest"])(post["D" /* RETWEET_REQUEST */], retweet);

        case 2:
        case "end":
          return _context20.stop();
      }
    }
  }, post_marked20);
}
/**
 * 게시글 삭제 3종세트
 */


function removePostAPI(postId) {
  return external_axios_default.a.delete("/post/".concat(postId), {
    withCredentials: true
  });
}

function removePost(action) {
  var result;
  return regenerator_default.a.wrap(function removePost$(_context21) {
    while (1) {
      switch (_context21.prev = _context21.next) {
        case 0:
          _context21.prev = 0;
          _context21.next = 3;
          return Object(effects_["call"])(removePostAPI, action.data);

        case 3:
          result = _context21.sent;
          _context21.next = 6;
          return Object(effects_["put"])({
            // post reducer
            type: post["B" /* REMOVE_POST_SUCCESS */],
            data: result.data
          });

        case 6:
          _context21.next = 8;
          return Object(effects_["put"])({
            // user reducer (내 게시글 삭제하면, 내 짹짹 수도 하나 줄어야 한다.)
            type: REMOVE_POST_OF_ME,
            data: result.data
          });

        case 8:
          _context21.next = 15;
          break;

        case 10:
          _context21.prev = 10;
          _context21.t0 = _context21["catch"](0);
          console.error(_context21.t0);
          _context21.next = 15;
          return Object(effects_["put"])({
            type: post["z" /* REMOVE_POST_FAILURE */],
            error: _context21.t0
          });

        case 15:
        case "end":
          return _context21.stop();
      }
    }
  }, post_marked21, null, [[0, 10]]);
}

function watchRemovePost() {
  return regenerator_default.a.wrap(function watchRemovePost$(_context22) {
    while (1) {
      switch (_context22.prev = _context22.next) {
        case 0:
          _context22.next = 2;
          return Object(effects_["takeLatest"])(post["A" /* REMOVE_POST_REQUEST */], removePost);

        case 2:
        case "end":
          return _context22.stop();
      }
    }
  }, _marked22);
}
/**
 * 게시글 한개 불러오기 3종세트
 */


function loadPostAPI(postId) {
  return external_axios_default.a.get("/post/".concat(postId));
}

function loadPost(action) {
  var result;
  return regenerator_default.a.wrap(function loadPost$(_context23) {
    while (1) {
      switch (_context23.prev = _context23.next) {
        case 0:
          _context23.prev = 0;
          _context23.next = 3;
          return Object(effects_["call"])(loadPostAPI, action.data);

        case 3:
          result = _context23.sent;
          _context23.next = 6;
          return Object(effects_["put"])({
            type: post["u" /* LOAD_POST_SUCCESS */],
            data: result.data
          });

        case 6:
          _context23.next = 13;
          break;

        case 8:
          _context23.prev = 8;
          _context23.t0 = _context23["catch"](0);
          console.error(_context23.t0);
          _context23.next = 13;
          return Object(effects_["put"])({
            type: post["s" /* LOAD_POST_FAILURE */],
            error: _context23.t0
          });

        case 13:
        case "end":
          return _context23.stop();
      }
    }
  }, _marked23, null, [[0, 8]]);
}

function watchLoadPost() {
  return regenerator_default.a.wrap(function watchLoadPost$(_context24) {
    while (1) {
      switch (_context24.prev = _context24.next) {
        case 0:
          _context24.next = 2;
          return Object(effects_["takeLatest"])(post["t" /* LOAD_POST_REQUEST */], loadPost);

        case 2:
        case "end":
          return _context24.stop();
      }
    }
  }, _marked24);
}
/* ㅡㅡㅡㅡㅡ main ㅡㅡㅡㅡㅡ*/


function postSaga() {
  return regenerator_default.a.wrap(function postSaga$(_context25) {
    while (1) {
      switch (_context25.prev = _context25.next) {
        case 0:
          _context25.next = 2;
          return Object(effects_["all"])([Object(effects_["fork"])(watchLoadMainPosts), Object(effects_["fork"])(watchAddPost), Object(effects_["fork"])(watchAddComment), Object(effects_["fork"])(watchLoadComments), Object(effects_["fork"])(watchLoadHashtagPosts), Object(effects_["fork"])(watchLoadUserPosts), Object(effects_["fork"])(watchUploadImages), Object(effects_["fork"])(watchLikePost), Object(effects_["fork"])(watchUnlikePost), Object(effects_["fork"])(watchRetweet), Object(effects_["fork"])(watchRemovePost), Object(effects_["fork"])(watchLoadPost)]);

        case 2:
        case "end":
          return _context25.stop();
      }
    }
  }, _marked25);
}

/* harmony default export */ var sagas_post = (postSaga);
// CONCATENATED MODULE: ./sagas/index.js


var sagas_marked = /*#__PURE__*/regenerator_default.a.mark(rootSaga);




 // axios.post에서 공통되는 URL을 이렇게 따로 뺼 수 있음 

external_axios_default.a.defaults.baseURL = 'http://localhost:3067/api'; // axios.defaults 해주면 모든 axios에 적용이 된다. 

function rootSaga() {
  return regenerator_default.a.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(effects_["all"])([Object(effects_["fork"])(sagas_user), Object(effects_["fork"])(sagas_post)]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, sagas_marked);
}

/* harmony default export */ var sagas = (rootSaga);
// CONCATENATED MODULE: ./reducers/index.js



var rootReducer = Object(external_redux_["combineReducers"])({
  user: user["F" /* default */],
  post: post["L" /* default */]
});
/* harmony default export */ var reducers = (rootReducer);
// CONCATENATED MODULE: ./pages/_app.js














 // ../reducers/index.js와 동일 (index.js는 생략 가능)

 // rootReducer인데 reducer이름으로 가져옴 (가져오는 이름은 이처럼 맘대로 가능)

var _app_NodeBird = function NodeBird(_ref) {
  var Component = _ref.Component,
      store = _ref.store,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/external_react_default.a.createElement(app["Container"], null, /*#__PURE__*/external_react_default.a.createElement(external_react_redux_["Provider"], {
    store: store
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_helmet_default.a, {
    title: "NodeBird",
    htmlAttributes: {
      lang: 'ko'
    },
    meta: [{
      charset: 'UTF-8'
    }, {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover'
    }, {
      'http-equiv': 'X-UA-Compatible',
      content: 'IE=edge'
    }, {
      name: 'description',
      content: 'NodeBird SNS'
    }, {
      name: 'og:title',
      content: 'NodeBird'
    }, {
      name: 'og:description',
      content: 'NodeBird SNS'
    }, {
      property: 'og:type',
      content: 'website'
    }],
    link: [{
      rel: 'shortcut icon',
      href: '/linux.ico'
    }, {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css'
    }, {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
    }, {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
    }]
  }), /*#__PURE__*/external_react_default.a.createElement(components_AppLayout, null, /*#__PURE__*/external_react_default.a.createElement(Component, pageProps))));
};

/* NodeBird.getInitialProps = async (context) => {
    //console.log(context);
    const { ctx } = context;
    let pageProps = {};
    if (context.Component.getInitialProps) {
        pageProps = await context.Component.getInitialProps(ctx);
    } 
    return { pageProps };
}; */
_app_NodeBird.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee(context) {
    var ctx, Component, pageProps, cookie, state;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //console.log(context);
            ctx = context.ctx, Component = context.Component;
            pageProps = {};
            /* SSR일때는, 우리가 직접 cookie 넣어줘야 한다. */

            cookie = ctx.isServer ? ctx.req.headers.cookie : ''; // 서버환경일때, ctx.req.headers안에 cookie 가 들어있다.

            /* 서버 환경이고, cookie가 존재할때만 아래 작업 실행 */

            if (ctx.isServer && cookie) {
              external_axios_default.a.defaults.headers.Cookie = cookie; // axios에 cookie 데이터를 기본으로 심어준다. (SSR일때는 브라우저(=클라이언트)가 없기 때문에, 프론트'서버'-> 백 으로 쿠키 보내는 방법)
              // axios.defaults 해주면 모든 axios에 적용이 된다. 
            }
            /* 내 정보 먼저 가져온 후에, */


            state = ctx.store.getState();

            if (!state.user.me) {
              ctx.store.dispatch({
                type: user["o" /* LOAD_USER_REQUEST */]
              });
            }
            /* 다른 컴포넌트들을 호출한다. */


            if (!Component.getInitialProps) {
              _context.next = 13;
              break;
            }

            _context.next = 9;
            return Component.getInitialProps(ctx);

          case 9:
            _context.t0 = _context.sent;

            if (_context.t0) {
              _context.next = 12;
              break;
            }

            _context.t0 = {};

          case 12:
            pageProps = _context.t0;

          case 13:
            return _context.abrupt("return", {
              pageProps: pageProps
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();
/* 위 const NodeBird에 store를 인자로 넣어주는 부분 -> 이 부분은 그냥 암기 ! */


var _app_configureStore = function configureStore(initialState, options) {
  // initialState는 매개변수로서, redux에서 넣어줍니다.
  var sagaMiddleware = external_redux_saga_default()(); // redux-saga에서 미리 만들어놨기 때문에 그냥 갖다쓰면된다.

  /* 리덕스에 없는 기능 추가시키고 싶을때 middleware사용  ex)Redux Dev Tools */

  var middlewares = [sagaMiddleware];
  /* enhancer : middleware들을 적용(apply)해서, 리덕스의 기능을 향상시키는것 */

  var enhancer =  true ? Object(external_redux_["compose"])(external_redux_["applyMiddleware"].apply(void 0, middlewares)) // 실제 배포시에는 REDUX_DEVTOOLS 있으면 X
  : undefined;
  /* store = reducer + state */

  var store = Object(external_redux_["createStore"])(reducers, initialState, enhancer); //sagaMiddleware.run(rootSaga);   // rootSaga를 sagaMiddleware에 연결 

  store.sagaTask = sagaMiddleware.run(sagas); // [SSR]store.sagaTask를 withReduxSaga가 필요로 함. 

  return store;
};

/* harmony default export */ var _app = __webpack_exports__["default"] = (external_next_redux_wrapper_default()(_app_configureStore)(external_next_redux_saga_default()(_app_NodeBird)));

/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _assign = _interopRequireDefault(__webpack_require__("UXZV"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var utils_1 = __webpack_require__("p8BD");

var router_1 = __webpack_require__("4Q3z");

var App =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(App, _react_1$Component);

  function App() {
    (0, _classCallCheck2.default)(this, App);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(App).apply(this, arguments));
  }

  (0, _createClass2.default)(App, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        router: router_1.makePublicRouterInstance(this.props.router)
      };
    } // Kept here for backwards compatibility.
    // When someone ended App they could call `super.componentDidCatch`. This is now deprecated.

  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(err) {
      throw err;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          router = _this$props.router,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var url = createUrl(router);
      return react_1.default.createElement(Container, null, react_1.default.createElement(Component, (0, _assign.default)({}, pageProps, {
        url: url
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function (_ref) {
      var Component = _ref.Component,
          router = _ref.router,
          ctx = _ref.ctx;

      try {
        return _promise.default.resolve(utils_1.loadGetInitialProps(Component, ctx)).then(function (pageProps) {
          return {
            pageProps: pageProps
          };
        });
      } catch (e) {
        return _promise.default.reject(e);
      }
    }
  }]);
  return App;
}(react_1.Component);

App.childContextTypes = {
  router: prop_types_1.default.object
};
exports.default = App;

var Container =
/*#__PURE__*/
function (_react_1$Component2) {
  (0, _inherits2.default)(Container, _react_1$Component2);

  function Container() {
    (0, _classCallCheck2.default)(this, Container);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Container).apply(this, arguments));
  }

  (0, _createClass2.default)(Container, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToHash();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToHash();
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash() {
      var hash = window.location.hash;
      hash = hash ? hash.substring(1) : false;
      if (!hash) return;
      var el = document.getElementById(hash);
      if (!el) return; // If we call scrollIntoView() in here without a setTimeout
      // it won't scroll properly.

      setTimeout(function () {
        return el.scrollIntoView();
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return Container;
}(react_1.Component);

exports.Container = Container;
var warnUrl = utils_1.execOnce(function () {
  if (false) {}
});

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var pathname = router.pathname,
      asPath = router.asPath,
      query = router.query;
  return {
    get query() {
      warnUrl();
      return query;
    },

    get pathname() {
      warnUrl();
      return pathname;
    },

    get asPath() {
      warnUrl();
      return asPath;
    },

    back: function back() {
      warnUrl();
      router.back();
    },
    push: function push(url, as) {
      warnUrl();
      return router.push(url, as);
    },
    pushTo: function pushTo(href, as) {
      warnUrl();
      var pushRoute = as ? href : null;
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: function replace(url, as) {
      warnUrl();
      return router.replace(url, as);
    },
    replaceTo: function replaceTo(href, as) {
      warnUrl();
      var replaceRoute = as ? href : null;
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

exports.createUrl = createUrl;

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "LAVF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FOLLOW_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FOLLOW_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FOLLOW_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return UNFOLLOW_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return UNFOLLOW_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return UNFOLLOW_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EDIT_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return EDIT_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EDIT_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_POST_TO_ME; });
/* unused harmony export REMOVE_POST_OF_ME */
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("T5ka");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

/* const dummyUser = {
    nickname: '제로초',
    Post: [],
    followings: [],
    followers: [],
    id: 1,
}; */

/* redux state */

var initialState = {
  isLoggingOut: false,
  // 로그아웃 시도 중
  isLogginIn: false,
  // 로그인 시도 중 
  logInErrorReason: '',
  // 로그인 에러 사유
  signedUp: false,
  // 회원가입 성공
  isSignedUp: false,
  // 회원가입 시도 중
  signUpErrorReason: '',
  // 회원가입 에러 사유
  me: null,
  // 내 정보
  followingList: [],
  followerList: [],
  userInfo: null,
  // 남의 정보 
  isEditingNickname: false,
  // 닉네임 변경 중 
  editNicknameErrorReason: '',
  // 닉네임 변경 실패 사유 
  hasMoreFollower: false,
  // 더보기 버튼을 존재시킬지
  hasMoreFollowing: false // 더보기 버튼을 존재시킬지

};
/* Action의 이름 */

var SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
var SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
var SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
var LOG_IN_REQUEST = 'LOG_IN_REQUEST';
var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
var LOG_IN_FAILURE = 'LOG_IN_FAILURE';
var LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
var LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
var LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
var LOAD_USER_REQUEST = 'LOAD_USER_REQUEST'; // 사용자 불러오기 

var LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
var LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
var LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
var LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
var LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';
var LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
var LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
var LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';
var FOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST'; // 팔로우 액션

var FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';
var FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE';
var UNFOLLOW_USER_REQUEST = 'UNFOLLOW_USER_REQUEST'; // 언팔 액션

var UNFOLLOW_USER_SUCCESS = 'UNFOLLOW_USER_SUCCESS';
var UNFOLLOW_USER_FAILURE = 'UNFOLLOW_USER_FAILURE';
var REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST'; // 팔로워 제거 

var REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
var REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';
var EDIT_NICKNAME_REQUEST = 'EDIT_NICKNAME_REQUEST';
var EDIT_NICKNAME_SUCCESS = 'EDIT_NICKNAME_SUCCESS';
var EDIT_NICKNAME_FAILURE = 'EDIT_NICKNAME_FAILURE';
var ADD_POST_TO_ME = 'ADD_POST_TO_ME';
var REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
/* 실제 Action */
// ...

/* Reducer */

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  /* immer */
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, function (draft) {
    // immer에게 불변성을 맡기고, 우리는 draft만 자유롭게 변경해주면 된다.
    switch (action.type) {
      case LOG_IN_REQUEST:
        {
          draft.isLoggingIn = true;
          draft.isLoggedIn = false;
          draft.logInErrorReason = '';
          break;
          /* return {
              ...state,
              isLoggingIn: true,
              isLoggedIn: false,
              logInErrorReason: '',
          }; */
        }

      case LOG_IN_SUCCESS:
        {
          draft.isLoggingIn = false;
          draft.me = action.data;
          break;
          /* return {
              ...state,
              isLoggingIn: false,
              me: action.data,
              isLoading: false,
          }; */
        }

      case LOG_IN_FAILURE:
        {
          draft.isLoggingIn = false;
          draft.logInErrorReason = action.error;
          draft.me = null;
          break;
          /* return {
              ...state,
              isLoggingIn: false,
              logInErrorReason: action.error,
              me: null,
          }; */
        }

      case LOG_OUT_REQUEST:
        {
          draft.isLoggingOut = true;
          break;
          /* return {
            ...state,
            isLoggingOut: true,
          }; */
        }

      case LOG_OUT_SUCCESS:
        {
          draft.isLoggingOut = false;
          draft.me = null;
          break;
          /* return {
            ...state,
            isLoggingOut: false,
            me: null,
          }; */
        }

      case SIGN_UP_REQUEST:
        {
          draft.isSigningUp = true;
          draft.isSignedUp = false;
          draft.signUpErrorReason = '';
          break;
          /* return {
              ...state,
              isSigningUp: true,
              isSignedUp: false,
              signUpErrorReason: '',
          }; */
        }

      case SIGN_UP_SUCCESS:
        {
          alert('회원가입 성공!');
          draft.isSigningUp = false;
          draft.isSignedUp = true;
          break;
          /* return {
              isSigningUp: false,
              isSignedUp: true,
          }; */
        }

      case SIGN_UP_FAILURE:
        {
          draft.isSigningUp = false;
          draft.signUpErrorReason = action.error;
          break;
          /* return {
              isSigningUp: false,
              signUpErrorReason: action.error,
          }; */
        }

      case LOAD_USER_REQUEST:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      case LOAD_USER_SUCCESS:
        {
          if (action.isThisMe) {
            draft.me = action.data;
            break;
          } else {
            draft.userInfo = action.data;
            break;
          }
          /* if (action.isThisMe) {    // (sagas/user.js)의 function*loadUser() 에서 put으로 넘겨준것이 바로, action.me
              return {
                  ...state,
                  me: action.data,
                };
          } else {
              return {
                  ...state,
                  userInfo: action.data,
                };
          } */

        }

      case LOAD_USER_FAILURE:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      case FOLLOW_USER_REQUEST:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      case FOLLOW_USER_SUCCESS:
        {
          draft.me.Followings.unshift({
            id: action.data
          });
          break;
          /* return {
            ...state,
            me: {
              ...state.me,
              Followings: [{ id: action.data }, ...state.me.Followings],
            },
          }; */
        }

      case FOLLOW_USER_FAILURE:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      case UNFOLLOW_USER_REQUEST:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      case UNFOLLOW_USER_SUCCESS:
        {
          var userIndex1 = draft.me.Followings.findIndex(function (v) {
            return v.id === action.data;
          });
          draft.me.Followings.splice(userIndex1, 1);
          var userIndex2 = draft.me.FollowingList.findIndex(function (v) {
            return v.id === action.data;
          });
          draft.followingList.splice(userIndex2, 1);
          break;
          /* return {
            ...state,
            me: {
              ...state.me,
              Followings: state.me.Followings.filter(v => v.id !== action.data),
            },
            followingList: state.followingList.filter(v => v.id !== action.data),
          }; */
        }

      case UNFOLLOW_USER_FAILURE:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      case ADD_POST_TO_ME:
        {
          draft.me.Posts.unshift({
            id: action.data
          });
          break;
          /* return {
            ...state,
            me: {
              ...state.me,
              Posts: [{ id: action.data }, ...state.me.Posts],    // 작성한 게시글을, user정보안의 게시글 정보에 넣어주기 
            },
          }; */
        }

      case LOAD_FOLLOWERS_REQUEST:
        {
          draft.followerList = !action.offset ? [] : draft.followerList; // offset이 없는 경우, followerList = []
          // 이렇게 해줘야 2번씩 로딩 안됨 

          break;
          /* return {
            ...state,
            //hasMoreFollower: action.offset ? state.hasMoreFollower : true,  // 처음화면 일때는, offset은 0 이므로, false취급을 받아서 true로 넘어간다.(=더보기 버튼을 보여준다.)                                                         
                                                                              // (처음화면일때 offset이 0인것은, router.get('/:id/followers'... 에서 확인가능)      
                                                                              // 여기 없어도 됨 (내 Q&A 답글)
          }; */
        }

      case LOAD_FOLLOWERS_SUCCESS:
        {
          action.data.forEach(function (f) {
            draft.followerList.push(f);
          });
          draft.hasMoreFollower = action.data.length === 3;
          break;
          /* return {
            ...state,
            followerList: state.followerList.concat(action.data), // 기존것을 덮어쓰지 말고, 기존것에 추가 
            hasMoreFollower: action.data.length === 3,            // 방금 로드된 팔로워가 1명 또는 2명이라면, 더보기 버튼을 보여줄 필요가 없다.
                                                                  // 방금 로드된 팔로워가 3명일때만, 더보기 버튼을 보여줄 필요가 있다.
          }; */
        }

      case LOAD_FOLLOWERS_FAILURE:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      case LOAD_FOLLOWINGS_REQUEST:
        {
          draft.followingList = !action.offset ? [] : draft.followingList; // offset이 없는 경우, followerList = []
          // 이렇게 해줘야 2번씩 로딩 안됨 

          break;
          /* return {
            ...state,
            //hasMoreFollowing: action.offset ? state.hasMoreFollowing : true,  // 처음화면 일때는, offset은 0 이므로, false취급을 받아서 true로 넘어간다.(=더보기 버튼을 보여준다.)                                                         
                                                                                // (처음화면일때 offset이 0인것은, router.get('/:id/followings'... 에서 확인가능) 
                                                                                // 여기 없어도 됨 (내 Q&A 답글)      
          }; */
        }

      case LOAD_FOLLOWINGS_SUCCESS:
        {
          action.data.forEach(function (f) {
            draft.followingList.push(f);
          });
          draft.hasMoreFollowing = action.data.length === 3;
          break;
          /* return {
            ...state,
            followingList: state.followingList.concat(action.data),   // 기존것을 덮어쓰지 말고, 기존것에 추가
            hasMoreFollowing: action.data.length === 3,               // 방금 로드된 팔로워가 1명 또는 2명이라면, 더보기 버튼을 보여줄 필요가 없다.
                                                                      // 방금 로드된 팔로워가 3명일때만(=limit은 3이었음), 더보기 버튼을 보여줄 필요가 있다. 
          }; */
        }

      case LOAD_FOLLOWINGS_FAILURE:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      case REMOVE_FOLLOWER_REQUEST:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      case REMOVE_FOLLOWER_SUCCESS:
        {
          var _userIndex = draft.Followers.findIndex(function (v) {
            return v.id === action.data;
          });

          draft.me.Followers.splice(_userIndex, 1);

          var _userIndex2 = draft.followerList.findIndex(function (v) {
            return v.id === action.data;
          });

          draft.me.followerList.splice(_userIndex2, 1);
          break;
          /* return {
            ...state,
            me: {
              ...state.me,
              Followers: state.me.Followers.filter(v => v.id !== action.data),
            },
            followerList: state.followerList.filter(v => v.id !== action.data),
          }; */
        }

      case REMOVE_FOLLOWER_FAILURE:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      case EDIT_NICKNAME_REQUEST:
        {
          draft.isEditingNickname = true;
          draft.editNicknameErrorReason = '';
          break;
          /* return {
            ...state,
            isEditingNickname: true,
            editNicknameErrorReason: '',
          }; */
        }

      case EDIT_NICKNAME_SUCCESS:
        {
          draft.isEditingNickname = false;
          draft.me.nickname = action.data;
          break;
          /* return {
            ...state,
            isEditingNickname: false,
            me: {
              ...state.me,
              nickname: action.data,
            },
          }; */
        }

      case EDIT_NICKNAME_FAILURE:
        {
          draft.isEditingNickname = false;
          draft.editNicknameErrorReason = action.error;
          break;
          /* return {
            ...state,
            isEditingNickname: false,
            editNicknameErrorReason: action.error,
          }; */
        }

      case REMOVE_POST_OF_ME:
        {
          var postIndex = draft.me.Posts.findIndex(function (v) {
            return v.id === action.data;
          });
          draft.me.Posts.splice(postIndex, 1);
          break;
          /* return {
            ...state,
            me: {
              ...state.me,
              Posts: state.me.Posts.filter(v => v.id != action.data),
            }
          }; */
        }

      default:
        {
          break;
          /* return {
              ...state,
          }; */
        }
    }
  });
};

/* harmony default export */ __webpack_exports__["F"] = (reducer);
/* switch (action.type) {
  case LOG_IN_REQUEST: {
      return {
          ...state,
          isLoggingIn: true,
          isLoggedIn: false,
          logInErrorReason: '',
      };
  }
  case LOG_IN_SUCCESS: {
      return {
          ...state,
          isLoggingIn: false,
          me: action.data,
          isLoading: false,
      };
  }
  case LOG_IN_FAILURE: {
      return {
          ...state,
          isLoggingIn: false,
          logInErrorReason: action.error,
          me: null,
      };
  }
  case LOG_OUT_REQUEST: {
      return {
        ...state,
        isLoggingOut: true,
      };
  }
  case LOG_OUT_SUCCESS: {
      return {
        ...state,
        isLoggingOut: false,
        me: null,
      };
  }
  case SIGN_UP_REQUEST: {
      return {
          ...state,
          isSigningUp: true,
          isSignedUp: false,
          signUpErrorReason: '',
      };
  }
  case SIGN_UP_SUCCESS: {
      alert('회원가입 성공!'); 
      return {
          isSigningUp: false,
          isSignedUp: true,
      };
  }
  case SIGN_UP_FAILURE: {
      return {
          isSigningUp: false,
          signUpErrorReason: action.error,
      };
  }
  case LOAD_USER_REQUEST: {
      return {
        ...state,
      };
  }
  case LOAD_USER_SUCCESS: {
      if (action.isThisMe) {    // (sagas/user.js)의 function*loadUser() 에서 put으로 넘겨준것이 바로, action.me
          return {
              ...state,
              me: action.data,
            };
      } else {
          return {
              ...state,
              userInfo: action.data,
            };
      }
      
  }
  case LOAD_USER_FAILURE: {
      return {
        ...state,
      };
  }
  case FOLLOW_USER_REQUEST: {
      return {
        ...state,
      };
  }
  case FOLLOW_USER_SUCCESS: {
      return {
        ...state,
        me: {
          ...state.me,
          Followings: [{ id: action.data }, ...state.me.Followings],
        },
      };
  }
  case FOLLOW_USER_FAILURE: {
      return {
        ...state,
      };
  }
  case UNFOLLOW_USER_REQUEST: {
      return {
        ...state,
      };
  }
  case UNFOLLOW_USER_SUCCESS: {
      return {
        ...state,
        me: {
          ...state.me,
          Followings: state.me.Followings.filter(v => v.id !== action.data),
        },
        followingList: state.followingList.filter(v => v.id !== action.data),
      };
  }
  case UNFOLLOW_USER_FAILURE: {
      return {
        ...state,
      };
  }
  case ADD_POST_TO_ME: {
      return {
        ...state,
        me: {
          ...state.me,
          Posts: [{ id: action.data }, ...state.me.Posts],    // 작성한 게시글을, user정보안의 게시글 정보에 넣어주기 
        },
      };
  }
  case LOAD_FOLLOWERS_REQUEST: {
      return {
        ...state,
        //hasMoreFollower: action.offset ? state.hasMoreFollower : true,  // 처음화면 일때는, offset은 0 이므로, false취급을 받아서 true로 넘어간다.(=더보기 버튼을 보여준다.)                                                         
                                                                          // (처음화면일때 offset이 0인것은, router.get('/:id/followers'... 에서 확인가능)      
                                                                          // 여기 없어도 됨 (내 Q&A 답글)
      };
  }
  case LOAD_FOLLOWERS_SUCCESS: {
      return {
        ...state,
        followerList: state.followerList.concat(action.data), // 기존것을 덮어쓰지 말고, 기존것에 추가 
        hasMoreFollower: action.data.length === 3,            // 방금 로드된 팔로워가 1명 또는 2명이라면, 더보기 버튼을 보여줄 필요가 없다.
                                                              // 방금 로드된 팔로워가 3명일때만, 더보기 버튼을 보여줄 필요가 있다.
      };
  }
  case LOAD_FOLLOWERS_FAILURE: {
      return {
        ...state,
      };
  }
  case LOAD_FOLLOWINGS_REQUEST: {
      return {
        ...state,
        //hasMoreFollowing: action.offset ? state.hasMoreFollowing : true,  // 처음화면 일때는, offset은 0 이므로, false취급을 받아서 true로 넘어간다.(=더보기 버튼을 보여준다.)                                                         
                                                                            // (처음화면일때 offset이 0인것은, router.get('/:id/followings'... 에서 확인가능) 
                                                                            // 여기 없어도 됨 (내 Q&A 답글)      
      };
  }
  case LOAD_FOLLOWINGS_SUCCESS: {
      return {
        ...state,
        followingList: state.followingList.concat(action.data),   // 기존것을 덮어쓰지 말고, 기존것에 추가
        hasMoreFollowing: action.data.length === 3,               // 방금 로드된 팔로워가 1명 또는 2명이라면, 더보기 버튼을 보여줄 필요가 없다.
                                                                  // 방금 로드된 팔로워가 3명일때만(=limit은 3이었음), 더보기 버튼을 보여줄 필요가 있다. 
      };
  }
  case LOAD_FOLLOWINGS_FAILURE: {
      return {
        ...state,
      };
  }
  case REMOVE_FOLLOWER_REQUEST: {
      return {
        ...state,
      };
  }
  case REMOVE_FOLLOWER_SUCCESS: {
      return {
        ...state,
        me: {
          ...state.me,
          Followers: state.me.Followers.filter(v => v.id !== action.data),
        },
        followerList: state.followerList.filter(v => v.id !== action.data),
      };
  }
  case REMOVE_FOLLOWER_FAILURE: {
      return {
        ...state,
      };
  }
  case EDIT_NICKNAME_REQUEST: {
    return {
      ...state,
      isEditingNickname: true,
      editNicknameErrorReason: '',
    };
  }
  case EDIT_NICKNAME_SUCCESS: {
    return {
      ...state,
      isEditingNickname: false,
      me: {
        ...state.me,
        nickname: action.data,
      },
    };
  }
  case EDIT_NICKNAME_FAILURE: {
    return {
      ...state,
      isEditingNickname: false,
      editNicknameErrorReason: action.error,
    };
  }
  case REMOVE_POST_OF_ME: {
    //const index = draft.me.Posts.findIndex(v => v.id === action.data);
    //draft.me.Posts.splice(index, 1);
    //break;
    return {
      ...state,
      me: {
        ...state.me,
        Posts: state.me.Posts.filter(v => v.id != action.data),
      }
    };
  }
  default: {
      return {
          ...state,
      };
  }
} */

/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "O40h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "T5ka":
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "XXOK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "doui":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js

function _arrayWithHoles(arr) {
  if (is_array_default()(arr)) return arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("XXOK");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = get_iterator_default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _slicedToArray; });



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p+NB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOAD_MAIN_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LOAD_MAIN_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOAD_MAIN_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return LOAD_USER_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LOAD_COMMENTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LOAD_COMMENTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LOAD_COMMENTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return RETWEET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOAD_POST_FAILURE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("T5ka");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

/* redux state */

var initialState = {
  mainPosts: [],
  imagePaths: [],
  // 미리보기 이미지 경로 
  isAddingPost: false,
  // 포스트 업로드 중
  addPostErrorReason: '',
  // 포스트 업로드 실패 사유 
  postAdded: false,
  // 포스트 업로드 성공 여부 (쓰는 이유: 글 작성후, 이게 true가 되면 TextArea 비워주기 위해서)
  isAddingComment: false,
  // 댓글 업로드 중 
  addCommentErrorReason: '',
  // 댓글 업로드 에러 사유 
  commentAdded: false,
  // 댓글이 추가되었는지 (쓰는 이유: 댓글 작성후, 이게 true가 되면 TextArea 비워주기 위해서)
  addLikeErrorReason: '',
  hasMorePost: false,
  // 스크롤을 더 내려야 할지 
  singlePost: null
};
/* Action의 이름 */

var LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST'; // 메인 포스트 로딩 액션

var LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';
var LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE';
var LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST'; // 해시태그로 검색했을 때 결과 로딩 액션

var LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
var LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';
var LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST'; // 사용자가 어떤 게시글을 썼는지 로딩 액션

var LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
var LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';
var UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST'; // 이미지 업로드 액션 

var UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
var UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
var ADD_POST_REQUEST = 'ADD_POST_REQUEST'; // 게시글 업로드 액션

var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE';
var LIKE_POST_REQUEST = 'LIKE_POST_REQUEST'; // 게시글 좋아요 

var LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
var LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
var UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST'; // 게시글 좋아요 취소 

var UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
var UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
var ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
var ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
var ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
var LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST'; // 게시글 댓글 불러오기 

var LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
var LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE';
var RETWEET_REQUEST = 'RETWEET_REQUEST'; // 리트윗

var RETWEET_SUCCESS = 'RETWEET_SUCCESS';
var RETWEET_FAILURE = 'RETWEET_FAILURE';
var REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST'; // 포스트 제거 

var REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
var REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
var REMOVE_IMAGE = 'REMOVE_IMAGE';
var LOAD_POST_REQUEST = 'LOAD_POST_REQUEST'; // 게시글 한개 불러오기 

var LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
var LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
/* 실제 Action */
// ...

/* Reducer */

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  /* immer */
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, function (draft) {
    // immer에게 불변성을 맡기고, 우리는 draft만 자유롭게 변경해주면 된다.
    switch (action.type) {
      case UPLOAD_IMAGES_REQUEST:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      case UPLOAD_IMAGES_SUCCESS:
        {
          action.data.forEach(function (p) {
            // 이처럼, 더이상 불변성을 유지하지 않아도 된다. (immer에서 draft보고 알아서 불변성 감지해준다.)
            draft.imagePaths.push(p);
          });
          break;
          /* return {
            ...state,
            imagePaths: [...state.imagePaths, ...action.data],    // 기존 imagePaths배열에 action.data 추가 
          }; */
        }

      case UPLOAD_IMAGES_FAILURE:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      case REMOVE_IMAGE:
        {
          var index = draft.imagePaths.findIndex(function (v, i) {
            return i === action.index;
          });
          draft.imagePaths.splice(index, 1);
          break;
          /* return {
              ...state,
              imagePaths: state.imagePaths.filter((v, i) => i !== action.index),
          }; */
        }

      case LOAD_MAIN_POSTS_REQUEST:
      case LOAD_HASHTAG_POSTS_REQUEST:
      case LOAD_USER_POSTS_REQUEST:
        {
          draft.mainPosts = !action.lastId ? [] : draft.mainPosts; // lastId가 없으면, mainPosts = []

          draft.hasMorePost = action.lastId ? draft.hasMorePost : true;
          break;
          /* return {
            ...state,
            mainPosts: action.lastId === 0 ? [] : state.mainPosts,  // lastId가 0 이면(=처음 화면이면): REQUEST시, mainPosts = []  -> 다른데 갔다가 다시 메인화면 올 수 도 있기 때문  
                                                                    // lastId가 0 이 아니라면(=더보기 클릭시): REQUEST시, 기존 mainPosts가져오기 
            hasMorePost: action.lastId ? state.hasMorePost : true,  // 맨 첫 페이지에 게시글 로딩할때, hasMorePost가 true가 되야함. (pages/index.js hasMorePost분기 부분 참조)
          }; */
        }

      case LOAD_MAIN_POSTS_SUCCESS:
      case LOAD_HASHTAG_POSTS_SUCCESS:
      case LOAD_USER_POSTS_SUCCESS:
        {
          action.data.forEach(function (p) {
            draft.mainPosts.push(p);
          });
          break;
          /* return {
            ...state,
            mainPosts: state.mainPosts.concat(action.data),   // 덮어쓰는게 아니라, 이전 게시글에 추가하기
            hasMorePost: action.data.length === 10,           // reducers/user.js에서 hasMoreFollower했던거랑 동일한 원리 !!
          }; */
        }

      case LOAD_MAIN_POSTS_FAILURE:
      case LOAD_HASHTAG_POSTS_FAILURE:
      case LOAD_USER_POSTS_FAILURE:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      case ADD_POST_REQUEST:
        {
          draft.isAddingPost = true;
          draft.addPostErrorReason = '';
          draft.postAdded = false;
          break;
          /* return {
              ...state,
              isAddingPost: true,
              addPostErrorReason: '',
              postAdded: false,
          }; */
        }

      case ADD_POST_SUCCESS:
        {
          draft.isAddingPost = false;
          draft.mainPosts.unshift(action.data); // 배열 맨 앞에 추가할때는 unshift()

          draft.postAdded = true;
          draft.imagePaths = [];
          break;
          /* return {
              ...state,
              isAddingPost: false,
              mainPosts: [action.data, ...state.mainPosts], // 포스트들 앞에 들어가게 된다.
              postAdded: true,
              imagePaths: [],                               // success하는 순간, imagePaths 비워주기 
          }; */
        }

      case ADD_POST_FAILURE:
        {
          draft.isAddingPost = false;
          draft.addPostErrorReason = action.error;
          break;
          /* return {
              ...state,
              isAddingPost: false,
              addPostErrorReason: action.error,
          }; */
        }

      case ADD_COMMENT_REQUEST:
        {
          draft.isAddingComment = true;
          draft.addCommentErrorReason = '';
          draft.commentAdded = false;
          break;
          /* return {
              ...state,
              isAddingComment: true,
              addCommentErrorReason: '',
              commentAdded: false,
          }; */
        }

      case ADD_COMMENT_SUCCESS:
        {
          var postIndex = draft.mainPosts.findIndex(function (v) {
            return v.id === action.data.postId;
          });
          draft.mainPosts[postIndex].Comments.push(action.data.comment);
          draft.isAddingComment = false;
          draft.commentAdded = true;
          break;
          /* const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId); // 먼저, 여러개의 게시글 중에 해당 게시글의 index를 도출한 후,
          const post = state.mainPosts[postIndex];                  // 해당 게시글을 찾는다
          const Comments = [...post.Comments, action.data.comment]; // 불변성을 확보하면서, 뒤에다가 새 댓글 달아준다 
          const mainPosts = [...state.mainPosts];                   // mainPosts도 불변성을 확보해 줘야한다.
          mainPosts[postIndex] = { ...post, Comments };
          return {
              ...state,
              isAddingComment: false,
              mainPosts, // 여러 게시글 중에 해당하는 게시글에 해당 댓글 달아주기 (불변성 때문에 복잡한 작업)
              commentAdded: true,
          }; */
        }

      case ADD_COMMENT_FAILURE:
        {
          draft.isAddingComment = false;
          draft.addCommentErrorReason = action.error;
          break;
          /* return {
              ...state,
              isAddingComment: false,
              addCommentErrorReason: action.error,
          }; */
        }

      case LOAD_COMMENTS_SUCCESS:
        {
          var _postIndex = draft.mainPosts.findIndex(function (v) {
            return v.id === action.data.postId;
          });

          draft.mainPosts[_postIndex].Comments = action.data.comments;
          break;
          /* const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
          const post = state.mainPosts[postIndex];
          const Comments = action.data.comments;
          const mainPosts = [...state.mainPosts];         // mainPosts도 불변성을 확보해 줘야한다.
          mainPosts[postIndex] = { ...post, Comments };
          return {
            ...state,
            mainPosts,
          }; */
        }

      case LIKE_POST_REQUEST:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      case LIKE_POST_SUCCESS:
        {
          var _postIndex2 = draft.mainPosts.findIndex(function (v) {
            return v.id === action.data.postId;
          });

          draft.mainPosts[_postIndex2].Likers.unshift({
            id: action.data.userId
          }); // 배열 맨 앞에 추가할때는 unshift()


          break;
          /* const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
          const post = state.mainPosts[postIndex];
          const Likers = [{ id: action.data.userId }, ...post.Likers];    // 좋아요 누른 사람들 목록에, 본인 추가 
          const mainPosts = [...state.mainPosts];
          mainPosts[postIndex] = { ...post, Likers };
          return {
            ...state,
            mainPosts,
          }; */
        }

      case LIKE_POST_FAILURE:
        {
          alert('좋아요 실패!');
          draft.addLikeErrorReason = action.error;
          break;
          /* return {
            ...state,
            addLikeErrorReason: action.error,
          }; */
        }

      case UNLIKE_POST_REQUEST:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      case UNLIKE_POST_SUCCESS:
        {
          var _postIndex3 = draft.mainPosts.findIndex(function (v) {
            return v.id === action.data.postId;
          });

          var likerIndex = draft.mainPosts[_postIndex3].Likers.findIndex(function (v) {
            return v.id === action.data.userId;
          });

          draft.mainPosts[_postIndex3].Likers.splice(likerIndex, 1);

          break;
          /* const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
          const post = state.mainPosts[postIndex];
          const Likers = post.Likers.filter(v => v.id !== action.data.userId);  // 좋아요 누른 사람들 목록에, 본인 제외  
          const mainPosts = [...state.mainPosts];
          mainPosts[postIndex] = { ...post, Likers };
          return {
            ...state,
            mainPosts,
          }; */
        }

      case UNLIKE_POST_FAILURE:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      case RETWEET_REQUEST:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      case RETWEET_SUCCESS:
        {
          draft.mainPosts.unshift(action.data);
          break;
          /* return {
            ...state,
            mainPosts: [action.data, ...state.mainPosts],     // 기존 게시글의 제일 앞에 추가해준다. 
          }; */
        }

      case RETWEET_FAILURE:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      case REMOVE_POST_REQUEST:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      case REMOVE_POST_SUCCESS:
        {
          var _index = draft.mainPosts.findIndex(function (v) {
            return v.id === action.data;
          });

          draft.mainPosts.splice(_index, 1);
          break;
          /* return {
            ...state,
            mainPosts: state.mainPosts.filter(v => v.id !== action.data),
          }; */
        }

      case REMOVE_POST_FAILURE:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      case LOAD_POST_SUCCESS:
        {
          draft.singlePost = action.data;
          break;
        }

      default:
        {
          break;
          /* return {
            ...state,
          }; */
        }
    }
  });
};

/* harmony default export */ __webpack_exports__["L"] = (reducer);
/* immer쓰기 전 코드 */

/* switch (action.type) {
  case UPLOAD_IMAGES_REQUEST: {
      return {
        ...state,
      };
  }
  case UPLOAD_IMAGES_SUCCESS: {
      return {
        ...state,
        imagePaths: [...state.imagePaths, ...action.data],    // 기존 imagePaths배열에 action.data 추가 
      };
  }
  case UPLOAD_IMAGES_FAILURE: {
      return {
        ...state,
      };
  }
  case REMOVE_IMAGE: {
      return {
          ...state,
          imagePaths: state.imagePaths.filter((v, i) => i !== action.index),
      };
  }
  case LOAD_MAIN_POSTS_REQUEST: 
  case LOAD_HASHTAG_POSTS_REQUEST:
  case LOAD_USER_POSTS_REQUEST: {
      return {
        ...state,
        mainPosts: action.lastId === 0 ? [] : state.mainPosts,  // lastId가 0 이면(=처음 화면이면): REQUEST시, mainPosts = []  -> 다른데 갔다가 다시 메인화면 올 수 도 있기 때문  
                                                                // lastId가 0 이 아니라면(=더보기 클릭시): REQUEST시, 기존 mainPosts가져오기 
        hasMorePost: action.lastId ? state.hasMorePost : true,  // 맨 첫 페이지에 게시글 로딩할때, hasMorePost가 true가 되야함. (pages/index.js hasMorePost분기 부분 참조)
      };
  }
  case LOAD_MAIN_POSTS_SUCCESS: 
  case LOAD_HASHTAG_POSTS_SUCCESS:
  case LOAD_USER_POSTS_SUCCESS: {
      return {
        ...state,
        mainPosts: state.mainPosts.concat(action.data),   // 덮어쓰는게 아니라, 이전 게시글에 추가하기
        hasMorePost: action.data.length === 10,           // reducers/user.js에서 hasMoreFollower했던거랑 동일한 원리 !!
      };
  }
  case LOAD_MAIN_POSTS_FAILURE: 
  case LOAD_HASHTAG_POSTS_FAILURE:
  case LOAD_USER_POSTS_FAILURE: {
      return {
        ...state,
      };
  }
  case ADD_POST_REQUEST: {
      return {
          ...state,
          isAddingPost: true,
          addPostErrorReason: '',
          postAdded: false,
      };
  }
  case ADD_POST_SUCCESS: {
      return {
          ...state,
          isAddingPost: false,
          mainPosts: [action.data, ...state.mainPosts], // 포스트들 앞에 들어가게 된다.
          postAdded: true,
          imagePaths: [],                               // success하는 순간, imagePaths 비워주기 
      };
  }
  case ADD_POST_FAILURE: {
      return {
          ...state,
          isAddingPost: false,
          addPostErrorReason: action.error,
      };
  }
  case ADD_COMMENT_REQUEST: {
      return {
          ...state,
          isAddingComment: true,
          addCommentErrorReason: '',
          commentAdded: false,
      };
  }
  case ADD_COMMENT_SUCCESS: {
      // 항상 불변성을 조심해야 된다. 
      // 바뀔 객체만 새로 만들어 줘야된다. 
      const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId); // 먼저, 여러개의 게시글 중에 해당 게시글의 index를 도출한 후,
      const post = state.mainPosts[postIndex]; // 해당 게시글을 찾는다
      const Comments = [...post.Comments, action.data.comment]; // 불변성을 확보하면서, 뒤에다가 새 댓글 달아준다 
      const mainPosts = [...state.mainPosts]; // mainPosts도 불변성을 확보해 줘야한다.
      mainPosts[postIndex] = { ...post, Comments };

      return {
          ...state,
          isAddingComment: false,
          mainPosts, // 여러 게시글 중에 해당하는 게시글에 해당 댓글 달아주기 (불변성 때문에 복잡한 작업)
          commentAdded: true,
      };
  }
  case ADD_COMMENT_FAILURE: {
      return {
          ...state,
          isAddingComment: false,
          addCommentErrorReason: action.error,
      };
  }
  case LOAD_COMMENTS_SUCCESS: {
      // 항상 불변성을 조심해야 된다. 
      // 바뀔 객체만 새로 만들어 줘야된다. 
      const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
      const post = state.mainPosts[postIndex];
      const Comments = action.data.comments;
      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = { ...post, Comments };

      return {
        ...state,
        mainPosts,
      };
  }
  case LIKE_POST_REQUEST: {
      return {
        ...state,
      };
  }
  case LIKE_POST_SUCCESS: {
      // 항상 불변성을 조심해야 된다. 
      // 바뀔 객체만 새로 만들어 줘야된다. 
      const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
      const post = state.mainPosts[postIndex];
      const Likers = [{ id: action.data.userId }, ...post.Likers];    // 좋아요 누른 사람들 목록에, 본인 추가 
      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = { ...post, Likers };

      return {
        ...state,
        mainPosts,
      };
  }
  case LIKE_POST_FAILURE: {
      alert('좋아요 실패!');
      return {
        ...state,
        addLikeErrorReason: action.error,
      };
  }
  case UNLIKE_POST_REQUEST: {
      return {
        ...state,
      };
  }
  case UNLIKE_POST_SUCCESS: {
      const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
      const post = state.mainPosts[postIndex];
      const Likers = post.Likers.filter(v => v.id !== action.data.userId);  // 좋아요 누른 사람들 목록에, 본인 제외  
      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = { ...post, Likers };

      return {
        ...state,
        mainPosts,
      };
  }
  case UNLIKE_POST_FAILURE: {
      return {
        ...state,
      };
  }
  case RETWEET_REQUEST: {
      return {
        ...state,
      };
  }
  case RETWEET_SUCCESS: {
      return {
        ...state,
        mainPosts: [action.data, ...state.mainPosts],     // 기존 게시글의 제일 앞에 추가해준다. 
      };
  }
  case RETWEET_FAILURE: {
      return {
        ...state,
      };
  }
  case REMOVE_POST_REQUEST: {
      return {
        ...state,
      };
  }
  case REMOVE_POST_SUCCESS: {
      //const index = draft.mainPosts.findIndex(v => v.id === action.data);
      //draft.mainPosts.splice(index, 1);
      //break;
      return {
        ...state,
        mainPosts: state.mainPosts.filter(v => v.id !== action.data),
      };
  }
  case REMOVE_POST_FAILURE: {
      return {
        ...state,
      };
  }
  default: {
      return {
          ...state,
      };
  }
} */

/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pEZS":
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "vL9u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInput", function() { return useInput; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("doui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("LAVF");





 // 중복되는 로직의 이벤트 처리 -> 커스텀 훅
// export해놓으면 다른곳에서 모듈처럼 사용가능 !

var useInput = function useInput() {
  var initValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initValue),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      value = _useState2[0],
      setter = _useState2[1];

  var handler = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

var Signup = function Signup() {
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState3, 2),
      passwordCheck = _useState4[0],
      setPasswordCheck = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState5, 2),
      term = _useState6[0],
      setTerm = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState7, 2),
      passwordError = _useState8[0],
      setPasswordError = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState9, 2),
      termError = _useState10[0],
      setTermError = _useState10[1];

  var _useInput = useInput(''),
      _useInput2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useInput, 2),
      id = _useInput2[0],
      onChangeId = _useInput2[1];

  var _useInput3 = useInput(''),
      _useInput4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useInput3, 2),
      nick = _useInput4[0],
      onChangeNick = _useInput4[1];

  var _useInput5 = useInput(''),
      _useInput6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useInput5, 2),
      password = _useInput6[0],
      onChangePassword = _useInput6[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      isSigningUp = _useSelector.isSigningUp,
      me = _useSelector.me; // 회원가입 창에서 로그인 해버리는 경우, 메인페이지로 redirect


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (me) {
      alert('로그인 되었습니다. 메인페이지로 이동합니다.');
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
    }
  }, [me && me.id]);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    e.preventDefault();

    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    if (!term) {
      return setTermError(true);
    }

    return dispatch({
      // front/sagas/user.js의 sighUp함수의 매개변수인 aciton에 data객체가 담긴다.
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__[/* SIGN_UP_REQUEST */ "A"],
      data: {
        userId: id,
        password: password,
        nickname: nick
      }
    });
  }, [id, nick, password, passwordCheck, term]);
  var onChangePasswordCheck = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setPasswordError(e.target.value !== password); // 비밀번호 확인 칠때마다, 비밀번호와 같은지 확인

    setPasswordCheck(e.target.value);
  }, [password]);
  var onChangeTerm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);

  if (me) {
    return null; // 내가 로그인한 상태면, 회원가입 화면을 아예 안보여준다. 
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onSubmit: onSubmit,
    style: {
      padding: 50
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "user-id"
  }, "\uC544\uC774\uB514"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-id",
    value: id,
    required: true,
    onChange: onChangeId
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "user-nick"
  }, "\uB2C9\uB124\uC784"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-nick",
    value: nick,
    required: true,
    onChange: onChangeNick
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "user-password"
  }, "\uBE44\uBC00\uBC88\uD638"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-password",
    type: "password",
    value: password,
    required: true,
    onChange: onChangePassword
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "user-password-check"
  }, "\uBE44\uBC00\uBC88\uD638 \uD655\uC778"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-password-check",
    type: "password",
    value: passwordCheck,
    required: true,
    onChange: onChangePasswordCheck
  }), passwordError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      color: 'red'
    }
  }, "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
    name: "user-term",
    checked: term,
    onChange: onChangeTerm
  }, "OOO \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4."), termError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      color: 'red'
    }
  }, "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC154\uC57C \uD569\uB2C8\uB2E4.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      maringTop: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: isSigningUp
  }, "\uAC00\uC785\uD558\uAE30"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zIXN":
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });