window.addEventLister('loader', function(e) {
	var imgs = document.querySelectorAll('.non-critical-img');

	[].forEach.call(img, function (img) {
		var imgTag = img.querySelector('img');

		imgTag.src = imgTag.dataset.src;
		imgTag.removeAttribute('hidden');
		img.removeAttribute('hidden');
	});
});
