/**
 * Cristi Citea (http://zend-form-generator.123easywebsites.com/)
 *
 * @link      https://github.com/patrioticcow/Zend-Form for the canonical source repository
 * @copyright Copyright (c) 2012 Cristi Citea
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 * @package   Form_Generator
 */

var line_text = function (liId, theForm, fieldProp, uniqueId, liClass)
{
    "use strict";
    var li = addLi(liId, liClass).appendTo(theForm);

    hiddenRequired('required', '0').appendTo(li);

    $("<label/>", {
        text: "Text",
        "class" : "main_label",
        "for": "form_input"
    }).appendTo(li);

    $("<input/>", {
        type: "text",
        "class": "form_input",
        placeholder: "Type something..."
    }).appendTo(li);

    hiddenRequired('input_name', 'text').appendTo(li);
    hiddenRequired('class', '').appendTo(li);
    hiddenRequired('id', '').appendTo(li);
    hiddenRequired('min', '').appendTo(li);
    hiddenRequired('max', '').appendTo(li);

    formButton("Delete", "delete_li").appendTo(li);
    formButton("Edit", "edit_li").appendTo(li);

    clearBoth().appendTo(li);
};

var line_hidden = function (liId, theForm, fieldProp, uniqueId, liClass)
{
    "use strict";
    var li = addLi(liId, liClass).appendTo(theForm);

    hiddenRequired('required', '0').appendTo(li);

    $("<div/>", {
        'text': "hidden field"
    }).appendTo(li);

    hiddenRequired('input_name', 'hidden').appendTo(li);
    hiddenRequired('class', '').appendTo(li);
    hiddenRequired('id', '').appendTo(li);
    hiddenRequired('value', '').appendTo(li);

    formButton("Delete", "delete_li").appendTo(li);
    formButton("Edit", "edit_li").appendTo(li);

    clearBoth().appendTo(li);
};

var line_url = function (liId, theForm, fieldProp, uniqueId, liClass)
{
    "use strict";
    var li = addLi(liId, liClass).appendTo(theForm);

    hiddenRequired('required', '0').appendTo(li);

    $("<label/>", {
        text: "Text",
        "class" : "main_label",
        "for": "form_input"
    }).appendTo(li);

    $("<input/>", {
        type: "text",
        "class": "form_input",
        placeholder: "http://www.test.com"
    }).appendTo(li);

    hiddenRequired('input_name', 'url').appendTo(li);
    hiddenRequired('class', '').appendTo(li);
    hiddenRequired('id', '').appendTo(li);
    hiddenRequired('min', '').appendTo(li);
    hiddenRequired('max', '').appendTo(li);

    formButton("Delete", "delete_li").appendTo(li);
    formButton("Edit", "edit_li").appendTo(li);

    clearBoth().appendTo(li);
};

var line_date = function (liId, theForm, fieldProp, uniqueId, liClass)
{
    "use strict";
    var li = addLi(liId, liClass).appendTo(theForm);

    hiddenRequired('required', '0').appendTo(li);
    hiddenRequired('date_min_validate', '').appendTo(li);
    hiddenRequired('date_max_validate', '').appendTo(li);
    hiddenRequired('date_min', '').appendTo(li);
    hiddenRequired('date_max', '').appendTo(li);
    hiddenRequired('locale', 'en').appendTo(li);
    hiddenRequired('date_format', 'yyyy-MM-dd').appendTo(li);

    $("<label/>", {
        text: "Date",
        "class" : "main_label",
        "for": "form_input"
    }).appendTo(li);

    $("<input/>", {
        type: "text",
        "class": "form_input",
        placeholder: "Type something..."
    }).appendTo(li);

    hiddenRequired('input_name', 'date').appendTo(li);
    hiddenRequired('class', '').appendTo(li);
    hiddenRequired('id', '').appendTo(li);
    hiddenRequired('min', '').appendTo(li);
    hiddenRequired('max', '').appendTo(li);

    formButton("Delete", "delete_li").appendTo(li);
    formButton("Edit", "edit_li").appendTo(li);

    clearBoth().appendTo(li);
};

