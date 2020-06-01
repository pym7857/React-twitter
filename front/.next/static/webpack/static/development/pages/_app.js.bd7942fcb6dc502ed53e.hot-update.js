webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, FOLLOW_USER_REQUEST, FOLLOW_USER_SUCCESS, FOLLOW_USER_FAILURE, UNFOLLOW_USER_REQUEST, UNFOLLOW_USER_SUCCESS, UNFOLLOW_USER_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, EDIT_NICKNAME_REQUEST, EDIT_NICKNAME_SUCCESS, EDIT_NICKNAME_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_REQUEST\", function() { return SIGN_UP_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_SUCCESS\", function() { return SIGN_UP_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_FAILURE\", function() { return SIGN_UP_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_REQUEST\", function() { return LOG_IN_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_SUCCESS\", function() { return LOG_IN_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_FAILURE\", function() { return LOG_IN_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_REQUEST\", function() { return LOG_OUT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_SUCCESS\", function() { return LOG_OUT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_FAILURE\", function() { return LOG_OUT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_REQUEST\", function() { return LOAD_USER_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_SUCCESS\", function() { return LOAD_USER_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_FAILURE\", function() { return LOAD_USER_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_FOLLOWERS_REQUEST\", function() { return LOAD_FOLLOWERS_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_FOLLOWERS_SUCCESS\", function() { return LOAD_FOLLOWERS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_FOLLOWERS_FAILURE\", function() { return LOAD_FOLLOWERS_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_FOLLOWINGS_REQUEST\", function() { return LOAD_FOLLOWINGS_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_FOLLOWINGS_SUCCESS\", function() { return LOAD_FOLLOWINGS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_FOLLOWINGS_FAILURE\", function() { return LOAD_FOLLOWINGS_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FOLLOW_USER_REQUEST\", function() { return FOLLOW_USER_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FOLLOW_USER_SUCCESS\", function() { return FOLLOW_USER_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FOLLOW_USER_FAILURE\", function() { return FOLLOW_USER_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNFOLLOW_USER_REQUEST\", function() { return UNFOLLOW_USER_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNFOLLOW_USER_SUCCESS\", function() { return UNFOLLOW_USER_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNFOLLOW_USER_FAILURE\", function() { return UNFOLLOW_USER_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_FOLLOWER_REQUEST\", function() { return REMOVE_FOLLOWER_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_FOLLOWER_SUCCESS\", function() { return REMOVE_FOLLOWER_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_FOLLOWER_FAILURE\", function() { return REMOVE_FOLLOWER_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EDIT_NICKNAME_REQUEST\", function() { return EDIT_NICKNAME_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EDIT_NICKNAME_SUCCESS\", function() { return EDIT_NICKNAME_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EDIT_NICKNAME_FAILURE\", function() { return EDIT_NICKNAME_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_TO_ME\", function() { return ADD_POST_TO_ME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_OF_ME\", function() { return REMOVE_POST_OF_ME; });\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ \"./node_modules/immer/dist/immer.module.js\");\n\n/* const dummyUser = {\r\n    nickname: '제로초',\r\n    Post: [],\r\n    followings: [],\r\n    followers: [],\r\n    id: 1,\r\n}; */\n\n/* redux state */\n\nvar initialState = {\n  isLoggingOut: false,\n  // 로그아웃 시도 중\n  isLogginIn: false,\n  // 로그인 시도 중 \n  logInErrorReason: '',\n  // 로그인 에러 사유\n  signedUp: false,\n  // 회원가입 성공\n  isSignedUp: false,\n  // 회원가입 시도 중\n  signUpErrorReason: '',\n  // 회원가입 에러 사유\n  me: null,\n  // 내 정보\n  followingList: [],\n  // 내가 팔로잉 하고있는 사람들 목록 (프로필 페이지 에서만 쓰임)(다른곳에서 import 하지 X)\n  followerList: [],\n  // 나의 팔로워들 목록              (프로필 페이지 에서만 쓰임)(다른곳에서 import 하지 X)\n  userInfo: null,\n  // 남의 정보 \n  isEditingNickname: false,\n  // 닉네임 변경 중 \n  editNicknameErrorReason: '',\n  // 닉네임 변경 실패 사유 \n  hasMoreFollower: false,\n  // 더보기 버튼을 존재시킬지\n  hasMoreFollowing: false // 더보기 버튼을 존재시킬지\n\n};\n/* Action의 이름 */\n\nvar SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';\nvar SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';\nvar SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';\nvar LOG_IN_REQUEST = 'LOG_IN_REQUEST';\nvar LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';\nvar LOG_IN_FAILURE = 'LOG_IN_FAILURE';\nvar LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';\nvar LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';\nvar LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';\nvar LOAD_USER_REQUEST = 'LOAD_USER_REQUEST'; // 사용자 불러오기 \n\nvar LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';\nvar LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';\nvar LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';\nvar LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';\nvar LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';\nvar LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';\nvar LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';\nvar LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';\nvar FOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST'; // 팔로우 액션\n\nvar FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';\nvar FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE';\nvar UNFOLLOW_USER_REQUEST = 'UNFOLLOW_USER_REQUEST'; // 언팔 액션\n\nvar UNFOLLOW_USER_SUCCESS = 'UNFOLLOW_USER_SUCCESS';\nvar UNFOLLOW_USER_FAILURE = 'UNFOLLOW_USER_FAILURE';\nvar REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST'; // 팔로워 제거 \n\nvar REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';\nvar REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';\nvar EDIT_NICKNAME_REQUEST = 'EDIT_NICKNAME_REQUEST';\nvar EDIT_NICKNAME_SUCCESS = 'EDIT_NICKNAME_SUCCESS';\nvar EDIT_NICKNAME_FAILURE = 'EDIT_NICKNAME_FAILURE';\nvar ADD_POST_TO_ME = 'ADD_POST_TO_ME';\nvar REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';\n/* 실제 Action */\n// ...\n\n/* Reducer */\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  /* immer */\n  return Object(immer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state, function (draft) {\n    // immer에게 불변성을 맡기고, 우리는 draft만 자유롭게 변경해주면 된다.\n    switch (action.type) {\n      case LOG_IN_REQUEST:\n        {\n          draft.isLoggingIn = true;\n          draft.isLoggedIn = false;\n          draft.logInErrorReason = '';\n          break;\n          /* return {\r\n              ...state,\r\n              isLoggingIn: true,\r\n              isLoggedIn: false,\r\n              logInErrorReason: '',\r\n          }; */\n        }\n\n      case LOG_IN_SUCCESS:\n        {\n          draft.isLoggingIn = false;\n          draft.me = action.data;\n          break;\n          /* return {\r\n              ...state,\r\n              isLoggingIn: false,\r\n              me: action.data,\r\n              isLoading: false,\r\n          }; */\n        }\n\n      case LOG_IN_FAILURE:\n        {\n          draft.isLoggingIn = false;\n          draft.logInErrorReason = action.error;\n          draft.me = null;\n          break;\n          /* return {\r\n              ...state,\r\n              isLoggingIn: false,\r\n              logInErrorReason: action.error,\r\n              me: null,\r\n          }; */\n        }\n\n      case LOG_OUT_REQUEST:\n        {\n          draft.isLoggingOut = true;\n          break;\n          /* return {\r\n            ...state,\r\n            isLoggingOut: true,\r\n          }; */\n        }\n\n      case LOG_OUT_SUCCESS:\n        {\n          draft.isLoggingOut = false;\n          draft.me = null;\n          break;\n          /* return {\r\n            ...state,\r\n            isLoggingOut: false,\r\n            me: null,\r\n          }; */\n        }\n\n      case SIGN_UP_REQUEST:\n        {\n          draft.isSigningUp = true;\n          draft.isSignedUp = false;\n          draft.signUpErrorReason = '';\n          break;\n          /* return {\r\n              ...state,\r\n              isSigningUp: true,\r\n              isSignedUp: false,\r\n              signUpErrorReason: '',\r\n          }; */\n        }\n\n      case SIGN_UP_SUCCESS:\n        {\n          alert('회원가입 성공!');\n          draft.isSigningUp = false;\n          draft.isSignedUp = true;\n          break;\n          /* return {\r\n              isSigningUp: false,\r\n              isSignedUp: true,\r\n          }; */\n        }\n\n      case SIGN_UP_FAILURE:\n        {\n          draft.isSigningUp = false;\n          draft.signUpErrorReason = action.error;\n          break;\n          /* return {\r\n              isSigningUp: false,\r\n              signUpErrorReason: action.error,\r\n          }; */\n        }\n\n      case LOAD_USER_REQUEST:\n        {\n          break;\n          /* return {\r\n            ...state,\r\n          }; */\n        }\n\n      case LOAD_USER_SUCCESS:\n        {\n          if (action.isThisMe) {\n            draft.me = action.data;\n            break;\n          } else {\n            draft.userInfo = action.data;\n            break;\n          }\n          /* if (action.isThisMe) {    // (sagas/user.js)의 function*loadUser() 에서 put으로 넘겨준것이 바로, action.me\r\n              return {\r\n                  ...state,\r\n                  me: action.data,\r\n                };\r\n          } else {\r\n              return {\r\n                  ...state,\r\n                  userInfo: action.data,\r\n                };\r\n          } */\n\n        }\n\n      case LOAD_USER_FAILURE:\n        {\n          break;\n          /* return {\r\n            ...state,\r\n          }; */\n        }\n\n      case FOLLOW_USER_REQUEST:\n        {\n          break;\n          /* return {\r\n            ...state,\r\n          }; */\n        }\n\n      case FOLLOW_USER_SUCCESS:\n        {\n          draft.me.Followings.unshift({\n            id: action.data\n          });\n          break;\n          /* return {\r\n            ...state,\r\n            me: {\r\n              ...state.me,\r\n              Followings: [{ id: action.data }, ...state.me.Followings],\r\n            },\r\n          }; */\n        }\n\n      case FOLLOW_USER_FAILURE:\n        {\n          break;\n          /* return {\r\n            ...state,\r\n          }; */\n        }\n\n      case UNFOLLOW_USER_REQUEST:\n        {\n          break;\n          /* return {\r\n            ...state,\r\n          }; */\n        }\n\n      case UNFOLLOW_USER_SUCCESS:\n        {\n          // me.Followings 배열 안에 상대방 id가 들었는지 찾기 \n          var index = draft.me.Followings.findIndex(function (v) {\n            return v.id === action.data;\n          }); // me.Followings 배열에서 상대방 id 삭제하기\n\n          draft.me.Followings.splice(index, 1); // followingList 배열 안에 상대방 id가 들었는지 찾기 (me.FollowingList가 아니다!!!!!!!!!!!)\n\n          var index2 = draft.followingList.findIndex(function (v) {\n            return v.id === action.data;\n          }); // followingList 배열에서 상대방 id 삭제하기\n\n          draft.followingList.splice(index2, 1);\n          break;\n        }\n\n      case UNFOLLOW_USER_FAILURE:\n        {\n          console.log('action.error=', action.error);\n          break;\n          /* return {\r\n            ...state,\r\n          }; */\n        }\n\n      case ADD_POST_TO_ME:\n        {\n          draft.me.Posts.unshift({\n            id: action.data\n          });\n          break;\n          /* return {\r\n            ...state,\r\n            me: {\r\n              ...state.me,\r\n              Posts: [{ id: action.data }, ...state.me.Posts],    // 작성한 게시글을, user정보안의 게시글 정보에 넣어주기 \r\n            },\r\n          }; */\n        }\n\n      case LOAD_FOLLOWERS_REQUEST:\n        {\n          draft.followerList = !action.offset ? [] : draft.followerList; // offset이 없는 경우, followerList = []\n          // 이렇게 해줘야 2번씩 로딩 안됨 \n\n          break;\n          /* return {\r\n            ...state,\r\n            //hasMoreFollower: action.offset ? state.hasMoreFollower : true,  // 처음화면 일때는, offset은 0 이므로, false취급을 받아서 true로 넘어간다.(=더보기 버튼을 보여준다.)                                                         \r\n                                                                              // (처음화면일때 offset이 0인것은, router.get('/:id/followers'... 에서 확인가능)      \r\n                                                                              // 여기 없어도 됨 (내 Q&A 답글)\r\n          }; */\n        }\n\n      case LOAD_FOLLOWERS_SUCCESS:\n        {\n          action.data.forEach(function (f) {\n            draft.followerList.push(f);\n          });\n          draft.hasMoreFollower = action.data.length === 3;\n          break;\n          /* return {\r\n            ...state,\r\n            followerList: state.followerList.concat(action.data), // 기존것을 덮어쓰지 말고, 기존것에 추가 \r\n            hasMoreFollower: action.data.length === 3,            // 방금 로드된 팔로워가 1명 또는 2명이라면, 더보기 버튼을 보여줄 필요가 없다.\r\n                                                                  // 방금 로드된 팔로워가 3명일때만, 더보기 버튼을 보여줄 필요가 있다.\r\n          }; */\n        }\n\n      case LOAD_FOLLOWERS_FAILURE:\n        {\n          break;\n          /* return {\r\n            ...state,\r\n          }; */\n        }\n\n      case LOAD_FOLLOWINGS_REQUEST:\n        {\n          draft.followingList = !action.offset ? [] : draft.followingList; // offset이 없는 경우, followerList = []\n          // 이렇게 해줘야 2번씩 로딩 안됨 \n\n          break;\n          /* return {\r\n            ...state,\r\n            //hasMoreFollowing: action.offset ? state.hasMoreFollowing : true,  // 처음화면 일때는, offset은 0 이므로, false취급을 받아서 true로 넘어간다.(=더보기 버튼을 보여준다.)                                                         \r\n                                                                                // (처음화면일때 offset이 0인것은, router.get('/:id/followings'... 에서 확인가능) \r\n                                                                                // 여기 없어도 됨 (내 Q&A 답글)      \r\n          }; */\n        }\n\n      case LOAD_FOLLOWINGS_SUCCESS:\n        {\n          action.data.forEach(function (f) {\n            draft.followingList.push(f);\n          });\n          draft.hasMoreFollowing = action.data.length === 3;\n          break;\n          /* return {\r\n            ...state,\r\n            followingList: state.followingList.concat(action.data),   // 기존것을 덮어쓰지 말고, 기존것에 추가\r\n            hasMoreFollowing: action.data.length === 3,               // 방금 로드된 팔로워가 1명 또는 2명이라면, 더보기 버튼을 보여줄 필요가 없다.\r\n                                                                      // 방금 로드된 팔로워가 3명일때만(=limit은 3이었음), 더보기 버튼을 보여줄 필요가 있다. \r\n          }; */\n        }\n\n      case LOAD_FOLLOWINGS_FAILURE:\n        {\n          break;\n          /* return {\r\n            ...state,\r\n          }; */\n        }\n\n      case REMOVE_FOLLOWER_REQUEST:\n        {\n          break;\n          /* return {\r\n            ...state,\r\n          }; */\n        }\n\n      case REMOVE_FOLLOWER_SUCCESS:\n        {\n          var userIndex1 = draft.Followers.findIndex(function (v) {\n            return v.id === action.data;\n          });\n          draft.me.Followers.splice(userIndex1, 1);\n          var userIndex2 = draft.followerList.findIndex(function (v) {\n            return v.id === action.data;\n          });\n          draft.me.followerList.splice(userIndex2, 1);\n          break;\n          /* return {\r\n            ...state,\r\n            me: {\r\n              ...state.me,\r\n              Followers: state.me.Followers.filter(v => v.id !== action.data),\r\n            },\r\n            followerList: state.followerList.filter(v => v.id !== action.data),\r\n          }; */\n        }\n\n      case REMOVE_FOLLOWER_FAILURE:\n        {\n          break;\n          /* return {\r\n            ...state,\r\n          }; */\n        }\n\n      case EDIT_NICKNAME_REQUEST:\n        {\n          draft.isEditingNickname = true;\n          draft.editNicknameErrorReason = '';\n          break;\n          /* return {\r\n            ...state,\r\n            isEditingNickname: true,\r\n            editNicknameErrorReason: '',\r\n          }; */\n        }\n\n      case EDIT_NICKNAME_SUCCESS:\n        {\n          draft.isEditingNickname = false;\n          draft.me.nickname = action.data;\n          break;\n          /* return {\r\n            ...state,\r\n            isEditingNickname: false,\r\n            me: {\r\n              ...state.me,\r\n              nickname: action.data,\r\n            },\r\n          }; */\n        }\n\n      case EDIT_NICKNAME_FAILURE:\n        {\n          draft.isEditingNickname = false;\n          draft.editNicknameErrorReason = action.error;\n          break;\n          /* return {\r\n            ...state,\r\n            isEditingNickname: false,\r\n            editNicknameErrorReason: action.error,\r\n          }; */\n        }\n\n      case REMOVE_POST_OF_ME:\n        {\n          var postIndex = draft.me.Posts.findIndex(function (v) {\n            return v.id === action.data;\n          });\n          draft.me.Posts.splice(postIndex, 1);\n          break;\n          /* return {\r\n            ...state,\r\n            me: {\r\n              ...state.me,\r\n              Posts: state.me.Posts.filter(v => v.id != action.data),\r\n            }\r\n          }; */\n        }\n\n      default:\n        {\n          break;\n          /* return {\r\n              ...state,\r\n          }; */\n        }\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n/* switch (action.type) {\r\n  case LOG_IN_REQUEST: {\r\n      return {\r\n          ...state,\r\n          isLoggingIn: true,\r\n          isLoggedIn: false,\r\n          logInErrorReason: '',\r\n      };\r\n  }\r\n  case LOG_IN_SUCCESS: {\r\n      return {\r\n          ...state,\r\n          isLoggingIn: false,\r\n          me: action.data,\r\n          isLoading: false,\r\n      };\r\n  }\r\n  case LOG_IN_FAILURE: {\r\n      return {\r\n          ...state,\r\n          isLoggingIn: false,\r\n          logInErrorReason: action.error,\r\n          me: null,\r\n      };\r\n  }\r\n  case LOG_OUT_REQUEST: {\r\n      return {\r\n        ...state,\r\n        isLoggingOut: true,\r\n      };\r\n  }\r\n  case LOG_OUT_SUCCESS: {\r\n      return {\r\n        ...state,\r\n        isLoggingOut: false,\r\n        me: null,\r\n      };\r\n  }\r\n  case SIGN_UP_REQUEST: {\r\n      return {\r\n          ...state,\r\n          isSigningUp: true,\r\n          isSignedUp: false,\r\n          signUpErrorReason: '',\r\n      };\r\n  }\r\n  case SIGN_UP_SUCCESS: {\r\n      alert('회원가입 성공!'); \r\n      return {\r\n          isSigningUp: false,\r\n          isSignedUp: true,\r\n      };\r\n  }\r\n  case SIGN_UP_FAILURE: {\r\n      return {\r\n          isSigningUp: false,\r\n          signUpErrorReason: action.error,\r\n      };\r\n  }\r\n  case LOAD_USER_REQUEST: {\r\n      return {\r\n        ...state,\r\n      };\r\n  }\r\n  case LOAD_USER_SUCCESS: {\r\n      if (action.isThisMe) {    // (sagas/user.js)의 function*loadUser() 에서 put으로 넘겨준것이 바로, action.me\r\n          return {\r\n              ...state,\r\n              me: action.data,\r\n            };\r\n      } else {\r\n          return {\r\n              ...state,\r\n              userInfo: action.data,\r\n            };\r\n      }\r\n      \r\n  }\r\n  case LOAD_USER_FAILURE: {\r\n      return {\r\n        ...state,\r\n      };\r\n  }\r\n  case FOLLOW_USER_REQUEST: {\r\n      return {\r\n        ...state,\r\n      };\r\n  }\r\n  case FOLLOW_USER_SUCCESS: {\r\n      return {\r\n        ...state,\r\n        me: {\r\n          ...state.me,\r\n          Followings: [{ id: action.data }, ...state.me.Followings],\r\n        },\r\n      };\r\n  }\r\n  case FOLLOW_USER_FAILURE: {\r\n      return {\r\n        ...state,\r\n      };\r\n  }\r\n  case UNFOLLOW_USER_REQUEST: {\r\n      return {\r\n        ...state,\r\n      };\r\n  }\r\n  case UNFOLLOW_USER_SUCCESS: {\r\n      return {\r\n        ...state,\r\n        me: {\r\n          ...state.me,\r\n          Followings: state.me.Followings.filter(v => v.id !== action.data),\r\n        },\r\n        followingList: state.followingList.filter(v => v.id !== action.data),\r\n      };\r\n  }\r\n  case UNFOLLOW_USER_FAILURE: {\r\n      return {\r\n        ...state,\r\n      };\r\n  }\r\n  case ADD_POST_TO_ME: {\r\n      return {\r\n        ...state,\r\n        me: {\r\n          ...state.me,\r\n          Posts: [{ id: action.data }, ...state.me.Posts],    // 작성한 게시글을, user정보안의 게시글 정보에 넣어주기 \r\n        },\r\n      };\r\n  }\r\n  case LOAD_FOLLOWERS_REQUEST: {\r\n      return {\r\n        ...state,\r\n        //hasMoreFollower: action.offset ? state.hasMoreFollower : true,  // 처음화면 일때는, offset은 0 이므로, false취급을 받아서 true로 넘어간다.(=더보기 버튼을 보여준다.)                                                         \r\n                                                                          // (처음화면일때 offset이 0인것은, router.get('/:id/followers'... 에서 확인가능)      \r\n                                                                          // 여기 없어도 됨 (내 Q&A 답글)\r\n      };\r\n  }\r\n  case LOAD_FOLLOWERS_SUCCESS: {\r\n      return {\r\n        ...state,\r\n        followerList: state.followerList.concat(action.data), // 기존것을 덮어쓰지 말고, 기존것에 추가 \r\n        hasMoreFollower: action.data.length === 3,            // 방금 로드된 팔로워가 1명 또는 2명이라면, 더보기 버튼을 보여줄 필요가 없다.\r\n                                                              // 방금 로드된 팔로워가 3명일때만, 더보기 버튼을 보여줄 필요가 있다.\r\n      };\r\n  }\r\n  case LOAD_FOLLOWERS_FAILURE: {\r\n      return {\r\n        ...state,\r\n      };\r\n  }\r\n  case LOAD_FOLLOWINGS_REQUEST: {\r\n      return {\r\n        ...state,\r\n        //hasMoreFollowing: action.offset ? state.hasMoreFollowing : true,  // 처음화면 일때는, offset은 0 이므로, false취급을 받아서 true로 넘어간다.(=더보기 버튼을 보여준다.)                                                         \r\n                                                                            // (처음화면일때 offset이 0인것은, router.get('/:id/followings'... 에서 확인가능) \r\n                                                                            // 여기 없어도 됨 (내 Q&A 답글)      \r\n      };\r\n  }\r\n  case LOAD_FOLLOWINGS_SUCCESS: {\r\n      return {\r\n        ...state,\r\n        followingList: state.followingList.concat(action.data),   // 기존것을 덮어쓰지 말고, 기존것에 추가\r\n        hasMoreFollowing: action.data.length === 3,               // 방금 로드된 팔로워가 1명 또는 2명이라면, 더보기 버튼을 보여줄 필요가 없다.\r\n                                                                  // 방금 로드된 팔로워가 3명일때만(=limit은 3이었음), 더보기 버튼을 보여줄 필요가 있다. \r\n      };\r\n  }\r\n  case LOAD_FOLLOWINGS_FAILURE: {\r\n      return {\r\n        ...state,\r\n      };\r\n  }\r\n  case REMOVE_FOLLOWER_REQUEST: {\r\n      return {\r\n        ...state,\r\n      };\r\n  }\r\n  case REMOVE_FOLLOWER_SUCCESS: {\r\n      return {\r\n        ...state,\r\n        me: {\r\n          ...state.me,\r\n          Followers: state.me.Followers.filter(v => v.id !== action.data),\r\n        },\r\n        followerList: state.followerList.filter(v => v.id !== action.data),\r\n      };\r\n  }\r\n  case REMOVE_FOLLOWER_FAILURE: {\r\n      return {\r\n        ...state,\r\n      };\r\n  }\r\n  case EDIT_NICKNAME_REQUEST: {\r\n    return {\r\n      ...state,\r\n      isEditingNickname: true,\r\n      editNicknameErrorReason: '',\r\n    };\r\n  }\r\n  case EDIT_NICKNAME_SUCCESS: {\r\n    return {\r\n      ...state,\r\n      isEditingNickname: false,\r\n      me: {\r\n        ...state.me,\r\n        nickname: action.data,\r\n      },\r\n    };\r\n  }\r\n  case EDIT_NICKNAME_FAILURE: {\r\n    return {\r\n      ...state,\r\n      isEditingNickname: false,\r\n      editNicknameErrorReason: action.error,\r\n    };\r\n  }\r\n  case REMOVE_POST_OF_ME: {\r\n    //const index = draft.me.Posts.findIndex(v => v.id === action.data);\r\n    //draft.me.Posts.splice(index, 1);\r\n    //break;\r\n    return {\r\n      ...state,\r\n      me: {\r\n        ...state.me,\r\n        Posts: state.me.Posts.filter(v => v.id != action.data),\r\n      }\r\n    };\r\n  }\r\n  default: {\r\n      return {\r\n          ...state,\r\n      };\r\n  }\r\n} */\n\n//# sourceURL=webpack:///./reducers/user.js?");

/***/ })

})