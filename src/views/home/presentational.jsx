// Dependence
import PropTypes from 'prop-types';
//component
import Navbar from '../../components/navbar/container';
//Images
import ReactLogo from '../../assets/reactLogo.png';
import JavaScriptLogo from '../../assets/javascriptLogo.png';
import FigmaLogo from '../../assets/figmaLogo.png';
import XdLogo from '../../assets/xdLogo.png';
//Style
import css from './css.module.scss'

const HomeView = ({ lenguage, themeMode, scroll }) => {
	return (
		<>
			<div className={themeMode === 'dark'
				? ` ${css.hero} ${css.heroDark}`
				: ` ${css.hero} ${css.heroLight}`}
			>

				<div className={`${scroll !== 0 ? `${css.hide}` : null}`}>
					<Navbar />
				</div >

				<div className={css.flex}>
					<div className={css.container}>
						<div className={css.heroImage}>
						</div>
						<div className={css.heroContentLeft}>
							{lenguage === 'es' ? <h2>Desarrollador Frontend</h2> : null}
							{lenguage === 'en' ? <h2>Frontend Developer</h2> : null}
							<ul className={css.box}>
								<li>
									<img src={ReactLogo} alt="React Logo" />
									<span>React</span>
								</li>
								<li>
									<img src={JavaScriptLogo} alt="React Logo" />
									<span>Javascript</span>
								</li>
							</ul>
							<h2 className={css.subTitle}>UI/UX Designer</h2>
							<ul className={css.box}>
								<li>
									<img src={FigmaLogo} alt="React Logo" />
									<span>Figma</span>
								</li>
								<li>
									<img src={XdLogo} alt="React Logo" />
									<span>Adobe XD</span>
								</li>
							</ul>
							{lenguage === 'es' ? <p>El conocimiento y experiencia de ambas areas me dan la capacidad de crear diseños eficientes y agradables tanto para el usuario como para los desarrolladores.</p> : null}

							{lenguage === 'en' ? <p>The knowledge and experience of both areas have given me the ability to create efficient and pleasant designs for both the user and the developers.</p> : null}
						</div>

					</div>
				</div>
			</div>
			<div className={css.down}>

			</div>
		</>

	);
}

HomeView.propTypes = {
	lenguage: PropTypes.string.isRequired,
	themeMode: PropTypes.string.isRequired,
	scroll: PropTypes.number.isRequired,
};

export default HomeView;