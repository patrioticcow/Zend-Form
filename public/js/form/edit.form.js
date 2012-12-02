/**
 * Cristi Citea (http://zend-form-generator.123easywebsites.com/)
 *
 * @link      https://github.com/patrioticcow/Zend-Form for the canonical source repository
 * @copyright Copyright (c) 2012 Cristi Citea
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 * @package   Form_Generator
 */

//$('#generate_form')
var editLineText = function editLineText (id, type){

    var liId = $('#'+id);
    var liClass = $('.'+id);

    var requiredEdit    = liId.find('input[name="required"]').attr('value') == 'false' ? 'no' : 'yes';
    var labelEdit       = liId.find('.main_label').html();
    var pli = liId.find('.form_input').attr('placeholder');
    var placeholderEdit = pli != 'undefined' ? pli : liId.find('input[name="placeholder_text"]').attr('value');

    if(type == 'line_number'){
        placeholderEdit = liId.find('.form_number').attr('placeholder');
    }

    var nameEdit        = liId.find('input[name="input_name"]').attr('value');
    var classEdit       = liId.find('input[name="class"]').attr('value');
    var idEdit          = liId.find('input[name="id"]').attr('value');
    var minEdit         = liId.find('input[name="min"]').attr('value');
    var maxEdit         = liId.find('input[name="max"]').attr('value');

    var dateMinEdit     = liId.find('input[name="date_min"]').attr('value');
    var dateMaxEdit     = liId.find('input[name="date_max"]').attr('value');
    var dateMinVEdit    = liId.find('input[name="date_min_validate"]').attr('value');
    var dateMaxVEdit    = liId.find('input[name="date_miax_validate"]').attr('value');
    var localeEdit      = liId.find('input[name="locale"]').attr('value');
    var dateFormatEdit  = liId.find('input[name="date_format"]').attr('value');

    var validationEdit  = liId.find('input[name="validation"]').attr('value');
    var html5Edit       = liId.find('input[name="html5"]').attr('value');
    var numMinEdit      = liId.find('input[name="min_str"]').attr('value');
    var numMaxEdit      = liId.find('input[name="max_str"]').attr('value');

    if(type == 'line_text'){
        defaultValues(liClass, labelEdit, nameEdit, placeholderEdit, requiredEdit, minEdit, maxEdit, classEdit, idEdit);
    }

    if(type == 'line_date'){
        defaultValues(liClass, labelEdit, nameEdit, placeholderEdit, requiredEdit, minEdit, maxEdit, classEdit, idEdit);

        liClass.find('input[name="date_min"]').val(dateMinEdit);
        liClass.find('input[name="date_max"]').val(dateMaxEdit);
        liClass.find('input[name="date_min_validate"]').val(dateMinVEdit);
        liClass.find('input[name="date_max_validate"]').val(dateMaxVEdit);
        liClass.find('select[name="locale"]').val(localeEdit);
        liClass.find('input[name="date_format"]').val(dateFormatEdit);
    }

    if(type == 'line_number'){
        defaultValues(liClass, labelEdit, nameEdit, placeholderEdit, requiredEdit, minEdit, maxEdit, classEdit, idEdit);

        liClass.find('select[name="valid_type"]').val(validationEdit);
        var html5PLaceholder = liClass.find('input[name="number_html5"]');
        html5Edit == 1 ? html5PLaceholder.prop('checked', true) : html5PLaceholder.prop('checked', false);
        liClass.find('input[name="number_min_str"]').val(numMinEdit);
        liClass.find('input[name="number_max_str"]').val(numMaxEdit);
    }

    console.log(placeholderEdit);

}

var defaultValues = function defaultValues(liClass, labelEdit, nameEdit, placeholderEdit, requiredEdit, minEdit, maxEdit, classEdit, idEdit){
    liClass.find('input[name="text_label"]').val(labelEdit),
    liClass.find('input[name="input_name"]').val(nameEdit),
    liClass.find('input[name="placeholder_text"]').val(placeholderEdit),
    liClass.find('select[name="required"]').val(requiredEdit),
    liClass.find('input[name="number_min"]').val(minEdit),
    liClass.find('input[name="number_max"]').val(maxEdit),
    liClass.find('input[name="number_class"]').val(classEdit),
    liClass.find('input[name="number_id"]').val(idEdit);
};
