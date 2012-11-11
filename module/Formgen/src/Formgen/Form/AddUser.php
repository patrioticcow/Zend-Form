<?php

namespace Formgen\Form;

use Zend\Captcha;
use Zend\Form\Element;
use Zend\Form\Form;

class AddUser extends Form
{
    public function __construct($name = null)
    {

        parent::__construct('album');

        $this->setAttribute('method', 'post');

        $this->add(array(
            'name' => 'csrf',
            'type' => 'Zend\Form\Element\Csrf',
        ));

        $this->add(array(
            'name' => 'user_id',
            'type' => 'Zend\Form\Element\Hidden',
        ));

        $this->add(array(
            'name'       => 'username',
            'type'       => 'Zend\Form\Element\Text',
            'attributes' => array('maxlength' => '100', 'size' => '100'),
            'options'    => array('label' => 'Username'),
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
            'attributes' => array('value' => 'Save', 'class'=>'btn btn-primary'),
            'options' => array(),
        ));
    }

}