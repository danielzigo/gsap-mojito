import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { navLinks } from '../../constants'

const Navbar = () => {
	useGSAP(() => {
		const navTween = gsap.timeline({
			scrollTrigger: {
				trigger: 'nav',
				start: 'bottom top', // i.e. start: '[element position] [viewport position]'
			}
		});

		navTween.fromTo('nav', { backgroundColor: 'transparent' }, {
			backgroundColor: 'rgba(0, 0, 0, 0.5)',
			backgroundFilter: 'blur(10px)',
			duration: 1,
			ease: 'power1.inOut'
		});
	}, []);

	return (
		<nav id="nav">
			<div>
				<a href="#home" className="flex items-center gap-2">
					<img src="/images/logo.png" alt="Velvet Pour Logo" className="w-10 h-10" />
					<p>Velvet Pour</p>
				</a>

				<ul>
					{navLinks.map((link) => (
						<li key={link.id as string}>
							<a href={`#${link.id}`}>{link.title}</a>
						</li>
					))}
				</ul>

			</div>
		</nav>
	)
}

export default Navbar