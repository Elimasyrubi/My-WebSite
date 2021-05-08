import css from './css.module.scss';
import { useSelector } from 'react-redux';
//icons
import IconFigma from '../../../assets/icon/figma.png';
import IconAdobeXd from '../../../assets/icon/xd.png';
import IconHand from '../../../assets/icon/hand.png';
import IconPhotoShop from '../../../assets/icon/ps.png';
import IconCorel from '../../../assets/icon/corel.png';
import IconIllustrator from '../../../assets/icon/il.png';



const KnowledgeDesign = () => {
	const { lenguage, themeMode } = useSelector(({ appReducer }) => appReducer)

	const listDesignIcon = [
		{ icon: IconFigma, text: 'Figma' },
		{ icon: IconAdobeXd, text: 'Adobe XD' },
		{ icon: IconHand, text: 'Prototipos' },
		{ icon: IconPhotoShop, text: 'Photoshop' },
		{ icon: IconCorel, text: 'CorelDraw' },
		{ icon: IconIllustrator, text: 'Illustrator' },
	];


	return (
		<div className={css.container}>

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
			<div className={css.listflexd}>
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
						Actualmente Estoy  cursando la escuela de Diseño UI de Platzi, ampliando así mis conocimientos en el área.
                    </p>
				}
				{lenguage === 'en'
					&& <p className={`
                    ${themeMode === 'dark' && `${css.text} ${css.dark}`}
                    ${themeMode === 'light' && `${css.text} ${css.light}`}
                    `}>
						Currently, I am studying the UI Design school at Platzi, thus expanding my knowledge in the area.
                    </p>
				}
			</div>
			</div>


		</div>
	);
}

export default KnowledgeDesign;