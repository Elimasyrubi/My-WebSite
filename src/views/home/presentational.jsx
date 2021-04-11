// Dependence
import PropTypes from 'prop-types';
//component
import Navbar from '../../components/navbar/container'

import css from './css.module.scss'

const HomeView = ({lenguage, themeMode }) => {
    return (
        <div className={themeMode === 'dark'
        ? ` ${css.hero} ${css.heroDark}`
        :  ` ${css.hero} ${css.heroLight}`}>
            <Navbar/>
            <div className={css.container}>

            </div>
        </div>

    );
}

HomeView.propTypes = {
	lenguage: PropTypes.string.isRequired,
	themeMode: PropTypes.string.isRequired,
};

export default HomeView;