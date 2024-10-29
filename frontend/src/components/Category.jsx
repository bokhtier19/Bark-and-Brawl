import React from 'react';
import { assets } from '../assets/assets';

const Category = () => {
	const categoryArray = [
		{ image: assets.Gloves_1, label: 'Ruff & Tumble Gloves' },
		{ image: assets.MouthGuard_1, label: 'Furry Fury Face Mask' },
		{ image: assets.Robes_1, label: 'Heavyweight Howler Robes' },
		{ image: assets.ChewToy_1, label: 'Chew Toy Speed Bags' },
	];

	return (
		<div className='mt-20 mb-20'>
			<div className='text-xl md:text-2xl text-center font-bold text-gray-700'>
				<h1>PRODUCTS WE OFFER</h1>
			</div>
			<div className='relative grid grid-cols-2 md:grid-cols-4 gap-4 p-8'>
				<div className='relative col-span-2 row-span-2 hover:cursor-pointer overflow-hidden'>
					<img src={assets.combinedGear} alt='' className='w-full h-full object-cover transition-transform duration-300 hover:scale-110' />
					<p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fjalla-one-regular leading-loose text-white uppercase tracking-wider p-8 bg-opacity-75 text-center text-2xl md:text-3xl'>"Equip Your Dog for the Streets: Tough Gear, Fierce Style, Ready to Brawl!"</p>
				</div>

				{/* ------------- side product items ----------*/}
				{categoryArray.map((item, index) => (
					<div key={index} className='relative overflow-hidden hover:cursor-pointer'>
						<img src={item.image} alt='' className='w-full h-full object-cover transition-transform duration-300 transform hover:scale-110' />
						<p className='absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-nowrap fjalla-one-regular items-end text-white uppercase p-8 bg-opacity-75 text-sm lg:text-xl'>{item.label}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Category;
