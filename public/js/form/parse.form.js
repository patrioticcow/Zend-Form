/**
 * copyright Cristi Citea
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

$(document).ready(function() {

    $('#myTab a').click(function (e) {
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

        console.log(form[i]);
    }

    formElements.push(csrf());
    formElements.push(zfFooter());

    formValidatorElements.push(zfValidatorFooter());

    $('#form_file').html( formElements );
    $('#form_file_validator').html( formValidatorElements );

    $('#form_controller').html(zfController(form[0]));
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
 *
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
        ttt + "), <br>" +
    tt + "])); <br> <br>";
    return (textForm);
};

/**
 *
 * @param l
 * @param v
 * @return {String}
 */
var formValidatorOther = function formValidatorOther (l, v){

    var lMin = '',
        lMax = '',
        lengthForm = '';

    if(l.length && l.length.min != ''){
        lMin = tttttt + "'min' => '" + l.length.min  + "', <br>";
    }
    if(l.length && l.length.max != ''){
        lMax = tttttt + "'max' => '" + l.length.max  + "', <br>";
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
 *
 * @param l
 * @param v
 * @return {String}
 */
var formValidatorDate = function formValidatorOther (l, v){

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
    if(digits.validators && digits.validators.name){
        digitsName = tttt + "array ( <br>" +
            ttttt + "'name' => '" + digits.validators.name + "', <br>" +
        tttt + "), <br>" +
        " <br>";
    }

    var digitsForm = digitsName;
    return (digitsForm);
};

/**
 * form attr validator
 * @param attr
 * @return {String}
 */

/*
 'attributes' => array(
 'class' => '123',
 'id' => '234',
 'required' => 'required',
 'value' => '1'

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
    if(attr.default != 'false'){
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
            attrs += tttt + "'max' => date('Y-m-d'), <br>";
        }
        attrs += tttt + "'step' => '1', <br>";
    }

    return (attrs);
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
/*
    if($request->isPost())
    {
        if($form->isValid()){
            $user->exchangeArray($form->getData());
        }
    }

    return ['form' => $form];

*/
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

