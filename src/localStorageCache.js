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


class LocalStorageCache {

	/**
	 * @param storagePrefix
	 */
	constructor(storagePrefix = ''){

		if(typeof(Storage) === "undefined") {
			console.error('Sorry! LocalStorage not supported ...');
			return;
		}

		this.storagePrefixDivider = ':';
		this.storagePrefix = storagePrefix + ((storagePrefix) ? this.storagePrefixDivider : '');

	}

	/**
	 * Get Data from localStorage
	 * @param key
	 * @returns {*}
	 */
	get(key){
		if (!key) { return false; }

		let data = localStorage.getItem(this.storagePrefix + key);
		let result = undefined;

		if(data){
			try {
				result = JSON.parse(data);
			} catch(err) {
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
	set(key, value){

		if(!key){ return false; }

		if(value){
			localStorage.setItem(this.storagePrefix + key, JSON.stringify(value));
			return value;
		} else {
			return this.remove(key);
		}

	};

	/**
	 * Remove one Item
	 * @param key
	 * @returns {*}
	 */
	remove (key){
		if (!key) { return false; }
		localStorage.removeItem(this.storagePrefix + key);
		return undefined;
	};


	/**
	 * Clear item with current Prefix
	 * @returns {undefined}
	 */
	clear (){
		if(this.storagePrefix){
			for(let i in localStorage){

				if(
					localStorage.hasOwnProperty(i) &&
					i.indexOf(this.storagePrefix) === 0
				){
					localStorage.removeItem(i);
				}
			}
		} else {
			localStorage.clear();
		}

		return undefined;
	}
}