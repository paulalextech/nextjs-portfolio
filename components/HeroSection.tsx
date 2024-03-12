'use client';
import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';
import { HiArrowDown } from 'react-icons/hi';

const HeroSection = () => {
	return (
		<section id="home">
			<div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-28">
				<div className="md:w-1/2 md:mt-2">
					<Image
						className="rounded-full shadow-2xl"
						src="/headshot.png"
						alt="photo of PA"
						width={300}
						height={300}
					/>
				</div>
				<div className="md:mt-2 md:w-3/5">
					<h1 className="font-bold text-4xl mt-6 md:text7xl md:mt-0">
						Hi, Im Paul Alex.
					</h1>
					<p className="text-lg mt-4 mb-6 md:text-2xl">
						A {''}
						<span className="font-semibold text-orange-500">
							Software Developer
						</span>
						{''}& Problem solver.
					</p>
					{/* <p>
						This is a self made portfolio using NextJS but of simple layout for
						user speed and experience
					</p> */}
					{/* add tech icons here */}
					<Link
						to="projects"
						className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
						activeClass="active"
						spy={true}
						smooth={true}
						offset={-100}
						duration={500}
					>
						Projects
					</Link>
				</div>
			</div>
			<div className="flex flex-row justify-center">
				<Link
					to="projects"
					activeClass="active"
					spy={true}
					smooth={true}
					offset={-100}
					duration={500}
				>
					<HiArrowDown size={35} />
				</Link>
			</div>
		</section>
	);
};

export default HeroSection;
