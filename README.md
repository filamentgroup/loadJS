loadJS
======

[![Dependency Status](https://david-dm.org/filamentgroup/loadJS.svg)](https://david-dm.org/filamentgroup/loadJS)
[![devDependency Status](https://david-dm.org/filamentgroup/loadJS/dev-status.svg)](https://david-dm.org/filamentgroup/loadJS#info=devDependencies)

A simple function for asynchronously loading JavaScript files
- [c]2014 @scottjehl, Filament Group, Inc.
- Based on [Surefire Dom Element Insertion](http://www.paulirish.com/2011/surefire-dom-element-insertion/) by Paul Irish
- Licensed MIT

## Usage

Place the [`loadJS` function](https://github.com/filamentgroup/loadJS/blob/master/loadJS.js) inline in the `head` of your page (it can also be included in an external JavaScript file if preferable).

Then call it by passing it a JavaScript URL:

``` html
<head>
...
<script>
  // include loadJS here...
  function loadJS( src ){ ... }
  // load a file with loadJS
  loadJS( "path/to/script.js" );
</script>
...
</head>
```

You can execute code after the Script has loaded via a callback:

``` html
<head>
...
<script>
  // include loadJS here...
  function loadJS( src ){ ... }
  // load a file with loadJS
  loadJS( "path/to/script.js", function() {
    // file has loaded
  });
</script>
...
</head>
```

You can ensure ordered execution of multiple asynchronous by passing `true` as the second or third parameter. Only supported in browsers that support the [`async` attribute](http://caniuse.com/#search=async) (No IE8/IE9 support).:

```js
loadJS( "path/to/library.js", true );
loadJS( "path/to/plugins.js", true );
loadJS( "path/to/last.js", function() {
	//all scripts loaded
}, true );
```

## Why not just use `<script src="..." async defer>`?

The `async` and `defer` attributes enjoy broad browser support. They're great options when all you need to do is load a script for all users, ideally in a non-blocking manner. The limitations with these attributes are: 

1. Some older browsers do not support `async` ([though defer has broader support so it's typically not a problem](https://www.igvita.com/2014/05/20/script-injected-async-scripts-considered-harmful/))
2. There's no way to use these attributes to *conditionally* load a script, depending on feature or environmental conditions.
3. There is (still) no declarative way to load scripts `async`, but in order. 

Number 2 above is the main reason we use `loadJS`. Say you want to check if `querySelector` is supported before requesting your entire DOM framework and UI scripting - you'll need to use a script loader to do that. But again, if you just want to load a script unconditionally, these attributes are recommended.

## Limitations

* If placed below external blocking scrips or stylesheets the download starts only after these files are downloaded and parsed. A good workaround for `async` script loading of crucial scripts is to inline `loadJS` before any other stylesheets and scripts and use it either immediately or within a `setTimeout`.
* Ordered execution does not work in IE9-.

```html
<script>
	// include loadJS here...
	function loadJS( src ){ ... }
	
	setTimeout(function(){
		loadJS( "path/to/library.js", true );
		
		if ( !hasFeature ) {
			loadJS( "path/to/polyfill.js", true );
		}
		
		loadJS( "path/to/app.js", true );
	});
</script>

...
 
<link rel="stylesheet" href="path/to/styles.css" />
```

#### Contributions and bug fixes

Both are very much appreciated - especially bug fixes. As for contributions, the goals of this project are to keep things very simple and utilitarian, so if we don't accept a feature addition, it's not necessarily because it's a bad idea. It just may not meet the goals of the project. Thanks!
