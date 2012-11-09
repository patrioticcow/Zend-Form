$(document).ready(function()
{
	$('#add_form_text').live("click", function(e){
		e.preventDefault();
		
		var formId = $('#add_form_data');
		addForm(formId, 'input', 'form_input');
	});
	
	$('#add_form_paragraph').live("click", function(e){
		e.preventDefault();
		
		var formId = $('#add_form_data');
		addForm(formId, 'textarea', 'form_paragraph');
	});
	
	
	/**
	 * edit individual field form preferences
	 */
	var addForm = function(formId, fieldTipe, formClass){
		var formField = formId.attr('class');
		var formJson = formId.serializeFormJSON();
		var formSel = $('#' + formField + ' ' + fieldTipe + '.' + formClass);
		var formReq = $('#' + formField + ' input[name="required"]');
		
		$('#' + formField + ' label').text(formJson.text_label);
		formSel.attr("placeholder", formJson.placeholder_text);
		
		var hasAttr = $('#' + formField + ' input').attr("required");
			
		if(formJson.required === 'yes'){
			if(hasAttr === undefined ){
				formSel.attr("required", "true");
			}
			formReq.attr("value", "1");
		}
		
		if(formJson.required === 'no'){
			if(hasAttr == 'required' ){
				formSel.removeAttr("required");
			}
			formReq.attr("value", "0");
		}
	};

});