/*! loadJS: load a JS file asynchronously. [c]2014 @scottjehl, Filament Group, Inc. (Based on http://goo.gl/REQGQ by Paul Irish). Licensed MIT */
function loadJS(){
	var src = ["path/to/first/script.js","path/to/second/script.js"]; //can add multiple js paths here comma delimited
	src.reverse(); //reverses the order so that when added to the DOM, they are in the proper order
	for (var i = 0; i < src.length; i++) { //iterates on each path in the array
		"use strict";
		var ref = window.document.getElementsByTagName( "script" )[ 0 ];
		var script = window.document.createElement( "script" );
		script.src = src[i];
		ref.parentNode.insertBefore( script, ref );
	};
}

loadJS();
