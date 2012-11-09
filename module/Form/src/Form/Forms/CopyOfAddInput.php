<?php

namespace Form\Forms;

use Zend\Form\Form;

class AddInput extends Form
{
    public function __construct($name = null)
    {

        parent::__construct('album');

        $this->setAttribute('method', 'post');

        $this->add(array(
            'name'       => 'label',
            'type'       => 'Zend\Form\Element\Text',
            'attributes' => array('maxlength' => '255', 'size' => '100'),
            'options'    => array('label' => 'Label '),
        ));

        $this->add(array(
            'name' => 'email',
            'type' => 'Zend\Form\Element\Email',
            'attributes' => array('maxlength' => '128', 'size' => '32', 'type' => 'email'),
            'options' => array('label' => 'Email', 'appendText' => '@'),
        ));

        $this->add(array(
            'name' => 'password',
            'type' => 'Zend\Form\Element\Password',
            'attributes' => array('maxlength' => '128', 'size' => '32'),
            'options' => array('label' => 'Password'),
        ));

        $this->add(array(
            'name' => 'password_verify',
            'type' => 'Zend\Form\Element\Password',
            'attributes' => array('maxlength' => '128', 'size' => '32'),
            'options' => array('label' => 'Password Verify'),
        ));


        $this->add(array(
            'name' => 'submit',
            'type' => 'Zend\Form\Element\Submit',
            'attributes' => array('value' => 'Add Input', 'class'=>'btn btn-primary', 'id'=>'add_input'),
            'options' => array(),
        ));
    }

}