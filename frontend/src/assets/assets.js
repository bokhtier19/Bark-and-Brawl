import logo from './logo.png';
import Hero_1 from './Hero_1.webp';
import Hero_2 from './Hero_2.webp';
import Hero_3 from './Hero_3.webp';
import Inspire_1 from './Inspire_1.webp';
import Inspire_2 from './Inspire_2.webp';
import Inspire_3 from './Inspire_3.webp';
import Gloves_1 from './Gloves_1.jpg';
import Gloves_2 from './Gloves_2.jpg';
import Gloves_3 from './Gloves_3.jpg';
import Headguard_1 from './Headguard_1.jpg';
import Headguard_2 from './Headguard_2.jpg';
import Headguard_3 from './Headguard_3.jpg';
import Headguard_4 from './Headguard_4.jpg';
import Robes_1 from './Robes_1.jpg';
import Robes_2 from './Robes_2.jpg';
import GlovesAndHeadguard_2 from './GlovesAndHeadguard_2.jpg';
import MouthGuard_1 from './MouthGuard_1.jpg';
import ChewToy_1 from './ChewToy_1.jpg';
import combinedGear from './combinedGear.jpg';
import contact_page from './contact_page.webp';
import helmetImage1 from './helmetImage1.webp';
import helmetImage2 from './helmetImage2.webp';

export const assets = { logo, Hero_1, Hero_2, Hero_3, combinedGear, helmetImage1, helmetImage2, contact_page, Inspire_1, Inspire_2, Inspire_3, Gloves_1, Gloves_2, Gloves_3, ChewToy_1, Headguard_1, Headguard_2, Headguard_3, Headguard_4, GlovesAndHeadguard_2, Robes_1, Robes_2, MouthGuard_1 };

export const hero_slides = [
	{
		image: Hero_1,
		dialog: 'Bark Hard,Fight Harder!',
	},

	{
		image: Hero_2,
		dialog: 'Paws Up, Gloves On – It’s Go Time!',
	},
	{
		image: Hero_3,
		dialog: 'Barking up the Wrong Tree? Meet Your Match!',
	},
];

export const bestsellers = [
	{
		image: Gloves_1,
		name: 'Ruff & Tumble Gloves',
		price: 99.0,
		bestsellers: true,
		new: false,
	},
	{
		image: Headguard_3,
		name: 'The Barkinator Headguard',
		price: 85.0,
		bestsellers: false,
		new: true,
	},
	{
		image: Robes_2,
		name: 'Heavyweight Howler Robe',
		price: 65.0,
		bestsellers: true,
		new: true,
	},
	{
		image: Gloves_3,
		name: 'Knuckle Busters Gloves',
		price: 48.0,
		bestsellers: false,
		new: false,
	},
];

export const reviews = [
	{
		Review: "Best chew toy ever—lasted a whole hour! That's a record! Definately waiting for another half a dozen to be delivered.",
		Reviewer: 'Tank the Bulldog',
	},
	{
		Review: "Wore the Paw Pounders gloves to the park, and now everyone calls me 'Champ.' Worth every treat!",
		Reviewer: 'Bella the Boxer',
	},
	{
		Review: "Finally, a vest that makes me look as tough as I feel. My human's friends are scared of me now.",
		Reviewer: 'Diesel the Rottweiler',
	},
	{
		Review: 'Perfect for backyard wrestling. No opponent (or garden hose) stands a chance!',
		Reviewer: 'Rocky the Beagle',
	},
	{
		Review: 'My hooman says I look intimidating, but all the neighborhood pups still just want to play. Mission half accomplished.',
		Reviewer: 'Shadow the German Shepherd',
	},
	{
		Review: 'Took my first barkboxing class in full gear, and paws down, I crushed it. Ready for round two!',
		Reviewer: 'Luna the Pitbull',
	},
	{
		Review: 'Gave the leash a tug, and it held strong! I guess my escape artist days are over.',
		Reviewer: 'Buster the Husky',
	},
	{
		Review: 'The headgear is a hit! Protects my noggin when I dive into the bushes at full speed. 10/10.',
		Reviewer: 'Max the Golden Retriever',
	},
];

export const allproducts = [
	{
		image: Gloves_1,
		name: 'Ruff & Tumble Gloves',
		price: 99.0,
		bestsellers: true,
		new: false,
	},
	{
		image: Headguard_3,
		name: 'The Barkinator Headguard',
		price: 85.0,
		bestsellers: false,
		new: true,
	},
	{
		image: Robes_2,
		name: 'Heavyweight Howler Robe',
		price: 65.0,
		bestsellers: true,
		new: true,
	},
	{
		image: Gloves_3,
		name: 'Knuckle Busters Gloves',
		price: 48.0,
		bestsellers: false,
		new: false,
	},
	{
		image: ChewToy_1,
		name: 'Jaw Jammer Chew Toys',
		price: 58.0,
		bestsellers: false,
		new: true,
	},
	{
		image: Headguard_1,
		name: 'Comfort Head Guard',
		price: 25.0,
		bestsellers: true,
		new: false,
	},
	{
		image: Headguard_4,
		name: 'Durable Leash',
		price: 35.0,
		bestsellers: true,
		new: true,
	},
	{
		image: MouthGuard_1,
		name: 'Paw-Tection Headguard',
		price: 120.0,
		bestsellers: false,
		new: true,
	},
	{
		image: Robes_1,
		name: 'Non-Slip Pet Bowl',
		price: 15.0,
		bestsellers: false,
		new: false,
	},
	{
		image: combinedGear,
		name: 'Interactive Fetch Toy',
		price: 30.0,
		bestsellers: true,
		new: false,
	},
];
