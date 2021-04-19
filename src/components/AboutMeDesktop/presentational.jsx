// Dependence
import PropTypes from 'prop-types';
//stayless
import css from './css.module.scss';

const AbouMeDesktopView = ({ selected, changeSelectedFn }) => {
    return (
        <div className={css.container}>
            <div className={css.left}>
                <div className={css.box}>
                    <ul>
                        <li>
                            <button
                                name='aboutMe'
                                value='aboutMe'
                                onClick= { changeSelectedFn}
                                className={`
                                ${selected === 'aboutMe' && `${css.selected}`}
                                ${css.button}
                                `}
                               
                            >Sobre mí
                            </button>
                        </li>
                        <li>
                            <button
                                name='experience'
                                value='experience'
                                onClick= { changeSelectedFn}
                               className={`
                                ${selected === 'experience' && `${css.selected}`}
                                ${css.button}
                                `}
                            >Experiencia
                            </button>
                        </li>
                        <li>
                            <button
                                name='knowledge'
                                value='knowledge'
                                onClick= { changeSelectedFn}
                               className={`
                                ${selected === 'knowledge' && `${css.selected}`}
                                ${css.button}
                                `}
                            >Conocimientos
                            </button>
                        </li>
                        <li>
                            <button
                                name='lenguage'
                                value='lenguage'
                                onClick= { changeSelectedFn}
                               className={`
                                ${selected === 'lenguage' && `${css.selected}`}
                                ${css.button}
                                `}
                            >Idiomas
                            </button>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <div className={css.right}>
                <p>hello</p>
            </div>

        </div>
    );
}

AbouMeDesktopView.defaultProps = {
    selected: 'abouteMe',
    changeSelectedFn: () => { },

}

AbouMeDesktopView.propTypes = {
    selected: PropTypes.string,
    changeSelectedFn: PropTypes.func,
};
export default AbouMeDesktopView;

