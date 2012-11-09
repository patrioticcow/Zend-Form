var lineTextJson = function(formElements) {
	var myData = new Array();

	formElements.each(function(index, data) {
		var li = $(this);
		var order = li.attr('id').replace(/[^\d.]/g, "");
        
		myData.push({
			'type' : 'line_text', 
			'order' : order, 
			'data' : {
				'placeholder': li.find('.form_input').attr("placeholder"),
				'label': li.find('[for="form_input"]').text(),
				'required': li.find('[name="required"]').attr("value")
				}
		});
	});

	return(myData);
};