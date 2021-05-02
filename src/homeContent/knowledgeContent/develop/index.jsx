import css from './css.module.scss';
import { useSelector } from 'react-redux';
//icons
import IconReact from '../../../assets/icon/react.png';
import IconJs from '../../../assets/icon/javascript.png';
import IconGithub from '../../../assets/icon/github.png';
import IconSass from '../../../assets/icon/sass.png';
import IconResponsive from '../../../assets/icon/responsive.png';
import IconBootstrap from '../../../assets/icon/bootstrap.png';
import IconWordpress from '../../../assets/icon/wordpress.png';



const KnowledgeDeveloper = () => {
    const { lenguage, themeMode } = useSelector(({ appReducer }) => appReducer)

    const listDevIcon = [
        { icon: IconJs, text: 'Javascript' },
        { icon: IconReact, text: 'React js / Redux' },
        { icon: IconGithub, text: 'Git y Github' },
        { icon: IconSass, text: 'CSS / Sass / Less' },
        { icon: IconResponsive, text: 'Responsive Design' },
        { icon: IconBootstrap, text: 'Bootstrap' },
        { icon: IconWordpress, text: 'Wordpress Avanzado' },
    ];

    return (
        <div className={css.container}>
            <div>
                <h2
                    className={`
                ${themeMode === 'dark' && `${css.subTitle} ${css.dark}`}
                ${themeMode === 'light' && `${css.subTitle} ${css.light}`}
            `}
                >
                    {lenguage === 'es' && 'Conocimientos'}
                    {lenguage === 'en' && 'Knowledge'}
                </h2>
                <h3
                    className={`
                ${themeMode === 'dark' && ` ${css.dark}`}
                ${themeMode === 'light' && ` ${css.light}`}
                `}
                >
                    {lenguage === 'es' && 'Developer'}
                    {lenguage === 'en' && 'Desarrollo'}
                </h3>

               <div className={css.listflexd}>
               <ul>
                    {listDevIcon.map((item) => (
                        <li
                            key={item.text}
                            className={`
                    ${themeMode === 'dark' && `${css.text} ${css.dark}`}
                    ${themeMode === 'light' && `${css.text} ${css.light}`}`}
                        > <img src={item.icon} alt={item.text} />{item.text}</li>
                    ))}
                </ul>

                {lenguage === 'es'
                    && <p className={`
            ${themeMode === 'dark' && `${css.text} ${css.dark}`}
            ${themeMode === 'light' && `${css.text} ${css.light}`}
            `}>
                        Actualmente Estoy  cursando la escuela de Javascript de Platzi, al dominar estas tecnologías seguiré mi formaciÓn hasta completar el stack de React js
             </p>
                }
                {lenguage === 'en'
                    && <p className={`
            ${themeMode === 'dark' && `${css.text} ${css.dark}`}
            ${themeMode === 'light' && `${css.text} ${css.light}`}
            `}>
                        I am currently studying the Platzi Javascript school, after mastering these technologies I will continue my training until I complete the React js stack
             </p>
                }
               </div>
            </div>



        </div>
    );
}

export default KnowledgeDeveloper;