/* eslint-disable jsx-a11y/anchor-is-valid */
// Dependence
import PropTypes from 'prop-types';
//components
import EnglandFlag from '../../assets/englandFlag.png'
import spainFlag from '../../assets/spainFlag.png'
import DropDownView from './DropDown/DropDown'
//style
import css from './css.module.scss';

const NavbarView = ({
	changeThemeColor,
	changeLenguageFn,
	lenguage,
	showDropDown,
	showDropDownFn,
	closeDropDownFn,
	themeMode,
	fixed
}) => {


	//render Buttons
	const renderBlueButton = () => {
		return (
			<div className={css.desktopButtons}>
				<a className={
					`${fixed && themeMode === 'dark' ? `${css.btnFixed} ${css.btnCvDark}` : null}  
						${fixed && themeMode === 'light' ? `${css.btnFixed} ${css.btnCvLight}` : null}  
						${css.bntCv}`
				} target='_blank'
					href={`
					${lenguage === 'es' ? `https://eliezerblog.ga/wp-content/uploads/2021/05/Eliezer-Masyrubi-Frontend-Developer-y-disenador-UIUX.pdf` : ''}
            
					${lenguage === 'en' ? 'https://eliezerblog.ga/wp-content/uploads/2021/05/EN-Eliezer-Masyrubi-Frontend-Developer-y-disenador-UIUX.pdf': ''}
					`}
					rel="noreferrer">
					<i className="fas fa-file-download"></i>
				CV
			</a>
				<a href='https://www.linkedin.com/in/eliezermasyrubi/'
					className={`
					${fixed ? `${css.btnFixed}` : null}  
					${css.btn} ${css.blueButton}
				`}>
					{lenguage === 'es' && 'Creemos Algo Juntos!'}
					{lenguage === 'en' && `Let's Work Together`}
				</a>
			</div>
		)
	}
	return (
		<div
			className={`
			${fixed && themeMode === 'dark' ? `${css.fixed} ${css.fixedDark}` : null}  
			${fixed && themeMode === 'light' ? `${css.fixed} ${css.fixedLight}` : null}  
		`}
		>

			<div className={css.container}>
				<nav
					className={fixed ? `${css.navFixed}` : null}
				>
					<p className={`
					${fixed && themeMode === 'dark' ? `${css.nameDark} ` : null}  
					${fixed && themeMode === 'light' ? `${css.nameLight} ` : null}  
					${css.name}
					`}>Eliezer Mas y rubi
					</p>
					<div className={css.right}>
						<div className={css.desktopRightContainer}>
							{/* Lenguage */}
							{lenguage === 'en' &&
								<button
									onClick={() => changeLenguageFn('es')}
									className={`
									${fixed && themeMode === 'dark' ? `${css.lenDark} ` : null}  
									${fixed && themeMode === 'light' ? `${css.lenLight} ` : null} 
									${css.lenguageButton}`}
									type='button'>
									<img src={spainFlag} alt="england Flag" />
									<p>Es</p>
								</button>
							}
							{lenguage === 'es' &&
								<button
									onClick={() => changeLenguageFn('en')}
									className={`
									${fixed && themeMode === 'dark' ? `${css.lenDark} ` : null}  
									${fixed && themeMode === 'light' ? `${css.lenLight} ` : null} 	
									${css.lenguageButton}`}
									type='button'>
									<img src={EnglandFlag} alt="england Flag" />
									<p>En</p>
								</button>
							}
							{/* dark mode */}
							<label className={themeMode === 'dark'
								? ` ${css.label} ${css.inputDarkmode}`
								: `${css.label} ${css.inputLightmode}`}
							>
								<input
									id='darkModeInput'
									onClick={changeThemeColor}
									type="button"
								/>
								<span
									className={themeMode === 'dark'
										? `  ${css.spanDark}`
										: ` ${css.spanLight}`}
								>
									{themeMode === 'dark' && <i className="fas fa-moon"></i>}
									{themeMode === 'light' && <i className="fas fa-sun"></i>}
								</span>
							</label>
							{renderBlueButton()}

						</div>

						{/* Hamburger Buttom */}
						<button
							onClick={showDropDownFn}
							className={css.menuHamburger}
							type='button'>
							<i className="fas fa-bars"></i>
						</button>
					</div>

				</nav>

				{showDropDown === true
					? <DropDownView
						closeDropDownFn={closeDropDownFn}
						lenguage={lenguage}
						changeLenguageFn={changeLenguageFn}
					/>
					: null}

			</div>
		</div>
	);
}

NavbarView.propTypes = {
	changeThemeColor: PropTypes.func.isRequired,
	changeLenguageFn: PropTypes.func.isRequired,
	lenguage: PropTypes.string.isRequired,
	showDropDown: PropTypes.bool.isRequired,
	showDropDownFn: PropTypes.func.isRequired,
	closeDropDownFn: PropTypes.func.isRequired,
	themeMode: PropTypes.string.isRequired,
	fixed: PropTypes.bool.isRequired,
};

export default NavbarView;

