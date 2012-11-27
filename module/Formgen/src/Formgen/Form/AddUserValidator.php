<?php

namespace Formgen\Form;

use Zend\InputFilter\Factory as InputFactory;
use Zend\InputFilter\InputFilter;
use Zend\InputFilter\InputFilterAwareInterface;
use Zend\InputFilter\InputFilterInterface;

class AddUserValidator implements InputFilterAwareInterface
{
    protected $inputFilter;

    public function setInputFilter(InputFilterInterface $inputFilter)
    {
        throw new \Exception("Not used");
    }

    public function getInputFilter()
    {
        if (!$this->inputFilter) {
            $inputFilter = new InputFilter();
            $factory = new InputFactory();

            $inputFilter->add($factory->createInput(array(
                'name' => 'hidden',
                'required' => false,
            )));

            $inputFilter->add($factory->createInput(array(
                'name' => 'text',
                'required' => true,
                'filters' => array(
                    array('name' => 'StripTags'),
                    array('name' => 'StringTrim'),
                ),
                'validators' => array(
                    array(
                        'name' => 'StringLength',
                        'options' => array(
                            'encoding' => 'UTF-8',
                            'min' => '3',
                            'max' => '10',

                        ),
                    ),
                ),
            )));

            $inputFilter->add($factory->createInput(array(
                'name' => 'testtt',
                'required' => true,
                'filters' => array(
                    array('name' => 'StripTags'),
                    array('name' => 'StringTrim'),
                ),
                'validators' => array(
                    array (
                        'name' => 'StringLength',
                        'options' => array(
                            'encoding' => 'UTF-8',
                            'min' => '3',
                            'max' => '10',
                        ),
                    ),

                ),
            )));

            $inputFilter->add($factory->createInput(array(
                'name' => 'number',
                'required' => 'true',
                'filters' => array(
                    array('name' => 'StripTags'),
                    array('name' => 'StringTrim'),
                ),
                'validators' => array(
                    array (
                        'name' => 'StringLength',
                        'options' => array(
                            'encoding' => 'UTF-8',
                            'min' => '1',
                            'max' => '2',
                        ),
                        array (
                            'name' => 'float',
                        ),
                    ),

                ),
            )));

            $inputFilter->add(
                $factory->createInput(array(
                    'name'     => 'fileuploadd',
                    'required' => true,
                    'filters'    => array(
                        array('name' => 'filerename', 'options' => array(
                            'target' => 'C:/xampp/htdocs/Zend-Form/public/file',
                        )),
                        //array('name' => 'filelowercase'),
                    ),
                    'validators' => array(
                        array('name' => 'fileupload'),
                        array('name' => 'filesize', 'options' => array(
                            'min' => 4000, 'max' => 5000,
                        )),
                        array('name' => 'fileexists', 'options' => array(
                            'C:\xampp\htdocs\Zend-Form\public\file'
                        )),
                        array('name' => 'filecount', 'options' => array(
                            'min' => 1, 'max' => 4,
                        )),
                        array('name' => 'fileexcludeextension', 'options' => array(
                            'php', 'jpg'
                        )),
                    ),
                ))
            );

            $this->inputFilter = $inputFilter;
        }

        return $this->inputFilter;
    }
}