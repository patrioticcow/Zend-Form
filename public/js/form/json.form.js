var lineTextJson = function(formElements) {
    var data = commonsJson(formElements, 'line_text', 'form_input');
    return (data);
};

var lineNumberJson = function(formElements) {
    var data = commonsJson(formElements, 'line_number', 'form_number');
    return (data);
};

var lineParagraphJson = function(formElements) {
    var data = commonsJson(formElements, 'line_paragraph', 'form_paragraph');
    return (data);
};

var lineCheckboxJson = function(formElements) {
    var data = commonsJson(formElements, 'line_checkbox', 'form_checkbox');
    return (data);
};

var lineRadioJson = function(formElements) {
    var data = commonsJson(formElements, 'line_radio', 'form_radio');
    return (data);
};

var lineDropdownJson = function(formElements) {
    var data = commonsJson(formElements, 'line_dropdown', 'form_dropdown');
    return (data);
};

var commonsJson = function(formElements, typeType, classType){
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
                'type' : typeType,
                'order' : order,
                'data' : {
                    'label': $(this).find('label.main_label').html(),
                    'innerData': innerData
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
                'type' : typeType,
                'order' : order,
                'data' : {
                    'label': $(this).find('label.main_label').html(),
                    'innerData': innerData
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
                'type' : typeType,
                'order' : order,
                'data' : {
                    'label': $(this).find('label.main_label').text(),
                    'innerData': innerData
                }
            });
        } else {
            myData.push({
                'type' : typeType,
                'order' : order,
                'data' : {
                    'placeholder': li.find('.' + classType).attr("placeholder"),
                    'label': li.find('[for="' + classType + '"]').text(),
                    'required': li.find('[name="required"]').attr("value")
                }
            });
        }

    });

    return(myData);
};