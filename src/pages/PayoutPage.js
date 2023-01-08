import { Tab } from '@headlessui/react';
import { useState } from 'react';
import { Header, Card, Table, Modal } from '../components';
import { TableButton } from '../components/table/TableButton';
import { format } from '../utils/format';

const data = [
	{
		id: 1,
		name: 'Gy Test',
		mostRecentRerral: '28 Nov 2022',
		revenueGenerated: 356.05,
		paidPayouts: 0,
		unpaidPayouts: 35.61,
		readyPayouts: 36.61,
		payoutType: 'Store Credit',
	},
	{
		id: 2,
		name: 'Dwight Wisoky',
		mostRecentRerral: '28 Nov 2022',
		revenueGenerated: 267.04,
		paidPayouts: 0,
		unpaidPayouts: 26.7,
		readyPayouts: 0,
		payoutType: 'Cash',
	},
	{
		id: 3,
		name: 'Zack Treutel',
		mostRecentRerral: '28 Nov 2022',
		revenueGenerated: 161.96,
		paidPayouts: 0,
		unpaidPayouts: 16.2,
		readyPayouts: 16.2,
		payoutType: 'Cash',
	},
	{
		id: 4,
		name: 'Hilma Welch',
		mostRecentRerral: '28 Nov 2022',
		revenueGenerated: 126.93,
		paidPayouts: 0,
		unpaidPayouts: 12.69,
		readyPayouts: 0,
		payoutType: 'Store Credit',
	},
	{
		id: 5,
		name: 'Ericka Mohr',
		mostRecentRerral: '28 Nov 2022',
		revenueGenerated: 118.84,
		paidPayouts: 0,
		unpaidPayouts: 11.88,
		readyPayouts: 11.88,
		payoutType: 'Store Credit',
	},
	{
		id: 6,
		name: 'Adam Kohler',
		mostRecentRerral: '28 Nov 2022',
		revenueGenerated: 99.69,
		paidPayouts: 0,
		unpaidPayouts: 9.97,
		readyPayouts: 0,
		payoutType: 'Cash',
	},
	{
		id: 7,
		name: 'Pierre Crooks',
		mostRecentRerral: '28 Nov 2022',
		revenueGenerated: 97.28,
		paidPayouts: 0,
		unpaidPayouts: 9.73,
		readyPayouts: 0,
		payoutType: 'Store Credit',
	},
	{
		id: 8,
		name: 'Rocio West',
		mostRecentRerral: '28 Nov 2022',
		revenueGenerated: 85.56,
		paidPayouts: 0,
		unpaidPayouts: 8.56,
		readyPayouts: 0,
		payoutType: 'Store Credit',
	},
];

export const PayoutPage = () => {
	const [confirmPayout, setConfirmPayout] = useState(false);
	const [payouts, setPayouts] = useState([]);

	const handleAddAllPayout = () =>
		setPayouts(prev => {
			return prev.length === data.length ? [] : data;
		});

	const handleAddRemovePayout = payout => {
		const isAdded = payouts.some(v => v.id === payout.id);

		if (isAdded) {
			return setPayouts(prev => {
				return prev.filter(v => v.id !== payout.id);
			});
		}

		return setPayouts(prev => {
			return [...prev, payout];
		});
	};

	const handleAddOnePayout = payout => {
		setPayouts([payout]);
		setConfirmPayout(true);
	};

	const totalPaidPayouts = data.reduce(
		(accumulator, row) => accumulator + row.paidPayouts,
		0
	);

	const totalUnpaidPayouts = data.reduce(
		(accumulator, row) => accumulator + row.unpaidPayouts,
		0
	);

	const totalReadyPayouts = data.reduce(
		(accumulator, row) => accumulator + row.readyPayouts,
		0
	);

	return (
		<>
			<div className='min-h-screen w-full bg-light'>
				<div className='container space-y-4 py-5'>
					<Header title='Payouts overview'>
						<TableButton
							countPending={data.length}
							onConfirmPayout={() => setConfirmPayout(true)}
						/>
					</Header>

					<div className='grid grid-cols-1 gap-3 lg:grid-cols-4 lg:gap-5'>
						<Card
							label='total paid payouts'
							value={format.currency(totalPaidPayouts)}
						/>
						<Card
							label='total unpaid payouts'
							value={format.currency(totalUnpaidPayouts)}
						/>
						<Card
							label='total ready payouts'
							value={format.currency(totalReadyPayouts)}
							button={
								<button
									onClick={() => {
										setPayouts(data);
										setConfirmPayout(true);
									}}
									className='btn rounded-md bg-primary px-5 text-sm capitalize text-white'
								>
									Pay all
								</button>
							}
							color='text-success'
						/>
					</div>

					<Tab.Group>
						<Tab.List className='flex'>
							<Tab className='btn border border-b-0 border-gray-300 bg-white px-4 py-2 text-sm font-medium capitalize text-dark-light'>
								Pending payouts
							</Tab>
							<Tab className='btn border border-light px-4 py-2 text-sm font-medium capitalize text-primary'>
								Paid payouts
							</Tab>
						</Tab.List>

						<Tab.Panels>
							<Tab.Panel>
								<Table
									data={data}
									payouts={payouts}
									onAddAll={handleAddAllPayout}
									onAddOne={handleAddOnePayout}
									onClickRow={handleAddRemovePayout}
									onConfirmPayout={() => setConfirmPayout(true)}
								/>
							</Tab.Panel>
						</Tab.Panels>
					</Tab.Group>
				</div>
			</div>

			<Modal
				show={confirmPayout}
				onClose={() => setConfirmPayout(false)}
				payouts={payouts}
			/>
		</>
	);
};
