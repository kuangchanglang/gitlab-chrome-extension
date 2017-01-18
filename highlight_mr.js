function find(){
	if(!$(location).attr('pathname').endsWith("merge_requests")){
		return;
	}
	var color = '#C5EFFC'
	// Read it using the storage API
    chrome.storage.local.get(['highlight', 'color'], function(items) {
		
		if (!chrome.runtime.error) {
			if(items.highlight == false){
				return
			}
			if(items.color != null){
				color = items.color;
			}
		}
			
		var requests = $(".merge-request-title");
		requests.each(function(){
			span = $(this).children('span:first')[0];
			var a = $(span).children('a')[0];
			if(!$(span).children('a')[0].text.match(/^wip:/i)){
				$(span).css("background-color", color);
			}
		});
    });
}

$(document).ready(function(){
	find();
});
