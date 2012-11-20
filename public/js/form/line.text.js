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

var line_text = function (liId, theForm, fieldProp, uniqueId, liClass)
{
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

    hiddenRequired('input_name', '').appendTo(li);
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

    hiddenRequired('input_name', '').appendTo(li);
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

    hiddenRequired('input_name', '').appendTo(li);
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

    hiddenRequired('input_name', '').appendTo(li);
    hiddenRequired('class', '').appendTo(li);
    hiddenRequired('id', '').appendTo(li);

    formButton("Delete", "delete_li").appendTo(li);
    formButton("Edit", "edit_li").appendTo(li);

    clearBoth().appendTo(li);
};

var line_email = function (liId, theForm, fieldProp, uniqueId, liClass)
{
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

    hiddenRequired('input_name', '').appendTo(li);
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

    hiddenRequired('input_name', '').appendTo(li);
    hiddenRequired('class', '').appendTo(li);
    hiddenRequired('id', '').appendTo(li);
    hiddenRequired('min', '').appendTo(li);
    hiddenRequired('max', '').appendTo(li);
    hiddenRequired('validation', '').appendTo(li);
    hiddenRequired('html5', '').appendTo(li);
    hiddenRequired('min_str', '').appendTo(li);
    hiddenRequired('max_str', '').appendTo(li);

	formButton("Delete", "delete_li").appendTo(li);
	formButton("Edit", "edit_li").appendTo(li);

    clearBoth().appendTo(li);
};

var line_phone = function (liId, theForm, fieldProp, uniqueId, liClass)
{
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

    hiddenRequired('input_name', '').appendTo(li);
    hiddenRequired('class', '').appendTo(li);
    hiddenRequired('id', '').appendTo(li);
    hiddenRequired('min', '').appendTo(li);
    hiddenRequired('max', '').appendTo(li);

	formButton("Delete", "delete_li").appendTo(li);
	formButton("Edit", "edit_li").appendTo(li);

    clearBoth().appendTo(li);
};

var line_paragraph = function (liId, theForm, fieldProp, uniqueId, liClass)
{
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

    hiddenRequired('input_name', '').appendTo(li);
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

        if(i === 0){
            $("<input/>", {
                type: "checkbox",
                'disabled': "disabled",
                'checked' : 'checked',
                id: "form_checkbox_" + i,
                "style":"float:left"
            }).insertBefore(checkboxx);
        } else {
            $("<input/>", {
                type: "checkbox",
                'disabled': "disabled",
                id: "form_checkbox_" + i,
                "style":"float:left"
            }).insertBefore(checkboxx);
        }

	}

    hiddenRequired('input_name', '').appendTo(li);
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

        if(i === 0){
            $("<input/>", {
                type: "radio",
                'disabled': "disabled",
                'checked' : 'checked',
                id: "form_radio_" + i,
                "style":"float:left"
            }).insertBefore(radioo);
        } else {
            $("<input/>", {
                type: "radio",
                'disabled': "disabled",
                id: "form_radio_" + i,
                "style":"float:left"
            }).insertBefore(radioo);
        }
    }

    hiddenRequired('input_name', '').appendTo(li);
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
        if(i === 0){
            $("<option/>", {
                text: "Dropdown",
                "id": "dropdown_rem" + i,
                "selected": "selected",
                "class": "dropdown_option"
            }).appendTo(radio);
        } else {
            $("<option/>", {
                text: "Dropdown",
                "id": "dropdown_rem" + i,
                "class": "dropdown_option"
            }).appendTo(radio);
        }
	}

    hiddenRequired('input_name', '').appendTo(li);
    hiddenRequired('class', '').appendTo(li);
    hiddenRequired('id', '').appendTo(li);
    hiddenRequired('notinarray', '').appendTo(li);

	formButton("Delete", "delete_li").appendTo(li);
	formButton("Edit", "edit_li").appendTo(li);

    clearBoth().appendTo(li);
};

var line_upload = function (liId, theForm, fieldProp, uniqueId, liClass)
{
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

    hiddenRequired('input_name', '').appendTo(li);
    hiddenRequired('class', '').appendTo(li);
    hiddenRequired('id', '').appendTo(li);

    formButton("Delete", "delete_li").appendTo(li);
    formButton("Edit", "edit_li").appendTo(li);

    clearBoth().appendTo(li);
};

var addLi = function(liId, liClass){
	var list = $("<li/>", {
		"id": liId,
		"class": liClass
	});
	return(list);
};

var formButton = function(textForm, deleteLi){
	return(
		$("<button/>", {
			type: "button",
			"class": "btn btn-link pull-right " + deleteLi,
			text: textForm
		})
	);
};

var hiddenRequired = function(htype, hvalue){
    return(
        $("<input/>", {
            type: "hidden",
            name: htype,
            value: hvalue
        })
    );
};

var clearBoth = function(){
    return(
        $("<div/>", {
            "style": "clear:both;"
        })
    );
};