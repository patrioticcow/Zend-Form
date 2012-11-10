var line_text = function (liId, theForm, fieldProp, uniqueId, liClass)
{
	var li = addLi(liId, liClass).appendTo(theForm);

	$("<input/>", {
		type: "hidden",
		name: "required",
		value: "0",
	}).appendTo(li);

	$("<label/>", {
		text: "Text",
        "class" : "main_label",
		"for": "form_input",
	}).appendTo(li);

	$("<input/>", {
		type: "text",
		"class": "form_input",
		placeholder: "Type something..."
	}).appendTo(li);

	formButton("Delete", "delete_li").appendTo(li);
	formButton("Edit", "edit_li").appendTo(li);

	$("<div/>", {
		"style": "clear:both;"
	}).appendTo(li);
};

var line_number = function (liId, theForm, fieldProp, uniqueId, liClass)
{
	var li = addLi(liId, liClass).appendTo(theForm);

	$("<input/>", {
		type: "hidden",
		name: "required",
		value: "0",
	}).appendTo(li);

	$("<label/>", {
		text: "Number Label",
        "class" : "main_label",
		"for": "form_number",
	}).appendTo(li);

	$("<input/>", {
		type: "text",
		"class": "form_number",
		placeholder: "1234567890"
	}).appendTo(li);

	formButton("Delete", "delete_li").appendTo(li);
	formButton("Edit", "edit_li").appendTo(li);

	$("<div/>", {
		"style": "clear:both;"
	}).appendTo(li);
};

var line_paragraph = function (liId, theForm, fieldProp, uniqueId, liClass)
{
	var li = addLi(liId, liClass).appendTo(theForm);

	$("<input/>", {
		type: "hidden",
		name: "required",
		value: "0",
	}).appendTo(li);

	$("<label/>", {
		text: "Paragraph",
        "class" : "main_label",
		"for": "form_paragraph",
	}).appendTo(li);

	$("<textarea/>", {
		type: "text",
		"class": "form_paragraph",
		placeholder: "Type something..."
	}).appendTo(li);

	formButton("Delete", "delete_li").appendTo(li);
	formButton("Edit", "edit_li").appendTo(li);

	$("<div/>", {
		"style": "clear:both;"
	}).appendTo(li);
};

var line_checkbox = function (liId, theForm, fieldProp, uniqueId, liClass)
{
	var li = addLi(liId, liClass).appendTo(theForm);

	$("<label/>", {
		text: "Checkboxes Label",
        "class" : "main_label",
	}).appendTo(li);

	for (var i=0;i<2;i++)
	{
        var checkbox_span = $("<span/>", {
            "class": "span_checkbox",
            "id":"check_rem" + i,
        }).appendTo(li);

		var checkbox = $("<label/>", {
			text: "Checkbox",
			"class":"checkbox",
		}).appendTo(checkbox_span);

		$("<input/>", {
			type: "checkbox",
			'disabled': "disabled",
			id: "form_checkbox_" + i,
		}).insertAfter(checkbox);
	}

	formButton("Delete", "delete_li").appendTo(li);
	formButton("Edit", "edit_li").appendTo(li);

	$("<div/>", {
		"style": "clear:both;"
	}).appendTo(li);
};

var line_radio = function (liId, theForm, fieldProp, uniqueId, liClass)
{
    var li = addLi(liId, liClass).appendTo(theForm);

    $("<label/>", {
        text: "Radio Label",
        "class" : "main_label",
    }).appendTo(li);

    for (var i=0;i<2;i++)
    {
        var radio_span = $("<span/>", {
            "class": "span_radio",
            "id":"radio_rem" + i,
        }).appendTo(li);

        var radio = $("<label/>", {
            text: "Radio",
            "class":"radio",
        }).appendTo(radio_span);

        $("<input/>", {
            type: "radio",
            'disabled': "disabled",
            id: "form_radio_" + i,
        }).insertAfter(radio);
    }

	formButton("Delete", "delete_li").appendTo(li);
	formButton("Edit", "edit_li").appendTo(li);

	$("<div/>", {
		"style": "clear:both;"
	}).appendTo(li);
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
		"class":"dropdown",
	}).appendTo(li);

	for (var i=0;i<2;i++)
	{
		$("<option/>", {
			text: "Dropdown",
			"id": "dropdown_rem" + i,
			"class": "dropdown_option"
		}).appendTo(radio);
	}

	formButton("Delete", "delete_li").appendTo(li);
	formButton("Edit", "edit_li").appendTo(li);

	$("<div/>", {
		"style": "clear:both;"
	}).appendTo(li);
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