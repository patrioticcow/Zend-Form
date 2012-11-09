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
            'attributes' => array('maxlength' => '255'),
            'options'    => array('label' => 'Replace Label Text '),
        ));
        
        $this->add(array(
            'name'       => 'placeholder',
            'type'       => 'Zend\Form\Element\Text',
            'attributes' => array('maxlength' => '255'),
            'options'    => array('label' => 'Placeholder Text '),
        ));
        
        $this->add(array(   
        	'name' => 'required',
		    'type' => 'Zend\Form\Element\Select',
		    'attributes' =>  array(
		        'id' => 'required',
		        'options' => array(
		        	'no'  => 'No',
		            'yes' => 'Yes',
		        ),
		    ),
		    'options' => array('label' => 'Required'),
		));

        $this->add(array(
            'name' => 'submit',
            'type' => 'Zend\Form\Element\Submit',
            'attributes' => array('value' => 'Add Input', 'class'=>'btn btn-primary', 'id'=>'add_input'),
            'options' => array(),
        ));
    }

}