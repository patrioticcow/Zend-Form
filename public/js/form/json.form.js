/**
 * Cristi Citea (http://zend-form-generator.123easywebsites.com/)
 *
 * @link      https://github.com/patrioticcow/Zend-Form for the canonical source repository
 * @copyright Copyright (c) 2012 Cristi Citea
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 * @package   Form_Generator
 */

var formPropertiesJson = function(formData) {
    var data = [];

    data.push({
        'name' : 'form_properties',
        'namespace' : formData.find('[name="form_namespace_placeholder"]').attr('value'),
        'title' : formData.find('.form_title_placeholder').html(),
        'description' : formData.find('.form_description_placeholder').html(),
        'class' : formData.find('[name="form_class_placeholder"]').attr('value'),
        'model_name' : formData.find('[name="form_model_placeholder"]').attr('value'),
        'id' : formData.find('[name="form_id_placeholder"]').attr('value'),
        'class_name' : formData.find('[name="form_class_name_placeholder"]').attr('value')
    });

    return (data);
};

var lineTextJson = function (formElements) {
    var data = commonsJson(formElements, 'form_input', 'form_input', "Zend\\Form\\Element\\Text");
    return (data);
};

var lineDateJson = function (formElements) {
    var data = commonsJson(formElements, 'form_input', 'form_date', "Zend\\Form\\Element\\Date");
    return (data);
};

var linePasswordJson = function (formElements) {
    var data = commonsJson(formElements, 'form_input', 'form_input_password', "Zend\\Form\\Element\\Password");
    return (data);
};

var linePasswordVerifyJson = function (formElements) {
    var data = commonsJson(formElements, 'form_input', 'form_input_password_verify', "Zend\\Form\\Element\\Password");
    return (data);
};

var lineEmailJson = function (formElements) {
    var data = commonsJson(formElements, 'form_input', 'form_input_email', "Zend\\Form\\Element\\Email");
    return (data);
};

var lineNumberJson = function (formElements) {
    var data = commonsJson(formElements, 'form_input', 'form_number', "Zend\\Form\\Element\\Text");
    return (data);
};

var linePhoneJson = function (formElements) {
    var data = commonsJson(formElements, 'form_input', 'form_phone', "Zend\\Form\\Element\\Text");
    return (data);
};

var lineParagraphJson = function (formElements) {
    var data = commonsJson(formElements, 'form_input', 'form_paragraph', "Zend\\Form\\Element\\Textarea");
    return (data);
};

var lineCheckboxJson = function (formElements) {
    var data = commonsJson(formElements, 'form_input', 'form_checkbox', "Zend\\Form\\Element\\MultiCheckbox");
    return (data);
};

var lineRadioJson = function (formElements) {
    var data = commonsJson(formElements, 'form_input', 'form_radio', "Zend\\Form\\Element\\Radio");
    return (data);
};

var lineDropdownJson = function (formElements) {
    var data = commonsJson(formElements, 'form_input', 'form_dropdown', "Zend\\Form\\Element\\Select");
    return (data);
};

var lineUploadJson = function (formElements) {
    var data = commonsJson(formElements, 'form_input', 'form_fileupload', "file");
    return (data);
};

var lineCreditCardJson = function (formElements) {
    var data = commonsJson(formElements, 'form_input', 'form_credit_card', "Zend\\Form\\Element\\Text");
    return (data);
};

var lineUrlJson = function (formElements) {
    var data = commonsJson(formElements, 'form_input', 'form_url', "Zend\\Form\\Element\\Url");
    return (data);
};

var lineHiddenJson = function (formElements) {
    var data = commonsJson(formElements, 'form_input', 'form_hidden', "Zend\\Form\\Element\\Hidden");
    return (data);
};