var line_password = function (liId, theForm, fieldProp, uniqueId, liClass)
{
    "use strict";
    var li = addLi(liId, liClass).appendTo(theForm);

    hiddenRequired('required', '0').appendTo(li);
    hiddenRequired('date_min', 'password').appendTo(li);

    $("<label/>", {
        text: "Password",
        "class" : "main_label",
        "for": "form_input"
    }).appendTo(li);

    $("<input/>", {
        type: "text",
        "class": "form_input",
        placeholder: "Password Here..."
    }).appendTo(li);

    hiddenRequired('input_name', 'password').appendTo(li);
    hiddenRequired('class', '').appendTo(li);
    hiddenRequired('id', '').appendTo(li);
    hiddenRequired('min', '').appendTo(li);
    hiddenRequired('max', '').appendTo(li);

    formButton("Delete", "delete_li").appendTo(li);
    formButton("Edit", "edit_li").appendTo(li);

    clearBoth().appendTo(li);
};

var line_password_verify = function (liId, theForm, fieldProp, uniqueId, liClass)
{
    "use strict";
    var li = addLi(liId, liClass).appendTo(theForm);

    hiddenRequired('required', '0').appendTo(li);
    hiddenRequired('token', 'password').appendTo(li);

    $("<label/>", {
        text: "Verify Password",
        "class" : "main_label",
        "for": "form_input"
    }).appendTo(li);

    $("<input/>", {
        type: "text",
        "class": "form_input",
        placeholder: "Verify Password Here..."
    }).appendTo(li);

    hiddenRequired('input_name', 'password_verify').appendTo(li);
    hiddenRequired('class', '').appendTo(li);
    hiddenRequired('id', '').appendTo(li);

    formButton("Delete", "delete_li").appendTo(li);
    formButton("Edit", "edit_li").appendTo(li);

    clearBoth().appendTo(li);
};

var line_email = function (liId, theForm, fieldProp, uniqueId, liClass)
{
    "use strict";
    var li = addLi(liId, liClass).appendTo(theForm);

    hiddenRequired('required', '0').appendTo(li);
    hiddenRequired('invalid_type', 'Email address format is not invalid').appendTo(li);
    hiddenRequired('is_empty_type', 'Email address is required').appendTo(li);

    $("<label/>", {
        text: "Email",
        "class" : "main_label",
        "for": "form_input"
    }).appendTo(li);

    $("<input/>", {
        type: "text",
        "class": "form_input",
        placeholder: "Email Address..."
    }).appendTo(li);

    hiddenRequired('input_name', 'email').appendTo(li);
    hiddenRequired('class', '').appendTo(li);
    hiddenRequired('id', '').appendTo(li);
    hiddenRequired('min', '').appendTo(li);
    hiddenRequired('max', '').appendTo(li);

    formButton("Delete", "delete_li").appendTo(li);
    formButton("Edit", "edit_li").appendTo(li);

    clearBoth().appendTo(li);
};

var line_number = function (liId, theForm, fieldProp, uniqueId, liClass)
{
    "use strict";
	var li = addLi(liId, liClass).appendTo(theForm);

    hiddenRequired('required', '0').appendTo(li);

	$("<label/>", {
		text: "Number Label",
        "class" : "main_label",
		"for": "form_number"
	}).appendTo(li);

	$("<input/>", {
		type: "text",
		"class": "form_number",
		placeholder: "1234567890"
	}).appendTo(li);

    hiddenRequired('validation', '').appendTo(li);
    hiddenRequired('html5', '').appendTo(li);
    hiddenRequired('min_str', '').appendTo(li);
    hiddenRequired('max_str', '').appendTo(li);

    hiddenRequired('input_name', 'number').appendTo(li);
    hiddenRequired('class', '').appendTo(li);
    hiddenRequired('id', '').appendTo(li);
    hiddenRequired('min', '').appendTo(li);
    hiddenRequired('max', '').appendTo(li);

	formButton("Delete", "delete_li").appendTo(li);
	formButton("Edit", "edit_li").appendTo(li);

    clearBoth().appendTo(li);
};

var line_phone = function (liId, theForm, fieldProp, uniqueId, liClass)
{
    "use strict";
    var li = addLi(liId, liClass).appendTo(theForm);

    hiddenRequired('required', '0').appendTo(li);

    $("<label/>", {
        text: "Number Label",
        "class" : "main_label",
        "for": "form_number"
    }).appendTo(li);

    $("<input/>", {
        type: "text",
        "class": "form_number",
        placeholder: "7025555555"
    }).appendTo(li);

    hiddenRequired('input_name', 'phone').appendTo(li);
    hiddenRequired('class', '').appendTo(li);
    hiddenRequired('id', '').appendTo(li);
    hiddenRequired('min', '').appendTo(li);
    hiddenRequired('max', '').appendTo(li);

    formButton("Delete", "delete_li").appendTo(li);
    formButton("Edit", "edit_li").appendTo(li);

    clearBoth().appendTo(li);
}

