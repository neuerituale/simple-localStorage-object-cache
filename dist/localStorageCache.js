(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * COPYRIGHT NOTICE
 *
 * Copyright (c) 2017 Neue Rituale GbR
 * @author Julian Winkel <code@neuerituale.com>
 * @version 1.0.0
 * @license MIT
 *
 * This file is part of the simple-localStorage-object-cache project.
 * For the full copyright and license information, please read the
 * LICENSE file that was distributed with this source code.
 */

var LocalStorageCache = function () {

	/**
  * @param storagePrefix
  */
	function LocalStorageCache() {
		var storagePrefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

		_classCallCheck(this, LocalStorageCache);

		if (typeof Storage === "undefined") {
			console.error('Sorry! LocalStorage not supported ...');
			return;
		}

		this.storagePrefixDivider = ':';
		this.storagePrefix = storagePrefix + (storagePrefix ? this.storagePrefixDivider : '');
	}

	/**
  * Get Data from localStorage
  * @param key
  * @returns {*}
  */


	_createClass(LocalStorageCache, [{
		key: 'get',
		value: function get(key) {

			if (!key) {
				return false;
			}

			var data = localStorage.getItem(this.storagePrefix + key);
			var result = undefined;

			if (data) {
				try {
					result = JSON.parse(data);
				} catch (err) {
					result = data;
				}
			}

			return result;
		}

		/**
   * Set one Item
   * @param key
   * @param value
   * @returns {*}
   */

	}, {
		key: 'set',
		value: function set(key, value) {

			if (!key) {
				return false;
			}

			if (value) {
				localStorage.setItem(this.storagePrefix + key, JSON.stringify(value));
				return value;
			} else {
				return this.remove(key);
			}
		}
	}, {
		key: 'remove',


		/**
   * Remove one Item
   * @param key
   * @returns {*}
   */
		value: function remove(key) {

			if (!key) {
				return false;
			}
			localStorage.removeItem(this.storagePrefix + key);

			return undefined;
		}
	}, {
		key: 'clear',


		/**
   * Clear item with current Prefix
   * @returns {undefined}
   */
		value: function clear() {

			if (this.storagePrefix) {
				for (var i in localStorage) {

					if (localStorage.hasOwnProperty(i) && i.indexOf(this.storagePrefix) === 0) {
						localStorage.removeItem(i);
					}
				}
			} else {
				localStorage.clear();
			}

			return undefined;
		}
	}]);

	return LocalStorageCache;
}();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbG9jYWxTdG9yYWdlQ2FjaGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztJQWFNLGlCOztBQUVMOzs7QUFHQSw4QkFBK0I7QUFBQSxNQUFuQixhQUFtQix1RUFBSCxFQUFHOztBQUFBOztBQUU5QixNQUFHLE9BQU8sT0FBUCxLQUFvQixXQUF2QixFQUFvQztBQUNuQyxXQUFRLEtBQVIsQ0FBYyx1Q0FBZDtBQUNBO0FBQ0E7O0FBRUQsT0FBSyxvQkFBTCxHQUE0QixHQUE1QjtBQUNBLE9BQUssYUFBTCxHQUFxQixpQkFBa0IsYUFBRCxHQUFrQixLQUFLLG9CQUF2QixHQUE4QyxFQUEvRCxDQUFyQjtBQUVBOztBQUVEOzs7Ozs7Ozs7c0JBS0ksRyxFQUFJOztBQUVQLE9BQUksQ0FBQyxHQUFMLEVBQVU7QUFBRSxXQUFPLEtBQVA7QUFBZTs7QUFFM0IsT0FBSSxPQUFPLGFBQWEsT0FBYixDQUFxQixLQUFLLGFBQUwsR0FBcUIsR0FBMUMsQ0FBWDtBQUNBLE9BQUksU0FBUyxTQUFiOztBQUVBLE9BQUcsSUFBSCxFQUFRO0FBQ1AsUUFBSTtBQUNILGNBQVMsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFUO0FBQ0EsS0FGRCxDQUVFLE9BQU0sR0FBTixFQUFXO0FBQ1osY0FBUyxJQUFUO0FBQ0E7QUFDRDs7QUFFRCxVQUFPLE1BQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7O3NCQU1JLEcsRUFBSyxLLEVBQU07O0FBRWQsT0FBRyxDQUFDLEdBQUosRUFBUTtBQUFFLFdBQU8sS0FBUDtBQUFlOztBQUV6QixPQUFHLEtBQUgsRUFBUztBQUNSLGlCQUFhLE9BQWIsQ0FBcUIsS0FBSyxhQUFMLEdBQXFCLEdBQTFDLEVBQStDLEtBQUssU0FBTCxDQUFlLEtBQWYsQ0FBL0M7QUFDQSxXQUFPLEtBQVA7QUFDQSxJQUhELE1BR087QUFDTixXQUFPLEtBQUssTUFBTCxDQUFZLEdBQVosQ0FBUDtBQUNBO0FBRUQ7Ozs7O0FBRUQ7Ozs7O3lCQUtRLEcsRUFBSTs7QUFFWCxPQUFJLENBQUMsR0FBTCxFQUFVO0FBQUUsV0FBTyxLQUFQO0FBQWU7QUFDM0IsZ0JBQWEsVUFBYixDQUF3QixLQUFLLGFBQUwsR0FBcUIsR0FBN0M7O0FBRUEsVUFBTyxTQUFQO0FBQ0E7Ozs7O0FBRUQ7Ozs7MEJBSVE7O0FBRVAsT0FBRyxLQUFLLGFBQVIsRUFBc0I7QUFDckIsU0FBSSxJQUFJLENBQVIsSUFBYSxZQUFiLEVBQTBCOztBQUV6QixTQUNDLGFBQWEsY0FBYixDQUE0QixDQUE1QixLQUNBLEVBQUUsT0FBRixDQUFVLEtBQUssYUFBZixNQUFrQyxDQUZuQyxFQUdDO0FBQ0EsbUJBQWEsVUFBYixDQUF3QixDQUF4QjtBQUNBO0FBQ0Q7QUFDRCxJQVZELE1BVU87QUFDTixpQkFBYSxLQUFiO0FBQ0E7O0FBRUQsVUFBTyxTQUFQO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBDT1BZUklHSFQgTk9USUNFXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE3IE5ldWUgUml0dWFsZSBHYlJcbiAqIEBhdXRob3IgSnVsaWFuIFdpbmtlbCA8Y29kZUBuZXVlcml0dWFsZS5jb20+XG4gKiBAdmVyc2lvbiAxLjAuMFxuICogQGxpY2Vuc2UgTUlUXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIHNpbXBsZS1sb2NhbFN0b3JhZ2Utb2JqZWN0LWNhY2hlIHByb2plY3QuXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgcmVhZCB0aGVcbiAqIExJQ0VOU0UgZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuY2xhc3MgTG9jYWxTdG9yYWdlQ2FjaGUge1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0gc3RvcmFnZVByZWZpeFxuXHQgKi9cblx0Y29uc3RydWN0b3Ioc3RvcmFnZVByZWZpeCA9ICcnKXtcblxuXHRcdGlmKHR5cGVvZihTdG9yYWdlKSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0Y29uc29sZS5lcnJvcignU29ycnkhIExvY2FsU3RvcmFnZSBub3Qgc3VwcG9ydGVkIC4uLicpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuc3RvcmFnZVByZWZpeERpdmlkZXIgPSAnOic7XG5cdFx0dGhpcy5zdG9yYWdlUHJlZml4ID0gc3RvcmFnZVByZWZpeCArICgoc3RvcmFnZVByZWZpeCkgPyB0aGlzLnN0b3JhZ2VQcmVmaXhEaXZpZGVyIDogJycpO1xuXG5cdH1cblxuXHQvKipcblx0ICogR2V0IERhdGEgZnJvbSBsb2NhbFN0b3JhZ2Vcblx0ICogQHBhcmFtIGtleVxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdGdldChrZXkpe1xuXG5cdFx0aWYgKCFrZXkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0XHRsZXQgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuc3RvcmFnZVByZWZpeCArIGtleSk7XG5cdFx0bGV0IHJlc3VsdCA9IHVuZGVmaW5lZDtcblxuXHRcdGlmKGRhdGEpe1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmVzdWx0ID0gSlNPTi5wYXJzZShkYXRhKTtcblx0XHRcdH0gY2F0Y2goZXJyKSB7XG5cdFx0XHRcdHJlc3VsdCA9IGRhdGE7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXQgb25lIEl0ZW1cblx0ICogQHBhcmFtIGtleVxuXHQgKiBAcGFyYW0gdmFsdWVcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRzZXQoa2V5LCB2YWx1ZSl7XG5cblx0XHRpZigha2V5KXsgcmV0dXJuIGZhbHNlOyB9XG5cblx0XHRpZih2YWx1ZSl7XG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnN0b3JhZ2VQcmVmaXggKyBrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLnJlbW92ZShrZXkpO1xuXHRcdH1cblxuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZW1vdmUgb25lIEl0ZW1cblx0ICogQHBhcmFtIGtleVxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHJlbW92ZSAoa2V5KXtcblxuXHRcdGlmICgha2V5KSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMuc3RvcmFnZVByZWZpeCArIGtleSk7XG5cblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDbGVhciBpdGVtIHdpdGggY3VycmVudCBQcmVmaXhcblx0ICogQHJldHVybnMge3VuZGVmaW5lZH1cblx0ICovXG5cdGNsZWFyICgpe1xuXG5cdFx0aWYodGhpcy5zdG9yYWdlUHJlZml4KXtcblx0XHRcdGZvcihsZXQgaSBpbiBsb2NhbFN0b3JhZ2Upe1xuXG5cdFx0XHRcdGlmKFxuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShpKSAmJlxuXHRcdFx0XHRcdGkuaW5kZXhPZih0aGlzLnN0b3JhZ2VQcmVmaXgpID09PSAwXG5cdFx0XHRcdCl7XG5cdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oaSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0bG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0fVxufSJdfQ==
