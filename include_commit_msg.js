function include_commit_msg(){
	chrome.storage.local.get(['include'], function(items) {
		if (!chrome.runtime.error) {
			if(items.include==true){
				var a = $("a.js-with-description-link");
				if(a.length>0){
					a[0].click();
				}
			}
		}
	});
}

include_commit_msg();