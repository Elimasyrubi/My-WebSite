// Dependence
import PropTypes from 'prop-types';
//components
import DropDownView from './DropDown/DropDown'
//style
import css from './css.module.scss';

const NavbarView = ({
	changeToLightModeFn,
	changeToDarkModeFn,
	changeLenguageFn,
	lenguage,
	showDropDown,
	showDropDownFn,
	closeDropDownFn,
}) => {

	//<p className={css.title}>{lenguage === 'es'&& 'Esto es español'}{lenguage === 'en'&& 'this is English'}</p>

	return (
		<div className={css.container}>
			<nav>
				<p className={css.name}>Eliezer Mas y rubi</p>
					
				<div className={css.right}>
					<button
						onClick={showDropDownFn}
						className={css.menuHamburger}
						type='button'>
						<i class="fas fa-bars"></i>
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
	changeToLightModeFn: PropTypes.func.isRequired,
	changeToDarkModeFn: PropTypes.func.isRequired,
	changeLenguageFn: PropTypes.func.isRequired,
	lenguage: PropTypes.string.isRequired,
	showDropDown: PropTypes.string.isRequired,
	showDropDownFn: PropTypes.func.isRequired,
	closeDropDownFn: PropTypes.func.isRequired,
};

export default NavbarView;

