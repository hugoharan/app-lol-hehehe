$(document).ready(function () {
	$('#feeds').rssfeed('http://feeds.feedburner.com/LolHehehe', {
		header:false
	});

	$(".dropdown").on("click",function(){
		$(".drop-menu").toggle("slow");
		if($(".icon-toggle").text() == "+")
			$(".icon-toggle").text("-");
		else
			$(".icon-toggle").text("+");
	});
	
});