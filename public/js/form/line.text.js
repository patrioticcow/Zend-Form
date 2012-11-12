var line_text = function (liId, theForm, fieldProp, uniqueId, liClass)
{
	var li = addLi(liId, liClass).appendTo(theForm);

    hiddenRequired().appendTo(li);

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

    hiddenInputName().appendTo(li);
    hiddenCLass().appendTo(li);
    hiddenId().appendTo(li);
    hiddenMin().appendTo(li);
    hiddenMax().appendTo(li);

	formButton("Delete", "delete_li").appendTo(li);
	formButton("Edit", "edit_li").appendTo(li);

    clearBoth().appendTo(li);
};

var line_password = function (liId, theForm, fieldProp, uniqueId, liClass)
{
    var li = addLi(liId, liClass).appendTo(theForm);

    hiddenRequired().appendTo(li);

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

    hiddenInputName().appendTo(li);
    hiddenCLass().appendTo(li);
    hiddenId().appendTo(li);
    hiddenMin().appendTo(li);
    hiddenMax().appendTo(li);

    formButton("Delete", "delete_li").appendTo(li);
    formButton("Edit", "edit_li").appendTo(li);

    clearBoth().appendTo(li);
};

var line_password_verify = function (liId, theForm, fieldProp, uniqueId, liClass)
{
    var li = addLi(liId, liClass).appendTo(theForm);

    hiddenRequired().appendTo(li);

    $("<input/>", {
        type: "hidden",
        name: "token",
        value: "password"
    }).appendTo(li);

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

    hiddenInputName().appendTo(li);
    hiddenCLass().appendTo(li);
    hiddenId().appendTo(li);

    formButton("Delete", "delete_li").appendTo(li);
    formButton("Edit", "edit_li").appendTo(li);

    clearBoth().appendTo(li);
};

var line_email = function (liId, theForm, fieldProp, uniqueId, liClass)
{
    var li = addLi(liId, liClass).appendTo(theForm);

    hiddenRequired().appendTo(li);

    $("<input/>", {
        type: "hidden",
        name: "invalid_type",
        value: "Email address format is not invalid"
    }).appendTo(li);

    $("<input/>", {
        type: "hidden",
        name: "is_empty_type",
        value: "Email address is required"
    }).appendTo(li);

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

    hiddenInputName().appendTo(li);
    hiddenCLass().appendTo(li);
    hiddenId().appendTo(li);
    hiddenMin().appendTo(li);
    hiddenMax().appendTo(li);

    formButton("Delete", "delete_li").appendTo(li);
    formButton("Edit", "edit_li").appendTo(li);

    clearBoth().appendTo(li);
};

var line_number = function (liId, theForm, fieldProp, uniqueId, liClass)
{
	var li = addLi(liId, liClass).appendTo(theForm);

    hiddenRequired().appendTo(li);

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

    hiddenInputName().appendTo(li);
    hiddenCLass().appendTo(li);
    hiddenId().appendTo(li);

	formButton("Delete", "delete_li").appendTo(li);
	formButton("Edit", "edit_li").appendTo(li);

    clearBoth().appendTo(li);
};

var line_paragraph = function (liId, theForm, fieldProp, uniqueId, liClass)
{
	var li = addLi(liId, liClass).appendTo(theForm);

    hiddenRequired().appendTo(li);

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

    hiddenInputName().appendTo(li);
    hiddenCLass().appendTo(li);
    hiddenId().appendTo(li);

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

		$("<input/>", {
			type: "checkbox",
			'disabled': "disabled",
			id: "form_checkbox_" + i,
            "style":"float:left"
		}).insertBefore(checkboxx);
	}

    hiddenInputName().appendTo(li);
    hiddenCLass().appendTo(li);
    hiddenId().appendTo(li);

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

        $("<input/>", {
            type: "radio",
            'disabled': "disabled",
            id: "form_radio_" + i,
            "style":"float:left"
        }).insertBefore(radioo);
    }

    hiddenInputName().appendTo(li);
    hiddenCLass().appendTo(li);
    hiddenId().appendTo(li);

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
		$("<option/>", {
			text: "Dropdown",
			"id": "dropdown_rem" + i,
			"class": "dropdown_option"
		}).appendTo(radio);
	}

    hiddenInputName().appendTo(li);
    hiddenCLass().appendTo(li);
    hiddenId().appendTo(li);

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

var hiddenInputName = function(){
    return(
        $("<input/>", {
            type: "hidden",
            name: "input_name"
        })
    );
};

var hiddenCLass = function(){
    return(
        $("<input/>", {
            type: "hidden",
            name: "class"
        })
    );
};

var hiddenId = function(){
    return(
        $("<input/>", {
            type: "hidden",
            name: "id"
        })
    );
};

var hiddenMin = function(){
    return(
        $("<input/>", {
            type: "hidden",
            name: "min"
        })
    );
};

var hiddenMax = function(){
    return(
        $("<input/>", {
            type: "hidden",
            name: "max"
        })
    );
};

var hiddenRequired = function(){
    return(
        $("<input/>", {
            type: "hidden",
            name: "required",
            value: "0"
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