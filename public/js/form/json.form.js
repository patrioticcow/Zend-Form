var lineTextJson = function(formElements) {
    var data = commonsJson(formElements, 'form_input', 'form_input', "Zend\Form\Element\Text");
    return (data);
};

var lineDateJson = function(formElements) {
    var data = commonsJson(formElements, 'form_input', 'form_date', "Zend\Form\Element\Date");
    return (data);
};

var linePasswordJson = function(formElements) {
    var data = commonsJson(formElements, 'form_input', 'form_input_password', "Zend\Form\Element\Password");
    return (data);
};

var linePasswordVerifyJson = function(formElements) {
    var data = commonsJson(formElements, 'form_input', 'form_input_password_verify', "Zend\Form\Element\Password");
    return (data);
};

var lineEmailJson = function(formElements) {
    var data = commonsJson(formElements, 'form_input', 'form_input_email', "Zend\Form\Element\Email");
    return (data);
};

var lineNumberJson = function(formElements) {
    var data = commonsJson(formElements, 'form_input', 'form_number', "Zend\Form\Element\Text");
    return (data);
};

var lineParagraphJson = function(formElements) {
    var data = commonsJson(formElements, 'form_input', 'form_paragraph');
    return (data);
};

var lineCheckboxJson = function(formElements) {
    var data = commonsJson(formElements, 'form_input', 'form_checkbox');
    return (data);
};

var lineRadioJson = function(formElements) {
    var data = commonsJson(formElements, 'form_input', 'form_radio');
    return (data);
};

var lineDropdownJson = function(formElements) {
    var data = commonsJson(formElements, 'form_input', 'form_dropdown');
    return (data);
};

