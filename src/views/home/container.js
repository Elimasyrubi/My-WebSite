import HomeView from './presentational';
import { useSelector} from 'react-redux';
import {useState} from 'react';

const Home = () => {
       // Lenguague state
       const { lenguage, themeMode, scroll } = useSelector(({appReducer})=> appReducer);
      //state
       const [recomendationModal, setRecomendationModal] = useState(false)

       //open recomendationModal
       const openRecomendationModalFn = () =>{
        setRecomendationModal(true)
       }
       //close recomendationModal
       const closeRecomendationModalFn = () =>{
        setRecomendationModal(false)
       }
  
    return ( <HomeView
        lenguage={lenguage}
        themeMode={themeMode}
        scroll={scroll}
        openRecomendationModalFn={openRecomendationModalFn}
        closeRecomendationModalFn={closeRecomendationModalFn}
        recomendationModal={recomendationModal}
    />  );
}
 
export default Home;