// Dependence
import PropTypes from 'prop-types';
//Components
import AboutMe from '../../homeContent/aboutMe/presentational';
import ExperiencesView from '../../homeContent/Experience/presentational';
import { ExperiencesES, ExperiencesEN } from '../../content/Experiences';
import LenguageView from '../../homeContent/lenguage/presentational';
import KnowlogedDesktop from '../../homeContent/knowledgeDesktop/container';

//stayless
import css from './css.module.scss';

const AbouMeDesktopView = ({ selected, changeSelectedFn, lenguage }) => {
    return (
        <div className={css.container}>
            <div className={css.left}>
                <div className={css.box}>
                    <ul>
                        <li>
                            <button
                                name='aboutMe'
                                value='aboutMe'
                                onClick={changeSelectedFn}
                                className={`
                                ${selected === 'aboutMe' && `${css.selected}`}
                                ${css.button}
                                `}

                            >
                                {lenguage === 'es' && 'Sobre mí'}
                                {lenguage === 'en' && 'About Me'}
                            </button>
                        </li>
                        <li>
                            <button
                                name='experience'
                                value='experience'
                                onClick={changeSelectedFn}
                                className={`
                                ${selected === 'experience' && `${css.selected}`}
                                ${css.button}
                                `}
                            >
                                {lenguage === 'es' && 'Experiencia'}
                                {lenguage === 'en' && 'Experience'}


                            </button>
                        </li>
                        <li>
                            <button
                                name='knowledge'
                                value='knowledge'
                                onClick={changeSelectedFn}
                                className={`
                                ${selected === 'knowledge' && `${css.selected}`}
                                ${css.button}
                                `}
                            >
                                {lenguage === 'es' && 'Conocimientos'}
                                {lenguage === 'en' && 'Knowledge'}
                            </button>
                        </li>
                        <li>
                            <button
                                name='lenguage'
                                value='lenguage'
                                onClick={changeSelectedFn}
                                className={`
                                ${selected === 'lenguage' && `${css.selected}`}
                                ${css.button}
                                `}
                            >
                                {lenguage === 'es' && 'Idiomas'}
                                {lenguage === 'en' && 'Lenguage'}
                                
                            </button>
                        </li>

                    </ul>
                </div>
            </div>
            <div className={css.right}>
                {selected === 'aboutMe' && <AboutMe />}
                {selected === 'experience' &&
                    <>
                        {lenguage === 'es' && <ExperiencesView list={ExperiencesES} />}
                        {lenguage === 'en' && <ExperiencesView list={ExperiencesEN} />}
                    </>}
                {selected === 'lenguage' && <LenguageView />}
                {selected === 'knowledge' && <KnowlogedDesktop/>}

            </div>

        </div>
    );
}

AbouMeDesktopView.defaultProps = {
    selected: 'abouteMe',
    lenguage: 'es',
    changeSelectedFn: () => { },

}

AbouMeDesktopView.propTypes = {
    selected: PropTypes.string,
    lenguage: PropTypes.string,
    changeSelectedFn: PropTypes.func,

};
export default AbouMeDesktopView;

