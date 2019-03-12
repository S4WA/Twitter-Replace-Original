window.onload = function() {
	setInterval(function() {
		var images = document.getElementsByTagName("img"), result = new Array();
		for (var i = 0; i < images.length; i++) {
			if (images[i].parentElement.className == "AdaptiveMedia-photoContainer js-adaptive-photo ") result.push(images[i]);
		}

		for (var i = 0; i < result.length; i++) {
			if (!result[i].src.endsWith(":orig")) result[i].src += ":orig";
		}
	}, 500);
}