import { pathOr } from 'ramda';

import { entitiesWithGuIdInArray } from '../../../../../shared/services/predicates';
import usePriceQueryOptions from './usePriceQueryOptions';
import { Price, PricesList, EntityId } from '../../types';
import useCacheQuery from '../useCacheQuery';
/**
 * A custom react hook for retrieving all the prices from cache
 * limited to the ids passed in `include`
 *
 * @param {array} include Array of price ids to include.
 */
const usePrices = (include: EntityId[] = []): Price[] => {
	const options = usePriceQueryOptions();
	const { data } = useCacheQuery<PricesList>(options);

	const prices = pathOr<Price[]>([], ['espressoPrices', 'nodes'], data);

	return include.length ? entitiesWithGuIdInArray(prices, include) : prices;
};

export default usePrices;
