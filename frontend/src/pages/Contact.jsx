import React from 'react';
import FAQ from '../components/FAQs';
import { assets } from '../assets/assets';

const Contact = () => {
	return (
		<section className='bg-white text-black p-8 md:p-16 uppercase'>
			<div className='max-w-7xl mx-auto justify-center text-center'>
				<h2 className='text-4xl uppercase fjalla-one-regular font-bold mb-4'>Get in Touch, Top Dog!</h2>
				<p className='flex text-lg mb-8 mt-8 uppercase text-gray-700 fjalla-one-regular w-full text-balance'>Whether you've got a question, a bark of praise, or just want to chat, we're all ears (and paws)! Reach out, and one of our human pack members will fetch a response ASAP.</p>

				{/* Contact Information */}

				<div className='flex justify-around border  p-8 mt-8 mb-8'>
					<div>
						<img src={assets.contact_page} alt='' width={500} />
					</div>

					<div className='flex flex-col justify-center items-center gap-6 mb-10'>
						<div>
							<p className='font-semibold text-gray-700'>Doghouse Headquarters:</p>
							<p className='text-gray-700'>123 Ruff St., Barksville, Dogland</p>
						</div>
						<div>
							<p className='font-semibold text-gray-700'>Phone:</p>
							<p className='text-gray-700'>(555) WOOF-123 (Yes, it’s a real number!)</p>
						</div>
						<div>
							<p className='font-semibold text-gray-700'>Email:</p>
							<p className='text-gray-700'>bark@streetfighterdogs.com</p>
						</div>
					</div>
				</div>

				{/* Contact Form */}
				<form className='space-y-4 text-left max-w-7xl border  p-8 text-gray-700 uppercase'>
					<div>
						<label className='block font-semibold mb-1 uppercase' htmlFor='name'>
							Your Name (or your pup's):
						</label>
						<input type='text' id='name' className='w-full p-2  uppercase text-xs tracking-wider border border-gray-500 text-white' placeholder='Name here... or just a paw print' />
					</div>
					<div>
						<label className='block font-semibold mb-1' htmlFor='email'>
							Email:
						</label>
						<input type='email' id='email' className='w-full p-2 uppercase text-xs tracking-wider border border-gray-500 text-white' placeholder="What's your human's email?" />
					</div>
					<div>
						<label className='block font-semibold mb-1' htmlFor='message'>
							Message:
						</label>
						<textarea id='message' className='w-full p-2 uppercase text-xs tracking-wider  border border-gray-500 text-white' rows='4' placeholder='Tell us what’s on your mind... or bark it out!'></textarea>
					</div>
					<button type='submit' className='bg-black hover:bg-gray-900 uppercase tracking-wider text-white font-bold py-2 px-6 rounded'>
						Send a Woof
					</button>
				</form>

				<FAQ />

				{/* Fun Footer */}
				<div className='mt-10 text-sm text-gray-900'>
					<p>🐾 *Disclaimer: We may respond with treats, not just answers!* 🐾</p>
					<p>Catch us on social media if email feels too "leash-y" for you!</p>
				</div>
			</div>
		</section>
	);
};

export default Contact;
