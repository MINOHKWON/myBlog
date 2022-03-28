import { Fade, Slide } from 'react-awesome-reveal';

const Footer = (props: any) => {
	if (!props.data) return null;

	return (
		<footer>
			<div className='row'>
				<Fade direction='down'>
					<div className='twelve columns'>
						<ul className='social-links'>
							{props.data.social.map((network: any) => {
								return (
									<li key={network.name}>
										<a href={network.url}>
											<i className={network.className}></i>
										</a>
									</li>
								);
							})}
						</ul>

						<ul className='copyright'>
							<li>&copy; Copyright 2021 Nordic Giant</li>
							<li>
								Design by{' '}
								<a title='Styleshout' href='http://www.styleshout.com/'>
									Styleshout
								</a>
							</li>
						</ul>
					</div>
				</Fade>

				<div id='go-top'>
					<a className='smoothscroll' title='Back to Top' href='#home'>
						<i className='icon-up-open'></i>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
