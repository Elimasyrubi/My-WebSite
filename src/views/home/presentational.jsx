// Dependence
import PropTypes from 'prop-types';
//component
import Navbar from '../../components/navbar/container'

import css from './css.module.scss'

const HomeView = ({lenguage, themeMode, scroll }) => {
    return (
        <>
        <div className={themeMode === 'dark'
        ? ` ${css.hero} ${css.heroDark}`
        :  ` ${css.hero} ${css.heroLight}`}
        >
            
            {scroll < 1 
            ? <Navbar/>
            : null
            }
            <div className={css.container}>

            </div>
        </div>
        <div   className={css.down}>

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