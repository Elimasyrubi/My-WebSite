import HomeView from './presentational'
import { useSelector} from 'react-redux'

const Home = () => {
       // Lenguague state
       const { lenguage } = useSelector(({appReducer})=> appReducer);
       const { themeMode } = useSelector(({appReducer})=> appReducer);

    return ( <HomeView
        lenguage={lenguage}
        themeMode={themeMode}
    />  );
}
 
export default Home;