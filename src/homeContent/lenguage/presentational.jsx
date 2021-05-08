import { useSelector } from 'react-redux';
import css from './css.module.scss';

const LenguageView = () => {
    const { lenguage, themeMode } = useSelector(({ appReducer }) => appReducer)
    return (
        <div className={css.container}>
            <h2 
            className={`
            ${themeMode === 'dark' && `${css.title} ${css.dark}`}
            ${themeMode === 'light' && `${css.title} ${css.light}`}`}
            >
                {lenguage === 'es' ? 'Idiomas' : null}
                {lenguage === 'en' ? 'Lenguages' : null}
            </h2>
            <div className={css.experienceBox}  >
                    <p
                    className={`
                    ${themeMode === 'dark' && `${css.subtitle} ${css.dark}`}
                    ${themeMode === 'light' && `${css.subtitle} ${css.light}`}
                    `}
                    >
                        {lenguage === 'es' ? 'Inglés Avanzado oral y escrito' : null}
                        {lenguage === 'en' ? 'Fluent written and spoken English' : null}
                    </p>
                    <p
                         className={`
                         ${themeMode === 'dark' && `${css.text} ${css.dark}`}
                         ${themeMode === 'light' && `${css.text} ${css.light}`}
                         `}
                    >
                         {lenguage === 'es' ? 'Tengo un inglés fluido a la hora de comunicarme, he tenido trato directo con clientes de habla inglesa, cada día practico para mejorar mas mi nivel de ingles.' : null}
                        {lenguage === 'en' ? 'I am fluent in English when communicating, I have had direct contact with English-speaking clients, every day I practice to further improve my level of English.' : null}
                    </p>
                </div>
        </div>
      );
}
 
export default LenguageView;

