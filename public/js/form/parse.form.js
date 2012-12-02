/**
 * Cristi Citea (http://zend-form-generator.123easywebsites.com/)
 *
 * @link      https://github.com/patrioticcow/Zend-Form for the canonical source repository
 * @copyright Copyright (c) 2012 Cristi Citea
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 * @package   Form_Generator
 */

$(document).ready(function() {

    $('#myTab').find('a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    var formId = $('#form_id').html();

    t        = '    ';
    tt       = '        ';
    ttt      = '            ';
    tttt     = '                ';
    ttttt    = '                    ';
    tttttt   = '                        ';
    ttttttt  = '                            ';

    var form = JSON.parse(
        localStorage.getItem(formId)
    );

    var formElements = [];
    var formValidatorElements = [];

    for (var i = 0; i < form.length; i++){
        // form properties
        if(form[i].form_properties){
            var prop = form[i].form_properties[0];

            formElements.push(zfHead(prop));
            formValidatorElements.push(zfValidatorHead(prop));
        }

        // form line text
        if(form[i].line_text){
            var lineText = form[i].line_text[0];

            formElements.push(text(lineText));
            formValidatorElements.push(textValidator(lineText, 'text'));
        }

        // form number
        if(form[i].line_number){
            var lineNumber = form[i].line_number[0];

            formElements.push(text(lineNumber));
            formValidatorElements.push(textValidator(lineNumber, 'number'));
        }

        // form paragraph
        if(form[i].line_paragraph){
            var lineParagraph = form[i].line_paragraph[0];

            formElements.push(text(lineParagraph));
            formValidatorElements.push(textValidator(lineParagraph, 'paragraph'));
        }

        // form password
        if(form[i].line_password){
            var linePassword = form[i].line_password[0];

            formElements.push(text(linePassword));
            formValidatorElements.push(textValidator(linePassword, 'password'));
        }

        // form password_verify
        if(form[i].line_password_verify){
            var linePasswordVerify = form[i].line_password_verify[0];

            formElements.push(text(linePasswordVerify));
            formValidatorElements.push(textValidator(linePasswordVerify, 'password_verify'));
        }

        // form checkboxes
        if(form[i].line_checkbox ){
            var lineCheckboxes = form[i].line_checkbox[0];

            formElements.push(text(lineCheckboxes));
            formValidatorElements.push(textValidator(lineCheckboxes, 'checkboxes'));
        }

        // form dropdown
        if(form[i].line_dropdown ){
            var lineDropdown = form[i].line_dropdown[0];

            formElements.push(text(lineDropdown));
            formValidatorElements.push(textValidator(lineDropdown, 'dropdown'));
        }

        // form radio
        if(form[i].line_radio ){
            var lineRadio = form[i].line_radio[0];

            formElements.push(text(lineRadio));
            formValidatorElements.push(textValidator(lineRadio, 'radio'));
        }

        // form email
        if(form[i].line_email ){
            var lineEmail = form[i].line_email[0];

            formElements.push(text(lineEmail));
            formValidatorElements.push(textValidator(lineEmail, 'email'));
        }

        // form date
        if(form[i].line_date ){
            var lineDate = form[i].line_date[0];

            formElements.push(text(lineDate));
            formValidatorElements.push(textValidator(lineDate, 'date'));
        }

        // form upload
        if(form[i].line_upload ){
            var lineUpload = form[i].line_upload[0];

            formElements.push(text(lineUpload));
            formValidatorElements.push(textValidator(lineUpload, 'upload'));
        }

        // form credit card
        if(form[i].line_credit_card ){
            var lineCreditCard = form[i].line_credit_card[0];

            formElements.push(text(lineCreditCard));
            formValidatorElements.push(textValidator(lineCreditCard, 'credit_card'));
        }

        // form url
        if(form[i].line_url ){
            var lineUrl = form[i].line_url[0];

            formElements.push(text(lineUrl));
            formValidatorElements.push(textValidator(lineUrl, 'url'));
        }

        // form hidden
        if(form[i].line_hidden ){
            var lineHidden = form[i].line_hidden[0];

            formElements.push(text(lineHidden));
            //formValidatorElements.push(textValidator(lineHidden, 'hidden'));
        }

        console.log(form[i]);
    }

    formElements.push(csrf());
    formElements.push(zfFooter());

    formValidatorElements.push(zfValidatorFooter());

    $('#form_file').html( formElements );

    $('#form_file_validator').html( formValidatorElements );

    $('#form_controller').html(zfController(form[0]));

    $('#form_view').html(zfView(form, 'view'));

    $('#form_row').html(zfView(form, 'row'));

    $('#form_view_helper').html(zfViewHelper());
});

var zfHead = function zfHead (prop){
    var file =
        'namespace ' + prop.namespace + '\\Form; <br>' +
            '<br>' +
            'use Zend\\Captcha; <br>' +
            'use Zend\\Form\\Element; <br>' +
            'use Zend\\Form\\Form; <br>' +
            '<br>' +
            'class ' + prop.class_name + ' extends Form <br>' +
            '<br>' +
            '{ <br>' +
            t + "public function __construct($name = null) <br>" +
            t + "{ <br>" +
                tt + "parent::__construct('" + prop.namespace.toLowerCase() + "'); <br>" +
                tt + "<br>" +
                tt + "$this->setAttribute('method', 'post'); <br>" +
                tt + "<br>";

    return (file);
};

var zfValidatorHead = function zfValidatorHead (prop){
    var file =
        'namespace ' + prop.namespace + '\\Form; <br>' +
            '<br>' +
            'use Zend\\InputFilter\\Factory as InputFactory; <br>' +
            'use Zend\\InputFilter\\InputFilter; <br>' +
            'use Zend\\InputFilter\\InputFilterAwareInterface; <br>' +
            'use Zend\\InputFilter\\InputFilterInterface; <br>' +
            '<br>' +
            'class ' + prop.class_name + 'Validator implements InputFilterAwareInterface <br>' +
            '<br>' +
            '{ <br>' +
            t + "protected $inputFilter; <br>" +
            t + "<br>" +
            t + "public function setInputFilter(InputFilterInterface $inputFilter) <br>" +
            t + "{ <br>" +
                tt + 'throw new \\Exception("Not used"); <br>' +
            t + "} <br>" +
            t + "<br>" +
            t + "public function getInputFilter() <br>" +
            t + "{ <br>" +
                tt + "if (!$this->inputFilter) <br>" +
                tt + "{ <br>" +
                    ttt + "$inputFilter = new InputFilter(); <br>" +
                    ttt + "$factory = new InputFactory(); <br>" +
                    ttt + "<br>" +
                tt + "<br>";

    return (file);
};

var zfFooter = function zfFooter (){
    var file =
            tt + "<br>" +
        t + "} <br>" +
    '} <br>';

    return (file);
};

var zfValidatorFooter = function zfFooter (){
    var file =
                ttt + "<br>" +
            tt + "} <br>" +
        t + "} <br>" +
    '} <br>';

    return (file);
};

var csrf = function csrf (){
    var csrfForm =
    tt + "$this->add(array( <br>" +
        ttt + "'name' => 'csrf', <br>" +
        ttt + "'type' => 'Zend\\Form\\Element\\Csrf', <br>" +
    tt + "));";
    return (csrfForm);
};

var hidden = function hidden (){
    var hiddenForm =
    tt + "$this->add(array( <br>" +
        ttt + "'name' => 'hidden', <br>" +
        ttt + "'type' => 'Zend\\Form\\Element\\Hidden', <br>" +
    tt + "));";
    return (hiddenForm);
};

/**
 * text field
 * @param lineText
 * @return {String}
 */
var text = function text (lineText){

    var textForm =
        tt + "$this->add(array( <br>" +
            ttt + "'name' => '" + lineText.name + "', <br>" +
            ttt + "'type' => '" + lineText.type + "', <br>" +
            ttt + "'attributes' => array( <br>" +
                formAttr(lineText.data) +
            ttt + "), <br>" +
            ttt + "'options' => array( <br>" +
                formOptions(lineText.data) +
            ttt + "), <br>" +
        tt + ")); <br> <br>";
    return (textForm);
};

/**
 * @param lineText
 * @param val
 * @return {String}
 */
var textValidator = function textValidator (lineText, val){

    var params = '';
    var hasRequired = lineText.data.required ? ttt + "'required' => " + lineText.data.required + ", <br>" : '';

    if(val === 'email'){
        params = formValidatorEmail(lineText.data, 'EmailAddress') +
            formValidatorEmail(lineText.data, 'NotEmpty');
    }

    var textForm =
    tt + "$inputFilter->add($factory->createInput([ <br>" +
        ttt + "'name' => '" + lineText.name + "', <br>" +
        hasRequired +
        ttt + "'filters' => array( <br>" +
            tttt + "array('name' => 'StripTags'), <br>" +
            tttt + "array('name' => 'StringTrim'), <br>" +
        ttt + "), <br>" +
        ttt + "'validators' => array( <br>" +
            formValidatorOther(lineText.data, 'StringLength') +
            params +
            formValidatorNumber(lineText.data) +
            formValidatorToken(lineText.data) +
            formValidatorDate(lineText.data) +
            formValidatorDropdown(lineText.data) +
            formValidatorUpload(lineText.data) +
            formValidatorCreditCard(lineText.data) +
        ttt + "), <br>" +
    tt + "])); <br> <br>";
    return (textForm);
};

/**
 * @param d
 * @return {String}
 */
var formValidatorUpload = function formValidatorOther (d){

    var filesizeMin = '', filefilessizeMin = '', filecountMin = '', filewordcountMin = '',
        filesizeMax = '', filefilessizeMax = '', filecountMax = '', filewordcountMax = '',
        minheight = '', maxheight = '', minwidth = '', maxwidth = '',
        fileextension = '', fileexcludeextension = '', filemimetype = '',
        fileexcludemimetype = '', fileexists = '', fileiscompressed = '',
        fileisimage = '', toReturn = '';

    if(d.filesize){
        if(d.filesize.min && d.filesize.min != ''){
            filesizeMin = tttttt + "'min' => '" + d.filesize.min  + "', <br>";
        }
        if(d.filesize.max && d.filesize.max != ''){
            filesizeMax = tttttt + "'max' => '" + d.filesize.max  + "', <br>";
        }
    }

    if(d.filefilessize){
        if(d.filefilessize.min && d.filefilessize.min != ''){
            filefilessizeMin = tttttt + "'min' => '" + d.filefilessize.min  + "', <br>";
        }
        if(d.filefilessize.max && d.filefilessize.max != ''){
            filefilessizeMax = tttttt + "'max' => '" + d.filefilessize.max  + "', <br>";
        }
    }

    if(d.filecount){
        if(d.filecount.min && d.filecount.min != ''){
            filecountMin = tttttt + "'min' => '" + d.filecount.min  + "', <br>";
        }
        if(d.filefilessize.max && d.filefilessize.max != ''){
            filecountMax = tttttt + "'max' => '" + d.filecount.max  + "', <br>";
        }
    }

    if(d.filewordcount){
        if(d.filewordcount.min && d.filewordcount.min != ''){
            filewordcountMin = tttttt + "'min' => '" + d.filewordcount.min  + "', <br>";
        }
        if(d.filewordcount.max && d.filewordcount.max != ''){
            filewordcountMax = tttttt + "'max' => '" + d.filewordcount.max  + "', <br>";
        }
    }

    if(d.fileimagesize){
        if(d.fileimagesize.minheight && d.fileimagesize.minheight != ''){
            minheight = tttttt + "'minwidth' => '" + d.fileimagesize.minheight  + "', <br>";
        }
        if(d.filewordcount.maxheight && d.fileimagesize.maxheight != ''){
            maxheight = tttttt + "'maxwidth' => '" + d.fileimagesize.maxheight  + "', <br>";
        }
        if(d.filewordcount.minwidth && d.fileimagesize.minwidth != ''){
            minwidth = tttttt + "'minheight' => '" + d.fileimagesize.minwidth  + "', <br>";
        }
        if(d.filewordcount.maxwidth && d.fileimagesize.maxwidth != ''){
            maxwidth = tttttt + "'maxheight' => '" + d.fileimagesize.maxwidth  + "', <br>";
        }
    }

    if(d.fileextension){
        if(d.fileextension && d.fileextension != ''){
            fileextension = tttttt + d.fileextension  + ", <br>";
        }
    }

    if(d.fileexcludeextension){
        if(d.fileexcludeextension && d.fileexcludeextension != ''){
            fileexcludeextension = tttttt + d.fileexcludeextension  + ", <br>";
        }
    }

    if(d.filemimetype){
        if(d.filemimetype && d.filemimetype != ''){
            filemimetype = tttttt + d.filemimetype  + ", <br>";
        }
    }

    if(d.fileexcludemimetype){
        if(d.fileexcludemimetype && d.fileexcludemimetype != ''){
            fileexcludemimetype = tttttt + d.fileexcludemimetype  + ", <br>";
        }
    }

    if(d.fileexists){
        if(d.fileexists && d.fileexists != ''){
            fileexists = tttttt + d.fileexists  + ", <br>";
        }
    }

    if(d.fileiscompressed){
        if(d.fileiscompressed && d.fileiscompressed != ''){
            fileiscompressed = tttttt + d.fileiscompressed  + ", <br>";
        }
    }

    if(d.fileisimage){
        if(d.fileisimage && d.fileisimage != ''){
            fileisimage = tttttt + d.fileisimage  + ", <br>";
        }
    }


    toReturn += genericValidator('Size', 'array', [filesizeMin, filesizeMax], '');
    toReturn += genericValidator('FilesSize', 'array', [filefilessizeMin, filefilessizeMax], '');
    toReturn += genericValidator('Count', 'array', [filecountMin, filecountMax], '');
    toReturn += genericValidator('WordCount', 'array', [filewordcountMin, filewordcountMax], '');
    toReturn += genericValidator('ImageSize', 'multy_array', [minheight, maxheight, minwidth, maxwidth], '');
    toReturn += genericValidator('Extension', 'string', [], fileextension);
    toReturn += genericValidator('ExcludeExtension', 'string', [], fileexcludeextension);
    toReturn += genericValidator('MimeType', 'string', [], filemimetype);
    toReturn += genericValidator('ExcludeMimeType', 'string', [], fileexcludemimetype);
    toReturn += genericValidator('Exists', 'string', [], fileexists);
    toReturn += genericValidator('IsCompressed', 'string', [], fileiscompressed);
    toReturn += genericValidator('IsImage', 'string', [], fileisimage);

    return (toReturn);
};

/**
 * @param l
 * @param v
 * @return {String}
 */
var formValidatorOther = function formValidatorOther (l, v){

    var lMin = '',
        lMax = '',
        lengthForm = '';

    if(l.length){
        if(l.length.min && l.length.min != ''){
            lMin = tttttt + "'min' => '" + l.length.min  + "', <br>";
        }
        if(l.length.max && l.length.max != ''){
            lMax = tttttt + "'max' => '" + l.length.max  + "', <br>";
        }
    }

    if(lMin != '' || lMax != ''){
        lengthForm =
            tttt + "array ( <br>" +
                ttttt + "'name' => '" + v + "', <br>" +
                ttttt + "'options' => array( <br>" +
                    tttttt + "'encoding' => 'UTF-8', <br>" +
                    lMin + lMax +
                ttttt + "), <br>" +
            tttt + "), <br>";
    }
    return (lengthForm);
};

/**
 * @param d
 * @return {String}
 */
var formValidatorCreditCard = function formValidatorCreditCard (d){

    var institutes = '',
        cc = '';

    if(d.institutes){
        if(d.institutes && d.institutes != ''){
            institutes = tttttt + "'type' => \\Zend\\Validator\\CreditCard::" + d.institutes  + ", <br>";
        }
    }

    if(institutes != ''){
        cc =
            tttt + "array ( <br>" +
                ttttt + "'name' => 'CreditCard', <br>" +
                ttttt + "'options' => array( <br>" +
                    institutes +
                ttttt + "), <br>" +
            tttt + "), <br>";
    }
    return (cc);
};

/**
 * @param l
 * @return {String}
 */
var formValidatorDate = function formValidatorOther (l){

    var validation = '';

    if(l.date_validation){
        validation += tttt + "array(" + "<br>";
            validation += ttttt + "'name' => 'Between'" + "<br>";
            validation += ttttt + "'options' => array(" + "<br>";
                if(l.date_validation.min != ''){
                    validation += tttttt + "'min' => '" + l.date_validation.min  + "', <br>";
                }
                if(l.date_validation.max != ''){
                    validation += tttttt + "'max' => '" + l.date_validation.min  + "', <br>";
                }
            validation += ttttt + ")," + "<br>";
        validation += tttt + ")," + "<br>";
    }
    return (validation);
};
/**
 *
 * @param l
 * @param v
 * @return {String}
 */
var formValidatorEmail = function formValidatorEmail (l, v){

    var lMessages = '';
    var lengthForm = '';

    if(l && v === 'EmailAddress'){
        lMessages = tttttt + "'messages' => array( <br>";
            lMessages += ttttttt + "'emailAddressInvalidFormat' => '" + l.messages.emailAddressInvalidFormat  + "', <br>";
        lMessages += tttttt + ") <br>";
    }
    if(l && v === 'NotEmpty'){
        lMessages = tttttt + "'messages' => array( <br>";
            lMessages += ttttttt + "'isEmpty' => '" + l.messages.isEmpty  + "', <br>";
        lMessages += tttttt + ") <br>";
    }

    if(lMessages != ''){
        lengthForm =
            tttt + "array ( <br>" +
                ttttt + "'name' => '" + v + "', <br>" +
                ttttt + "'options' => array( <br>" +
                    lMessages +
                ttttt + "), <br>" +
            tttt + "), <br>";
    }
    return (lengthForm);
};

/**
 * @param p
 * @return {String}
 */
var formValidatorToken = function formValidatorToken (p){
    var tokenForm = '';

    if(p && p.token){
        tokenForm =
            tttt + "array ( <br>" +
                ttttt + "'name' => 'identical', <br>" +
                ttttt + "'options' => array( <br>" +
                    tttttt + "'token' => '" + p.token  + "', <br>" +
                ttttt + "), <br>" +
            tttt + "), <br>" +
            "<br>";
    }
    return (tokenForm);
};

var formValidatorNumber = function formValidatorNumber (digits){
    var digitsName = '';
    if(digits.validators && digits.validators.html5 == 0 ){
        if(digits.validators.name){
            digitsName += tttt + "array ( <br>" +
                ttttt + "'name' => '" + digits.validators.name + "', <br>" +
            tttt + "), <br>" +
            " <br>";
        }
    }

    return (digitsName);
};

var formValidatorDropdown = function formValidatorDropdown (select){
    var tokenForm = '', key = [];

    if(select && select.dropdownValues){

        for(var i=0; i<select.dropdownValues.length; i++){
            key.push(i);
        }

        tokenForm =
            tttt + "array ( <br>" +
                ttttt + "'name' => 'InArray', <br>" +
                ttttt + "'options' => array( <br>" +
                    tttttt + "'haystack' => array( <br>" +
                        ttttttt + "'haystack' => array(" + key  + ") <br>" +
                    tttttt + "), <br>" +
                    tttttt + "'messages' => array(, <br>" +
                        ttttttt + "'notInArray' => '" + select.notinarray + "' <br>" +
                    tttttt + "), <br>" +
                ttttt + "), <br>" +
                tttt + "), <br>" +
                "<br>";
    }
    return (tokenForm);
};

/**
 * form attr validator
 * @param attr
 * @return {String}
 */

var formAttr = function formAttr (attr){
    var attrs = '';

    if(attr.class != ''){
        attrs += tttt + "'class' => '" + attr.class  + "', <br>";
    }
    if(attr.id != ''){
        attrs += tttt + "'id' => '" + attr.id + "', <br>";
    }
    if(attr.placeholder && attr.placeholder != ''){
        attrs += tttt + "'placeholder' => '" + attr.placeholder + "', <br>";
    }
    if(attr.required != 'false'){
        attrs += tttt + "'required' => 'required', <br>";
    }
    if(attr.default && attr.default != 'false'){
        attrs += tttt + "'value' => '" + attr.default  + "', <br>";
    }
    if(attr.date){
        if(attr.date.min != ''){
            attrs += tttt + "'min' => '" + attr.date.min  + "', <br>";
        } else {
            attrs += tttt + "'min' => '1970-01-01', <br>";
        }
        if(attr.date.max != ''){
            attrs += tttt + "'max' => '" + attr.date.max  + "', <br>";
        } else {
            attrs += tttt + "'max' => " + date() + ", <br>";
        }
        attrs += tttt + "'step' => '1', <br>";
    }

    if(attr.length){
        if(attr.length.min_str){
            attrs += tttt + "'min' => '" + attr.length.min_str  + "', <br>";
        }
        if(attr.length.max_str ){
            attrs += tttt + "'max' => '" + attr.length.max_str  + "', <br>";
        }
        if(attr.length.min_str || attr.length.max_str){
            attrs += tttt + "'step' => '1', <br>";
        }
    }

    if(attr.validators){
        if(attr.validators.html5 == 1){
            attrs += tttt + "'type' => 'number', <br>";
        }
    }

    return (attrs);
};

var date = function date (){
    var d = new Date();
    var Ymd = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDay();

    return Ymd;
};

/**
 * @param opt
 * @return {String}
 */
var formOptions = function formOptions (opt){
    var options = '';

    if(opt.label != ''){
        options += tttt + "'label' => '" + opt.label  + "', <br>";
    }

    if(opt.label_id || opt.label_class){
        options += tttt + "'label_attributes' => array(" + "<br>";
            if(opt.label_class){
                options += ttttt + "'class' => '" + opt.label_class  + "', <br>";
            }
            if(opt.label_id){
                options += ttttt + "'id' => '" + opt.label_id  + "', <br>";
            }
        options += tttt + ")," + "<br>";
    }

    if(opt.innerData){
        options += tttt + "'value_options' => array(" + "<br>";
            for(var i = 0; i < opt.innerData.length; i++){
                if(opt.innerData[i].label){
                    options += ttttt + "'" + i + "' => '" + opt.innerData[i].label  + "', <br>";
                }
            }
        options += tttt + ")," + "<br>";
    }

    if(opt.dropdownValues){
        options += tttt + "'value_options' => array(" + "<br>";
            for(var i = 0; i < opt.dropdownValues.length; i++){
                if(opt.dropdownValues[i].dropdown_label){
                    options += ttttt + "'" + i + "' => '" + opt.dropdownValues[i].dropdown_label  + "', <br>";
                }
            }
        options += tttt + ")," + "<br>";
    }

    return (options);
};

/**
 * @param prop
 * @return {String}
 */
function zfController(prop){
    var props = prop.form_properties[0];
    var file =
        "namespace " + props.namespace + "\\Controller; <br>" +
        "<br>" +
        "use Zend\\Mvc\\Controller\\AbstractActionController; <br>" +
        "use Zend\\View\\Model\\ViewModel; <br>" +
        "use " + props.namespace + "\\Form\\" + props.class_name + "; <br>" +
        "use " + props.namespace + "\\Form\\" + props.class_name + "Validator; <br>" +
        "use " + props.namespace + "\\Model\\" + props.model_name + "; <br>" +
        "<br>" +
        "public function indexAction() <br>" +
        "{ <br>" +
            t + "$form = new " + props.class_name + "(); <br>" +
            t + "$request = $this->getRequest(); <br>" +
            '<br>' +
            t + "if($request->isPost()) <br>" +
            t + "{ <br>" +
                tt + "$user = new " + props.model_name + "(); <br>" +
                tt + "<br>" +
                tt + "$formValidator = new " + props.class_name + "Validator(); <br>" +
                tt + "{ <br>" +
                    ttt + "$form->setInputFilter($formValidator->getInputFilter()); <br>" +
                    ttt + "$form->setData($request->getPost()); <br>" +
                tt + "} <br>" +
                tt + " <br>" +
                tt + "if($form->isValid()){ <br>" +
                tt + "{ <br>" +
                    ttt + "$user->exchangeArray($form->getData()); <br>" +
                tt + "} <br>" +
            t + "} <br>" +
            t + "<br>" +
            t + "return ['form' => $form]; <br>" +
        "} <br>" +
        '<br>';

    return (file);
}

function zfView(data, type){
    var fileView = '';

    for (var i = 0; i < data.length; i++){
        if(data[i].line_checkbox){
            var checkbox = data[i].line_checkbox[0].name;
            fileView += checkbox != '' ? toView(checkbox, type) : toView('checkbox field with no name', type);
        } else if (data[i].line_credit_card){
            var credit_card = data[i].line_credit_card[0].name;
            fileView += credit_card != '' ? toView(credit_card, type) : toView('credit_card field with no name', type);
        } else if (data[i].line_date){
            var date = data[i].line_date[0].name;
            fileView += line_date != '' ? toView(date, type) : toView('date field with no name', type);
        } else if (data[i].line_dropdown){
            var dropdown = data[i].line_dropdown[0].name;
            fileView += dropdown != '' ? toView(dropdown, type) : toView('dropdown field with no name', type);
        } else if (data[i].line_email){
            var email = data[i].line_email[0].name;
            fileView += email != '' ? toView(email, type) : toView('email field with no name', type);
        } else if (data[i].line_hidden){
            var hidden = data[i].line_hidden[0].name;
            fileView += hidden != '' ? toView(hidden, type) : toView('hidden field with no name', type);
        } else if (data[i].line_number){
            var number = data[i].line_number[0].name;
            fileView += number != '' ? toView(number, type) : toView('number field with no name', type);
        } else if (data[i].line_paragraph){
            var paragraph = data[i].line_paragraph[0].name;
            fileView += paragraph != '' ? toView(paragraph, type) : toView('paragraph field with no name', type);
        } else if (data[i].line_password){
            var password = data[i].line_password[0].name;
            fileView += password != '' ? toView(password, type) : toView('password field with no name', type);
        } else if (data[i].line_password_verify){
            var password_verify = data[i].line_password_verify[0].name;
            fileView += password_verify != '' ? toView(password_verify, type) : toView('password_verify field with no name', type);
        } else if (data[i].line_radio){
            var radio = data[i].line_radio[0].name;
            fileView += radio != '' ? toView(radio, type) : toView('radio field with no name', type);
        } else if (data[i].line_text){
            var text = data[i].line_text[0].name;
            fileView += text != '' ? toView(text, type) : toView('text field with no name', type);
        } else if (data[i].line_upload){
            var upload = data[i].line_upload[0].name;
            fileView += upload != '' ? toView(upload, type) : toView('upload field with no name', type);
        } else if (data[i].line_url){
            var url = data[i].line_url[0].name;
            fileView += url != '' ? toView(url, type) : toView('url field with no name', type);
        }
    }

    return fileView;
}

var toView = function toView (name, type)
{
    var form = '';
    if(type == 'view'){
        form =
            "echo $this->formLabel($form->get('" + name + "'));" + "<br>" +
                "echo $this->formInput($form->get('" + name + "'));" + "<br>" +
                "echo $this->formElementErrors($form->get('" + name + "'));" + "<br>";
    } else if (type == 'row') {
        form = "echo $this->formElementErrors($form->get('" + name + "'));";
    }
    return form;
}

var genericValidator = function genericValidator (nameV, typeV, arrayV, stringV){
    var options = '';

    if(typeV == 'string'){
        options = stringV;
    }
    if(typeV == 'array'){
        options = arrayV[0] +  arrayV[1];
    }
    if(typeV == 'multy_array'){
        options = arrayV[0] + arrayV[1] + arrayV[2] + arrayV[3];
    }

    var validator =
        tttt + "array ( <br>" +
            ttttt + "'name' => '" + nameV + "', <br>" +
            ttttt + "'options' => array( <br>" +
                options +
            ttttt + "), <br>" +
        tttt + "), <br>";

    return options != '' ? validator : '';
}

function zfViewHelper(){
    var file =
        'namespace Formgen\\View\\Helper; <br>' +
        '<br>' +
        'use Zend\\View\\Helper\\AbstractHelper; <br>' +
        '<br>' +
        'class RenderForm extends AbstractHelper <br>' +
        '<br>' +
        '{ <br>' +
        '&nbsp; public function __invoke($form) <br>' +
        '&nbsp; { <br>' +
        "&nbsp; &nbsp; $form->prepare(); <br>" +
        '&nbsp; &nbsp; <br>' +
        "&nbsp; &nbsp; return $output; <br>" +
        '&nbsp; } <br>' +
        '} <br>';

    return (file);
}

