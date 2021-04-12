//dependence
import { useSelector } from 'react-redux';
//components
import AboutMe from './aboutMe/presentational';
import KnowledgeView from './knowledge/presentational';
import ExperiencesView from './Experience/presentational';
import Lenguage from './lenguage/presentational';
import { ExperiencesES, ExperiencesEN } from '../content/Experiences';

const HomeContentMobile = () => {
    const { lenguage } = useSelector(({ appReducer }) => appReducer)

    return ( 
        <>
        <AboutMe/> 
        <KnowledgeView/>
        {lenguage === 'es' &&  <ExperiencesView list={ExperiencesES}/>}
        {lenguage === 'en' &&  <ExperiencesView list={ExperiencesEN}/>}
       
        <Lenguage/>
        </>
    );
}
 
export default HomeContentMobile;