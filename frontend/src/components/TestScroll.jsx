import React, { useRef } from 'react';
import { assets } from '../assets/assets';
import ArrowLeft02Icon from '../assets/arrow_left';
import ArrowRight02Icon from '../assets/arrow_right';
import useInView from './useInView';
const FeaturedProduct = () => {
	// Refs for each image
	const imageRef1 = useRef(null);
	const imageRef2 = useRef(null);
	const imageRef3 = useRef(null);

	// Check if each image is in view
	const inView1 = useInView(imageRef1);
	const inView2 = useInView(imageRef2);
	const inView3 = useInView(imageRef3);

	return (
		<div className='mt-20 mb-10'>
			<div className='flex justify-center text-center '>
				<p className='uppercase font-bold text-center max-w-6xl text-2xl md:text-4xl w-full fjalla-one-regular tracking-wide md:leading-relaxed'>Step Right Up to Our Most Unleashed Picks: Dog Gear That’ll Make Your Pup Howl with Style!</p>
			</div>

			{/* Product Section */}
			<div className='text-white py-12'>
				<div className='max-w-[90%] mx-auto flex flex-col md:flex-row items-center'>
					<div className='w-full md:w-1/3 px-4 mb-8 md:mb-0'>
						<h2 className='font-bold mb-4 text-gray-700 uppercase text-base tracking-widest'>Barktective Helmet</h2>
						<p className='text-gray-500 mb-6'>The Barktective Helmet is military-grade headgear, designed to keep your dog alert and stylish, ready for any street mission.</p>
						<button className='flex gap-4 items-center uppercase text-gray-500 tracking-wider text-xs'>
							<span className='button-hover-effect'>View Full Product </span>
							<ArrowRight02Icon width={20} color='gray-500' className='arrow-effect-right' />
						</button>
					</div>

					{/* Individually Positioned Image Gallery Section */}
					<div className='w-full md:w-2/3 grid grid-cols-3 gap-4'>
						{/* First Image */}
						<img ref={imageRef1} src={assets.Headguard_3} alt='Dog Helmet Front View' className={`transition-transform duration-700 ${inView1 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-100'}`} />
						{/* Second Image */}
						<img ref={imageRef2} src={assets.Headguard_2} alt='Dog Helmet Side View' className={`transition-transform duration-700 ${inView2 ? 'translate-y-0 opacity-100' : 'translate-y-40 opacity-100'}`} />
						{/* Third Image */}
						<img ref={imageRef3} src={assets.Headguard_1} alt='Dog Helmet Close-up' className={`transition-transform duration-700 ${inView3 ? 'translate-y-0 opacity-100' : 'translate-y-60  opacity-100'}`} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedProduct;
