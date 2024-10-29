import React, { useState } from 'react';

const FAQ = () => {
	const [openQuestion, setOpenQuestion] = useState(null);

	const toggleQuestion = (index) => {
		setOpenQuestion(openQuestion === index ? null : index);
	};

	const faqData = [
		{
			question: 'When will you restock the treats?',
			answer: "We know your pup has been counting down! We restock treats every month, so your furry friend won't have to wait too long.",
		},
		{
			question: 'What is your return policy?',
			answer: "If your pup gives us 'the look' of disapproval, you can return any item within 30 days. Just make sure it's still chew-free!",
		},
		{
			question: 'How do I return or exchange my order?',
			answer: "Just like a game of fetch! Send the product back to us, and we'll replace it. No slobber, please.",
		},
		{
			question: 'When will my order ship?',
			answer: 'Our team of speedy greyhounds will have your order out the door within 2-5 business days! Tracking info will be emailed so you can follow the journey.',
		},
		{
			question: 'How can my pup become a brand ambassador?',
			answer: 'Does your dog have that star power? Head over to our Ambassador Program page and let us know! We love dogs who can pose, pout, and play.',
		},
		{
			question: 'Do you have items for “extra chewy” pups?',
			answer: "Absolutely! Our products are built tough—tested by the most determined chewers out there. Perfect for dogs who think they're part T-Rex.",
		},
		{
			question: 'Can I order gear for a pup party?',
			answer: 'Yes! We can help your doggo squad look their best. Reach out, and we’ll set up a bulk order for your bark-worthy event.',
		},
	];

	return (
		<section className='bg-gray-50 py-12 uppercase mt-8 mb-8'>
			<div className='max-w-7xl mx-auto px-4 text-center'>
				<h2 className='text-3xl font-bold mb-6 text-gray-600'>FREQUENT QUESTIONS</h2>
				<p className='text-gray-600 mb-12'>Everything you (and your dog) need to know!</p>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					{faqData.map((item, index) => (
						<div key={index} className='text-left'>
							<div className='flex justify-between items-center py-4 cursor-pointer border-b border-gray-300' onClick={() => toggleQuestion(index)}>
								<p className='font-semibold'>{item.question}</p>
								<span className={`text-xl transition-transform duration-300 ${openQuestion === index ? '-rotate-180' : 'rotate-90'}`}>{openQuestion === index ? '-' : '+'}</span>
							</div>

							<div className={`overflow-hidden transition-all duration-300 ease-in-out ${openQuestion === index ? 'max-h-40' : 'max-h-0'}`}>
								<div className='bg-gray-100 p-4 rounded-md tracking-wide leading-relaxed text-sm text-gray-700 mt-2'>{item.answer}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FAQ;
