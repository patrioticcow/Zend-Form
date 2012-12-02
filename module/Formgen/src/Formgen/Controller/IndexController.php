<?php

namespace Formgen\Controller;

use Zend\Mvc\Controller\AbstractActionController, Zend\View\Model\ViewModel;
use Zend\View\Renderer\PhpRenderer;
use Formgen\Form\AddUser, Formgen\Form\AddUserValidator;
use Formgen\Model\User;

class IndexController extends AbstractActionController
{
	public function indexAction() {
		return array ();
	}

    public function viewAction()
    {
        $headScript = new PhpRenderer ();
        $headScript->headScript ()->appendFile ( '/js/form/parse.form.js' );

        $formId = $this->params('form');

		return array('form_id' => $formId);
	}

    public function testAction()
    {
        $form = new AddUser();
        $request = $this->getRequest();

        if($request->isPost())
        {
            $user = new User();
            $formValidator = new AddUserValidator();

            $form->setInputFilter($formValidator->getInputFilter());
            $form->setData($request->getPost());

            if($form->isValid()){
                $user->exchangeArray($form->getData());
            }
            echo '<pre>'; var_dump($form->getData()); echo '</pre>';
        }

        return array('form' => $form);
	}

	public function createAction()
    {
		$headScript = new PhpRenderer ();
		$headScript->headScript ()->appendFile ( '/js/form/create.form.js' );
		$headScript->headScript ()->appendFile ( '/js/form/line.text.js' );
		$headScript->headScript ()->appendFile ( '/js/form/add.form.js' );
		$headScript->headScript ()->appendFile ( '/js/form/json.form.js' );
		$headScript->headScript ()->appendFile ( '/js/form/edit.form.js' );

		$form = '';

		return array('form' => $form);
	}

	public function inputAction()
	{
		$result = $this->getAjax();
		return $result;
	}

	public function passwordAction()
	{
		$result = $this->getAjax();
		return $result;
	}

	public function passwordverifyAction()
	{
		$result = $this->getAjax();
		return $result;
	}

	public function numberAction()
	{
		$result = $this->getAjax();
		return $result;
	}

	public function phoneAction()
	{
		$result = $this->getAjax();
		return $result;
	}

	public function paragraphAction()
	{
	    $result = $this->getAjax();
	    return $result;
	}

    public function checkboxAction()
	{
	    $result = $this->getAjax();
	    return $result;
	}

    public function radioAction()
	{
	    $result = $this->getAjax();
	    return $result;
	}

    public function dropdownAction()
	{
	    $result = $this->getAjax();
	    return $result;
	}

    public function emailAction()
	{
	    $result = $this->getAjax();
	    return $result;
	}

    public function dateAction()
	{
	    $result = $this->getAjax();
	    return $result;
	}

    public function uploadAction()
	{
	    $result = $this->getAjax();
	    return $result;
	}

    public function creditcardAction()
	{
	    $result = $this->getAjax();
	    return $result;
	}

    public function urlAction()
	{
	    $result = $this->getAjax();
	    return $result;
	}

    public function hiddenAction()
	{
	    $result = $this->getAjax();
	    return $result;
	}

	public function getAjax() {
		$request = $this->getRequest ();
	    $results = $request->getQuery ();

	    $result = new ViewModel (array(
	        'result' => $results,
	    ));

	    $result->setTerminal ( true );

		return $result;
	}
}