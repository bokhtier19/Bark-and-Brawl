import React from 'react';
import { bestsellers } from '../assets/assets';

const BestSeller = () => {
	let currency = '$';
	return (
		<div>
			<h1 className='uppercase text-center text-gray-700 mb-10 font-bold'> Our Bestsellers</h1>

			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4'>
				{bestsellers.map((item, index) => (
					<div key={index} className=''>
						<div className='overflow-hidden'>
							<img src={item.image} alt='' className='opacity-100 hover:opacity-85 transition-transform duration-300 transform hover:scale-105' />
						</div>
						<div>
							<p className='font-bold mt-4 text-sm text-center tracking-wider fjalla-one-regular'>{item.name}</p>
							<p className='text-gray-500 text-center mb-4 mt-2'>
								{currency}
								{item.price}.00
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default BestSeller;
