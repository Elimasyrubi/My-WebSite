/* eslint-disable jsx-a11y/anchor-is-valid */
import css from './css.module.scss';
import {useSelector} from 'react-redux';

const FooterView = () => {
    const { themeMode, lenguage } = useSelector(({appReducer})=> appReducer);
    return (
        <div 
        className={`
        ${themeMode === 'dark' && `${css.backgroundDark}`}
        ${themeMode === 'light' && `${css.backgroundLight}`}`}
        >
           <div className={css.container}>
           <div className={css.left}>
               <p>Eliezer Mas y rubi</p>
                <span> <i className="fas fa-map-marker-alt"></i> Buenos Aires</span>
                <a href='mailto:elimasyrubi@gmail.com'> <i className="fas fa-envelope"></i> elimasyrubi@gmail.com</a>
                <a target='_blank' href='https://github.com/Elimasyrubi' rel="noreferrer"> <i className="fab fa-github"></i> elimayrubi</a>
           </div>
           
           <div className={css.right}>
               <p>Creemos algo juntos</p>
               <a href="https://www.linkedin.com/in/eliezermasyrubi/"> <i className="fab fa-linkedin"></i>
               {lenguage === 'es' ? 'Contactame por Linkedin' : null}
                {lenguage === 'en' ? 'Contact by Linkedin' : null}
               </a>

           </div>
           </div>
        </div>
      );
}
 
export default FooterView;