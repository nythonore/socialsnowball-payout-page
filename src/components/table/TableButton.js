import { Menu } from '@headlessui/react';

export const TableButton = ({ countPending, onConfirmPayout }) => {
	return (
		<div className='flex flex-wrap items-center gap-2 lg:gap-1'>
			<Menu as='div' className='lg:relative lg:inline-block'>
				<Menu.Button className='btn rounded-[4px] bg-primary px-2 py-1 text-sm text-white'>
					Sort by
					<i className='bi bi-caret-down-fill text-xs'></i>
				</Menu.Button>

				<Menu.Items className='absolute mt-3 origin-top-right divide-y divide-gray-300 bg-white shadow-sm lg:left-0 lg:w-52'>
					<Menu as='div' className='lg:relative lg:inline-block'>
						<Menu.Button className='block w-full cursor-pointer px-4 py-1.5 text-left text-base font-medium text-dark'>
							Revenue Generated
						</Menu.Button>

						<Menu.Items className='absolute origin-top-right divide-y divide-gray-300 bg-white shadow-sm lg:left-[220px] lg:top-0 lg:w-52'>
							<Menu.Item
								as='div'
								className='block w-full cursor-pointer px-4 py-1.5 text-base font-medium text-dark'
							>
								Highest first
							</Menu.Item>
							<Menu.Item
								as='div'
								className='block w-full cursor-pointer px-4 py-1.5 text-base font-medium text-dark'
							>
								Lowest first
							</Menu.Item>
						</Menu.Items>
					</Menu>

					<Menu as='div' className='lg:relative lg:inline-block'>
						<Menu.Button className='block w-full cursor-pointer px-4 py-1.5 text-base font-medium text-dark'>
							Most Recent Referral
						</Menu.Button>

						<Menu.Items className='absolute origin-top-right divide-y divide-gray-300 bg-white shadow-sm lg:left-[220px] lg:top-0 lg:w-52'>
							<Menu.Item
								as='div'
								className='block w-full cursor-pointer px-4 py-1.5 text-base font-medium text-dark'
							>
								Newest first
							</Menu.Item>
							<Menu.Item
								as='div'
								className='block w-full cursor-pointer px-4 py-1.5 text-base font-medium text-dark'
							>
								Oldest first
							</Menu.Item>
						</Menu.Items>
					</Menu>
				</Menu.Items>
			</Menu>

			<Menu as='div' className='relative inline-block'>
				<Menu.Button className='btn rounded-[4px] bg-primary px-2 py-1 text-sm text-white'>
					Filter by
					<i className='bi bi-caret-down-fill text-xs'></i>
				</Menu.Button>

				<Menu.Items className='absolute mt-3 origin-top-right divide-y divide-gray-300 bg-white shadow-sm lg:left-0 lg:w-52'>
					<Menu.Item
						as='div'
						className='block w-full cursor-pointer px-4 py-1.5 text-base font-medium text-dark'
					>
						All pending payouts
					</Menu.Item>
					<Menu.Item
						as='div'
						className='block w-full cursor-pointer px-4 py-1.5 text-base font-medium text-dark'
					>
						Ready payouts
					</Menu.Item>
					<Menu.Item
						as='div'
						className='block w-full cursor-pointer px-4 py-1.5 text-base font-medium text-dark'
					>
						No leaks
					</Menu.Item>
				</Menu.Items>
			</Menu>

			<Menu as='div' className='relative inline-block'>
				<Menu.Button className='btn rounded-[4px] bg-primary px-2 py-1 text-sm text-white'>
					Action <i className='bi bi-caret-down-fill text-xs'></i>
				</Menu.Button>

				<Menu.Items className='absolute mt-3 origin-top-right divide-y divide-gray-300 bg-white shadow-sm lg:left-0 lg:w-52'>
					<Menu.Item
						as='div'
						className='block w-full cursor-pointer px-4 py-1.5 text-base font-medium text-dark'
					>
						Mark as paid
					</Menu.Item>
					<Menu.Item
						as='div'
						className='block w-full cursor-pointer px-4 py-1.5 text-base font-medium text-dark'
					>
						Reject
					</Menu.Item>
					<Menu.Item
						as='div'
						onClick={onConfirmPayout}
						className='block w-full cursor-pointer px-4 py-1.5 text-base font-medium text-dark'
					>
						Send payouts
					</Menu.Item>
				</Menu.Items>
			</Menu>

			<p className='text-[15px] text-dark-light lg:px-1'>
				{countPending} pending payouts
			</p>
		</div>
	);
};
