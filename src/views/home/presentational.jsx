// Dependence
import PropTypes from 'prop-types';
//component
import Navbar from '../../components/navbar/container';
import HomeContentMobile from '../../homeContent/homeMobileContent';
import MainRecomendations from '../../content/Recomendations';
import RecomendationsBox from '../../components/RecomendationBox/presentational'
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

				<section className={css.flex}>
					<div className={css.container}>
						<div className={css.heroImage}>
						</div>
						<div className={css.heroContentLeft}>
							<h2 className={css.subTitle}>
								{lenguage === 'es' ? 'Desarrollador Frontend' : null}
								{lenguage === 'en' ? 'Frontend Developer' : null}
							</h2>
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
							<h2 className={css.subTitle}>
								{lenguage === 'es' ? 'Diseñador UX/UI' : null}
								{lenguage === 'en' ? 'UX/UI Designer' : null}
							</h2>
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
				</section>
			</div>
			<div className={css.down}>
				<div className={css.mobileContent}>
					<HomeContentMobile />
				</div>

				<section>

					<h2
						className={`
            ${themeMode === 'dark' && `${css.subTitle} ${css.dark}`}
            ${themeMode === 'light' && `${css.subTitle} ${css.light}`}`}
					>
						<>
							<i className="fas fa-star"></i>
							<i className="fas fa-star"></i>
							<i className="fas fa-star"></i>
						</>
						{lenguage === 'es' ? 'Recomendaciones' : null}
						{lenguage === 'en' ? 'Recommendations' : null}
					</h2>
					<div className={css.recomendationsContainer}>
						{MainRecomendations.map((item)=>(
						<RecomendationsBox
							key={item.name}
							textEn={item.textEn}
							textEs={item.textEs}
							userImage={item.userImage}
							name={item.name}
							profession={item.profession}
						/>
						))}

					</div>
				</section>
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