/* eslint-disable react-hooks/exhaustive-deps */
import Routes from './routes/index';
import { useSelector , useDispatch} from 'react-redux';
import {useEffect} from 'react';
import { setScrool } from './redux/App/AppActions'

function App() {

  // reducer
  const {themeMode} = useSelector(({appReducer}) => appReducer);

  //dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    if(themeMode === 'dark'){
      //darkMode
      document.body.style.backgroundColor = "#1A1C2C";
    }
    if(themeMode === 'light'){
      //lightMode
      document.body.style.backgroundColor = "#F2F2FC";
    }
  }, [themeMode])


   //get Positions
   useEffect(() => {
     window.onscroll = () => {
      dispatch(setScrool(window.pageYOffset))
     }
   }, []);
   
 
  return (
    <Routes/>
  );
}

export default App;
