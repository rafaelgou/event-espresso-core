/**
 * External imports
 */
import { first, isArray, isEmpty, isFunction } from 'lodash';
import warning from 'warning';
import PropTypes from 'prop-types';
import { Component } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { default as Table } from './table';
import { default as TableHeader } from './table-header';
import { default as TableBody } from './table-body';
import { default as TableFooter } from './table-footer';
import { default as TableRow } from './table-row';
import { default as TableHeadingCell } from './table-heading-cell';
import { default as TableDataCell } from './table-data-cell';
import { default as ResponsiveCell } from './responsive-cell';
import './style.css';

/**
 * ResponsiveDataGrid responsive-table
 * produces a table like structure for displaying tabular data
 * in a grid that collapses properly on smaller screens
 *
 * @param {Array} columnHeaders
 * @param {Array} rowHeaders
 * @param {Array} tableData
 * @param {Object} metaData
 */
class ResponsiveTable extends Component {
	static propTypes = {
		columns: PropTypes.arrayOf(
			PropTypes.shape( {
				type: PropTypes.string.isRequired,
				value: PropTypes.oneOfType( [
					PropTypes.object,
					PropTypes.number,
					PropTypes.string,
				] ).isRequired,
				id: PropTypes.string,
				class: PropTypes.string,
				extraProps: PropTypes.object,
			} )
		).isRequired,
		rowData: PropTypes.arrayOf(
			PropTypes.arrayOf(
				PropTypes.shape( {
					type: PropTypes.string.isRequired,
					value: PropTypes.oneOfType( [
						PropTypes.object,
						PropTypes.number,
						PropTypes.string,
					] ).isRequired,
					id: PropTypes.string,
					class: PropTypes.string,
					render: PropTypes.func,
					extraProps: PropTypes.object,
				} )
			)
		).isRequired,
		metaData: PropTypes.shape( {
			tableId: PropTypes.string,
			tableCaption: PropTypes.string.isRequired,
			showTableFooter: PropTypes.bool,
			hasRowHeaders: PropTypes.bool,
		} ).isRequired,
		classes: PropTypes.shape( {
			tableClass: PropTypes.string,
			headerClass: PropTypes.string,
			headerRowClass: PropTypes.string,
			headerThClass: PropTypes.string,
			bodyClass: PropTypes.string,
			bodyRowClass: PropTypes.string,
			bodyThClass: PropTypes.string,
			bodyTdClass: PropTypes.string,
			footerClass: PropTypes.string,
			footerRowClass: PropTypes.string,
			footerThClass: PropTypes.string,
		} ),
	};

	/**
	 * @function
	 * @param {Object} metaData
	 */
	setMetaData = ( metaData ) => {
		this.tableId = metaData.tableId ?
			metaData.tableId :
			'ee-rTable-' +
			Math.random().toString( 36 ).substr( 2, 9 );
		this.tableCaption = metaData.tableCaption ?
			metaData.tableCaption :
			'';
		this.captionID = `${ this.tableId }-caption`;
		this.showTableFooter = metaData.showTableFooter ?
			metaData.showTableFooter :
			true;
		this.hasRowHeaders = metaData.hasRowHeaders ?
			metaData.hasRowHeaders :
			false;
	};

	/**
	 * @function
	 * @param {Object} classes
	 */
	setCssClasses = ( classes ) => {
		this.classes = {
			tableClass: classes.tableClass ?
				classes.tableClass :
				'',
			headerClass: classes.headerClass ?
				classes.headerClass :
				'',
			headerRowClass: classes.headerRowClass ?
				classes.headerRowClass :
				'',
			headerThClass: classes.headerThClass ?
				classes.headerThClass :
				'',
			bodyClass: classes.bodyClass ?
				classes.bodyClass :
				'',
			bodyRowClass: classes.bodyRowClass ?
				classes.bodyRowClass :
				'',
			bodyThClass: classes.bodyThClass ?
				classes.bodyThClass :
				'',
			bodyTdClass: classes.bodyTdClass ?
				classes.bodyTdClass :
				'',
			footerClass: classes.footerClass ?
				classes.footerClass :
				'',
			footerRowClass: classes.footerRowClass ?
				classes.footerRowClass :
				'',
			footerThClass: classes.footerThClass ?
				classes.footerThClass :
				'',
		};
		if ( this.hasRowHeaders ) {
			this.classes.tableClass = this.classes.tableClass ?
				`${ this.classes.tableClass } ee-rTable-has-row-headers` :
				this.classes.tableClass;
		}
	};

	/**
	 * @function
	 * @param {Array} columns
	 * @param {boolean} isFooter
	 * @return {Object} rendered headings row
	 */
	tableHeader = ( columns, isFooter = false ) => {
		this.rowNumber++;
		const rowType = isFooter === true ? 'footer' : 'header';
		let rowProps = {};
		let indexMod = 0;
		const headerCells = columns.map(
			( column, colNumber ) => {
				column.rowType = column.rowType ? column.rowType : rowType;
				if ( column.type && column.type === 'row' ) {
					rowProps = column;
					indexMod++;
					this.headerIndexMod++;
					return null;
				}
				colNumber -= indexMod;
				const hasRenderCallback = isFunction( column.render );
				warning(
					hasRenderCallback || column.hasOwnProperty( 'value' ),
					`Missing "value" property for ${ rowType } column ${ colNumber }.`
				);
				const renderCallback = hasRenderCallback ?
					column.render :
					this.headingCell;
				return renderCallback( this.rowNumber, colNumber, column );
			}
		);
		return this.tableRow( headerCells, rowProps );
	};

