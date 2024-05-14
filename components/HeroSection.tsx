/* eslint-disable react/no-unescaped-entities */
'use client';
import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';
import { HiArrowDown } from 'react-icons/hi';
import { FaNode } from 'react-icons/fa';
import { RiReactjsFill } from 'react-icons/ri';
import { GrGraphQl } from 'react-icons/gr';
import { SiNextdotjs, SiRedux } from 'react-icons/si';
import { DiMongodb } from 'react-icons/di';
import { SiTypescript } from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
import { SiPython } from 'react-icons/si';

const HeroSection = () => {
	return (
		<section id="home">
			<div className="h-screen w-full flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-28">
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
					<h1 className="font-bold sm:text-6xl text-4xl mt-6 md:text-6xl md:mt-0">
						Hi, I'm Paul Alex.
					</h1>
					<p className="text-xl mt-4 mb-2 md:text-3xl">
						A {''}
						<span className="font-semibold text-purple-500">Full-Stack</span>
						{''} Software Developer. I love building things with tech.
					</p>
					{/* <p>
						This is a self made portfolio using NextJS but of simple layout for
						user speed and experience
					</p> */}
					{/* add tech icons here */}
					<div className="flex flex-row gap-4 py-4 mb-4">
						<RiReactjsFill className="text-cyan-400" size={60} />
						<FaNode className="text-green-500 dark:text-white" size={60} />
						<SiTypescript className="text-blue-500" size={60} />
						<SiPython className="text-yellow-300" size={58} />
						<GrGraphQl className="text-pink-600" size={60} />
						<SiNextdotjs className="text-slate-950 dark:text-white" size={60} />
						<DiMongodb className="text-green-500" size={60} />

						{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4 .1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8 .1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3 .1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"/></svg> */}
					</div>

					<Link
						to="projects"
						className="text-slate-950 dark:text-white px-6 py-3 bg-transparent border-style-solid border-2 dark:border-slate-50 border-gray-950 rounded shadow hover:bg-purple-500 cursor-pointer font-medium uppercase"
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
