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
            'layout/layout'           => __DIR__ . '/../../Application/view/layout/layout.phtml',
        	'layout/top_menu'     	  => __DIR__ . '/../../Application/view/layout/top_menu.phtml',
        	'layout/footer'     	  => __DIR__ . '/../../Application/view/layout/footer.phtml',
            'admin/index/index' 	  => __DIR__ . '/../view/formgen/index/index.phtml',
            'error/404'               => __DIR__ . '/../../Application/view/error/404.phtml',
            'error/index'             => __DIR__ . '/../../Application/view/error/index.phtml',
        ),
        'template_path_stack' => array(
            __DIR__ . '/../view',
        ),

    ),
);
