import { useSelector } from 'react-redux';
import css from './css.module.scss';
import { ExperiencesES } from '../../content/Experiences'

const ExperiencesView = () => {
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
            {ExperiencesES.map((item)=>(
                <div key={item.id}>
                    <p
                    className={`
                    ${themeMode === 'dark' && `${css.text} ${css.dark}`}
                    ${themeMode === 'light' && `${css.text} ${css.light}`}
                    `}
                    
                    >{item.job}</p>
                    <span> {item.company} {item.time}</span>
                    <p>{item.text1}</p>
                    {item.text2 !== '' ? <p>{item.text2}</p> : null }
                    {item.text3 !== '' ?  <p>{item.text3}</p> : null }
                </div>
            ))}
           
            
        </div>
      );
}
 
export default ExperiencesView;

/* className={`
           
            `} */