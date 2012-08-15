<?php

abstract class EE_Offsite_Gateway extends EE_Gateway {

	protected $_gatewayURL = NULL;
	
	abstract public function espresso_process_off_site_payment();
	
	protected function __construct(EEM_Gateways &$model) {
		parent::__construct($model);
	}
	
	/**
	 * 		process_gateway_selection()
	 * 		@access public
	 * 		@return 	mixed	array on success or FALSE on fail
	 */
	public function process_gateway_selection() {	
		global $espresso_notices;
		$espresso_notices['success'][] = __('Off-site gateway selected', 'event_espresso');
	}



	/**
	 * 		set_billing_info_for_confirmation
	 * 		@access public
	 * 		@param array	$billing_info
	 * 		@return array
	 */
	public function set_billing_info_for_confirmation( $billing_info ) {
		$confirm_data = array();
		$confirm_data['gateway'] = $this->_EEM_Gateways->display_name();
		return $confirm_data;
	}


	/**
	 * 		_redirect_after_reg_step_3 - how to handle redirection after processing reg step 3
	 * 		@access public
	 * 		@param	string 	$return_page_url
	 * 		@return 	mixed	void or echo
	 */
	public function redirect_after_reg_step_3( $return_page_url ) {
		
//		echo '<h3>'. __CLASS__ . '->' . __FUNCTION__ . ' <br /><span style="font-size:10px;font-weight:normal;">' . __FILE__ . '<br />line no: ' . __LINE__ . '</span></h3>';
	
		if ( $this->_EEM_Gateways->ajax() ) {
			$SPCO = EE_Single_Page_Checkout::instance();
			$SPCO->send_ajax_response( 'Redirecting to Off-site Payment Provider', FALSE, 'redirect_to_off_site', $return_page_url );
		} else {
			$form_data = $this->_EEM_Gateways->off_site_form();
			echo $form_data['pre-form'] . $form_data['form'] . $form_data['post-form'];
			die();
		}

	}

	/**
		 * Adds a key=>value pair to the fields array
		 *
		 * @param string key of field
		 * @param string value of field
		 * @return
		 */
		public function addField($field, $value) {
			$this->fields["$field"] = $value;
		}

	/**
		 * Submit Payment Request (redirect)
		 *
		 * Generates a form with hidden elements from the fields array
		 * and submits it to the payment gateway URL. The user is presented
		 * a redirecting message along with a button to click.
		 *
		 * @param string value of buttn text
		 * @return void
		 */
		public function submitPayment() {
			$pre_form = "<html>\n";
			$pre_form .= "<head><title>Processing Payment...</title></head>\n";
			$pre_form .= "<body>\n";
			$form = "<h2 style=\"margin:2em auto; line-height:2em; text-align:center;\">Please wait...<br/>your order is being processed and you will be redirected to the payment website.</h2>";
			$form .= "<form method=\"POST\" name=\"gateway_form\" ";
			$form .= "action=\"" . $this->_gatewayUrl . "\">\n";
			foreach ($this->fields as $name => $value) {
				$form .= "<input type=\"hidden\" name=\"$name\" value=\"$value\"/>\n";
			}
			$form .= "<p style=\"text-align:center;\"><br/>If you are not automatically redirected to ";
			$form .= "the payment website within 10 seconds...<br/><br/>\n";
			$form .= "<input type=\"submit\" value=\"Click Here\"></p>\n";
			$form .= "</form>\n";
			$post_form = "</body></html>\n";
			return array('pre-form' => $pre_form, 'form' => $form, 'post-form' => $post_form);
			
		}
}