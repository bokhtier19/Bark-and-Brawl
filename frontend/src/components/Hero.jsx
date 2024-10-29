import React, { useState } from 'react';
import { hero_slides } from '../assets/assets.js';
import ArrowLeft02Icon from '../assets/arrow_left.tsx';
import ArrowRight02Icon from '../assets/arrow_right.tsx';

const Hero = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const LeftSlide = () => {
		setCurrentIndex(currentIndex === 0 ? hero_slides.length - 1 : currentIndex - 1);
	};

	const RightSlide = () => {
		setCurrentIndex(currentIndex === hero_slides.length - 1 ? 0 : currentIndex + 1);
	};

	const goToReview = (index) => {
		setCurrentIndex(index);
	};

	return (
		<div>
			<div className='group relative border-t border-x'>
				<img src={hero_slides[currentIndex].image} alt='Hero slide' className='w-full h-[250px] md:h-[700px]  xl:h-[950px]  object-cover transition-transform duration-500 ease-in-out' />
				<div className='absolute inset-0 bg-black opacity-0 md:opacity-30 hover:opacity-0'></div>
				<div className='md:absolute inset-0 flex justify-center items-end border-l border-r border-b  md:bg-inherit'>
					<p className='uppercase font-black text-3xl fjalla-one-regular md:text-5xl xl:text-7xl text-white p-4 md:mb-20 md:text-white w-full text-center px-4'>{hero_slides[currentIndex].dialog}</p>
				</div>

				<div className='hidden group-hover:block absolute top-1/2 left-4 px-2 py-2 transform -translate-y-1/2 cursor-pointer bg-gray-800 rounded-full' onClick={LeftSlide}>
					<button>
						<ArrowLeft02Icon color='white' className='arrow-effect-left' />
					</button>
				</div>
				<div className='hidden group-hover:block absolute top-1/2 px-2 py-2 right-4 transform -translate-y-1/2 cursor-pointer bg-gray-800 rounded-full' onClick={RightSlide}>
					<button>
						<ArrowRight02Icon color='white' className='arrow-effect-right' />
					</button>
				</div>
			</div>
			<div className='flex justify-center mt-8 space-x-2'>
				{hero_slides.map((_, index) => (
					<span key={index} onClick={() => goToReview(index)} className={`h-2 w-2 rounded-full cursor-pointer ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-300'}`}></span>
				))}
			</div>
		</div>
	);
};

export default Hero;
