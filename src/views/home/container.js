import HomeView from './presentational';
import { useSelector} from 'react-redux';
import {useState} from 'react';

const Home = () => {
       // Lenguague state
       const { lenguage, themeMode, scroll } = useSelector(({appReducer})=> appReducer);
      //state
       const [recomendationModal, setRecomendationModal] = useState(false)
       const [{portfolioModal,descriptionDesign, imgDesign, titleDesign }, setPortfolioModal] = useState({
        portfolioModal: false,
        descriptionDesign:'',
        imgDesign:'',
        titleDesign:'',
       })


       //open recomendationModal
       const openRecomendationModalFn = () =>{
        setRecomendationModal(true)
       }
       //close recomendationModal
       const closeRecomendationModalFn = () =>{
        setRecomendationModal(false)
       }
       //open PortfolioModal
       const openPortfolioModalFn = (title, description, img) =>{
        setPortfolioModal({
            portfolioModal: true,
            descriptionDesign:description,
            imgDesign:img,
            titleDesign: title,
        })
       }
       //close PortfolioModal
       const closePortfolioModalFn = () =>{
        setPortfolioModal({
            portfolioModal: false,
        })
       }

  
    return ( <HomeView
        lenguage={lenguage}
        themeMode={themeMode}
        scroll={scroll}
        openRecomendationModalFn={openRecomendationModalFn}
        closeRecomendationModalFn={closeRecomendationModalFn}
        openPortfolioModalFn={openPortfolioModalFn}
        closePortfolioModalFn={closePortfolioModalFn}
        recomendationModal={recomendationModal}
        portfolioModal={portfolioModal}
        descriptionDesign={descriptionDesign}
        imgDesign={imgDesign}
        titleDesign={titleDesign}
        
    />  );
}
 
export default Home;