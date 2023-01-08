import clsx from 'clsx';
import PayoutIcon from '../../assets/images/dollar.png';

export const Card = ({ label, value, button, color = 'text-dark-light' }) => {
	return (
		<div className='rounded-lg border border-gray-300 bg-white px-5 pt-4 pb-8'>
			<div className='flex items-center gap-2'>
				<img alt='payout' src={PayoutIcon} className='h-4 w-4 object-contain' />
				<p className='text-sm font-bold capitalize text-dark-light'>{label}</p>
			</div>

			<div className='mt-2 flex items-center justify-between'>
				<p className={clsx('text-2xl font-bold', color)}>{value}</p>
				<div>{button}</div>
			</div>
		</div>
	);
};
