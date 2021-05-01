import AbouMeDesktopView from './presentational';
import { useState } from 'react';
import {useSelector} from 'react-redux';

const AbouMeDesktop = () => {

    const [ selected, setSelected] = useState('aboutMe');
    const { lenguage } = useSelector(({appReducer})=> appReducer);

    //read Selected
    const changeSelectedFn = (e) => {
        setSelected(e.target.value);
    }
    return (  
        <AbouMeDesktopView
        selected={selected}
        changeSelectedFn={changeSelectedFn}
        lenguage={lenguage}
        
        />
        
    );
}
 
export default AbouMeDesktop;


