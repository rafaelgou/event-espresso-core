import { pathOr } from 'ramda';

import useTicketQueryOptions from './useTicketQueryOptions';
import { Ticket, TicketsList } from '../../types';
import useCacheQuery from '../useCacheQuery';

const useTickets = (): Array<Ticket> => {
	const options = useTicketQueryOptions();
	const { data } = useCacheQuery<TicketsList>(options);

	return pathOr<Array<Ticket>>([], ['espressoTickets', 'nodes'], data);
};

export default useTickets;
