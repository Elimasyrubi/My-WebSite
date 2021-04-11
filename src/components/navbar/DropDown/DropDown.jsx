/* eslint-disable jsx-a11y/anchor-is-valid */
// Dependence
import PropTypes from 'prop-types';
//componente
import EnglandFlag from '../../../assets/englandFlag.png'
import spainFlag from '../../../assets/spainFlag.png'
//styles
import css from './css.module.scss';

const DropDownView = ({ closeDropDownFn, lenguage, changeLenguageFn, }) => {
    return (
        <div className={css.container}>
            <button
                className={css.closeButton}
                onClick={closeDropDownFn}
                type='button'>
                <i className="fas fa-times"></i>
            </button>

            <a className={`${css.btn} ${css.blueButton}`}>
                {lenguage === 'es' && 'Creemos Algo Juntos!'}
                {lenguage === 'en' && `Let's Work Together`}
            </a>

            <a className={`${css.btn} ${css.bntWhite}`} href='#'>
                <i className="fas fa-file-download"></i>
                {lenguage === 'es' && 'Descargar CV'}
                {lenguage === 'en' && 'Download CV'}
            </a>

            {lenguage === 'en' &&
                <button
                    onClick={()=> changeLenguageFn('es')}
                    className={`${css.lenguageButton} ${css.btn}`}
                    type='button'>
                    <img src={spainFlag} alt="england Flag" />
                    <p>Español</p>
                </button>
            }
            {lenguage === 'es' &&
                <button
                    onClick={()=> changeLenguageFn('en')}
                    className={`${css.lenguageButton} ${css.btn}`}
                    type='button'>
                    <img src={EnglandFlag} alt="england Flag" />
                    <p>English</p>
                </button>
            }
        </div>
    );
}

DropDownView.propTypes = {
    changeLenguageFn: PropTypes.func.isRequired,
    closeDropDownFn: PropTypes.func.isRequired,
    lenguage: PropTypes.string.isRequired,
};

export default DropDownView;