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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbG9jYWxTdG9yYWdlQ2FjaGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztJQWNNLGlCOztBQUVMOzs7QUFHQSw4QkFBK0I7QUFBQSxNQUFuQixhQUFtQix1RUFBSCxFQUFHOztBQUFBOztBQUU5QixNQUFHLE9BQU8sT0FBUCxLQUFvQixXQUF2QixFQUFvQztBQUNuQyxXQUFRLEtBQVIsQ0FBYyx1Q0FBZDtBQUNBO0FBQ0E7O0FBRUQsT0FBSyxvQkFBTCxHQUE0QixHQUE1QjtBQUNBLE9BQUssYUFBTCxHQUFxQixpQkFBa0IsYUFBRCxHQUFrQixLQUFLLG9CQUF2QixHQUE4QyxFQUEvRCxDQUFyQjtBQUVBOztBQUVEOzs7Ozs7Ozs7c0JBS0ksRyxFQUFJO0FBQ1AsT0FBSSxDQUFDLEdBQUwsRUFBVTtBQUFFLFdBQU8sS0FBUDtBQUFlOztBQUUzQixPQUFJLE9BQU8sYUFBYSxPQUFiLENBQXFCLEtBQUssYUFBTCxHQUFxQixHQUExQyxDQUFYO0FBQ0EsT0FBSSxTQUFTLFNBQWI7O0FBRUEsT0FBRyxJQUFILEVBQVE7QUFDUCxRQUFJO0FBQ0gsY0FBUyxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQVQ7QUFDQSxLQUZELENBRUUsT0FBTSxHQUFOLEVBQVc7QUFDWixjQUFTLElBQVQ7QUFDQTtBQUNEOztBQUVELFVBQU8sTUFBUDtBQUNBOztBQUVEOzs7Ozs7Ozs7c0JBTUksRyxFQUFLLEssRUFBTTs7QUFFZCxPQUFHLENBQUMsR0FBSixFQUFRO0FBQUUsV0FBTyxLQUFQO0FBQWU7O0FBRXpCLE9BQUcsS0FBSCxFQUFTO0FBQ1IsaUJBQWEsT0FBYixDQUFxQixLQUFLLGFBQUwsR0FBcUIsR0FBMUMsRUFBK0MsS0FBSyxTQUFMLENBQWUsS0FBZixDQUEvQztBQUNBLFdBQU8sS0FBUDtBQUNBLElBSEQsTUFHTztBQUNOLFdBQU8sS0FBSyxNQUFMLENBQVksR0FBWixDQUFQO0FBQ0E7QUFFRDs7Ozs7QUFFRDs7Ozs7eUJBS1EsRyxFQUFJO0FBQ1gsT0FBSSxDQUFDLEdBQUwsRUFBVTtBQUFFLFdBQU8sS0FBUDtBQUFlO0FBQzNCLGdCQUFhLFVBQWIsQ0FBd0IsS0FBSyxhQUFMLEdBQXFCLEdBQTdDO0FBQ0EsVUFBTyxTQUFQO0FBQ0E7Ozs7O0FBR0Q7Ozs7MEJBSVE7QUFDUCxPQUFHLEtBQUssYUFBUixFQUFzQjtBQUNyQixTQUFJLElBQUksQ0FBUixJQUFhLFlBQWIsRUFBMEI7O0FBRXpCLFNBQ0MsYUFBYSxjQUFiLENBQTRCLENBQTVCLEtBQ0EsRUFBRSxPQUFGLENBQVUsS0FBSyxhQUFmLE1BQWtDLENBRm5DLEVBR0M7QUFDQSxtQkFBYSxVQUFiLENBQXdCLENBQXhCO0FBQ0E7QUFDRDtBQUNELElBVkQsTUFVTztBQUNOLGlCQUFhLEtBQWI7QUFDQTs7QUFFRCxVQUFPLFNBQVA7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIENPUFlSSUdIVCBOT1RJQ0VcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgTmV1ZSBSaXR1YWxlIEdiUlxuICogQGF1dGhvciBKdWxpYW4gV2lua2VsIDxjb2RlQG5ldWVyaXR1YWxlLmNvbT5cbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKiBAbGljZW5zZSBNSVRcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgc2ltcGxlLWxvY2FsU3RvcmFnZS1vYmplY3QtY2FjaGUgcHJvamVjdC5cbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSByZWFkIHRoZVxuICogTElDRU5TRSBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5cbmNsYXNzIExvY2FsU3RvcmFnZUNhY2hlIHtcblxuXHQvKipcblx0ICogQHBhcmFtIHN0b3JhZ2VQcmVmaXhcblx0ICovXG5cdGNvbnN0cnVjdG9yKHN0b3JhZ2VQcmVmaXggPSAnJyl7XG5cblx0XHRpZih0eXBlb2YoU3RvcmFnZSkgPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ1NvcnJ5ISBMb2NhbFN0b3JhZ2Ugbm90IHN1cHBvcnRlZCAuLi4nKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnN0b3JhZ2VQcmVmaXhEaXZpZGVyID0gJzonO1xuXHRcdHRoaXMuc3RvcmFnZVByZWZpeCA9IHN0b3JhZ2VQcmVmaXggKyAoKHN0b3JhZ2VQcmVmaXgpID8gdGhpcy5zdG9yYWdlUHJlZml4RGl2aWRlciA6ICcnKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBEYXRhIGZyb20gbG9jYWxTdG9yYWdlXG5cdCAqIEBwYXJhbSBrZXlcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRnZXQoa2V5KXtcblx0XHRpZiAoIWtleSkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRcdGxldCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5zdG9yYWdlUHJlZml4ICsga2V5KTtcblx0XHRsZXQgcmVzdWx0ID0gdW5kZWZpbmVkO1xuXG5cdFx0aWYoZGF0YSl7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyZXN1bHQgPSBKU09OLnBhcnNlKGRhdGEpO1xuXHRcdFx0fSBjYXRjaChlcnIpIHtcblx0XHRcdFx0cmVzdWx0ID0gZGF0YTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldCBvbmUgSXRlbVxuXHQgKiBAcGFyYW0ga2V5XG5cdCAqIEBwYXJhbSB2YWx1ZVxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHNldChrZXksIHZhbHVlKXtcblxuXHRcdGlmKCFrZXkpeyByZXR1cm4gZmFsc2U7IH1cblxuXHRcdGlmKHZhbHVlKXtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuc3RvcmFnZVByZWZpeCArIGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMucmVtb3ZlKGtleSk7XG5cdFx0fVxuXG5cdH07XG5cblx0LyoqXG5cdCAqIFJlbW92ZSBvbmUgSXRlbVxuXHQgKiBAcGFyYW0ga2V5XG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0cmVtb3ZlIChrZXkpe1xuXHRcdGlmICgha2V5KSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMuc3RvcmFnZVByZWZpeCArIGtleSk7XG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBDbGVhciBpdGVtIHdpdGggY3VycmVudCBQcmVmaXhcblx0ICogQHJldHVybnMge3VuZGVmaW5lZH1cblx0ICovXG5cdGNsZWFyICgpe1xuXHRcdGlmKHRoaXMuc3RvcmFnZVByZWZpeCl7XG5cdFx0XHRmb3IobGV0IGkgaW4gbG9jYWxTdG9yYWdlKXtcblxuXHRcdFx0XHRpZihcblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoaSkgJiZcblx0XHRcdFx0XHRpLmluZGV4T2YodGhpcy5zdG9yYWdlUHJlZml4KSA9PT0gMFxuXHRcdFx0XHQpe1xuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXHRcdH1cblxuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdH1cbn0iXX0=
