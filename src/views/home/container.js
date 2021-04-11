import HomeView from './presentational';
import { useSelector} from 'react-redux';

const Home = () => {
       // Lenguague state
       const { lenguage, themeMode, scroll } = useSelector(({appReducer})=> appReducer);
      
  
    return ( <HomeView
        lenguage={lenguage}
        themeMode={themeMode}
        scroll={scroll}
    />  );
}
 
export default Home;