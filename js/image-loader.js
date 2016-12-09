window.addEventListener('load', function(e) {
	var imgs = document.querySelectorAll('.non-critical-img');

	[].forEach.call(imgs, function (img) {
		var imgTag = img.querySelector('img');

		imgTag.src = imgTag.dataset.src;
		imgTag.removeAttribute('hidden');
		img.removeAttribute('hidden');
	});
});
