 // test for media querie support
Modernizr.load(
	{
	// test if browser understands media queries
	test: Modernizr.mq('only all'),
	// if not load respond.js file
	nope: 'js/vendor/respond.min.js'
	}
);

