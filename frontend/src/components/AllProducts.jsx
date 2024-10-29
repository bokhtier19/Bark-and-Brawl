import React from 'react';
import { allproducts } from '../assets/assets';

const BestSeller = () => {
	let currency = '$';
	return (
		<div className='flex justify-center mt-10 mb-10'>
			<div className=' flex flex-col max-w-7xl justify-center'>
				<h1 className='uppercase text-center text-gray-700 mb-10 font-bold tracking-widest fjalla-one-regular'>Pawsitively Pawesome Picks!</h1>

				<div className='flex gap-4 uppercase text-gray-700 text-xs max-w-7xl text-center tracking-widest ml-4 mb-4'>
					<p>Category:</p>
					<p>Tactical gear</p>
					<p>PurrTection Gear</p>
				</div>

				<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 px-4'>
					{allproducts.map((item, index) => (
						<div key={index} className=''>
							<div>
								<img src={item.image} alt='' />
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
		</div>
	);
};

export default BestSeller;
