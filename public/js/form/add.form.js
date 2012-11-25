/**
 * copyright Cristi Citea
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

$(document).ready(function()
{
    /**
     * add_form_text
     */
	$('#add_form_text').live("click", function(e){
		e.preventDefault();
		addForm($('#add_form_data'), 'input', 'form_input', 'text');
	});

    /**
     * add_form_datye
     */
	$('#add_form_date').live("click", function(e){
		e.preventDefault();
		addForm($('#add_form_data'), 'input', 'form_input', 'date');
	});

    /**
     * add_form_password
     */
    $('#add_form_password').live("click", function(e){
        e.preventDefault();
        addForm($('#add_form_data'), 'input', 'form_input', 'password');
    });

    /**
     * add_form_password_verify
     */
    $('#add_form_password_verify').live("click", function(e){
        e.preventDefault();
        addForm($('#add_form_data'), 'input', 'form_input', 'password_verify');
    });

    /**
     * add_form_email
     */
    $('#add_form_email').live("click", function(e){
        e.preventDefault();
        addForm($('#add_form_data'), 'input', 'form_input', 'email');
    });

    /**
     * add_form_number
     */
    $('#add_form_number').live("click", function(e){
		e.preventDefault();
		addForm($('#add_form_data'), 'input', 'form_number', 'number');
	});

    /**
     * add_form_phone
     */
    $('#add_form_phone').live("click", function(e){
		e.preventDefault();
		addForm($('#add_form_data'), 'input', 'form_data', 'number');
	});

    /**
     * add_form_paragraph
     */
	$('#add_form_paragraph').live("click", function(e){
		e.preventDefault();
		addForm($('#add_form_data'), 'textarea', 'form_paragraph', 'paragraph');
	});

    /**
     * add_form_fileupload
     */
    $('#add_form_fileupload').live("click", function(e){
        e.preventDefault();
        addForm($('#add_form_data'), 'input', 'form_input', 'fileupload');
    });

    /**
     * add_form_checkbox
     */
	$('#add_form_checkbox').live("click", function(e){
		e.preventDefault();
		addForm($('#add_form_data'), 'input', 'form_checkbox', 'checkbox');
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

        $('#' + mainCheckbox).find('#form_checkbox_' + defId).attr({'checked':'checked'})
        .attr({'type':'checkbox'}); // don't know why it doesn't work without this yet
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
        addForm($('#add_form_data'), 'input', 'form_radio', 'radio');
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
        $('#' + mainRadio).find('#form_radio_' + defId).attr({'checked':'checked'});
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
        addForm($('#add_form_data'), 'input', 'form_dropdown', 'dropdown');
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
	var addForm = function addForm(formId, fieldType, formClass, specificType){

		var formField = formId.attr('class');
		var formJson = formId.serializeFormJSON();
		var formSel = $('#' + formField + ' ' + fieldType + '.' + formClass);
		var formReq = $('#' + formField + ' input[name="required"]');

        // set label text
		$('#' + formField + ' label.main_label').html(formJson.text_label);

        // set placeholder text
		formSel.attr("placeholder", formJson.placeholder_text);

        // set hidden required
        formJson.required === 'yes' ? formReq.attr("value", "true") : formReq.attr("value", "false");

        // set token
        if(specificType === 'password_verify'){
            $('#' + formField + ' input[name="token"]').attr("value", formJson.token);
        }

        // set input name
        $('#' + formField + ' input[name="input_name"]').attr("value", formJson.input_name);

        // set hidden min
        $('#' + formField + ' input[name="min"]').attr("value", formJson.number_min);

        // set hidden max
        $('#' + formField + ' input[name="max"]').attr("value", formJson.number_max);

        // set hidden class
        $('#' + formField + ' input[name="class"]').attr("value", formJson.number_class);

        // set hidden id
        $('#' + formField + ' input[name="id"]').attr("value", formJson.number_id);

        // set hidden label class
        $('#' + formField + ' input[name="label_class"]').attr("value", formJson.number_label_class);

        // set hidden label id
        $('#' + formField + ' input[name="label_id"]').attr("value", formJson.number_label_id);

        // set email
        if(specificType === 'email'){
            $('#' + formField + ' input[name="invalid_type"]').attr("value", formJson.invalid_type);
            $('#' + formField + ' input[name="is_empty_type"]').attr("value", formJson.is_empty_type);
        }

        // set date
        if(specificType === 'date'){
            $('#' + formField + ' input[name="date_min_validate"]').attr("value", formJson.date_min_validate);
            $('#' + formField + ' input[name="date_max_validate"]').attr("value", formJson.date_max_validate);
            $('#' + formField + ' input[name="date_min"]').attr("value", formJson.date_min);
            $('#' + formField + ' input[name="date_max"]').attr("value", formJson.date_max);
            $('#' + formField + ' input[name="locale"]').attr("value", formJson.locale);
            $('#' + formField + ' input[name="date_format"]').attr("value", formJson.date_format);
        }

        // transfer text content form the edit side to the main form side
        if(specificType === 'checkbox'){
            $.each(formJson, function(index, value) {
                $('#' + formField + ' #check_' + index).find('label.checkbox').text(value);
            });
        }

        if(specificType === 'radio'){
            $.each(formJson, function(index, value) {
                $('#' + formField + ' #radio_' + index).find('label.radio').text(value);
            });
        }

        if(specificType === 'upload'){
            $('#' + formField + ' input[name="upload_min_size"]').attr("value", formJson.filesize_min);
            $('#' + formField + ' input[name="upload_max_size"]').attr("value", formJson.filesize_max);
            $('#' + formField + ' input[name="upload_min_file_size"]').attr("value", formJson.filefilessize_min);
            $('#' + formField + ' input[name="upload_max_file_size"]').attr("value", formJson.filefilessize_max);
            $('#' + formField + ' input[name="upload_min_count"]').attr("value", formJson.filewordcount_min);
            $('#' + formField + ' input[name="upload_max_count"]').attr("value", formJson.filewordcount_max);
            $('#' + formField + ' input[name="upload_file_extension"]').attr("value", formJson.fileextension);
            $('#' + formField + ' input[name="upload_file_exclude_extension"]').attr("value", formJson.fileexcludeextension);
            $('#' + formField + ' input[name="upload_mime_type"]').attr("value", formJson.filemimetype);
            $('#' + formField + ' input[name="upload_exclude_mime_type"]').attr("value", formJson.fileexcludemimetype);
            $('#' + formField + ' input[name="upload_file_exists"]').attr("value", formJson.fileexists);
            $('#' + formField + ' input[name="upload_minheight_size"]').attr("value", formJson.fileimagesize_minheight);
            $('#' + formField + ' input[name="upload_maxheight_size"]').attr("value", formJson.fileimagesize_maxheight);
            $('#' + formField + ' input[name="upload_minwidth_size"]').attr("value", formJson.fileimagesize_minwidth);
            $('#' + formField + ' input[name="upload_maxwidth_size"]').attr("value", formJson.fileimagesize_maxwidth);
            $('#' + formField + ' input[name="upload_exclude_is_compressed"]').attr("value", formJson.fileiscompressed);
            $('#' + formField + ' input[name="upload_exclude_is_image"]').attr("value", formJson.fileisimage);
            $('#' + formField + ' input[name="upload_min_word_count"]').attr("value", formJson.filewordcount_min);
            $('#' + formField + ' input[name="upload_max_word_count"]').attr("value", formJson.filewordcount_max);
        }

        if(specificType === 'number'){
            var html5 = formJson.number_html5 ? 1 : 0;

            $('#' + formField + ' input[name="validation"]').attr("value", formJson.valid_type);
            $('#' + formField + ' input[name="html5"]').attr("value", html5);
            $('#' + formField + ' input[name="min_str"]').attr("value", formJson.number_min_str);
            $('#' + formField + ' input[name="max_str"]').attr("value", formJson.number_max_str);
        }

        if(specificType === 'dropdown'){
            $.each(formJson, function(index, value) {
                $('#' + formField).find(' #dropdown_' + index).html(value);
            });

            $('#' + formField + ' input[name="notinarray"]').attr("value", formJson.number_notinarray);
        }

        $('#' + formField).css({'background-color' : '#87ffc1'}).animate({backgroundColor: '#ffffff'},{duration:1000});
	};

});