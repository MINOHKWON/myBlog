import Zmage from 'react-zmage';
import { Fade } from 'react-awesome-reveal';

const Portfolio = (props: any) => {
	let id = 0;
	if (!props.data) return null;

	return (
		<section id='portfolio'>
			<Fade direction='left' duration={1000}>
				<div className='row'>
					<div className='twelve columns collapsed'>
						<h1>Check Out Some of My Works.</h1>

						<div id='portfolio-wrapper' className='bgrid-quarters s-bgrid-thirds cf'>
							{props.data.projects.map((projects: any) => {
								let projectImage = 'images/portfolio/' + projects.image;

								return (
									<div key={id++} className='columns portfolio-item'>
										<div className='item-wrap'>
											<Zmage alt={projects.title} src={projectImage} />
											<div style={{ textAlign: 'center' }}>{projects.title}</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</Fade>
		</section>
	);
};

export default Portfolio;
