/*! loadJS: load a JS file asynchronously. [c]2014 @scottjehl, Filament Group, Inc. (Based on http://goo.gl/REQGQ by Paul Irish). Licensed MIT */
/*

Actualización: Load de varios Script JS a través de un Array
Autor        : By FaySor
Ejemplo:
	loadJS(
		["https://code.jquery.com/jquery-1.12.4.js",
		"https://code.jquery.com/ui/1.12.0/jquery-ui.js"],
		function() {
			$( "#datepicker" ).datepicker();
		}
	);

*/
(function( w ){
	var loadJS = function( srcs, cb ){
		"use strict";
		var ref, script, srcs, src;

		for ( src in srcs ) {
			src = srcs[src];
			ref = w.document.getElementsByTagName( "script" )[ 0 ];
			script = w.document.createElement( "script" );
			script.src = src;
			script.async = true;
			ref.parentNode.insertBefore( script, ref );
		}

		if (cb && typeof(cb) === "function") {
			script.onload = cb;
		}
		return script;
	};
	// commonjs
	if( typeof module !== "undefined" ){
		module.exports = loadJS;
	}
	else {
		w.loadJS = loadJS;
	}
}( typeof global !== "undefined" ? global : this ));
