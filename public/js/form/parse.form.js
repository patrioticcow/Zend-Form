$(document).ready(function() {
    var formId = $('#form_id').html();

    t    = '&nbsp; ';
    tt   = '&nbsp; &nbsp; ';
    ttt  = '&nbsp; &nbsp; &nbsp; ';
    tttt = '&nbsp; &nbsp; &nbsp; &nbsp; ';

    var form = JSON.parse(
        localStorage.getItem(formId)
    );

    for (var i = 0; i < form.length; i++){
        console.log(form[i]);

        // form properties
        if(form[i].form_properties){
            var prop = form[i].form_properties[0];
        }

        // form line text
        if(form[i].line_text){
            var lineText = form[i].line_text[0];
        }
        //TO DO: pass all individual form element options to each generated code
    }

   $('#form_file').html(
       zendForm(prop.namespace, prop.class_name)
   );

   $('#form_file_validator').html(zendFormValidator());
   $('#form_view').html(zendFormView());
   $('#form_view_helper').html(zendFormViewHelper());

});

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

var text = function text (){
    var textForm =
    tt + "$this->add(array( <br>" +
        ttt + "'name' => 'hidden', <br>" +
        ttt + "'type' => 'Zend\\Form\\Element\\Hidden', <br>" +
        ttt + "'attributes' => array('maxlength' => '100', 'size' => '100'), <br>" +
        ttt + "'options' => array('label' => 'Single Line Text'), <br>" +
    tt + "));";
    return (textForm);
}

/**

*/

function zendForm(namespace, className){
    var file =
        'namespace ' + namespace + '\\Form; <br>' +
        '<br>' +
        'use Zend\\Captcha; <br>' +
        'use Zend\\Form\\Element; <br>' +
        'use Zend\\Form\\Form; <br>' +
        '<br>' +
        'class ' + className + ' extends Form <br>' +
        '<br>' +
        '{ <br>' +
            t + "public function __construct($name = null) <br>" +
            t + "{ <br>" +
                tt + "parent::__construct('" + namespace.toLowerCase() + "'); <br>" +
                tt + "<br>" +
                tt + "$this->setAttribute('method', 'post'); <br>" +
                tt + "<br>" +
                csrf() + "<br>" +
                tt + "<br>" +
            t + "} <br>" +
        '} <br>';

    return (file);
};

function zendFormValidator(){
    var file =
        'namespace Formgen\\Form; <br>' +
        '<br>' +
        'use Zend\\Captcha; <br>' +
        'use Zend\\Form\\Element; <br>' +
        'use Zend\\Form\\Form; <br>' +
        '<br>' +
        'class AddUser extends Form <br>' +
        '<br>' +
        '{ <br>' +
        '&nbsp; public function __construct($name = null) <br>' +
        '&nbsp; { <br>' +
        "&nbsp; &nbsp; parent::__construct('formgen'); <br>" +
        '&nbsp; &nbsp; <br>' +
        "&nbsp; &nbsp; $this->setAttribute('method', 'post'); <br>" +
        "&nbsp; &nbsp; <br>" +
        '&nbsp; } <br>' +
        '} <br>';

    return (file);
};

function zendFormView(){
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
function zendFormViewHelper(){
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

