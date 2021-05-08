/* eslint-disable jsx-a11y/anchor-is-valid */
// Dependence
import PropTypes from 'prop-types';
//component
import Navbar from '../../components/navbar/container';
import HomeContentMobile from '../../homeContent/homeMobileContent';
import { MainRecomendations, Recomendations } from '../../content/Recomendations';
import RecomendationsBox from '../../components/RecomendationBox/presentational';
import Modal from '../../components/Modal/index';
import DesignPortfolioBox from '../../components/portfolioDesignBox/presentational';
import { DesignsEn, DesignsEs } from '../../content/Designs';
import AbouMeDesktop from '../../components/AboutMeDesktop/container';
//Images
import ReactLogo from '../../assets/reactLogo.png';
import JavaScriptLogo from '../../assets/javascriptLogo.png';
import FigmaLogo from '../../assets/figmaLogo.png';
import XdLogo from '../../assets/xdLogo.png';
import EliezerLogo from '../../assets/images/eliezerThumb.png';
//Style
import css from './css.module.scss'

const HomeView = ({
	portfolioModal,
	lenguage,
	themeMode,
	scroll,
	openRecomendationModalFn,
	closeRecomendationModalFn,
	closePortfolioModalFn,
	openPortfolioModalFn,
	recomendationModal,
	descriptionDesign,
	imgDesign,
	titleDesign,

}) => {
	return (
		<>
			{recomendationModal &&
				<Modal
					onClose={closeRecomendationModalFn}
					withClose
				>
					<div className={css.modalRecomendationsContainer}>
						{Recomendations.map((item) => (
							<RecomendationsBox
								key={item.name}
								textEn={item.textEn}
								textEs={item.textEs}
								userImage={item.userImage}
								name={item.name}
								profession={item.profession}
								url={item.url}
							/>
						))}
					</div>
				</Modal>}

			{portfolioModal &&
				<Modal
					onClose={closePortfolioModalFn}
					withClose
				>
					<div className={css.modalPortFolio}>
						<div className={css.ext}>
							<h2
								className={`
									${themeMode === 'dark' && `${css.dark}`}
									${themeMode === 'light' && `${css.light}`}`}
							>	{titleDesign}</h2>
							<p
								className={`
									${themeMode === 'dark' && `${css.dark}`}
									${themeMode === 'light' && `${css.light}`}`}
							>{descriptionDesign}</p>
						</div>
						<img src={imgDesign} alt="" />
					</div>
				</Modal>}

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
							<img src={EliezerLogo} alt=""/>
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
							{lenguage === 'es' ? <p>El conocimiento y experiencia de ambas áreas me dan la capacidad de crear diseños eficientes y agradables tanto para el usuario como para los desarrolladores.</p> : null}

							{lenguage === 'en' ? <p>The knowledge and experience of both areas have given me the ability to create efficient and pleasant designs for both the user and the developers.</p> : null}
						</div>
					</div>
				</section>
			</div>
			<div className={css.down}>
				<div className={css.mobileContent}>
					<HomeContentMobile />
				</div>
				<div className={css.desktopContent}>
					<AbouMeDesktop />
				</div>

				<section className={css.recomendations}>
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
						{MainRecomendations.map((item) => (
							<RecomendationsBox
								key={item.name}
								textEn={item.textEn}
								textEs={item.textEs}
								userImage={item.userImage}
								name={item.name}
								profession={item.profession}
								url={item.url}
							/>
						))}
					</div>

					<button
						className={`
            ${themeMode === 'dark' && `${css.verMasButton} ${css.dark}`}
            ${themeMode === 'light' && `${css.verMasButton} ${css.light}`}`}
						onClick={openRecomendationModalFn}
						type='button'
					><i className="fas fa-eye"></i>
						{lenguage === 'es' ? 'Ver Mas' : null}
						{lenguage === 'en' ? 'See More' : null}
					</button>
				</section>

				<section className={css.portfolioDesign}>
					<h2
						className={`
							${themeMode === 'dark' && `${css.subTitle} ${css.dark}`}
							${themeMode === 'light' && `${css.subTitle} ${css.light}`}`}
					>

						{lenguage === 'es' ? 'Diseños UI/UX' : null}
						{lenguage === 'en' ? 'UI/UX Designs' : null}
					</h2>
					<ul className={css.designPortfolio}>
						{lenguage === 'es' ? (
							<>
								{DesignsEs.map((item => (
									<li key={item.id}>
										<DesignPortfolioBox
											openPortfolioModalFn={openPortfolioModalFn}
											id={item.id}
											imgUrl={item.imgUrl}
											title={item.title}
											descriptions={item.descriptions}
										/>
									</li>
								)))}
							</>
						) : null}
						{lenguage === 'en' ? (
							<>
								{DesignsEn.map((item => (
									<li key={item.id}>
										<DesignPortfolioBox
											openPortfolioModalFn={openPortfolioModalFn}
											id={item.id}
											imgUrl={item.imgUrl}
											title={item.title}
											descriptions={item.descriptions}
										/>
									</li>
								)))}
							</>
						) : null}

					</ul>
					<div className={css.btnContainer}>
						<a href='https://www.linkedin.com/in/eliezermasyrubi/'
							className={`
					${css.btn} ${css.blueButton}
				`}>
							{lenguage === 'es' && 'Creemos Algo Juntos!'}
							{lenguage === 'en' && `Let's Work Together`}
						</a>
					</div>
				</section>
				<section className={css.projects}>
					<h2
						className={`
							${themeMode === 'dark' && `${css.subTitle} ${css.dark}`}
							${themeMode === 'light' && `${css.subTitle} ${css.light}`}`}
					>
						{lenguage === 'es' ? 'Proyectos donde he participado' : null}
						{lenguage === 'en' ? 'Projects where I have participated' : null}
					</h2>
					<ul>
						<li>
							<img src="https://palabras.ga/wp-content/uploads/2021/04/image-30-1.png" alt="The Glew WebSite" />
							<div className={css.text}>
								<h3> <a
									className={`
								${themeMode === 'dark' && `${css.dark}`}
								${themeMode === 'light' && `${css.light}`}`}
									href="https://www.theglew.com/" target='blank'>The Glew</a> </h3>
									<p
									className={`
								${themeMode === 'dark' && `${css.dark}`}
								${themeMode === 'light' && `${css.light}`}`}
								>
									{lenguage === 'es' && `Diseñe la interfaz para las aplicaciones web y mobile para la plataforma The Glew, realice prototipos interactivos de ambos diseños, También forme parte del equipo de desarrollo web, en este usamos React Js para el desarrollo del mismo.`}
									{lenguage === 'en' && `I designed the interface for the web and mobile applications for The Glew platform, I made interactive prototypes of both designs, I was also part of the web development team, in this we used React Js for its development.`}

								</p>
					
							</div>
						</li>
						<li>
							<img src="https://palabras.ga/wp-content/uploads/2021/04/image-31.png" alt="Smiles WebSite" />
							<div className={css.text}>
								<h3

								><a className={`
								${themeMode === 'dark' && `${css.dark}`}
								${themeMode === 'light' && `${css.light}`}`} href="https://www.smiles.com.ar/" target='blank'>Smiles</a> </h3>
								<p
									className={`
								${themeMode === 'dark' && `${css.dark}`}
								${themeMode === 'light' && `${css.light}`}`}
								>
									{lenguage === 'es' && `Fuí parte del desarrollo de algunas páginas y emails con diversas tecnologías para el sítio de Smile Airline! estúve con un gran equipo de trabajo, nos pudimos acoplar en poco tiempo y poder dar soluciones rápidas a las necesidades requeridas`}
									{lenguage === 'en' && `I was part of the development of some pages and emails with various technologies for the Smile Airline site! I was with a great work team, we were able to connect in a short time and be able to give quick solutions to the required needs`}

								</p>

							</div>
						</li>
					</ul>
					<div className={css.btnContainer}>
						<a href='https://www.linkedin.com/in/eliezermasyrubi/'
							className={`
					${css.btn} ${css.blueButton}
				`}>
							{lenguage === 'es' && 'Creemos Algo Juntos!'}
							{lenguage === 'en' && `Let's Work Together`}
						</a>

					</div>

				</section>
				<section className={css.space}></section>
			</div>
		</>

	);
}

HomeView.defaultProps = {
	descriptionDesign: '',
	imgDesign: '',
	titleDesign: '',
}
HomeView.propTypes = {
	lenguage: PropTypes.string.isRequired,
	themeMode: PropTypes.string.isRequired,
	scroll: PropTypes.number.isRequired,
	openRecomendationModalFn: PropTypes.func.isRequired,
	closeRecomendationModalFn: PropTypes.func.isRequired,
	recomendationModal: PropTypes.bool.isRequired,
	closePortfolioModalFn: PropTypes.func.isRequired,
	openPortfolioModalFn: PropTypes.func.isRequired,
	portfolioModal: PropTypes.bool.isRequired,
	descriptionDesign: PropTypes.string,
	imgDesign: PropTypes.string,
	titleDesign: PropTypes.string,
};

export default HomeView;