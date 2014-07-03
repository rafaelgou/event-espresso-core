<?php

if (!defined('EVENT_ESPRESSO_VERSION')) {
	exit('No direct script access allowed');
}

/**
 *
 * EE_UnitTestCase_Test
 *
 * @package			Event Espresso
 * @subpackage
 * @author				Mike Nelson
 *
 */
class EE_UnitTestCase_Test extends EE_UnitTestCase{

	public function test_new_typical_transaction(){
		//there should be a tax in the system by default
		$taxes = EEM_Price::instance()->get_all_prices_that_are_taxes();
		$this->assertEquals(1, count( $taxes ) );
		$taxes_at_top_priority = array_shift( $taxes );//array shift twice because 2d array
		$tax = array_shift( $taxes_at_top_priority );

		//make transaction
		$txn = $this->new_typical_transaction();

		//verify everything
		$regs = $txn->registrations();
		$this->assertEquals(1, count( $regs ) );
		$reg = array_shift( $regs );
		$this->assertEquals( $txn->total(), $reg->price_paid() );

		$tkt = $reg->ticket();
		$this->assertEquals( $tkt->price() * ( 100 + $tax->amount()) / 100, $reg->price_paid() );
		$this->assertTrue( $tkt->taxable() );

		$total_line_item = $txn->total_line_item();
		$this->assertEquals( $txn->total(), $total_line_item->total() );

		$this->_ensure_txn_on_line_item_and_children( $txn, $total_line_item );
		$this->assertNotEmpty( $txn->tax_total() );
		$this->assertEquals( $txn->ID(), $total_line_item->TXN_ID() );
	}

	/**
	 * Checks line item and children list $txn as their transaction.
	 * Used by E_UnitTestCase_Test::test_new_typical_transaction()
	 * @param EE_Transaction $txn
	 * @param EE_Line_Item $line_item
	 */
	private function _ensure_txn_on_line_item_and_children( $txn, $line_item ){
		$this->assertEquals($txn->ID(), $line_item->TXN_ID() );
		foreach($line_item->children() as $child_line_item ){
			$this->_ensure_txn_on_line_item_and_children( $txn, $child_line_item );
		}
	}
}
// End of file EE_UnitTestCase_Test.php