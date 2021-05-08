import css from './css.module.scss';
import { useSelector } from 'react-redux';
//icons
import IconEnglish from '../../../assets/icon/english.png';
import IconSlack from '../../../assets/icon/slack.png';
import Jira from '../../../assets/icon/jira.png';
import IconTeam from '../../../assets/icon/team.png';
import IconHands from '../../../assets/icon/hands.png';


const KnowledgeOthers = () => {
	const { lenguage, themeMode } = useSelector(({ appReducer }) => appReducer)



	const listOhterIconEs = [
		{ icon: IconEnglish, text: 'Inglés Avanzado Oral y escrito' },
		{ icon: IconSlack, text: 'Slack / M-Team' },
		{ icon: Jira, text: ' Jira / Asana / Trello' },
		{ icon: IconTeam, text: 'Liderazgo' },
		{ icon: IconHands, text: 'Trabajo en equipo' },
	];
	const listOhterIconEn = [
		{ icon: IconEnglish, text: 'Advanced Oral and Written English' },
		{ icon: IconSlack, text: 'Slack / M-Team' },
		{ icon: Jira, text: ' Jira / Asana / Trello' },
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
							Constantemente  escucho podcast y leo libros o artículos que me ayuden a crecer personal y profesinalmente.
                    </p>
					}
					{lenguage === 'en'
						&& <p className={`
                    ${themeMode === 'dark' && `${css.text} ${css.dark}`}
                    ${themeMode === 'light' && `${css.text} ${css.light}`}
                    `}>
							I constantly listen to Podcast and read books or articles that help me grow in knowledge and be a better person and professional every day..
                    </p>
					}
				</div>
			</div>

		</div>
	);
}

export default KnowledgeOthers;