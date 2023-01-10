import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { format } from '../../utils/format';

export const Modal = ({ show, onClose, payouts }) => {
	const modalRoot = document.getElementById('modal-root');

	const modalRef = useRef(null);
	if (!modalRef.current) modalRef.current = document.createElement('div');

	useEffect(() => {
		const modal = modalRef.current;

		modalRoot.appendChild(modal);

		return () => modalRoot.removeChild(modal);
	}, [modalRoot]);

	const onSubmit = () => console.log(payouts);

	const total = payouts.reduce(
		(accumulator, row) => accumulator + row.unpaidPayouts,
		0
	);

	return createPortal(
		<Transition as={Fragment} appear show={show}>
			<Dialog as='div' onClose={onClose} className='relative z-10'>
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<Dialog.Overlay className='fixed inset-0 bg-dark/60 backdrop-blur-sm' />
				</Transition.Child>

				<div className='fixed inset-0 overflow-y-auto'>
					<div className='flex min-h-full max-w-full items-center justify-center lg:p-4'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 scale-95'
							enterTo='opacity-100 scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 scale-100'
							leaveTo='opacity-0 scale-95'
						>
							<Dialog.Panel className='min-h-screen w-full max-w-lg transform space-y-4 overflow-hidden bg-white p-4 shadow-xl transition-all lg:min-h-full lg:space-y-6 lg:rounded-md lg:p-6'>
								<Dialog.Title
									as='div'
									className='flex items-center justify-between'
								>
									<button
										type='button'
										onClick={onClose}
										className='btn gap-3 text-base font-medium text-primary'
									>
										<i className='bi bi-arrow-left'></i>
										Back
									</button>

									<p className='text-base font-semibold text-dark-light/70'>
										Confirm payouts
									</p>

									<div></div>
								</Dialog.Title>

								<div className='space-y-6'>
									<div className='space-y-4 divide-y divide-gray-200 rounded-2xl border border-primary p-2 lg:p-4'>
										<p className='text-center text-sm text-dark-light'>
											The following affiliates will be sent payouts
										</p>

										<table className='w-full divide-y divide-gray-300'>
											<thead>
												<tr>
													<th className='p-2 text-center text-base font-bold text-dark'>
														Affiliate
													</th>
													<th className='p-2 text-center text-base font-bold text-dark'>
														Commission
													</th>
													<th className='p-2 text-center text-base font-bold text-dark'>
														Type
													</th>
												</tr>
											</thead>

											<tbody className='divide-y divide-gray-300'>
												{payouts.map((row, key) => (
													<tr key={key}>
														<td className='p-2 text-center text-base font-normal text-dark/70'>
															<i className='bi bi-check-circle-fill mr-1'></i>
															{row.name}
														</td>
														<td className='p-2 text-center text-base font-bold text-dark/70'>
															{format.currency(row.unpaidPayouts)}
														</td>
														<td className='p-2 text-center text-base font-normal text-dark/70'>
															{row.payoutType}
														</td>
													</tr>
												))}

												<tr>
													<td className='p-2 text-center text-base font-bold text-dark'>
														Store Credit:
													</td>
													<td></td>
													<td className='p-2 text-center text-base font-bold text-dark'>
														{format.currency(total)}
													</td>
												</tr>

												<tr>
													<td className='p-2 text-center text-base font-bold text-dark'>
														Tremendous:
													</td>
													<td></td>
													<td className='p-2 text-center text-base font-bold text-dark'>
														{format.currency(0)}
													</td>
												</tr>

												<tr>
													<td className='p-2 text-center text-base font-bold text-dark'>
														Total:
													</td>
													<td></td>
													<td className='p-2 text-center text-base font-bold text-dark'>
														{format.currency(total)}
													</td>
												</tr>
											</tbody>
										</table>
									</div>

									<button
										type='button'
										onClick={onSubmit}
										className='btn w-full gap-3 rounded-md bg-primary p-4 text-sm font-semibold text-white'
									>
										Send payouts
										<i className='bi bi-send'></i>
									</button>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>,
		modalRef.current
	);
};
