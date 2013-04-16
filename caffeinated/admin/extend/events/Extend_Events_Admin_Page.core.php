<?php
if (!defined('EVENT_ESPRESSO_VERSION') )
	exit('NO direct script access allowed');

/**
 * Event Espresso
 *
 * Event Registration and Management Plugin for Wordpress
 *
 * @package		Event Espresso
 * @author		Seth Shoultes
 * @copyright	(c)2009-2012 Event Espresso All Rights Reserved.
 * @license		http://eventespresso.com/support/terms-conditions/  ** see Plugin Licensing **
 * @link		http://www.eventespresso.com
 * @version		3.2.P
 *
 * ------------------------------------------------------------------------
 *
 * Events_Admin_Page
 *
 * This contains the logic for setting up the Events related pages.  Any methods without phpdoc comments have inline docs with parent class. 
 *
 * NOTE:  TODO: This is a straight conversion from the legacy 3.1 events related pages.  It is NOT optimized and will need modification to fully use the new system (and also will need adjusted when Events model is setup)
 *
 * @package		Events_Admin_Page
 * @subpackage	includes/core/admin/Events_Admin_Page.core.php
 * @author		Darren Ethier
 *
 * ------------------------------------------------------------------------
 */
class Extend_Events_Admin_Page extends Events_Admin_Page {


	public function __construct() {
		parent::__construct();
	}


	protected function _extend_page_config() {

		//new routes and new configs (or complete route overrides)
		$new_page_routes = array(
//			'export_payments' => array(
//				'func' => '_payment_export',
//				'noheader' => true
//				),
			);

		$this->_page_routes = array_merge( $this->_page_routes, $new_page_routes );

		$new_page_config = array(
//			'view_report' => array(
//				'nav' => array(
//					'label' => __('Report', 'event_espresso'),
//					'order' => 20
//					)
//				),
			//)
		);

		$this->_page_config = array_merge( $this->_page_config, $new_page_config );

		//partial route/config override
		$this->_page_config['import_events']['metaboxes'] = $this->_default_espresso_metaboxes;
		$this->_page_config['add_event']['metaboxes'][] = '_premium_event_editor_meta_boxes';
		$this->_page_config['add_event']['metaboxes'][] = '_premium_event_editor_meta_boxes';
		$this->_page_config['default_event_settings']['metaboxes'] = array_merge( $this->_default_espresso_metaboxes, array('_publish_post_box') );

	}



	}


} //end class Events_Admin_Page