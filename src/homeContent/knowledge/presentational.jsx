import css from './css.module.scss';
import { useSelector } from 'react-redux';
//icons
import IconReact from '../../assets/icon/react.png';
import IconJs from '../../assets/icon/javascript.png';
import IconGithub from '../../assets/icon/github.png';
import IconSass from '../../assets/icon/sass.png';
import IconResponsive from '../../assets/icon/responsive.png';
import IconBootstrap from '../../assets/icon/bootstrap.png';
import IconWordpress from '../../assets/icon/wordpress.png';

import IconFigma from '../../assets/icon/figma.png';
import IconAdobeXd from '../../assets/icon/xd.png';
import IconHand from '../../assets/icon/hand.png';
import IconPhotoShop from '../../assets/icon/ps.png';
import IconCorel from '../../assets/icon/corel.png';
import IconIllustrator from '../../assets/icon/il.png';

import IconEnglish from '../../assets/icon/english.png';
import IconSlack from '../../assets/icon/slack.png';
import IconTeam from '../../assets/icon/team.png';
import IconHands from '../../assets/icon/hands.png';


const KnowledgeView = () => {
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
    const listDesignIcon = [
        { icon: IconFigma, text: 'Figma' },
        { icon: IconAdobeXd, text: 'Adobe XD' },
        { icon: IconHand, text: 'Prototipos' },
        { icon: IconPhotoShop, text: 'Photoshop' },
        { icon: IconCorel, text: 'CorelDraw' },
        { icon: IconIllustrator, text: 'Ilustrator' },
    ];
    const listOhterIconEs = [
        { icon: IconEnglish, text: 'Ingles Avanzado Oral y escrito' },
        { icon: IconSlack, text: 'Slack / M-Team / Jira / Asana' },
        { icon: IconTeam, text: 'Liderazgo' },
        { icon: IconHands, text: 'Trabajo en equipo' },
    ];
    const listOhterIconEn = [
        { icon: IconEnglish, text: 'Advanced Oral and Written English' },
        { icon: IconSlack, text: 'Slack / M-Team / Jira / Asana' },
        { icon: IconTeam, text: 'Leadership' },
        { icon: IconHands, text: 'Teamwork' },
    ];

    const renderOtherList = () => {
        if (lenguage === 'es') {
            return (
                listOhterIconEs.map((item) => (
                    <li
                    key={item.text}
                    className={`
                    ${themeMode === 'dark' && `${css.text} ${css.dark}`}
                    ${themeMode === 'light' && `${css.text} ${css.light}`}`}
                    > <img src={item.icon} alt={item.text} />{item.text}</li>
                ))
            )
        }
        if (lenguage === 'en') {
            return (
                listOhterIconEn.map((item) => (
                    <li
                    key={item.text}
                    className={`
                    ${themeMode === 'dark' && `${css.text} ${css.dark}`}
                    ${themeMode === 'light' && `${css.text} ${css.light}`}`}
                    > <img src={item.icon} alt={item.text} />{item.text}</li>
                ))
            )
        }
    }
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
                        Actualmente Estoy  cursando la escula de Javascript de Platzi, al dominar estas tecnologioa seguire mi formacion hasta compoletar el stack de React js
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
            {/* Diseno */}
            <div>
                <h3
                    className={`
                ${themeMode === 'dark' && ` ${css.dark}`}
                ${themeMode === 'light' && ` ${css.light}`}
                `}
                >
                    {lenguage === 'es' && 'Diseño'}
                    {lenguage === 'en' && 'Design'}
                </h3>
                <ul>
                    {listDesignIcon.map((item) => (
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
                        Actualmente Estoy  cursando la escula de Diseño UI de Platzi, ampliando asi mis conocimientos en el Area.
                    </p>
                }
                {lenguage === 'en'
                    && <p className={`
                    ${themeMode === 'dark' && `${css.text} ${css.dark}`}
                    ${themeMode === 'light' && `${css.text} ${css.light}`}
                    `}>
                        Currently I am studying the UI Design school at Platzi, thus expanding my knowledge in the Area.
                    </p>
                }
            </div>
            {/* Otros */}
            <div>
                <h3
                    className={`
                ${themeMode === 'dark' && ` ${css.dark}`}
                ${themeMode === 'light' && ` ${css.light}`}
                `}
                >
                    {lenguage === 'es' && 'Otros'}
                    {lenguage === 'en' && 'Others'}
                </h3>
                <ul>
                    {renderOtherList()}
                </ul>

                {lenguage === 'es'
                    && <p className={`
                    ${themeMode === 'dark' && `${css.text} ${css.dark}`}
                    ${themeMode === 'light' && `${css.text} ${css.light}`}
                    `}>
                        Constantemente  escucho potcads y Leo Libros o articulos que me ayuden a crecer en conocimientos y cada dia ser mejor profesional.
                    </p>
                }
                {lenguage === 'en'
                    && <p className={`
                    ${themeMode === 'dark' && `${css.text} ${css.dark}`}
                    ${themeMode === 'light' && `${css.text} ${css.light}`}
                    `}>
                        I constantly listen to potcads and I read books or articles that help me to grow in knowledge and every day to be a better professional.
                    </p>
                }
            </div>

        </div>
    );
}

export default KnowledgeView;