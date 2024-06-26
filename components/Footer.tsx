import React from 'react';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Footer = () => {
	return (
		<footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
			<hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0" />
			<div className="mx-auto p-4 flex flex-col text-center text-neutral-200 md:flex-row md:justify-between">
				<div className="text-slate-950 dark:text-white">
					©2024{' '}
					<Link className="cursor-pointer " to="home">
						PAUL ALEX TECH
					</Link>
				</div>
				<div className="flex flex-row items-center justify-center space-x-3 mb-2">
					<a
						href="https://github.com/paulalextech"
						rel="noreferrer"
						target="_blank"
					>
						<AiOutlineGithub
							className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
							size={30}
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/paul-alex-611a3740/"
						rel="noreferrer"
						target="_blank"
					>
						<AiOutlineLinkedin
							className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
							size={30}
						/>
					</a>
				</div>
			</div>
			<div>
				<button className="text-slate-950 dark:text-white border-style-solid border-2 dark:border-slate-50 border-gray-950 mx-auto flex font-medium px-4 rounded-md uppercase hover:bg-purple-500">
					<Link to="home">Back to Top</Link>
				</button>
			</div>
		</footer>
	);
};

export default Footer;
