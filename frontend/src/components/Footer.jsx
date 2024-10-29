import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className='Footer flex justify-center bg-black tracking-widest'>
			<div className='flex flex-col justify-center  mt-20 text-white w-[90%]'>
				<div className='flex flex-col gap-8 md:flex-row justify-around text-xs text-white pl-0 p-6 sm:p-8 tracking-widest mb-20 w-full'>
					<div className=''>
						<p className='font-semibold tracking-widest text-sm mb-4'>NAVIGATION</p>
						<ul className='leading-6 flex flex-col'>
							<Link className='roboto-regular'>HOME</Link>
							<Link className='roboto-regular'>ABOUT</Link>
							<Link className='roboto-regular'>CONTACT</Link>
							<Link className='roboto-regular'>SHOP</Link>
						</ul>
					</div>
					<div>
						<p className='font-semibold tracking-widest text-sm mb-4'>FEATURED COLLECTIONS</p>
						<ul className='leading-6 flex flex-col roboto-regular'>
							<Link className='roboto-regular'>BARKPACKS</Link>
							<Link className='roboto-regular'>K9 BITE GUARDS</Link>
							<Link className='roboto-regular'>RUFF & TUMBLE GLOVES</Link>
							<Link className='roboto-regular'>UNDERDOG PAW PROTECTORS</Link>
						</ul>
					</div>
					<div>
						<p className='font-semibold tracking-widest text-sm mb-4'>SUPPORT</p>
						<ul className='leading-6 flex flex-col roboto-regular'>
							<Link className='roboto-regular'>FAQS</Link>
							<Link className='roboto-regular'>SIZE GUIDE</Link>
							<Link className='roboto-regular'>SHIPPING & RETURNS</Link>
							<Link className='roboto-regular'>CONTACT US</Link>
						</ul>
					</div>
				</div>

				<div className='flex  justify-center'>
					<p className='h-px w-[80%] bg-gray-600'></p>
				</div>

				<div className='flex flex-col gap-4 sm:flex-row justify-around py-4 text-xs tracking-widest'>
					<p>2024 &copy; Bark and Brawl </p>
					<p>Privacy Policy</p>
					<p>Terms and Conditions</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