var line_paragraph = function (liId, theForm, fieldProp, uniqueId, liClass)
{
    "use strict";
	var li = addLi(liId, liClass).appendTo(theForm);

    hiddenRequired('required', '0').appendTo(li);

	$("<label/>", {
		text: "Paragraph",
        "class" : "main_label",
		"for": "form_paragraph"
	}).appendTo(li);

	$("<textarea/>", {
		type: "text",
		"class": "form_paragraph",
		placeholder: "Type something..."
	}).appendTo(li);

    hiddenRequired('input_name', 'paragraph').appendTo(li);
    hiddenRequired('class', '').appendTo(li);
    hiddenRequired('id', '').appendTo(li);
    hiddenRequired('min', '').appendTo(li);
    hiddenRequired('max', '').appendTo(li);

	formButton("Delete", "delete_li").appendTo(li);
	formButton("Edit", "edit_li").appendTo(li);

    clearBoth().appendTo(li);
};

var line_checkbox = function (liId, theForm, fieldProp, uniqueId, liClass)
{
    "use strict";
	var li = addLi(liId, liClass).appendTo(theForm);

	$("<label/>", {
		text: "Checkboxes Label",
        "class" : "main_label"
	}).appendTo(li);

	for (var i=0;i<2;i++)
	{
        var checkbox_span = $("<span/>", {
            "class": "span_checkbox",
            "id":"check_rem" + i
        }).appendTo(li);

		var checkboxx = $("<label/>", {
			text: "Checkbox",
			"class":"checkbox",
			"style":"float:left"
		}).appendTo(checkbox_span);

		$("<input/>", {
			type: "checkbox",
			'disabled': "disabled",
			id: "form_checkbox_" + i,
            "style":"float:left"
		}).insertBefore(checkboxx);

        if(i == 0){
            $("#form_checkbox_" + i).attr("checked", "checked");
        }
	}

    hiddenRequired('input_name', 'checkbox').appendTo(li);
    hiddenRequired('class', '').appendTo(li);
    hiddenRequired('id', '').appendTo(li);
    hiddenRequired('label_class', '').appendTo(li);
    hiddenRequired('label_id', '').appendTo(li);

	formButton("Delete", "delete_li").appendTo(li);
	formButton("Edit", "edit_li").appendTo(li);

    clearBoth().appendTo(li);
};

var line_radio = function (liId, theForm, fieldProp, uniqueId, liClass)
{
    "use strict";
    var li = addLi(liId, liClass).appendTo(theForm);

    $("<label/>", {
        text: "Radio Label",
        "class" : "main_label"
    }).appendTo(li);

    for (var i=0;i<2;i++)
    {
        var radio_span = $("<span/>", {
            "class": "span_radio",
            "id":"radio_rem" + i
        }).appendTo(li);

        var radioo = $("<label/>", {
            text: "Radio",
            "class":"radio",
            "style":"float:left"
        }).appendTo(radio_span);

        $("<input/>", {
            type: "radio",
            'disabled': "disabled",
            id: "form_radio_" + i,
            "style":"float:left"
        }).insertBefore(radioo);

        if(i == 0){
            $("#form_radio_" + i).attr("checked", "checked");
        }
    }

    hiddenRequired('input_name', 'radio').appendTo(li);
    hiddenRequired('class', '').appendTo(li);
    hiddenRequired('id', '').appendTo(li);
    hiddenRequired('label_class', '').appendTo(li);
    hiddenRequired('label_id', '').appendTo(li);

	formButton("Delete", "delete_li").appendTo(li);
	formButton("Edit", "edit_li").appendTo(li);

    clearBoth().appendTo(li);
};

