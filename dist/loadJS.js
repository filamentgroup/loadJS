/*! loadJS: A simple function for asynchronously loading JavaScript files. (c) 2014-present Scott Jehl, Filament Group, Inc. (Based on http://goo.gl/REQGQ by Paul Irish). Freely distributed under the MIT license. */
(function(w) {
  var loadJS = function(src, cb) {
    "use strict";
    var ref = w.document.getElementsByTagName("script")[0];
    var script = w.document.createElement("script");
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
    if (cb && typeof cb === "function") {
      script.onload = cb;
    }
    return script;
  };
  if (typeof module !== "undefined") {
    module.exports = loadJS;
  } else {
    w.loadJS = loadJS;
  }
})(typeof global !== "undefined" ? global : this);