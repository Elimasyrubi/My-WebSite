import css from './css.module.scss';
// Dependence
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const RecomendationsBox = ({ textEn, textEs, userImage, name , profession }) => {
    const {themeMode, lenguage} = useSelector(({appReducer}) => appReducer)
    return (
        <div className={`
            ${themeMode === 'dark' && `${css.boxDark} ${css.recomendationsBox}`}
            ${themeMode === 'light' && `${css.boxLight} ${css.recomendationsBox}`}
        `}>
            <p className={`
             ${themeMode === 'dark' && `${css.Dark} ${css.text}`}
             ${themeMode === 'light' && `${css.Light} ${css.text}`}
            `}>
                <i className="fas fa-quote-left"></i>
                {lenguage === 'es' && textEs}
				{lenguage === 'en' && textEn}
                <i className="fas fa-quote-right"></i>
            </p>
            <div className={css.userBox}>
                <img src={userImage} alt={name} />
                <div className={css.userInfo}>
                    <p className={`
                     ${themeMode === 'dark' && `${css.Dark} ${css.name}`}
                     ${themeMode === 'light' && `${css.Light} ${css.name}`}
                    `}>{name}</p>
                    <span className={css.profession}>{profession}</span>
                </div>
            </div>
        </div>
    );
}

RecomendationsBox.propTypes = {
textEn: PropTypes.string.isRequired,
textEs: PropTypes.string.isRequired,
userImage: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
profession: PropTypes.string.isRequired,
};
export default RecomendationsBox;