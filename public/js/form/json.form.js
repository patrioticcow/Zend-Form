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

var commonsJson = function(formElements, typeType, classType){
    var myData = new Array();

    formElements.each(function(index, data) {
        var li = $(this);
        var order = li.attr('id').replace(/[^\d.]/g, "");

        myData.push({
            'type' : typeType,
            'order' : order,
            'data' : {
                'placeholder': li.find('.' + classType).attr("placeholder"),
                'label': li.find('[for="' + classType + '"]').text(),
                'required': li.find('[name="required"]').attr("value")
            }
        });
    });

    return(myData);
};