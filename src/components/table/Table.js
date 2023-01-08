import { Link } from 'react-router-dom';
import { format } from '../../utils/format';
import { TableButton } from './TableButton';

export const Table = ({
	data,
	payouts,
	onAddAll,
	onAddOne,
	onClickRow,
	onConfirmPayout,
}) => {
	return (
		<div className='w-full space-y-4'>
			<div className='flex flex-wrap justify-between gap-4'>
				<TableButton
					countPending={data.length}
					onConfirmPayout={onConfirmPayout}
				/>

				<div className='flex gap-3'>
					<input
						type='search'
						placeholder='Affiliate name or email'
						className='h-10 rounded-xl border-2 border-gray-400 text-base'
					/>

					<div className='flex gap-1'>
						<button className='btn rounded-sm bg-primary p-2 text-sm font-semibold text-white'>
							Search
						</button>
						<button className='btn rounded-sm bg-primary p-2 text-sm font-semibold text-white'>
							Export
						</button>
					</div>
				</div>
			</div>

			<div className='overflow-x-auto'>
				<table className='w-full divide-y divide-gray-300 overflow-hidden whitespace-nowrap'>
					<thead>
						<th className='p-3 text-left'>
							<input
								type='checkbox'
								className='btn h-4 w-4'
								checked={data.length === payouts.length}
								onClick={onAddAll}
							/>
						</th>

						<th className='p-3 text-left text-base font-semibold capitalize text-dark-light/70'>
							Affiliate name
						</th>
						<th className='p-3 text-left text-base font-semibold capitalize text-dark-light/70'>
							Most recent referral
						</th>
						<th className='p-3 text-left text-base font-semibold capitalize text-dark-light/70'>
							Revenue generated
						</th>
						<th className='p-3 text-left text-base font-semibold capitalize text-dark-light/70'>
							Paid payouts
						</th>
						<th className='p-3 text-left text-base font-semibold capitalize text-dark-light/70'>
							Unpaid payouts
						</th>
						<th className='p-3 text-left text-base font-semibold capitalize text-dark-light/70'>
							Ready payouts
						</th>
						<th className='p-3 text-left text-base font-semibold capitalize text-dark-light/70'>
							Breakdown
						</th>
						<th className='p-3 text-left text-base font-semibold capitalize text-dark-light/70'>
							Type
						</th>
						<th className='p-3 text-left text-base font-semibold capitalize text-dark-light/70'>
							Actions
						</th>
					</thead>

					<tbody className='divide-y divide-gray-300'>
						{data.map((row, key) => (
							<tr key={key} className='bg-white'>
								<td className='p-3'>
									<input
										type='checkbox'
										className='btn h-4 w-4'
										checked={payouts.some(v => v.id === row.id)}
										onClick={() => onClickRow(row)}
									/>
								</td>

								<td className='p-3 text-left text-base font-semibold text-primary'>
									{row.name}
								</td>
								<td className='p-3 text-center text-base font-semibold text-dark'>
									{row.mostRecentRerral}
								</td>
								<td className='p-3 text-center text-base font-semibold text-success'>
									+{format.currency(row.revenueGenerated)}
								</td>
								<td className='p-3 text-center text-base font-semibold text-dark'>
									{format.currency(row.paidPayouts)}
								</td>
								<td className='p-3 text-center text-base font-semibold text-dark'>
									{format.currency(row.unpaidPayouts)}
								</td>
								<td className='p-3 text-center text-base font-semibold text-danger'>
									{format.currency(row.readyPayouts)}
								</td>
								<td className='p-3 text-center'>
									<Link
										to='#'
										className='text-base font-semibold text-primary/70'
									>
										View
										<i className='bi bi-arrow-right'></i>
									</Link>
								</td>
								<td className='p-3 text-left'>
									<i className='bi bi-gift-fill'></i>
								</td>
								<td>
									<button
										type='button'
										onClick={() => onAddOne(row)}
										className='btn rounded-lg bg-primary px-3 py-2.5 text-sm font-semibold text-white'
									>
										Send payment
										<i className='bi bi-send'></i>
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
