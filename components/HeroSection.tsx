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
					<h1 className="font-bold sm:text-6xl text-4xl mt-6 md:text-7xl md:mt-0">
						Hi, I`m Paul Alex.
					</h1>
					<p className="text-xl mt-4 mb-2 md:text-3xl">
						A {''}
						<span className="font-semibold text-purple-500">
							Software Developer
						</span>
						{''} & Problem solver.
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
						<GrGraphQl className="text-pink-600" size={60} />
						<SiNextdotjs className="text-slate-950 dark:text-white" size={60} />
						<DiMongodb className="text-green-500" size={60} />
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
