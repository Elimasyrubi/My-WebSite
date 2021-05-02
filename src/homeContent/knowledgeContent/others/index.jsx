import css from './css.module.scss';
import { useSelector } from 'react-redux';
//icons
import IconEnglish from '../../../assets/icon/english.png';
import IconSlack from '../../../assets/icon/slack.png';
import IconTeam from '../../../assets/icon/team.png';
import IconHands from '../../../assets/icon/hands.png';


const KnowledgeOthers = () => {
	const { lenguage, themeMode } = useSelector(({ appReducer }) => appReducer)



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
				<div className={css.listflexd}>
					<ul>
						{renderOtherList()}
					</ul>

					{lenguage === 'es'
						&& <p className={`
                    ${themeMode === 'dark' && `${css.text} ${css.dark}`}
                    ${themeMode === 'light' && `${css.text} ${css.light}`}
                    `}>
							Constantemente  escucho potcads y Leo Libros o articulos que me ayuden a crecer en conocimientos y cada día ser mejor profesional.
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

		</div>
	);
}

export default KnowledgeOthers;