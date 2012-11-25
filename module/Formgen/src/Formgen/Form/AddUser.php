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
            'name' => 'csrf',
            'type' => 'Zend\Form\Element\Csrf',
        ));

        $this->add(array(
            'name' => 'hidden',
            'type' => 'Zend\Form\Element\Hidden',
        ));

        $this->add(array(
            'name'       => 'text',
            'type'       => 'Zend\Form\Element\Text',
            'attributes' => array('maxlength' => '100', 'size' => '100'),
            'options'    => array('label' => 'Single Line Text'),
        ));

        $this->add(array(
             'name' => 'number',
             'type' => 'Zend\Form\Element\Number',
             'attributes' => array(
                 'class' => '3',
                 'id' => '4',
                 'placeholder' => '1234567890',
                 'step' => '10',
                 'min' => '1',
                 'max' => '100',
             ),
             'options' => array(
                 'label' => 'Number Label',
             ),
        ));

        $this->add(array(
             'name' => 'testtt',
             'type' => 'Zend\Form\Element\Textarea',
             'attributes' => array(
                 'class' => '1',
                 'id' => '2',
                 'placeholder' => 'Type something...',
             ),
             'options' => array(
                 'label' => 'Paragraph',
             ),
        ));

        $this->add(array(
            'name' => 'fileuploadd',
            'attributes' => array(
                'type'  => 'file',
            ),
            'options' => array(
                'label' => 'File Upload',
            ),
        ));

        $this->add(array(
            'name' => 'submit',
            'type' => 'Zend\Form\Element\Submit',
            'attributes' => array('value' => 'Create', 'class'=>'btn btn-primary'),
            'options' => array(),
        ));
    }

}