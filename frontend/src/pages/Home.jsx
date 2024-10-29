import React from 'react';
import Hero from '../components/Hero';
import Inspiration from '../components/Inspiration';
import BestSeller from '../components/BestSeller';
import Category from '../components/Category';
import Review from '../components/Review';
import FAQ from '../components/FAQs';
import FeaturedProduct from '../components/FeaturedProduct';
import TestScroll from '../components/TestScroll';

const Home = () => {
	return (
		<div>
			<Hero />
			<Inspiration />
			<BestSeller />
			<Category />
			<Review />
			<FeaturedProduct />
			<TestScroll />
			<FAQ />
		</div>
	);
};

export default Home;
