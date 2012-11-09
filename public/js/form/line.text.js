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
		text: "Number",
		"for": "form_number",
	}).appendTo(li);
	
	$("<input/>", {
		type: "text",
		"class": "form_number",
		placeholder: "Type something..."
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
		text: "Checkboxes ",
	}).appendTo(li);
	
	var checkbox_span = $("<span/>", {
		"class": "span_checkbox",
	}).appendTo(li);
	
	for (var i=0;i<=2;i++)
	{ 
		var checkbox = $("<label/>", {
			text: "Checkbox " + i,
			"class":"checkbox",
		}).appendTo(checkbox_span);
		
		$("<input/>", {
			type: "checkbox",
			id: "form_checkbox_" + i,
		}).appendTo(checkbox);
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
		text: "Multiple Choices ",
	}).appendTo(li);
	
	var radio_span = $("<span/>", {
		"class": "span_radio",
	}).appendTo(li);
	
	for (var i=0;i<=2;i++)
	{ 
		var radio = $("<label/>", {
			text: "Radio " + i,
			"class":"radio",
		}).appendTo(radio_span);
				
		$("<input/>", {
			type: "radio",
			id: "form_radio_" + i,
		}).appendTo(radio);
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
		"for": "form_dropdown",
	}).appendTo(li);
	
	var radio = $("<select/>", {
		"class":"dropdown",
		id: "form_dropdown_" + i,
	}).appendTo(li);
	
	for (var i=0;i<=2;i++)
	{
		$("<option/>", {
			text: "Dropdown " + i,
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