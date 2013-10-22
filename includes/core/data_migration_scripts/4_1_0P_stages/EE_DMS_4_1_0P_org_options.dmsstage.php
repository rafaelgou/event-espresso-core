<?php

/**
 * Converts 3.1 $org_options to the 4.1 EE_Config class (which maybe should be included at teh bottom of this file, in case
 * EE_Config ever gets dropped)
 * 
 * 3.1 org options looked like:
 * array (size=60)
  'organization' => string 'EE3.1 to EE4.1' (length=14)
  'organization_street1' => string '123 West Somewhere' (length=18)
  'organization_street2' => string '' (length=0)
  'organization_city' => string 'Some City' (length=9)
  'organization_state' => string 'AZ' (length=2)
  'organization_zip' => string '84128' (length=5)
  'contact_email' => string 'michael@eventespresso.com' (length=25)
  'default_mail' => string 'Y' (length=1)
  'paypal_id' => string 'my_email@my_website.com' (length=23)
  'payment_subject' => string 'Payment Received for [event_name]' (length=33)
  'payment_message' => string '***This Is An Automated Response***

Thank You [fname] [lname]

We have just received a payment in the amount of [event_price] for your registration to [event_name].

Transaction ID: [txn_id]' (length=197)
  'message' => string '***This is an automated response - Do Not Reply***

Thank you [fname] [lname] for registering for [event].

This event starts at [start_time] on [start_date] and runs until [end_time] on [end_date].

Location:
[location]

Phone: [location_phone]

Google Map: [google_map_link]

We hope that you will find this event both informative and enjoyable. Should you have any questions, please contact [contact].

If you have not done so already, please submit your payment in the amount of [cost].

Cli'... (length=607)
  'default_payment_status' => string 'Incomplete' (length=10)
  'surcharge' => string '0.00' (length=4)
  'country_id' => string '' (length=0)
  'organization_country' => string '64' (length=2)
  'currency_symbol' => string '$' (length=1)
  'expire_on_registration_end' => string '' (length=0)
  'email_before_payment' => string 'N' (length=1)
  'email_fancy_headers' => string 'N' (length=1)
  'enable_default_style' => string 'N' (length=1)
  'event_ssl_active' => string 'N' (length=1)
  'use_venue_manager' => string 'N' (length=1)
  'selected_style' => string 'event_espresso_style.css' (length=24)
  'show_pending_payment_options' => string 'Y' (length=1)
  'show_reg_footer' => string 'Y' (length=1)
  'skip_confirmation_page' => string 'N' (length=1)
  'allow_mer_discounts' => string 'N' (length=1)
  'allow_mer_vouchers' => string 'N' (length=1)
  'display_short_description_in_event_list' => string 'N' (length=1)
  'display_description_on_multi_reg_page' => string 'N' (length=1)
  'display_address_in_event_list' => string 'N' (length=1)
  'display_address_in_regform' => string 'Y' (length=1)
  'use_custom_post_types' => string 'N' (length=1)
  'display_ical_download' => string 'Y' (length=1)
  'display_featured_image' => string 'N' (length=1)
  'themeroller' => 
    array (size=1)
      'themeroller_style' => string 'smoothness' (length=10)
  'style_settings' => 
    array (size=3)
      'disable_legacy_styles' => string 'Y' (length=1)
      'enable_default_style' => string 'Y' (length=1)
      'css_name' => string '' (length=0)
  'default_logo_url' => string '' (length=0)
  'event_page_id' => string '8' (length=1)
  'return_url' => string '10' (length=2)
  'cancel_return' => string '12' (length=2)
  'notify_url' => string '14' (length=2)
  'events_in_dasboard' => string '<br /><font size=\'1\'><table class=\'xdebug-error xe-notice\' dir=\'ltr\' border=\'1\' cellspacing=\'0\' cellpadding=\'1\'><tr><th align=\'left\' bgcolor=\'#f57900\' colspan=' (length=175)
  'use_captcha' => string 'N' (length=1)
  'recaptcha_publickey' => string '' (length=0)
  'recaptcha_privatekey' => string '' (length=0)
  'recaptcha_theme' => string 'red' (length=3)
  'recaptcha_width' => string '500' (length=3)
  'recaptcha_language' => string 'en' (length=2)
  'espresso_dashboard_widget' => string 'N' (length=1)
  'time_reg_limit' => string 'N' (length=1)
  'use_attendee_pre_approval' => string 'N' (length=1)
  'use_personnel_manager' => string 'N' (length=1)
  'use_event_timezones' => string 'N' (length=1)
  'full_logging' => string 'N' (length=1)
  'surcharge_type' => string 'flat_rate' (length=9)
  'surcharge_text' => string 'Surcharge' (length=9)
  'affiliate_id' => string '' (length=0)
  'site_license_key' => string '' (length=0)
 * 
 * 
 * 
 * @todo: add surcharges back in
 */
