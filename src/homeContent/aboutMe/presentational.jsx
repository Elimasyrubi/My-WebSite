import css from './css.module.scss';
import { useSelector } from 'react-redux';

const AboutMe = () => {
    const { lenguage, themeMode } = useSelector(({ appReducer }) => appReducer)
    return (
        <div className={css.container}>
            <h2 
            className={`
            ${themeMode === 'dark' && `${css.subTitle} ${css.dark}`}
            ${themeMode === 'light' && `${css.subTitle} ${css.light}`}`}
            >
                {lenguage === 'es' ? 'Sobre mí' : null}
                {lenguage === 'en' ? 'About me' : null}
            </h2>
            {lenguage === 'es'
            && <p className={`
            ${themeMode === 'dark' && `${css.text} ${css.dark}`}
            ${themeMode === 'light' && `${css.text} ${css.light}`}
            `}>
            Hace más de 10 años comencé diseñando flyers con photoshop, pasando también por CorelDraw e Illustrator, siempre me gustó el diseño gráfico, sin embargo <span> descubrí el mundo de la tecnología </span> y mi corazón se encendió.
            <br/>
            <br/>
            Todos los conocimientos adquiridos en esos años me facilitaron la entrada al <span> diseño de interfaces </span> de usuarios,  diseñar herramientas que proporcionen un gran valor a nuestras vidas se ha vuelto una pasión.
            <br/>
            <br/>
            La satisfacción  se completa al <span> desarrollar el producto </span>, es darle vida al diseño, creo que cada producto desarrollado es un grano de arena aportado en la construcción de nuestro futuro.
            <br/>
            <br/>
            En mi tiempo libre toco el piano y la guitarra, también me gusta leer y ver películas de historia, <span> conocer nuestro pasado mientras ayudo a construir el futuro</span>.
             </p> 
        }
         {lenguage === 'en'
            && <p className={`
            ${themeMode === 'dark' && `${css.text} ${css.dark}`}
            ${themeMode === 'light' && `${css.text} ${css.light}`}
            `}>
            More than 10 years ago I started designing flyers with photoshop, also going through CorelDraw and Illustrator, I always liked graphic design, however <span> I discovered the world of technology </span> and my heart lit up.
            <br/>
            <br/>
            All the knowledge acquired in those years made it easier for me to enter the <span> interface design </span> of users, designing tools that provide great value to our lives has become a passion.
            <br/>
            <br/>
            Satisfaction is completed when <span> developing the product </span>, it is giving life to the design, I believe that each product developed is a grain of sand contributed in the construction of our future.
            <br/>
            <br/>
            In my free time I play the piano and the guitar, I also like to read and watch history movies, <span> get to know our past while helping to build the future</span>.

             </p> 
        }
            
        </div>
    );
}

export default AboutMe;