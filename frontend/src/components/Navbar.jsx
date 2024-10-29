import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Menu01Icon from '../assets/menu_icon';
import Cancel01Icon from '../assets/cross_icon';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div className='sticky top-0 z-50 bg-white text-sm tracking-widest'>
			<div className='flex justify-between items-center p-2 py-4 sm:mx-12 '>
				<Link to={'/'}>
					<p className=' flex  rubik-wet-paint-regular text-2xl items-center tracking-widest'>BARK & BRAWL</p>
				</Link>
				<ul className='hidden md:flex gap-2 md:gap lg:gap-12 tracking-widest'>
					<NavLink to={'/'}>
						<p className='hover-effect'>HOME</p>
					</NavLink>
					<NavLink to={'/shop'}>
						<p className='hover-effect'>SHOP</p>
					</NavLink>
					<NavLink to={'/about'}>
						<p className='hover-effect'>ABOUT</p>
					</NavLink>
					<NavLink to={'/contact'}>
						<p className='hover-effect'>CONTACT</p>
					</NavLink>
				</ul>

				<div className='flex gap-4 items-center'>
					<Link to={'/barkpack'} className='hidden md:flex'>
						BARKPACK (0)
					</Link>
					<Menu01Icon color='black' className=' md:hidden' onClick={() => setIsOpen(!isOpen)} />
				</div>

				{/* --------------The SideBar Menu for Mobile Screens--------------------------- */}

				<div className={`absolute right-0 bottom-0 top-0  transition-all bg-white ${isOpen ? 'w-0' : 'w-full'}`}>
					<div className='flex flex-col gap-4 pl-4 py-2 pt-8 bg-white'>
						<div className='flex justify-end pr-4' onClick={() => setIsOpen(!isOpen)}>
							<Cancel01Icon color='black' className='flex justify-end' />
						</div>

						<NavLink to={'/'} className='pb-2 border-b' onClick={() => setIsOpen(!isOpen)}>
							<p>HOME</p>
						</NavLink>
						<NavLink to={'/shop'} className='pb-2 border-b' onClick={() => setIsOpen(!isOpen)}>
							<p>SHOP</p>
						</NavLink>
						<NavLink to={'/barkpack'} className='pb-2 border-b' onClick={() => setIsOpen(!isOpen)}>
							<p>BARKPACK (0)</p>
						</NavLink>
						<NavLink to={'/about'} className='pb-2 border-b' onClick={() => setIsOpen(!isOpen)}>
							<p>ABOUT</p>
						</NavLink>
						<NavLink to={'/contact'} className='pb-2 border-b' onClick={() => setIsOpen(!isOpen)}>
							<p>CONTACT</p>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