class EE_DMS_4_1_0P_org_options extends EE_Data_Migration_Script_Stage{

	function _migration_step($num_items=50){

		$items_actually_migrated = 0;
		$old_org_options = get_option('events_organization_settings');
		foreach($this->_org_options_we_know_how_to_migrate as $option_name){
			$this->_handle_org_option($option_name, $old_org_options[$option_name]);
			if($option_name=='surcharge'){
				$this->_insert_new_global_surcharge_price($old_org_options);
			}
			$items_actually_migrated++;
		}

		EE_Config::instance()->update_espresso_config(false,false);
		if($this->count_records_migrated() + $items_actually_migrated >= $this->count_records_to_migrate()){
			$this->set_completed();
		}
		return $items_actually_migrated;
	}
	function _count_records_to_migrate() {
		$count_of_options_to_migrate = count($this->_org_options_we_know_how_to_migrate);
		return $count_of_options_to_migrate;
	}
	function __construct() {
		$this->_pretty_name = __("Organization Options/Config", "event_espresso");
		$this->_org_options_we_know_how_to_migrate = apply_filters('FHEE__EE_DMS_4_1_0P_org_options__org_options_we_know_how_to_migrate',$this->_org_options_we_know_how_to_migrate);
		parent::__construct();
	}

	private function _handle_org_option($option_name,$value){
		$c = EE_Config::instance();
		switch($option_name){
		  case 'organization':  
			  $c->organization->name = $value;break;
		  case 'organization_street1': 
			  $c->organization->address_1 = $value;break;
		  case 'organization_street2': 
			  $c->organization->address_2 = $value;break;
		  case 'organization_city': 
			  $c->organization->city = $value;break;
		  case 'organization_state': 
			  $state_id = $this->get_migration_script()->get_or_create_state($value);
			  $c->organization->STA_ID = $state_id;break;
		  case 'organization_zip': 
			  $c->organization->zip = $value;break;
		  case 'contact_email': 
			  $c->organization->email;break;
		  case 'default_mail': 
			  //@todo: this should probably be handled by messages migration
			  break;
		  case 'payment_subject': 
			  //@todo: this should probably be handled by messages migration
			  break;
		  case 'payment_message': 
			  //@todo: this should probably be handled by messages migration
			  break;
		  case 'message': 
			  //@todo: this should probably be handled by messages migration
			  break;
		  case 'default_payment_status': 
			  $c->registration->default_STS_ID =  $this->get_migration_script()->convert_3_1_payment_status_to_4_1_STS_ID($value);break;
		  case 'organization_country': 
			  $c->organization->CNT_ISO = $this->get_migration_script()->get_iso_from_3_1_country_id($value);break;
		  case 'currency_symbol': 
			  $c->currency->sign = $value;break;
		  case 'expire_on_registration_end': 
			    //@todo: this should probably be handled by messages migration
			  break;
		  case 'email_before_payment': 
			  //@todo: this should probably be handled by messages migration
			  break;
		  case 'email_fancy_headers': 
			    //@todo: this should probably be handled by messages migration
			  break;
		  case 'enable_default_style': 
			  //?
			  break;
		  case 'event_ssl_active': 
			  //?
			  break;
		  case 'selected_style': 
			  //?
			  break;
		  case 'show_pending_payment_options': 
			  $c->registration->show_pending_payment_options = 'Y' == $value;break;
		  case 'show_reg_footer': 
			  //?
			  break;
		  case 'skip_confirmation_page': 
			  //?
			  break;
		  case 'allow_mer_discounts': 
			  //N/A 
			  break;
		  case 'allow_mer_vouchers': 
			  //N/A
			  break;
		  case 'display_short_description_in_event_list': 
			  //?
			  break;
		  case 'display_description_on_multi_reg_page': 
			  //N/A 
			  break;
		  case 'display_address_in_event_list': 
			  //? 
			  break;
		  case 'display_address_in_regform': 
			  $c->template_settings->display_address_in_regform = 'Y' == $value;break;
		  case 'use_custom_post_types': 
			  //?
			  break;
		  case 'display_ical_download': 
			  //?
			  break;
		  case 'display_featured_image':
			  //?
			  break;
		  case 'themeroller': 
			  //?
			  break;
		  case 'default_logo_url': 
			  $c->organization->logo_url = $value;break;
		  case 'event_page_id': 
			  //converts to /events by default
			  break;
		  case 'return_url': 
			  $c->core->thank_you_page_id = $value;break;
		  case 'cancel_return': 
			  $c->core->cancel_page_id = $value;break;
		  case 'notify_url': 
			  $c->core->txn_page_id = $value;break;
		  case 'events_in_dasboard': 
			  //?
			  break;
		  case 'use_captcha': 
			  $c->registration->use_captcha = $value;break;
		  case 'recaptcha_publickey': 
			  $c->registration->recaptcha_publickey = $value;break;
		  case 'recaptcha_privatekey': 
			  $c->registration->recaptcha_privatekey = $value;break;
		  case 'recaptcha_theme': 
			  $c->registration->recaptcha_theme = $value;break;
		  case 'recaptcha_width': 
			  $c->registration->recaptcha_width = $value;break;
		  case 'recaptcha_language': 
			  $c->registration->recaptcha_language = $value;break;
		  case 'espresso_dashboard_widget': 
			  //?
			  break;
		  case 'use_attendee_pre_approval': 
			  $c->registration->use_attendee_pre_approval = $value; break;
		  case 'use_personnel_manager': 
			  //?
			  break;
		  case 'use_event_timezones': 
			  //?
			  break;
		  case 'full_logging': 
			  //?
			  break;
		  case 'affiliate_id': 
			  //?
			  break;
		  case 'site_license_key': 
			  $c->core->site_license_key = $value;break;
		  default:
			  do_action('AHEE__EE_DMS_4_1_0P__handle_org_option',$option_name,$value);
		}
	}
	
