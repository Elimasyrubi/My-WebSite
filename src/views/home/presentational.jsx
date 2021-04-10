//component
import Navbar from '../../components/navbar/container'

import css from './css.module.scss'

const HomeView = () => {
    return (
        <div className={css.hero}>
            <Navbar/>
            <div className={css.container}>

            </div>
        </div>

    );
}

export default HomeView;