var commonsJson = function (formElements, typeName, classType, typeType){
    var myData = [];

    formElements.each(function () {
        var li = $(this);
        var order = li.attr('id').replace(/[^\d.]/g, "");

        if (classType === 'form_checkbox'){
            var innerData = [];

            $('span.span_checkbox').each(function (){
                innerData.push({
                    'label': $(this).find('label.checkbox').text()
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
                    'id': li.find('[name="id"]').attr("value"),
                    'default': $(this).find('[checked="checked"]').attr('id').replace(/[^\d.]/g, ""),
                    'label_class': li.find('[name="label_class"]').attr("value"),
                    'label_id': li.find('[name="label_id"]').attr("value")
                }
            });

        } else if (classType === 'form_radio'){
            var innerData = [];

            $('span.span_radio').each(function(){
                innerData.push({
                    'label': $(this).find('label.radio').text()
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
                    'id': li.find('[name="id"]').attr("value"),
                    'default': $(this).find('[checked="checked"]').attr('id').replace(/[^\d.]/g, ""),
                    'label_class': li.find('[name="label_class"]').attr("value"),
                    'label_id': li.find('[name="label_id"]').attr("value")
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
                    'dropdownValues': innerData,
                    'class': li.find('[name="class"]').attr("value"),
                    'id': li.find('[name="id"]').attr("value"),
                    'notinarray': li.find('[name="notinarray"]').attr("value"),
                    'default': $(this).find('[selected="selected"]').attr('id').replace(/[^\d.]/g, "")
                }
            });
        } else if (classType === 'form_input'){
            myData.push({
                'name' : li.find('[name="input_name"]').attr("value"),
                'type' : typeType,
                'order' : order,
                'data' : {
                    'placeholder': li.find('.' + classType).attr("placeholder"),
                    'label': li.find('[for="' + classType + '"]').text(),
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
                    },
                    'date_validation' : {
                        'min' : li.find('[name="date_min_validate"]').attr("value"),
                        'max' : li.find('[name="date_max_validate"]').attr("value")
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
                    'messages' : {
                        'emailAddressInvalidFormat' : li.find('[name="invalid_type"]').attr("value"),
                        'isEmpty' : li.find('[name="is_empty_type"]').attr("value")
                    }
                }
            });
        } else if (classType === 'form_fileupload'){
            myData.push({
                'name' : li.find('[name="input_name"]').attr("value"),
                'type' : typeType,
                'order' : order,
                'data' : {
                    'placeholder': li.find('.' + typeName).attr("placeholder"),
                    'label': li.find('[for="' + typeName + '"]').text(),
                    'class': li.find('[name="class"]').attr("value"),
                    'id': li.find('[name="id"]').attr("value"),
                    'filesize' : {
                        'min' : li.find('[name="filesize_min"]').attr("value"),
                        'max' : li.find('[name="filesize_max"]').attr("value")
                    },
                    'filefilessize' : {
                        'min' : li.find('[name="filefilessize_min"]').attr("value"),
                        'max' : li.find('[name="filefilessize_max"]').attr("value")
                    },
                    'filecount' : {
                        'min' : li.find('[name="filecount_min"]').attr("value"),
                        'max' : li.find('[name="filecount_max"]').attr("value")
                    },
                    'fileextension' : li.find('[name="fileextension"]').attr("value"),
                    'fileexcludeextension' : li.find('[name="fileexcludeextension"]').attr("value"),
                    'filemimetype' : li.find('[name="filemimetype"]').attr("value"),
                    'fileexcludemimetype' : li.find('[name="fileexcludemimetype"]').attr("value"),
                    'fileexists' : li.find('[name="fileexists"]').attr("value"),
                    'fileimagesize' : {
                        'minheight' : li.find('[name="fileimagesize_minheight"]').attr("value"),
                        'maxheight' : li.find('[name="fileimagesize_maxheight"]').attr("value"),
                        'minwidth' : li.find('[name="fileimagesize_minwidth"]').attr("value"),
                        'maxwidth' : li.find('[name="fileimagesize_maxwidth"]').attr("value")
                    },
                    'fileiscompressed' : li.find('[name="fileiscompressed"]').attr("value"),
                    'fileisimage' : li.find('[name="fileisimage"]').attr("value"),
                    'filewordcount' : {
                        'min' : li.find('[name="filewordcount_min"]').attr("value"),
                        'max' : li.find('[name="filewordcount_max"]').attr("value")
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
                    'id': li.find('[name="id"]').attr("value"),
                    'length' : {
                        'min' : li.find('[name="min"]').attr("value"),
                        'max' : li.find('[name="max"]').attr("value"),
                        'min_str' : li.find('[name="min_str"]').attr("value"),
                        'max_str' : li.find('[name="max_str"]').attr("value")
                    },
                    'validators' : {
                        'name' : li.find('[name="validation"]').attr("value"),
                        'html5' : li.find('[name="html5"]').attr("value")
                    }
                }
            });
        } else if (classType === 'form_credit_card'){
            myData.push({
                'name' : li.find('[name="input_name"]').attr("value"),
                'type' : typeType,
                'order' : order,
                'data' : {
                    'placeholder': li.find('.' + classType).attr("placeholder"),
                    'label': li.find('[for="' + typeName + '"]').text(),
                    'required': li.find('[name="required"]').attr("value"),
                    'class': li.find('[name="class"]').attr("value"),
                    'id': li.find('[name="id"]').attr("value"),
                    'institutes': li.find('[name="institutes"]').attr("value")
                }
            });
        } else if (classType === 'form_hidden'){
            myData.push({
                'name' : li.find('[name="input_name"]').attr("value"),
                'type' : typeType,
                'order' : order,
                'data' : {
                    'required': li.find('[name="required"]').attr("value"),
                    'class': li.find('[name="class"]').attr("value"),
                    'id': li.find('[name="id"]').attr("value"),
                    'default': li.find('[name="value"]').attr("value")
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
                    'id': li.find('[name="id"]').attr("value"),
                    'length' : {
                        'min' : li.find('[name="min"]').attr("value"),
                        'max' : li.find('[name="max"]').attr("value")
                    }
                }
            });
        }

    });

    return(myData);
};