var line_dropdown = function (liId, theForm, fieldProp, uniqueId, liClass)
{
    "use strict";
	var li = addLi(liId, liClass).appendTo(theForm);

	$("<label/>", {
		text: "Drop Down",
        "class" : "main_label",
		"for": "form_dropdown"
	}).appendTo(li);

	var radio = $("<select/>", {
		"class":"dropdown"
	}).appendTo(li);

	for (var i=0;i<2;i++)
	{
		$("<option/>", {
			text: "Dropdown",
			"id": "dropdown_rem" + i,
			"class": "dropdown_option"
		}).appendTo(radio);
	}

    hiddenRequired('number_notinarray', 'Please select your gender !').appendTo(li);
    hiddenRequired('input_name', 'dropdown').appendTo(li);
    hiddenRequired('class', '').appendTo(li);
    hiddenRequired('id', '').appendTo(li);

	formButton("Delete", "delete_li").appendTo(li);
	formButton("Edit", "edit_li").appendTo(li);

    clearBoth().appendTo(li);
};

var line_upload = function (liId, theForm, fieldProp, uniqueId, liClass)
{
    "use strict";
    var li = addLi(liId, liClass).appendTo(theForm);

    hiddenRequired('required', '0').appendTo(li);

    $("<label/>", {
        text: "File Upload",
        "class" : "main_label",
        "for": "form_input"
    }).appendTo(li);

    $("<input/>", {
        type: "file",
        "class": "form_input"
    }).appendTo(li);

    hiddenRequired('input_name', 'upload').appendTo(li);
    hiddenRequired('class', '').appendTo(li);
    hiddenRequired('id', '').appendTo(li);

    hiddenRequired('filesize_min', '').appendTo(li);
    hiddenRequired('filesize_max', '').appendTo(li);
    hiddenRequired('filefilessize_min', '').appendTo(li);
    hiddenRequired('filefilessize_max', '').appendTo(li);
    hiddenRequired('filecount_min', '').appendTo(li);
    hiddenRequired('filecount_max', '').appendTo(li);
    hiddenRequired('fileextension', '').appendTo(li);
    hiddenRequired('fileexcludeextension', '').appendTo(li);
    hiddenRequired('filemimetype', '').appendTo(li);
    hiddenRequired('fileexcludemimetype', '').appendTo(li);
    hiddenRequired('fileexists', '').appendTo(li);
    hiddenRequired('fileimagesize_minheight', '').appendTo(li);
    hiddenRequired('fileimagesize_maxheight', '').appendTo(li);
    hiddenRequired('fileimagesize_minwidth', '').appendTo(li);
    hiddenRequired('fileimagesize_maxwidth', '').appendTo(li);
    hiddenRequired('fileiscompressed', '').appendTo(li);
    hiddenRequired('fileisimage', '').appendTo(li);
    hiddenRequired('filewordcount_min', '').appendTo(li);
    hiddenRequired('filewordcount_max', '').appendTo(li);

    formButton("Delete", "delete_li").appendTo(li);
    formButton("Edit", "edit_li").appendTo(li);

    clearBoth().appendTo(li);
};

var addLi = function(liId, liClass)
{
    "use strict";
	var list = $("<li/>", {
		"id": liId,
		"class": liClass
	});
	return(list);
};

var line_credit_card = function (liId, theForm, fieldProp, uniqueId, liClass)
{
    "use strict";
    var li = addLi(liId, liClass).appendTo(theForm);

    hiddenRequired('required', '0').appendTo(li);

    $("<label/>", {
        text: "Text",
        "class" : "main_label",
        "for": "form_input"
    }).appendTo(li);

    $("<input/>", {
        type: "text",
        "class": "form_input",
        placeholder: "Type something..."
    }).appendTo(li);

    hiddenRequired('input_name', 'credit_card').appendTo(li);
    hiddenRequired('class', '').appendTo(li);
    hiddenRequired('id', '').appendTo(li);
    hiddenRequired('institutes', '').appendTo(li);

    formButton("Delete", "delete_li").appendTo(li);
    formButton("Edit", "edit_li").appendTo(li);

    clearBoth().appendTo(li);
};

var formButton = function(textForm, deleteLi)
{
    "use strict";
	return(
		$("<button/>", {
			type: "button",
			"class": "btn btn-link pull-right " + deleteLi,
			text: textForm
		})
	);
};

var hiddenRequired = function(htype, hvalue)
{
    "use strict";
    return(
        $("<input/>", {
            type: "hidden",
            name: htype,
            value: hvalue
        })
    );
};

var clearBoth = function()
{
    "use strict";
    return(
        $("<div/>", {
            "style": "clear:both;"
        })
    );
};