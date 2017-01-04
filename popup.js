$("#text_color").change(function(){
	$("#example").css("background-color", $(this).val());
});

$("#submit").click(function(){
	var values = {
		'include':$("#cbox_include").is(':checked'),
		'highlight':$("#cbox_highlight").is(':checked')
	}
	if($("#text_color").val().match(/^#[0-9a-f]{3,6}$/i)) {
		values.color = $("#text_color").val();
	}
	// Save it using the Chrome extension storage API.
    chrome.storage.local.set(values, function() {
	
    });
	window.close();
});

var color = '#C5EFFC';
var include = 'true';
var highlight = 'true';
chrome.storage.local.get(['color', 'include', 'highlight'], function(items) {
	if (!chrome.runtime.error) {
		if(items.color != null){
			color = items.color;
		}
		if(items.include != null){
			include = items.include;
		}
		if(items.highlight != null){
			highlight = items.highlight;
		}
		
		$("#example").css("background-color", color);
		$("#text_color").val(color);
			
		if(include == false){
			$("#cbox_include").prop('checked', false);
		}else{
			$("#cbox_include").prop('checked', true);
		}

		if(highlight == false){
			$("#cbox_highlight").prop('checked', false);
		}else{
			$("#cbox_highlight").prop('checked', true);
		}
	}
});