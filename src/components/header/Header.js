export const Header = ({ children, title }) => {
	return (
		<div className='flex flex-wrap items-center justify-between gap-5'>
			<h2 className='text-2xl font-semibold text-dark-light'>{title}</h2>
			<div className='flex flex-wrap items-center gap-4'>{children}</div>
		</div>
	);
};
