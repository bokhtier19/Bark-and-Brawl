import React from 'react';
import { assets } from '../assets/assets';
import ArrowLeft02Icon from '../assets/arrow_left';
import ArrowRight02Icon from '../assets/arrow_right';

const FeaturedProduct = () => {
	return (
		<div className='mt-20 mb-10'>
			<div className='flex justify-center text-center '>
				<p className='uppercase font-bold text-center max-w-6xl text-2xl md:text-4xl w-full fjalla-one-regular tracking-wide md:leading-relaxed'>Step Right Up to Our Most Unleashed Picks: Dog Gear That’ll Make Your Pup Howl with Style!</p>
			</div>

			{/* ---------------Product one ------------------ */}
			<div className=' text-white py-12'>
				<div className='max-w-[90%] mx-auto flex flex-col md:flex-row items-center'>
					{/* Text Section */}
					<div className='w-full md:w-1/3 px-4 mb-8 md:mb-0'>
						<h2 className='font-bold mb-4 text-gray-700 uppercase text-base tracking-widest'>Barktective Helmet</h2>
						<p className='text-gray-500 mb-6'>The Barktective Helmet is military-grade headgear, designed to keep your dog alert and stylish, ready for any street mission.</p>
						<button className='flex gap-4 items-center uppercase text-gray-500 tracking-wider text-xs'>
							<span className='button-hover-effect'>View Full Product </span>
							<ArrowRight02Icon width={20} color='gray-500' className='arrow-effect-right' />
						</button>
					</div>

					{/* Image Gallery Section */}
					<div className='w-full md:w-2/3 grid grid-cols-3 gap-4'>
						<img src={assets.Headguard_3} alt='Dog Helmet Front View' className=' opacity-90 hover:opacity-100 transition-opacity' />
						<img src={assets.Headguard_2} alt='Dog Helmet Side View' className=' opacity-90 hover:opacity-100 transition-opacity' />
						<img src={assets.Headguard_1} alt='Dog Helmet Close-up' className=' opacity-90 hover:opacity-100 transition-opacity' />
					</div>
				</div>
			</div>
			{/* ---------------Product Two ------------------ */}
			<div className=' text-white py-12'>
				<div className='max-w-[90%] mx-auto flex flex-col md:flex-row-reverse items-center'>
					{/* Text Section */}
					<div className='flex flex-col justify-end w-full md:w-1/3 px-4 mb-8 md:mb-0 text-end'>
						<h2 className='font-bold mb-4 text-gray-700 uppercase text-base tracking-widest'>Paw-some Fight Gloves</h2>
						<p className='text-gray-500 mb-6'> Our Paw-some Fight Gloves are designed for your furry fighter! Made for playful tussles and friendly competitions, these gloves ensure your pup stays safe while having a blast.</p>
						<button className='flex gap-4 items-center justify-end uppercase text-gray-500 tracking-wider text-xs'>
							<span className='button-hover-effect'>View Full Product </span>
							<ArrowRight02Icon width={20} color='gray-500' className='arrow-effect-right' />
						</button>
					</div>

					{/* Image Gallery Section */}
					<div className='w-full md:w-2/3 grid grid-cols-3 gap-4'>
						<img src={assets.Gloves_1} alt='Dog Helmet Front View' className=' opacity-90 hover:opacity-100 transition-opacity' />
						<img src={assets.Gloves_2} alt='Dog Helmet Side View' className=' opacity-90 hover:opacity-100 transition-opacity' />
						<img src={assets.Gloves_3} alt='Dog Helmet Close-up' className=' opacity-90 hover:opacity-100 transition-opacity' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedProduct;
