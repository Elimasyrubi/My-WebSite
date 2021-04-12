import AboutMe from './aboutMe/presentational';
import KnowledgeView from './knowledge/presentational'
import ExperiencesView from './Experience/presentational'

const HomeContentMobile = () => {
    return ( 
        <>
        <AboutMe/> 
        <KnowledgeView/>
        <ExperiencesView/>
        </>
    );
}
 
export default HomeContentMobile;