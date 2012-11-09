$(document).ready(function()
{
	$('#add_form_text').live("click", function(e){
		e.preventDefault();
		addForm($('#add_form_data'), 'input', 'form_input');
	});

    $('#add_form_number').live("click", function(e){
		e.preventDefault();
		addForm($('#add_form_data'), 'input', 'form_number');
	});
	
	$('#add_form_paragraph').live("click", function(e){
		e.preventDefault();
		addForm($('#add_form_data'), 'textarea', 'form_paragraph');
	});

	$('#add_form_checkbox').live("click", function(e){
		e.preventDefault();
		addForm($('#add_form_data'), 'input', 'form_checkbox');
	});

    $("button:contains('remove')").live("click", function(e){
        e.preventDefault();
        $(this).parent('li').remove();

        var remIdTemp = $(this).attr('id');
        var mainCheckbox = $('code').text();
        $('#' + mainCheckbox + ' #check_' + remIdTemp).remove();
    });

    $("#add_new_checkbox_field").live("click", function(e){
        e.preventDefault();
        var mainCheckbox = $('code').text();
        var prevLi = $(this).prev('li');
        var prevId = prevLi.find("button:contains('remove')").attr('id').replace(/[^\d.]/g, "");
        var nextIdNr = parseFloat(prevId) + 1;
        var nextId = 'rem' + nextIdNr; //rem1
        var nextIdNext = 'check_rem' + nextIdNr;
        var nextIdPrev = 'check_rem' + prevId;

        prevLi.clone().insertBefore(this).find("button:contains('remove')").attr({'id':nextId});
        $('#' + mainCheckbox).find('#' + nextIdPrev).clone().insertAfter('#' + nextIdPrev).attr({'id':nextIdNext});
    });

	/**
	 * edit individual field form preferences
	 */
	var addForm = function(formId, fieldType, formClass){

		var formField = formId.attr('class');
		var formJson = formId.serializeFormJSON();
		var formSel = $('#' + formField + ' ' + fieldType + '.' + formClass);
		var formReq = $('#' + formField + ' input[name="required"]');

		$('#' + formField + ' label.main_label').text(formJson.text_label);
		formSel.attr("placeholder", formJson.placeholder_text);

        formJson.required === 'yes' ? formReq.attr("value", "1") : formReq.attr("value", "0");

        if(formClass === 'form_checkbox'){
            console.log(formField);
            console.log(formJson);

            //each formJson, add to it's class
        }
	};

});