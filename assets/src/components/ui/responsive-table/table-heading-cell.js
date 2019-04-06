/**
 * @param {mixed} children
 * @param {number} rowNumber
 * @param {number} colNumber
 * @param {string} rowType
 * @param {string} htmlId
 * @param {string} htmlClass
 * @param {Object} classes
 * @param {Object} extraProps
 * @return {Object} rendered <th> heading cell
 */
const TableHeadingCell = ( {
	children,
	rowNumber,
	colNumber,
	rowType,
	htmlId = '',
	htmlClass = '',
	classes = {},
	...extraProps
} ) => {
	htmlId = htmlId ?
		`${ htmlId }-${ rowType }-row-${ rowNumber }-col-${ colNumber }` :
		`ee-rTable-${ rowType }-row-${ rowNumber }-col-${ colNumber }`;
	htmlClass = htmlClass ?
		`${ htmlClass } ee-rTable-${ rowType }-th col-${ colNumber }` :
		`ee-rTable-${ rowType }-th col-${ colNumber }`;
	rowType += 'ThClass';
	htmlClass = classes[ rowType ] ?
		`${ htmlClass } ${ classes[ rowType ] }` :
		htmlClass;
	if ( rowType === 'header' ) {
		extraProps.role = "columnheader";
		extraProps.scope = "col"
	} else if ( rowType === 'body' ) {
		extraProps.scope = "row";
	}
	return (
		<th id={ htmlId } className={ htmlClass } { ...extraProps } >
			{ children }
		</th>
	);
};

export default TableHeadingCell;
