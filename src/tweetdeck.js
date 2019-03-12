window.onload = function() {
	setInterval(function() {
		if (document.getElementsByClassName("media-img").length > 0) {
			var image = document.getElementsByClassName("media-img")[0];
			if (!image.src.endsWith(":orig")) image.src = image.src.endsWith(":large") ? image.src.replace(":large", ":orig") : image.src + ":orig";
		}
	}, 500);
}