var commonsJson = function(formElements, typeName, classType, typeType){
    var myData = [];

    formElements.each(function() {
        var li = $(this);
        var order = li.attr('id').replace(/[^\d.]/g, "");

        if (classType === 'form_checkbox'){
            var innerData = [];

            $('span.span_checkbox').each(function(){
                innerData.push({
                    'label': $(this).find('label.checkbox').text(),
                    'checkbox_label': $(this).find('label.checkbox').text(),
                    'default': $(this).find('[checked="checked"]').attr("checked")
                });
            });

            myData.push({
                'name' : li.find('[name="input_name"]').attr("value"),
                'type' : typeType,
                'order' : order,
                'data' : {
                    'label': $(this).find('label.main_label').html(),
                    'innerData': innerData,
                    'class': li.find('[name="class"]').attr("value"),
                    'id': li.find('[name="id"]').attr("value")
                }
            });

        } else if (classType === 'form_radio'){
            var innerData = [];

            $('span.span_radio').each(function(){
                innerData.push({
                    'label': $(this).find('label.radio').text(),
                    'checkbox_label': $(this).find('label.radio').text(),
                    'default': $(this).find('[checked="checked"]').attr("checked")
                });
            });

            myData.push({
                'name' : li.find('[name="input_name"]').attr("value"),
                'type' : typeType,
                'order' : order,
                'data' : {
                    'label': $(this).find('label.main_label').html(),
                    'innerData': innerData,
                    'class': li.find('[name="class"]').attr("value"),
                    'id': li.find('[name="id"]').attr("value")
                }
            });
        } else if (classType === 'form_dropdown'){
            var innerData = [];

            $('option.dropdown_option').each(function(){
                innerData.push({
                    'dropdown_label': $(this).html(),
                    'default': $(this).attr("selected")
                });
            });

            myData.push({
                'name' : li.find('[name="input_name"]').attr("value"),
                'type' : typeType,
                'order' : order,
                'data' : {
                    'label': $(this).find('label.main_label').text(),
                    'innerData': innerData,
                    'class': li.find('[name="class"]').attr("value"),
                    'id': li.find('[name="id"]').attr("value")
                }
            });
        } else if (classType === 'form_input'){
            myData.push({
                'name' : li.find('[name="input_name"]').attr("value"),
                'type' : typeType,
                'order' : order,
                'data' : {
                    'placeholder': li.find('.' + typeName).attr("placeholder"),
                    'label': li.find('[for="' + typeName + '"]').text(),
                    'required': li.find('[name="required"]').attr("value"),
                    'class': li.find('[name="class"]').attr("value"),
                    'id': li.find('[name="id"]').attr("value"),
                    'length' : {
                        'min' : li.find('[name="min"]').attr("value"),
                        'max' : li.find('[name="max"]').attr("value")
                    }
                }
            });
        } else if (classType === 'form_date'){
            myData.push({
                'name' : li.find('[name="input_name"]').attr("value"),
                'type' : typeType,
                'order' : order,
                'data' : {
                    'placeholder': li.find('.' + typeName).attr("placeholder"),
                    'label': li.find('[for="' + typeName + '"]').text(),
                    'required': li.find('[name="required"]').attr("value"),
                    'class': li.find('[name="class"]').attr("value"),
                    'id': li.find('[name="id"]').attr("value"),
                    'locale': li.find('[name="locale"]').attr("value"),
                    'date_format': li.find('[name="date_format"]').attr("value"),
                    'date' : {
                        'min' : li.find('[name="date_min"]').attr("value"),
                        'max' : li.find('[name="date_max"]').attr("value")
                    }
                }
            });
        } else if (classType === 'form_input_password'){
            myData.push({
                'name' : li.find('[name="input_name"]').attr("value"),
                'type' : typeType,
                'order' : order,
                'data' : {
                    'placeholder': li.find('.' + typeName).attr("placeholder"),
                    'label': li.find('[for="' + typeName + '"]').text(),
                    'class': li.find('[name="class"]').attr("value"),
                    'id': li.find('[name="id"]').attr("value"),
                    'length' : {
                        'min' : li.find('[name="min"]').attr("value"),
                        'max' : li.find('[name="max"]').attr("value")
                    }
                }
            });
        } else if (classType === 'form_input_password_verify'){
            myData.push({
                'name' : li.find('[name="input_name"]').attr("value"),
                'type' : typeType,
                'order' : order,
                'data' : {
                    'placeholder': li.find('.' + typeName).attr("placeholder"),
                    'label': li.find('[for="' + typeName + '"]').text(),
                    'class': li.find('[name="class"]').attr("value"),
                    'id': li.find('[name="id"]').attr("value"),
                    'token' : li.find('[name="token"]').attr("value")
                }
            });
        } else if (classType === 'form_input_email'){
            myData.push({
                'name' : li.find('[name="input_name"]').attr("value"),
                'type' : typeType,
                'order' : order,
                'data' : {
                    'placeholder': li.find('.' + typeName).attr("placeholder"),
                    'label': li.find('[for="' + typeName + '"]').text(),
                    'class': li.find('[name="class"]').attr("value"),
                    'id': li.find('[name="id"]').attr("value"),
                    'length' : {
                        'min' : li.find('[name="min"]').attr("value"),
                        'max' : li.find('[name="max"]').attr("value")
                    },
                    'maessages' : {
                        'emailAddressInvalidFormat' : li.find('[name="invalid_type"]').attr("value"),
                        'isEmpty' : li.find('[name="is_empty_type"]').attr("value")
                    }
                }
            });
        } else if (classType === 'form_number'){
            myData.push({
                'name' : li.find('[name="input_name"]').attr("value"),
                'type' : typeType,
                'order' : order,
                'data' : {
                    'placeholder': li.find('.' + typeName).attr("placeholder"),
                    'label': li.find('[for="' + typeName + '"]').text(),
                    'required': li.find('[name="required"]').attr("value"),
                    'class': li.find('[name="class"]').attr("value"),
                    'id': li.find('[name="id"]').attr("value")
                }
            });
        } else {
            myData.push({
                'name' : li.find('[name="input_name"]').attr("value"),
                'type' : typeType,
                'order' : order,
                'data' : {
                    'placeholder': li.find('.' + typeName).attr("placeholder"),
                    'label': li.find('[for="' + typeName + '"]').text(),
                    'required': li.find('[name="required"]').attr("value"),
                    'class': li.find('[name="class"]').attr("value"),
                    'id': li.find('[name="id"]').attr("value")
                }
            });
        }

    });

    return(myData);
};