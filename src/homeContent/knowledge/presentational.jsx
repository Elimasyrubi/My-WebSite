import css from './css.module.scss';

import Knowledgedeveloper from '../knowledgeContent/develop/index';
import KnowledgeDesign from '../knowledgeContent/design/index';
import KnowledgeOthers from '../knowledgeContent/others/index';


const KnowledgeView = () => {
    
    return (
        <div className={css.container}>
            <Knowledgedeveloper/>
            <KnowledgeDesign/>
            <KnowledgeOthers/>
        </div>
    );
}

export default KnowledgeView;