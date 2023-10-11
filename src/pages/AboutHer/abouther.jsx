import React, { useEffect } from 'react';
import { Layout } from '../../components/layout/layout';
import { Jumbotron } from '../../components/Jumbotron/jumbotron';
import { useInView } from 'react-intersection-observer';

export function AboutHer() {
	const { ref: div1Ref, inView: div1Visible } = useInView({ triggerOnce: true });
	const { ref: div2Ref, inView: div2Visible } = useInView({ triggerOnce: true });
	const { ref: div3Ref, inView: div3Visible } = useInView({ triggerOnce: true });
	const { ref: div4Ref, inView: div4Visible } = useInView({ triggerOnce: true });
	const { ref: div5Ref, inView: div5Visible } = useInView({ triggerOnce: true });
	const { ref: div6Ref, inView: div6Visible } = useInView({ triggerOnce: true });
	const { ref: div7Ref, inView: div7Visible } = useInView({ triggerOnce: true });

	useEffect(() => {
		const blurDivs = document.querySelectorAll('.blur-load');
		blurDivs.forEach((div) => {
			const img = div.querySelector('img');
			function loaded() {
				div.classList.add('loaded');
			}

			if (img.complete) {
				loaded();
			} else {
				img.addEventListener('load', loaded);
			}
		}, []);
	}, []);

	return (
		<Layout>
			<div className="h-[30px] sm:h-0"></div>

			<div className="h-screen flex items-center justify-center animate-slideInUp">
				<div className="flex justify-center">
					<Jumbotron />
				</div>
			</div>

			<div className="flex justify-center sm:text-[18px] py-5">
				<div id="details-row-container" className="flex flex-col-reverse md:flex-row bg-primary mb-5 mx-5 max-w-[850px]">
					<div
						ref={div1Ref}
						id="text-container"
						className={`opacity-0 flex justify-center items-center bg-second text-first p-5 rounded-lg shadow-md shadow-zinc-400 md:grow md:mr-5 ${
							div1Visible ? 'animate-slideInLeft delay-1000' : ''
						}`}
					>
						<p className="indent-5 text-justify">
							Not a day goes by where she isn't suggesting that we try something new. From food to a new activity, she allows me
							to get out of my comfort zone. I used to avoid seafood, and yet with her persistance, it is now one of my favorite
							types of food. I was not a fan of Disneyland or Disney in general, and now I practicaly cannot live without visiting
							the park. I never cared for live plays, yet now I have a deep appreciation for them and am constantly singing show
							tunes. This is just the tip of the iceberg, but her willingness to experiment and try new things has influenced me
							for the better.
						</p>
					</div>

					<div
						ref={div2Ref}
						className={`opacity-0 flex flex-col justify-center items-center bg-second p-5 mb-5 md:mb-0 rounded-lg shadow-md shadow-zinc-400 min-w-[300px] ${
							div2Visible ? 'animate-slideInRight delay-1000' : ''
						}`}
					>
						<div className="blur-load bg-[url('https://ik.imagekit.io/sp7l57yrpo/mbdpics/monch-outgoing-small_RcuTY57TD?updatedAt=1696404052811')]">
							<img
								src="https://ik.imagekit.io/sp7l57yrpo/mbdpics/monch-bar_X1siXMn1F?updatedAt=1696031472358"
								loading="lazy"
								className="w-[250px] sm:w-[300px] border-first border-8 rounded-full"
							/>
						</div>

						<div>
							<p className="font-[ILoveGlitter] text-first text-[40px]">She's outgoing</p>
						</div>
					</div>
				</div>
			</div>

			<div className="flex justify-center sm:text-[18px] py-5">
				<div id="details-row-container" className="flex flex-col md:flex-row mb-5 mx-5 max-w-[850px]">
					<div
						ref={div3Ref}
						className={`opacity-0 flex flex-col justify-center items-center bg-third p-5 md:mr-5 mb-5 md:mb-0 rounded-lg shadow-md shadow-zinc-400 min-w-[300px] ${
							div3Visible ? 'animate-slideInRight sm:animate-slideInLeft delay-1000' : ''
						}`}
					>
						<div className="blur-load bg-[url('https://ik.imagekit.io/sp7l57yrpo/mbdpics/monch-flowers-small_rX_1QkFK8?updatedAt=1696404016662')]">
							<img
								src="https://ik.imagekit.io/sp7l57yrpo/mbdpics/monch-kind_OoVvBUO2G?updatedAt=1696048138040"
								loading="lazy"
								className="w-[250px] sm:w-[300px] border-first border-8 rounded-full"
							/>
						</div>

						<div>
							<p className="font-[ILoveGlitter] text-first text-[40px]">She's quirky</p>
						</div>
					</div>

					<div
						ref={div4Ref}
						id="text-container"
						className={`opacity-0 flex justify-center items-center bg-third text-first p-5 rounded-lg shadow-md shadow-zinc-400 grow ${
							div4Visible ? 'animate-slideInLeft sm:animate-slideInRight delay-1000' : ''
						}`}
					>
						<p className="indent-5 text-justify">
							There is not a single thing about her that I can't appreciate. The way she adds little twists to familiar words or
							phrases of ours. The face she makes when shes trying to pinch me, right after I constantly annoyed her. The way she
							has random spasms of dancing energy, at the most random moments. I can't help but love and appreciate her more when
							she just acts herself.
						</p>
					</div>
				</div>
			</div>

			<div className="flex justify-center sm:text-[18px] py-5">
				<div id="details-row-container" className="flex flex-col-reverse md:flex-row bg-primary mb-5 mx-5 max-w-[850px]">
					<div
						ref={div5Ref}
						id="text-container"
						className={`opacity-0 flex justify-center items-center bg-fourth text-first p-5 rounded-lg shadow-md shadow-zinc-400 sm:grow md:mr-5 ${
							div5Visible ? 'animate-slideInLeft delay-1000' : ''
						}`}
					>
						<p className="indent-5 text-justify">
							Moni is by far the most generous and selfless person I know. Regardless of who the person or thing is, she treats
							everyone with the utmost respect that is deserved. If someone is in need, she finds a way to get them help. If there
							are animals that need care, she does her best to help them out too. Her ability to put others before herself is
							inspirational, and it makes me proud to be a part of her life.
						</p>
					</div>

					<div
						ref={div6Ref}
						className={`opacity-0 flex flex-col justify-center items-center bg-fourth p-5 mb-5 md:mb-0 rounded-lg shadow-md shadow-zinc-400 min-w-[300px] ${
							div6Visible ? 'animate-slideInRight delay-1000' : ''
						}`}
					>
						<div className="blur-load bg-[url('https://ik.imagekit.io/sp7l57yrpo/mbdpics/cats-kind-small_XRThF5au3?updatedAt=1696403873638')]">
							<img
								src="https://ik.imagekit.io/sp7l57yrpo/mbdpics/monch-kind_T48x_Oa42?updatedAt=1696048193206"
								loading="lazy"
								className="w-[250px] sm:w-[300px] border-first border-8 rounded-full"
							/>
						</div>

						<div className="">
							<p className="font-[ILoveGlitter] text-first text-[40px]">She's kind</p>
						</div>
					</div>
				</div>
			</div>

			<div className="flex justify-center">
				<div
					ref={div7Ref}
					className={`opacity-0 flex justify-center items-center sm:text-[18px] bg-fifth text-first p-5 m-5 rounded-lg shadow-md shadow-zinc-400 max-w-[850px] ${
						div7Visible ? 'animate-fadeIn delay-1000' : ''
					}`}
				>
					<p className="indent-5 text-justify">
						These are only a few of my favorite qualities of her, and most people who don't know these things already, are missing
						out. She is smart, curious, sociable, dependable, considerate, and so much more. There aren't enough phrases that I
						could list here that could describe how great of a person she is. She is bound to make a difference in this world, and
						she is already on her way there. From Bachelors to Masters, the possibilities for her are endless, and I am proud that
						I get see her succeed.
					</p>
				</div>
			</div>
		</Layout>
	);
}
