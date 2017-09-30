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

	_createClass(LocalStorageCache, [{
		key: 'get',


		/**
   * Get Data from localStorage
   * @param key
   * @returns {*}
   */
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
	}, {
		key: 'set',


		/**
   * Set one Item
   * @param key
   * @param value
   * @returns {*}
   */
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