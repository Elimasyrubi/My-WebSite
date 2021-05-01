//dependence
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Knowledgedeveloper from '../knowledgeContent/develop/index';
import KnowledgeDesign from '../knowledgeContent/design/index';
import KnowledgeOthers from '../knowledgeContent/others/index';
//style
import css from './css.module.scss';

const KnowlogedDesktopView = ({ selectKnowledgeFn, selected }) => {
	const { lenguage, themeMode } = useSelector(({ appReducer }) => appReducer);

	return (
		<div className={css.container}>
			<h2
				className={`
            ${themeMode === 'dark' && `${css.title} ${css.dark}`}
            ${themeMode === 'light' && `${css.title} ${css.light}`}`}
			>
				{lenguage === 'es' ? 'Conocimientos' : null}
				{lenguage === 'en' ? 'Knowledge' : null}
			</h2>
			<ul>
				<li>
					<button
						value='developer'
						onClick={selectKnowledgeFn}
						className={`
                        ${themeMode === 'dark' && ` ${selected === 'developer' && `${css.btnActive}`} ${css.btn} ${css.btnDark}`}
                        ${themeMode === 'light' && `${selected === 'developer' && `${css.btnActive}`} ${css.btn} ${css.btnLight}`}`}
					>
						{lenguage === 'es' ? 'Desarrollo' : null}
						{lenguage === 'en' ? 'Developer' : null}
					</button>
				</li>
				<li>
					<button
						value='design'
						onClick={selectKnowledgeFn}
						className={`
                        ${themeMode === 'dark' && `${selected === 'design' && `${css.btnActive}`} ${css.btn} ${css.btnDark}`}
                        ${themeMode === 'light' && `${selected === 'design' && `${css.btnActive}`} ${css.btn} ${css.btnLight}`}`}
					>
						{lenguage === 'es' ? 'Diseño' : null}
						{lenguage === 'en' ? 'Design' : null}
					</button>
				</li>
				<li>
					<button
						value='softSkill'
						onClick={selectKnowledgeFn}
						className={`
                        ${themeMode === 'dark' && `${selected === 'softSkill' && `${css.btnActive}`} ${css.btn} ${css.btnDark}`}
                        ${themeMode === 'light' && `${selected === 'softSkill' && `${css.btnActive}`} ${css.btn} ${css.btnLight}`}`}
					>
						{lenguage === 'es' ? 'Habilidades' : null}
						{lenguage === 'en' ? 'softSkill' : null}
					</button>
				</li>
			</ul>
			<div className={css.content}>
				{selected === 'developer' && (
					<Knowledgedeveloper/>
				)}
				{selected === 'design' && (
					<KnowledgeDesign/>
				)}
				{selected === 'softSkill' && (
				<KnowledgeOthers/>
				)}

			</div>
		</div>
	);
}

KnowlogedDesktopView.defaultProps = {
	selected: 'developer',
	selectKnowledgeFn: () => { },
}

KnowlogedDesktopView.propTypes = {
	selected: PropTypes.string,
	selectKnowledgeFn: PropTypes.func,
}


export default KnowlogedDesktopView;