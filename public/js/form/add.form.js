$(document).ready(function()
{
    /**
     * add_form_text
     */
	$('#add_form_text').live("click", function(e){
		e.preventDefault();
		addForm($('#add_form_data'), 'input', 'form_input');
	});

    /**
     * add_form_number
     */
    $('#add_form_number').live("click", function(e){
		e.preventDefault();
		addForm($('#add_form_data'), 'input', 'form_number');
	});

    /**
     * add_form_paragraph
     */
	$('#add_form_paragraph').live("click", function(e){
		e.preventDefault();
		addForm($('#add_form_data'), 'textarea', 'form_paragraph');
	});

    /**
     * add_form_checkbox
     */
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

    $("button:contains('set default')").live("click", function(e){
        e.preventDefault();
        var defId = $(this).attr('id').replace(/[^\d.]/g, "");
        var mainCheckbox = $('code').text();

        $('#' + mainCheckbox).find('input').removeAttr('checked');
        $('#form_checkbox_' + defId).attr({'checked':'checked'});
    });

    $("#add_new_checkbox_field").live("click", function(e){
        e.preventDefault();
        var mainCheckbox = $('code').text();
        var prevLi = $(this).parent('ul').children('li').last();
        var prevId = prevLi.find("button:contains('remove')").attr('id').replace(/[^\d.]/g, "");
        var nextIdNr = parseFloat(prevId) + 1;
        var nextId = 'rem' + nextIdNr; //rem1
        var nextIdNext = 'check_rem' + nextIdNr;

        // clone in the edit side
        prevLi.clone()
            .insertAfter(prevLi)
            .find(".input-small").attr({'name':nextId})
            .end()
            .find("button:contains('remove')").attr({'id':nextId})
            .end()
            .find("button:contains('set default')").attr({'id':'def' + nextIdNr});

        // clone in the view side
        $('#' + mainCheckbox)
            .find('span').last()
            .clone().insertBefore('#' + mainCheckbox + ' .delete_li')
            .attr({'id':nextIdNext})
            .find('input').attr({'id': 'form_checkbox_' + nextIdNr});
    });

    /**
     * add_form_multiple_choices
     */
    $('#add_form_radio').live("click", function(e){
        e.preventDefault();
        addForm($('#add_form_data'), 'input', 'form_radio');
    });

    $("button:contains('remove')").live("click", function(e){
        e.preventDefault();
        $(this).parent('li').remove();

        var remIdTemp = $(this).attr('id');
        var mainRadio = $('code').text();
        $('#' + mainRadio + ' #radio_' + remIdTemp).remove();
    });

    $("button:contains('set default')").live("click", function(e){
        e.preventDefault();
        var defId = $(this).attr('id').replace(/[^\d.]/g, "");
        var mainRadio = $('code').text();

        $('#' + mainRadio).find('input').removeAttr('checked');
        $('#form_radio_' + defId).attr({'checked':'checked'});
    });

    $("#add_new_radio_field").live("click", function(e){
        e.preventDefault();
        var mainRadio = $('code').text();
        var prevLi = $(this).parent('ul').children('li').last();
        var prevId = prevLi.find("button:contains('remove')").attr('id').replace(/[^\d.]/g, "");
        var nextIdNr = parseFloat(prevId) + 1;
        var nextId = 'rem' + nextIdNr; //rem1
        var nextIdNext = 'radio_rem' + nextIdNr;

        // clone in the edit side
        prevLi.clone()
            .insertAfter(prevLi)
            .find(".input-small").attr({'name':nextId})
            .end()
            .find("button:contains('remove')").attr({'id':nextId})
            .end()
            .find("button:contains('set default')").attr({'id':'def' + nextIdNr});

        // clone in the view side
        $('#' + mainRadio)
            .find('span').last()
            .clone().insertBefore('#' + mainRadio + ' .delete_li')
            .attr({'id':nextIdNext})
            .find('input').attr({'id': 'form_radio_' + nextIdNr});
    });

    /**
     * add_form_dropdown
     */
    $('#add_form_dropdown').live("click", function(e){
        e.preventDefault();
        addForm($('#add_form_data'), 'input', 'form_dropdown');
    });

    $("button:contains('remove')").live("click", function(e){
        e.preventDefault();
        $(this).parent('li').remove();

        var remIdTemp = $(this).attr('id');
        var mainRadio = $('code').text();
        $('#' + mainRadio + ' #dropdown_' + remIdTemp).remove();
    });

    $("button:contains('set default')").live("click", function(e){
        e.preventDefault();
        var defId = $(this).attr('id').replace(/[^\d.]/g, "");
        var mainRadio = $('code').text();

        $('#' + mainRadio).find('option').removeAttr('selected');
        $('#dropdown_rem' + defId).attr({'selected':'selected'});
    });

    $("#add_new_dropdown_field").live("click", function(e){
        e.preventDefault();
        var mainRadio = $('code').text();
        var prevLi = $(this).parent('ul').children('li').last();
        var prevId = prevLi.find("button:contains('remove')").attr('id').replace(/[^\d.]/g, "");
        var nextIdNr = parseFloat(prevId) + 1;
        var nextId = 'rem' + nextIdNr; //rem1
        var nextIdNext = 'dropdown_rem' + nextIdNr;

        // clone in the edit side
        prevLi.clone()
            .insertAfter(prevLi)
            .find(".input-small").attr({'name':nextId})
            .end()
            .find("button:contains('remove')").attr({'id':nextId})
            .end()
            .find("button:contains('set default')").attr({'id':'def' + nextIdNr});

        // clone in the view side
        $('#' + mainRadio)
            .find('option').last()
            .clone().appendTo('#' + mainRadio + ' select')
            .attr({'id':nextIdNext});
    });

    /**
     * edit individual field form preferences
     * @param formId
     * @param fieldType
     * @param formClass
     */
	var addForm = function addForm(formId, fieldType, formClass){

		var formField = formId.attr('class');
		var formJson = formId.serializeFormJSON();
		var formSel = $('#' + formField + ' ' + fieldType + '.' + formClass);
		var formReq = $('#' + formField + ' input[name="required"]');

		$('#' + formField + ' label.main_label').text(formJson.text_label);
		formSel.attr("placeholder", formJson.placeholder_text);

        formJson.required === 'yes' ? formReq.attr("value", "1") : formReq.attr("value", "0");

        // transfer text content form the edit side to the main form side
        if(formClass === 'form_checkbox'){
            $.each(formJson, function(index, value) {
                $('#' + formField + ' #check_' + index).find('label.checkbox').text(value);
            });
        }

        if(formClass === 'form_radio'){
            $.each(formJson, function(index, value) {
                $('#' + formField + ' #radio_' + index).find('label.radio').text(value);
            });
        }

        if(formClass === 'form_dropdown'){
            $.each(formJson, function(index, value) {
                $('#' + formField).find(' #dropdown_' + index).html(value);
            });
        }
	};

});