// Dependence
import PropTypes from 'prop-types';
//components
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
}) => {

	//<p className={css.title}>{lenguage === 'es'&& 'Esto es español'}{lenguage === 'en'&& 'this is English'}</p>

	return (
		<div className={css.container}>
			<nav>
				<p className={css.name}>Eliezer Mas y rubi</p>
					
				<div className={css.right}>
					<label className={themeMode === 'dark'
						? ` ${css.label} ${css.inputDarkmode}`
						:  `${css.label} ${css.inputLightmode}`}
						>
						<input
						id='darkModeInput'
						onClick={changeThemeColor}
						type="button"
						 />
						<span 
						className={themeMode === 'dark'
						? `  ${css.spanDark}`
						:  ` ${css.spanLight}`}
						>
							{themeMode === 'dark' && <i className="fas fa-moon"></i>}
							{themeMode === 'light' && <i className="fas fa-sun"></i>}
						</span>
					</label>
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
};

export default NavbarView;

