<?php
return array(
    'controllers' => array(
        'invokables' => array(
            'Formgen\Controller\Index' => 'Formgen\Controller\IndexController',
        ),
    ),
    'router' => array(
        'routes' => array(
            'formgen' => array(
                'type'    => 'Literal',
                'options' => array(
                    'route'    => '/formgen',
                    'defaults' => array(
                        '__NAMESPACE__' => 'Formgen\Controller',
                        'controller'    => 'Index',
                        'action'        => 'index',
                    ),
                ),
                'may_terminate' => true,
                'child_routes' => array(
                	'create' => array(
                		'type' => 'Literal',
                		'options' => array(
                			'route' => '/create',
                			'defaults' => array(
                				'controller' => 'Index',
                				'action'     => 'create',
                			),
                		),
                	),
                	'view' => array(
                		'type' => 'segment',
                		'options' => array(
                			'route' => '/view[/:form]',
                            'constraints' => array(
                                'form' => '[a-zA-Z0-9_-]+'
                            ),
                			'defaults' => array(
                				'controller' => 'Index',
                				'action'     => 'view',
                			),
                		),
                	),
                    'input' => array(
                		'type' => 'Literal',
                		'options' => array(
                			'route' => '/input',
                			'defaults' => array(
                				'controller' => 'Index',
                				'action'     => 'input',
                			),
                		),
                	),
                	'paragraph' => array(
                		'type' => 'Literal',
                		'options' => array(
                			'route' => '/paragraph',
                			'defaults' => array(
                				'controller' => 'Index',
                				'action'     => 'paragraph',
                			),
                		),
                	),
                    'number' => array(
                		'type' => 'Literal',
                		'options' => array(
                			'route' => '/number',
                			'defaults' => array(
                				'controller' => 'Index',
                				'action'     => 'number',
                			),
                		),
                	),
                    'phone' => array(
                		'type' => 'Literal',
                		'options' => array(
                			'route' => '/phone',
                			'defaults' => array(
                				'controller' => 'Index',
                				'action'     => 'phone',
                			),
                		),
                	),
                    'checkbox' => array(
                		'type' => 'Literal',
                		'options' => array(
                			'route' => '/checkbox',
                			'defaults' => array(
                				'controller' => 'Index',
                				'action'     => 'checkbox',
                			),
                		),
                	),
                    'radio' => array(
                		'type' => 'Literal',
                		'options' => array(
                			'route' => '/radio',
                			'defaults' => array(
                				'controller' => 'Index',
                				'action'     => 'radio',
                			),
                		),
                	),
                    'dropdown' => array(
                		'type' => 'Literal',
                		'options' => array(
                			'route' => '/dropdown',
                			'defaults' => array(
                				'controller' => 'Index',
                				'action'     => 'dropdown',
                			),
                		),
                	),
                    'password' => array(
                        'type' => 'Literal',
                        'options' => array(
                            'route' => '/password',
                            'defaults' => array(
                                'controller' => 'Index',
                                'action'     => 'password',
                            ),
                        ),
                    ),
                    'passwordverify' => array(
                        'type' => 'Literal',
                        'options' => array(
                            'route' => '/passwordverify',
                            'defaults' => array(
                                'controller' => 'Index',
                                'action'     => 'passwordverify',
                            ),
                        ),
                    ),
                    'email' => array(
                        'type' => 'Literal',
                        'options' => array(
                            'route' => '/email',
                            'defaults' => array(
                                'controller' => 'Index',
                                'action'     => 'email',
                            ),
                        ),
                    ),
                    'date' => array(
                        'type' => 'Literal',
                        'options' => array(
                            'route' => '/date',
                            'defaults' => array(
                                'controller' => 'Index',
                                'action'     => 'date',
                            ),
                        ),
                    ),
                    'upload' => array(
                        'type' => 'Literal',
                        'options' => array(
                            'route' => '/upload',
                            'defaults' => array(
                                'controller' => 'Index',
                                'action'     => 'upload',
                            ),
                        ),
                    ),
                    'creditcard' => array(
                        'type' => 'Literal',
                        'options' => array(
                            'route' => '/creditcard',
                            'defaults' => array(
                                'controller' => 'Index',
                                'action'     => 'creditcard',
                            ),
                        ),
                    ),
                    'url' => array(
                        'type' => 'Literal',
                        'options' => array(
                            'route' => '/url',
                            'defaults' => array(
                                'controller' => 'Index',
                                'action'     => 'url',
                            ),
                        ),
                    ),
                    'hidden' => array(
                        'type' => 'Literal',
                        'options' => array(
                            'route' => '/hidden',
                            'defaults' => array(
                                'controller' => 'Index',
                                'action'     => 'hidden',
                            ),
                        ),
                    ),
                    'test' => array(
                		'type' => 'Literal',
                		'options' => array(
                			'route' => '/test',
                			'defaults' => array(
                				'controller' => 'Index',
                				'action'     => 'test',
                			),
                		),
                	),
                ),
            ),
        ),
    ),
    'view_manager' => array(
        'display_not_found_reason' => true,
        'display_exceptions'       => true,
        'doctype'                  => 'HTML5',
        'not_found_template'       => 'error/404',
        'exception_template'       => 'error/index',
        'template_map' => array(
            'layout/left-menu'        => __DIR__ . '/../view/formgen/layout/left_menu.phtml',
            'admin/index/index' 	  => __DIR__ . '/../view/formgen/index/index.phtml',
        ),
        'template_path_stack' => array(
            __DIR__ . '/../view',
        ),

    ),
);
