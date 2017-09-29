# simple-localStorage-object-cache
set, get or remove strings, integer and objects in localStorage.

##Usage

### initialize
Initialize the Storage and set a storage Prefix.

```js
var s = new LocalStorageCache('myPrefix');

s.set('key', 123);
var value = s.get('key');
s.remove('key');
s.clear();
```

### set a variable

```js
var object = {
	string: 'HELO WORLD',
	number: 100,
	subObject: {
		test: 1,
		test2: 2,
		test3: '3'
	}
};

s.set('myObject', object);
```
The object `myObject` is stored in localStorage with JSON.stringify().

### get a variable (object, number or string)
The setter try to parse the stringifed value and return it with the original variabel type.

```js
var object = s.get('myObject');
if(typeof object === 'object'){
	console.log('it works');
}

/* output: it works */
```

### remove a key

```js
s.remove('myObject');
```

### clear the storage
Only the localStorage entries with the current prefix are remove. 
With an empty prefix, the whole localStorage will be cleared.

```js
s.clear();
```