	/**
	 * Creates a 4.1 member price discount
	 * @global type $wpdb
	 * @param type $old_price
	 * @return int
	 */
	private function _insert_new_global_surcharge_price($org_options){	
		$amount = floatval($org_options['surcharge']);
		//dont createa a price if the surcharge is 0
		if($amount <=.01){
			return 0;
		}
		if($org_options['surcharge_type'] == 'flat_rate'){
			$price_type = EE_DMS_4_1_0P_prices::price_type_flat_surcharge;
		}else{
			$price_type = EE_DMS_4_1_0P_prices::price_type_percent_surcharge;
		}
		global $wpdb;
		$cols_n_values = array(
			'PRT_ID'=>$price_type,
			'PRC_amount'=>$amount,
			'PRC_name'=>  $org_options['surcharge_text'],
			'PRC_is_default'=>true,
			'PRC_overrides'=>false,
			'PRC_order'=>100,
			'PRC_deleted'=>false,
			'PRC_row'=>0,
			'PRC_parent'=>null
		
		);
		$datatypes = array(
			'%d',//PRT_ID
			'%f',//PRT_amount
			'%s',//PRC_name
			'%d',//PRC_is_default
			'%d',//PRC_overrides
			'%d',//PRC_order
			'%d',//PRC_deleted
			'%d',//PRC_row
			'%d',//PRC_parent
		);
		$price_table = $wpdb->prefix."esp_price";
		$success = $wpdb->insert($price_table,$cols_n_values,$datatypes);
		if ( ! $success){
			$this->add_error($this->get_migration_script()->_create_error_message_for_db_insertion('org_options', 
					array(
						'surcharge'=>$org_options['surcharge'],
						'surcharge_type'=>$org_options['surcharge_type'],
						'surcharge_text'=>$org_options['surcharge_text']), $price_table, $cols_n_values, $datatypes));
			return 0;
		}
		$new_id = $wpdb->insert_id;
		return $new_id;
	}
	
	protected $_org_options_we_know_how_to_migrate = array(
	  'organization',
	  'organization_street1',
	  'organization_street2',
	  'organization_city',
	  'organization_state',
	  'organization_zip',
	  'contact_email',
	  'default_mail',
	  'payment_subject',
	  'payment_message',
	  'message',
	  'default_payment_status',
	  'surcharge',//unused?
	  'country_id',//unused?
	  'organization_country',
	  'currency_symbol',
	  'expire_on_registration_end',
	  'email_before_payment',
	  'email_fancy_headers',
	  'enable_default_style',
	  'event_ssl_active',
	  'selected_style',
	  'show_pending_payment_options',
	  'show_reg_footer',
	  'skip_confirmation_page',
	  'allow_mer_discounts',//no equiv
	  'allow_mer_vouchers',//no equiv
	  'display_short_description_in_event_list',
	  'display_description_on_multi_reg_page',
	  'display_address_in_event_list',
	  'display_address_in_regform',
	  'use_custom_post_types',//no equiv
	  'display_ical_download',
	  'display_featured_image',
	  'themeroller',
	  'default_logo_url',
	  'event_page_id',
	  'return_url',
	  'cancel_return',
	  'notify_url',
	  'events_in_dasboard',
	  'use_captcha',
	  'recaptcha_publickey',
	  'recaptcha_privatekey',
	  'recaptcha_theme',
	  'recaptcha_width',
	  'recaptcha_language',
	  'espresso_dashboard_widget',
	  'time_reg_limit',
	  'use_attendee_pre_approval',
	  'use_personnel_manager',//no equiv
	  'use_event_timezones',
	  'full_logging',
	  'surcharge_type',//unused
	  'surcharge_text',//unused
	  'affiliate_id',
	  'site_license_key',
	);
}
