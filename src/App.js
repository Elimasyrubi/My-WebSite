/* eslint-disable react-hooks/exhaustive-deps */
import Routes from './routes/index';
import { useSelector} from 'react-redux';
import {useEffect} from 'react';

function App() {

  // reducer
  const {themeMode} = useSelector(({appReducer}) => appReducer);

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
  
 
  return (
    <Routes/>
  );
}

export default App;
