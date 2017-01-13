Object.defineProperty(exports,"__esModule",{value:true});var _this=this;var _reactNative=require('react-native');function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

var STORAGE_NAMESPACE='SNACKBAR';
var KEY_CURRENT=STORAGE_NAMESPACE+':CURRENT';
var KEY_QUEUE=STORAGE_NAMESPACE+':QUEUE';var

Storage=function Storage(){_classCallCheck(this,Storage);};Storage.
getCurrent=function _callee(){return regeneratorRuntime.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.t0=
JSON;_context.next=3;return regeneratorRuntime.awrap(_reactNative.AsyncStorage.getItem(KEY_CURRENT));case 3:_context.t1=_context.sent;return _context.abrupt('return',_context.t0.parse.call(_context.t0,_context.t1));case 5:case'end':return _context.stop();}}},null,_this);};Storage.


setCurrent=function _callee2(item){return regeneratorRuntime.async(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return regeneratorRuntime.awrap(
_reactNative.AsyncStorage.setItem(KEY_CURRENT,JSON.stringify(item)));case 2:return _context2.abrupt('return',_context2.sent);case 3:case'end':return _context2.stop();}}},null,_this);};Storage.


removeCurrent=function _callee3(){return regeneratorRuntime.async(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.next=2;return regeneratorRuntime.awrap(
_reactNative.AsyncStorage.removeItem(KEY_CURRENT));case 2:return _context3.abrupt('return',_context3.sent);case 3:case'end':return _context3.stop();}}},null,_this);};Storage.


getItems=function _callee4(){return regeneratorRuntime.async(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.t0=
JSON;_context4.next=3;return regeneratorRuntime.awrap(_reactNative.AsyncStorage.getItem(KEY_QUEUE));case 3:_context4.t1=_context4.sent;return _context4.abrupt('return',_context4.t0.parse.call(_context4.t0,_context4.t1));case 5:case'end':return _context4.stop();}}},null,_this);};Storage.


hasItems=function _callee5(){var queue;return regeneratorRuntime.async(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:_context5.t0=
JSON;_context5.next=3;return regeneratorRuntime.awrap(_reactNative.AsyncStorage.getItem(KEY_QUEUE));case 3:_context5.t1=_context5.sent;queue=_context5.t0.parse.call(_context5.t0,_context5.t1);return _context5.abrupt('return',
Array.isArray(queue)&&queue.length);case 6:case'end':return _context5.stop();}}},null,_this);};Storage.


addToQueue=function _callee6(item){var queue,hasQueue;return regeneratorRuntime.async(function _callee6$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:_context6.t0=
JSON;_context6.next=3;return regeneratorRuntime.awrap(_reactNative.AsyncStorage.getItem(KEY_QUEUE));case 3:_context6.t1=_context6.sent;queue=_context6.t0.parse.call(_context6.t0,_context6.t1);
hasQueue=Array.isArray(queue)&&queue.length;_context6.next=8;return regeneratorRuntime.awrap(
_reactNative.AsyncStorage.setItem(KEY_QUEUE,JSON.stringify(hasQueue?queue.concat(item):item)));case 8:case'end':return _context6.stop();}}},null,_this);};Storage.


setQueue=function _callee7(items){return regeneratorRuntime.async(function _callee7$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:_context7.next=2;return regeneratorRuntime.awrap(
_reactNative.AsyncStorage.setItem(KEY_QUEUE,JSON.stringify(tems)));case 2:case'end':return _context7.stop();}}},null,_this);};exports.default=Storage;
//# sourceMappingURL=storage.js.map