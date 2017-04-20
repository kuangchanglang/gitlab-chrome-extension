function include_commit_msg(){
	if($(location).attr('href').match(/merge_requests\/\d+(\/diffs)*$/g) == null){
		return;
	}
	chrome.storage.local.get(['include'], function(items) {
		if(chrome.runtime.lastError)
		{
			/* error */
			console.log("runtime error");
			return;
		}

		if (!chrome.runtime.error) {
			if(items.include==true){
				var a = $("a.js-with-description-link");
				if(a != null && a.length>0){
					a[0].click();
				}
			}
		}
	});
	
}

$(document).ready(function(){
	include_commit_msg();
});
