import React from 'react';
import { assets } from '../assets/assets';
import Review from '../components/Review';

const About = () => {
	return (
		<section className=' text-black p-8 md:p-16'>
			<div className='max-w-4xl mx-auto text-center'>
				<h2 className='text-4xl font-bold mb-6 uppercase fjalla-one-regular tracking-wide'>"Dog-tested gear for every showdown!"</h2>
				<p className='text-lg mb-6 text-gray-600'> We believe that every dog deserves to unleash their inner fighter – with gear that’s rugged, stylish, and built for the streets. From protective gloves to custom body armor, our collection is designed to let your dog stand out, stay safe, and show off their personality. Join us in empowering dogs to take on the world, one paw at a time.</p>
				{/* Optional Image */}
				<div className='relative mt-8'>
					<img src={assets.Hero_2} alt='A tough dog in street fighter gear' className='w-full h-auto rounded-lg shadow-lg opacity-90' />
					<div className='absolute inset-0 bg-black opacity-30 '></div>
				</div>

				<Review />
			</div>
		</section>
	);
};

export default About;
