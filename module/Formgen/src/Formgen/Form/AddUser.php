<?php

namespace Formgen\Form;

use Zend\Captcha;
use Zend\Form\Element;
use Zend\Form\Form;

class AddUser extends Form
{
    public function __construct($name = null)
    {
        parent::__construct('formgen');

        $this->setAttribute('method', 'post');

        $this->add(array(
            'name'       => 'text',
            'type'       => 'Zend\Form\Element\Text',
            'attributes' => array('maxlength' => '100', 'size' => '100'),
            'options'    => array('label' => 'Single Line Text'),
        ));

        $this->add(array(
            'name' => 'submit',
            'type' => 'Zend\Form\Element\Submit',
            'attributes' => array('value' => 'Create', 'class'=>'btn btn-primary'),
            'options' => array(),
        ));
    }

}