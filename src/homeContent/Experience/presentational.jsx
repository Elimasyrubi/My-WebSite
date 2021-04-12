// Dependence
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import css from './css.module.scss';


const ExperiencesView = ({ list }) => {
    const { lenguage, themeMode } = useSelector(({ appReducer }) => appReducer)
    return (
        <div className={css.container}>
            <h2
                className={`
            ${themeMode === 'dark' && `${css.subTitle} ${css.dark}`}
            ${themeMode === 'light' && `${css.subTitle} ${css.light}`}`}
            >
                {lenguage === 'es' ? 'Experiencia' : null}
                {lenguage === 'en' ? 'Experience' : null}
            </h2>
            {list.map((item) => (
                <div className={css.experienceBox} key={item.id} >
                    <p
                        className={`
                    ${themeMode === 'dark' && `${css.job} ${css.dark}`}
                    ${themeMode === 'light' && `${css.job} ${css.light}`}
                    `}

                    >{item.job}</p>


                    <span
                        className={`
                         ${themeMode === 'dark' && `${css.company} ${css.dark}`}
                         ${themeMode === 'light' && `${css.company} ${css.light}`}
                         `}
                    > {item.company} {item.time}</span>
                    <p
                        className={`
                         ${themeMode === 'dark' && `${css.text} ${css.dark}`}
                         ${themeMode === 'light' && `${css.text} ${css.light}`}
                         `}
                    >{item.text1}
                    </p>

                    {item.text2 !== '' && <p
                        className={`
                         ${themeMode === 'dark' && `${css.text} ${css.dark}`}
                         ${themeMode === 'light' && `${css.text} ${css.light}`}
                         `}
                    >{item.text2}</p>}


                    {item.text3 !== '' && <p
                        className={`
                         ${themeMode === 'dark' && `${css.text} ${css.dark}`}
                         ${themeMode === 'light' && `${css.text} ${css.light}`}
                         `}
                    >{item.text3}</p>}
                </div>
            ))}


        </div>
    );
}


ExperiencesView.propTypes = {
    list: PropTypes.array.isRequired,
};
export default ExperiencesView;
