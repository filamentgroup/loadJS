/*! loadJS: load a JS file asynchronously. [c]2014 @scottjehl, Filament Group, Inc. (Based on http://goo.gl/REQGQ by Paul Irish). Licensed MIT */
function loadJS( src ){
	"use strict";
	if (src instanceof Array) {
		for (var i = 0; i < src.length; i++){
			load( src[i] )
		}
	}else{
		_loadJS( src )
	}
}

function _loadJS( src ){
	var ref = window.document.getElementsByTagName( "script" )[ 0 ];
	var script = window.document.createElement( "script" );
	script.src = src;
	ref.parentNode.insertBefore( script, ref );
	return script;	
}
