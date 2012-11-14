$(document).ready(function() {
    var formId = $('#form_id').html();

    t    = '&nbsp; ';
    tt   = '&nbsp; &nbsp; ';
    ttt  = '&nbsp; &nbsp; &nbsp; ';
    tttt = '&nbsp; &nbsp; &nbsp; &nbsp; ';

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
            var zfText = text(lineText);

            formElements.push(zfText);
            //formValidatorElements.push(zfText);
        }

        console.log(form[i]);
    }

    formElements.push(csrf());
    formElements.push(zfFooter());

    formValidatorElements.push(zfValidatorFooter());

    $('#form_file').html( formElements );
    $('#form_file_validator').html( formValidatorElements );

    $('#form_view').html(zfView());
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
}

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
                tt + "<br>";

    return (file);
}

var zfFooter = function zfFooter (){
    var file =
            tt + "<br>" +
        t + "} <br>" +
    '} <br>';

    return (file);
}

var zfValidatorFooter = function zfFooter (){
    var file =
                ttt + "<br>" +
            tt + "} <br>" +
        t + "} <br>" +
    '} <br>';

    return (file);
}

var csrf = function csrf (){
    var csrfForm =
    tt + "$this->add(array( <br>" +
        ttt + "'name' => 'csrf', <br>" +
        ttt + "'type' => 'Zend\\Form\\Element\\Csrf', <br>" +
    tt + "));";
    return (csrfForm);
}

var hidden = function hidden (){
    var hiddenForm =
    tt + "$this->add(array( <br>" +
        ttt + "'name' => 'hidden', <br>" +
        ttt + "'type' => 'Zend\\Form\\Element\\Hidden', <br>" +
    tt + "));";
    return (hiddenForm);
}

var text = function text (lineText){
    var textForm =
    tt + "$this->add(array( <br>" +
        ttt + "'name' => '" + lineText.name + "', <br>" +
        ttt + "'type' => '" + lineText.type + "', <br>" +
        ttt + "'attributes' => array( <br>" +
            formAttr(lineText.data) +
        ttt + "'), <br>" +
        ttt + "'options' => array(, <br>" +
            formOptions(lineText.data) +
        ttt + "'), <br>" +
    tt + ")); <br> <br>";
    return (textForm);
}

/**
 * form length validator (min dn max)
 * @param l
 * @return {String}
 */
var formLength = function formLength (l){
    if(l.min != ''){
        var lMin = tttt + "'min' => '" + l.min  + "', <br>";
    }
    if(l.max != ''){
        var lMax = tttt + "'max' => '" + l.max  + "', <br>";
    }
    var lengthForm = lMin + lMax;

    return (lengthForm);
}

/**
 * form attr validator
 * @param attr
 * @return {String}
 */
var formAttr = function formAttr (attr){
    var attrClass = '',
        attrId = '',
        attrPlaceholder = '',
        attrRequired = '';

    if(attr.class != ''){
        attrClass = tttt + "'class' => '" + attr.class  + "', <br>";
    }
    if(attr.id != ''){
        attrId = tttt + "'id' => '" + attr.id + "', <br>";
    }
    if(attr.placeholder != ''){
        attrPlaceholder = tttt + "'placeholder' => '" + attr.placeholder + "', <br>";
    }
    if(attr.required != 'false'){
        attrRequired = tttt + "'required' => 'required', <br>";
    }
    var attrForm = attrClass + attrId + attrPlaceholder + attrRequired;

    return (attrForm);
}

/**
 * @param opt
 * @return {String}
 */
var formOptions = function formOptions (opt){
    var optLabel = '';

    if(opt.label != ''){
        optLabel = tttt + "'class' => '" + opt.label  + "', <br>";
    }
    var optForm = optLabel;

    return (optForm);
}

function zfView(){
    var file =
        "echo $this->formLabel($form->get('email')) . PHP_EOL; <br>" +
        '<br>' +
        "echo $this->formInput($form->get('email')) . PHP_EOL; <br>" +
        '<br>' +
        "echo $this->formElementErrors($form->get('email')) . PHP_EOL; <br>" +
        '<br>' +
        "echo $this->formRow($form->get('email')) . PHP_EOL; <br>" +

        '<br>';

    return (file);
};
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
};

