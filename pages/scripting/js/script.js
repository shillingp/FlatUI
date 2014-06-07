/*jshint browser: true, devel: true */
/*global hljs*/

function hljsSetting() {
	hljs.configure({tabReplace: "    "});
	hljs.initHighlighting();
}

document.onreadystatechange = function() {
	if (document.readyState == "complete") {
		hljsSetting();
	}
};