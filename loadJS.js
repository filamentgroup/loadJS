/*! loadJS: load a JS file asynchronously. [c]2014 @scottjehl, Filament Group, Inc. (Based on http://goo.gl/REQGQ by Paul Irish). Licensed MIT */
function loadJS( src, cb ){
	"use strict";
	var ref = window.document.getElementsByTagName( "script" )[ 0 ];
	var script = window.document.createElement( "script" );
	script.type = "text/javascript"
	script.src = src;
	ref.parentNode.insertBefore( script, ref );
	if (cb) {
		script.onload = cb;
	}
	return script;
}