	/**
	 * @function
	 * @param {Array} cells
	 * @param {Object} rowProps
	 * @return {Object} rendered <tr> element
	 */
	tableRow = ( cells, rowProps = {} ) => {
		return (
			<TableRow
				key={ `row-${ this.rowNumber }` }
				rowNumber={ this.rowNumber }
				rowType={ rowProps.rowType || 'body' }
				htmlId={ rowProps.id || this.tableId }
				htmlClass={ rowProps.class || '' }
				classes={ this.classes }
			>
				{ cells }
			</TableRow>
		);
	};

	/**
	 * @function
	 * @param {number} rowNumber
	 * @param {number} colNumber
	 * @param {Object} cellProps
	 * @return {Object} rendered column header cell
	 */
	headingCell = ( rowNumber, colNumber, cellProps ) => {
		return (
			<TableHeadingCell
				key={ `row-${ rowNumber }-col-${ colNumber }` }
				rowNumber={ rowNumber }
				colNumber={ colNumber }
				rowType={ cellProps.rowType || 'body' }
				htmlId={ cellProps.id || this.tableId }
				htmlClass={ cellProps.class || '' }
				classes={ this.classes }
			>
				{ cellProps.value || '' }
			</TableHeadingCell>
		);
	};

	/**
	 * @function
	 * @param {Array} dataRow
	 * @param {Array} columns
	 * @return {Object} rendered data row
	 */
	dataRow = ( dataRow, columns ) => {
		this.rowNumber++;
		// console.log( '' );
		// console.log( 'rowNumber', this.rowNumber );
		// console.log( 'headerIndexMod', this.headerIndexMod );
		warning(
			isArray( dataRow ),
			`Data for row ${ this.rowNumber } is not an array.`
		);
		let rowProps = {};
		// if there are more elements in the columns array
		// then decrement indexMod by the difference
		// so that the columns match up correctly
		let indexMod = 0 - this.headerIndexMod;
		// let indexMod = columns.length > dataRow.length ?
		// 	dataRow.length - columns.length :
		// 	0;
		const rowCells = dataRow.map(
			( cellData, colNumber ) => {
				// console.log( ' > colNumber', colNumber );
				// console.log( ' > > indexMod', indexMod );
				// console.log( ' > > cellData', cellData );
				cellData.rowType = cellData.rowType ? cellData.rowType : 'body';
				if ( cellData.type && cellData.type === 'row' ) {
					rowProps = cellData;
					indexMod++;
					return null;
				}
				// adjust column number used in IDs
				// before grabbing element from column data
				colNumber -= indexMod;
				const column = columns[ colNumber ];
				// console.log( ' > colNumber', colNumber );
				// console.log( ' > > columns[ colNumber ]', colNumber, column );
				if ( ! column ) {
					warning(
						false,
						`Missing data for column ${ colNumber } ` +
						`in row ${ this.rowNumber }.`
					);
					return null;
				}
				const hasRenderCallback = isFunction( cellData.render );
				warning(
					hasRenderCallback || cellData.hasOwnProperty( 'value' ),
					`Missing "value" property for table cell at ` +
					`row ${ this.rowNumber } column ${ colNumber }.`
				);
				const renderCallback = hasRenderCallback ?
					cellData.render :
					this.dataCell;
				return renderCallback(
					this.rowNumber,
					colNumber,
					column,
					cellData
				);
			}
		);
		return this.tableRow( rowCells, rowProps );
	};

	/**
	 * @function
	 * @param {number} rowNumber
	 * @param {number} colNumber
	 * @param {Object} column
	 * @param {Object} cellData
	 * @return {Object} rendered headings row
	 */
	dataCell = ( rowNumber, colNumber, column, cellData ) => {
		return this.hasRowHeaders && colNumber === this.headerIndexMod ? (
			this.headingCell( rowNumber, colNumber, cellData )
		) : (
			<TableDataCell
				key={ `row-${ rowNumber }-col-${ colNumber }` }
				rowNumber={ rowNumber }
				colNumber={ colNumber }
				htmlId={ cellData.id || this.tableId }
				htmlClass={ cellData.class || '' }
				classes={ this.classes }
			>
				<ResponsiveCell
					heading={ column.value }
					value={ cellData.value }
				/>
			</TableDataCell>
		);
	};

	render() {
		const {
			columns = [],
			rowData = [],
			footerData = [],
			metaData = {},
			classes = {},
		} = this.props;
		if ( isEmpty( columns ) ) {
			return null;
		}
		// console.log( '' );
		// console.log( 'ResponsiveTable.render()' );
		// console.log( ' > props: ', this.props );
		// console.log( ' > columns: ', columns );
		// console.log( ' > rowData: ', rowData );
		this.setMetaData( metaData );
		this.setCssClasses( classes ? classes : {} );
		let columnCount = columns.length;
		this.rowNumber = -1;
		this.headerIndexMod = 0;
		const headerRowData = first( columns );
		if ( headerRowData && headerRowData.type === 'row' ) {
			columnCount--;
		}
		this.classes.tableClass += ` ee-rTable-column-count-${ columnCount }`;
		this.showTableFooter = this.showTableFooter && ! isEmpty( footerData );
		return (
			<Table
				tableId={ this.tableId }
				tableClass={ this.classes.tableClass }
				captionID={ this.captionID }
				captionText={ this.tableCaption }
			>
				<TableHeader htmlClass={ this.classes.headerClass } >
					{ this.tableHeader( columns ) }
				</TableHeader>
				<TableBody htmlClass={ this.classes.bodyClass }>
					{ rowData.map(
						( dataRow ) => this.dataRow( dataRow, columns )
					) }
				</TableBody>
				<TableFooter
					showFooter={ this.showTableFooter }
					htmlClass={ this.classes.footerClass }
				>
					{ this.tableHeader( footerData, true ) }
				</TableFooter>
			</Table>
		);
	}
}

export default ResponsiveTable;
