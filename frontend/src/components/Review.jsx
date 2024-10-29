import React, { useState } from 'react';
import { reviews } from '../assets/assets';
import ArrowLeft02Icon from '../assets/arrow_left';
import ArrowRight02Icon from '../assets/arrow_right';

const Review = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [slideDirection, setSlideDirection] = useState('right');
	const [showReview, setShowReview] = useState(true); // new state for showing review

	const handlePrev = () => {
		setSlideDirection('left');
		setShowReview(false); // hide to reset animation
		setTimeout(() => {
			setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
			setShowReview(true); // show after changing review
		}, 10); // small delay to allow re-render
	};

	const handleNext = () => {
		setSlideDirection('right');
		setShowReview(false);
		setTimeout(() => {
			setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
			setShowReview(true);
		}, 10);
	};

	const goToReview = (index) => {
		setSlideDirection(index > currentIndex ? 'right' : 'left');
		setShowReview(false);
		setTimeout(() => {
			setCurrentIndex(index);
			setShowReview(true);
		}, 10);
	};

	return (
		<div className='flex justify-center'>
			<div className='border mt-10 max-w-7xl'>
				<div className='flex flex-col justify-center items-center text-center'>
					<p className='uppercase text-gray-600 text-center mt-4 text-xl'>"Two Paws Up: What Our Furry Fighters Are Barking About!"</p>
					<div className='h-px mt-2 bg-gray-600 w-1/3'></div>
				</div>
				<div className='flex group flex-col items-center mt-8 mb-8 mx-4 p-8 w-full'>
					<div className='flex justify-around w-full text-center items-center'>
						<button aria-label='Previous Review' className='flex items-center cursor-pointer bg-gray-500 py-2 px-2 rounded-full active:bg-white' onClick={handlePrev}>
							<ArrowLeft02Icon color='white' className='bg-gray-500 rounded-full arrow-effect-left' />
						</button>

						<div
							className={`mt-4 w-3/5 min-h-80 items-center justify-center transition-all duration-500 ease-in-out transform
                            ${showReview ? (slideDirection === 'right' ? 'slide-in-right' : 'slide-in-left') : ''}`}>
							{showReview && (
								<>
									<p className='uppercase font-bold text-balance text-2xl md:text-4xl w-full fjalla-one-regular tracking-wider md:leading-relaxed'>"{reviews[currentIndex].Review}"</p>
									<p className='text-gray-500 mt-8 uppercase tracking-widest'>--{reviews[currentIndex].Reviewer}</p>
								</>
							)}
						</div>

						<button aria-label='Next Review' className='flex items-center cursor-pointer bg-gray-500 py-2 px-2 rounded-full active:bg-white' onClick={handleNext}>
							<ArrowRight02Icon color='white' className='arrow-effect-right' />
						</button>
					</div>

					<div className='flex justify-center mt-8 space-x-2'>
						{reviews.map((_, index) => (
							<span role='button' tabIndex='0' aria-label={`Go to review ${index + 1}`} key={index} onClick={() => goToReview(index)} className={`h-2 w-2 rounded-full cursor-pointer ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-300'}`}></span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Review;
