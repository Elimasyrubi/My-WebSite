import css from './css.module.scss';
// Dependence
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const DesignPortfolioBox = ({
    imgUrl,
    title,
    descriptions,
    openPortfolioModalFn,
}) => {

    const { 
        themeMode,
        //lenguage 
    } = useSelector(({ appReducer }) => appReducer)
    

    return (
        <>
        <button 
             onClick={()=> openPortfolioModalFn(title, descriptions, imgUrl)}
             className={`${css.box} ${css.hideMobile}`}>
            <img src={imgUrl} alt={title}/>

            <p 
            className={`
                ${themeMode === 'dark' && `${css.title} ${css.Dark}`}
                ${themeMode === 'light' && `${css.title} ${css.Light}`}`}
            >{title}</p>
        </button>

        <button 
             className={`${css.box} ${css.hidedesktop}`}>
            <img src={imgUrl} alt={title}/>
            <p 
            className={`
                ${themeMode === 'dark' && `${css.title} ${css.Dark}`}
                ${themeMode === 'light' && `${css.title} ${css.Light}`}`}
            >{title}</p>
        </button>
        </>

    );
}
DesignPortfolioBox.defaultProps = {
    imgUrl: '',
    title: '',
    descriptions: '',
    openPortfolioModalFn: '',
}


DesignPortfolioBox.propTypes = {
    imgUrl: PropTypes.string,
    title: PropTypes.string,
    descriptions: PropTypes.string,
    openPortfolioModalFn: PropTypes.func,
  
};
export default DesignPortfolioBox;