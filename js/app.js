$(document).ready(function() {
	var $latestBlog = $('#latest-blog');
	$.get('../feed.xml', function (data) {
	// $.get('http://portfolio.myerswest.com/blog/feed/', function (data) {
		// console.log(data);
		$(data).find("item").slice(0, 1).each(function () { // or "item" or whatever suits your feed
			var el = $(this);

			// console.log("------------------------");
			// console.log("title      : " + el.find("title").text());
			// console.log("author     : " + el.find("author").text());
			// console.log("description: " + el.find("description").text());
			$latestBlog.append('<h3 class="mdl-cell mdl-cell--12-col mdl-typography--headline">' + el.find("title").text() + '</h3>');
			var date = new Date(el.find("pubDate").text());

			$latestBlog.append('<p id="blog-date">' + date.toDateString() + '</p>');
			$latestBlog.append('<div class="mdl-card__supporting-text">' + el.find("description").text() + '</div>')
			// $('#latest-blog-title').html(el.find("title").text());
			// $('#latest-blog-desc').html(el.find("description").text());
		});
	});

});
