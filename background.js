chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
	if(details.url.endsWith("merge_requests")) {
		chrome.tabs.executeScript(null,{file:"highlight_mr.js"});
	}else if(details.url.match(/merge_requests\/\d+/g)){
		chrome.tabs.executeScript({ file: "jquery-3.1.1.js" }, function() {
			chrome.tabs.executeScript(null, { file: "include_commit_msg.js" });
		});
	}
});
