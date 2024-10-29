import React from 'react';
import { assets } from '../assets/assets';
import ArrowRight02Icon from '../assets/arrow_right';

const Inspiration = () => {
	return (
		<div className='flex flex-col gap-4 lg:flex-row mt-10 mb-10 border border-gray-400 mx-2'>
			<div className='hidden lg:flex w-2/6 justify-center p-12 h-1/4 overflow-hidden'>
				<img src={assets.Inspire_1} alt='' className='' />
			</div>
			<div className='flex flex-col gap-4 text-center justify-around w-full p-2 lg:w-1/2 md:p-4'>
				<h1 className='font-bold uppercase md:leading-relaxed fjalla-one-regular text-2xl md:text-5xl text-center tracking-wide'>Unleash Your Dog’s Street Fighter Spirit with Bark Brawls</h1>
				<p className='text-sm md:text-xl text-gray-600'>At Bark Brawls, we’re not just a shop—we’re a movement for tough pups with street smarts and fighting hearts. Born from our love for dogs and the gritty charm of street combat, we equip dogs with the gear they need to rule the block. Whether your dog’s a scrappy underdog or a fearless heavyweight, our products are built to turn everyday pups into street champions. Learn more about our journey and join the Bark Brawls pack to see how we’re helping dogs everywhere bring their A-game to the streets.</p>
				<div className='flex w-full justify-around mt-4'>
					<button className='flex items-center gap-4 py-2 px-8 bg-black text-white tracking-widest rounded-3xl'>
						<span className='button-hover-effect text-xs'>SHOP ALL</span>
					</button>
					<button className='flex items-center gap-4 py-2 px-8 bg-black text-white tracking-widest rounded-3xl'>
						<span className='button-hover-effect text-xs'>OUR STORY</span>
						<ArrowRight02Icon width={20} className='arrow-effect' />
					</button>
				</div>
			</div>

			<div className='hidden w-2/6 p-12 lg:flex justify-center h-1/4'>
				<img src={assets.Inspire_2} alt='' className='' />
			</div>

			<div className='grid grid-cols-2 gap-4 p-4 lg:hidden w-full'>
				<img src={assets.Inspire_1} alt='' className='w-full' />
				<img src={assets.Inspire_2} alt='' className='w-full' />
			</div>
		</div>
	);
};

export default Inspiration;
