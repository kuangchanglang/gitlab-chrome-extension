chrome.storage.local.set({
	'include': true,
	'highlight': true,
	'color': '#C5EFFC',
	}, function() {
		console.log("onload, save default settings");
    }
);
chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
	console.log("history changed " + details.url);
	if(details.url.endsWith("merge_requests")) {
		console.log("backgound highlight");
		chrome.tabs.executeScript(null, { file: "jquery-3.1.1.js" }, function() {
			if (chrome.runtime.lastError) {
				console.log("highlight error");
			}
			chrome.tabs.executeScript(null, {file:"highlight_mr.js"}, function() {
				if (chrome.runtime.lastError) {
					console.log("include error");
				}
			});
		});
	}else if(details.url.match(/merge_requests\/\d+/g)){
		console.log("backgound include");
		chrome.tabs.executeScript(null, { file: "jquery-3.1.1.js" }, function() {
			if (chrome.runtime.lastError) {
				console.log("include error");
			}
			chrome.tabs.executeScript(null, { file: "include_commit_msg.js" }, function() {
				if (chrome.runtime.lastError) {
					console.log("include error");
				}	
			});
		});
	}
});
