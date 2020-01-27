import React from 'react';
import { useApolloClient } from '@apollo/react-hooks';
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import '@testing-library/jest-dom/extend-expect';
import { InvariantError } from 'ts-invariant';
import ApolloClient from 'apollo-client';

import { useStatus } from '../../../../application/services/apollo/status';
import useEventId from '../../data/queries/events/useEventId';
import { ApolloMockedProvider } from '../testContext';
import { eventId } from '../TestContext/data';

describe('ContextProviders', () => {
	it('checks for Apollo context without ContextProviders', () => {
		const { result } = renderHook(() => useApolloClient());

		expect(result.error).toBeInstanceOf(InvariantError);
	});

	it('checks for Apollo context with ContextProviders', () => {
		const { result } = renderHook(() => useApolloClient(), { wrapper: ApolloMockedProvider() });

		expect(result.current).toBeInstanceOf(ApolloClient);
	});

	const StatusComponent: React.FC = (): JSX.Element => {
		const statusManager = useStatus();
		return <span>{`Status Manager is: ${statusManager === null ? 'NULL' : 'NOT_NULL'}`}</span>;
	};

	it('checks for statusProvider context without ContextProviders', () => {
		const { getByText } = render(<StatusComponent />);
		expect(getByText('Status Manager is: NULL')).toBeInTheDocument();
	});

	it('checks for statusProvider context with ContextProviders', () => {
		const { getByText } = render(<StatusComponent />, { wrapper: ApolloMockedProvider() });
		expect(getByText('Status Manager is: NOT_NULL')).toBeInTheDocument();
	});

	const EventIdComponent = (): JSX.Element => {
		const _eventId_ = useEventId() || 0;
		return <span>{`Event ID is: ${_eventId_}`}</span>;
	};

	it('checks for event id context without ContextProviders', () => {
		const { getByText } = render(<EventIdComponent />);
		expect(getByText('Event ID is: 0')).toBeInTheDocument();
	});

	it('checks for event id context with ContextProviders', () => {
		const { getByText } = render(<EventIdComponent />, { wrapper: ApolloMockedProvider() });
		expect(getByText(`Event ID is: ${eventId}`)).toBeInTheDocument();
	});
});
