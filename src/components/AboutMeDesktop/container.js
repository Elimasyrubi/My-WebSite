import AbouMeDesktopView from './presentational';
import { useState } from 'react';

const AbouMeDesktop = () => {

    const [ selected, setSelected] = useState('aboutMe');

    //read Selected
    const changeSelectedFn = (e) => {
        setSelected(e.target.value);
    }
    return (  
        <AbouMeDesktopView
        selected={selected}
        changeSelectedFn={changeSelectedFn}
        
        />
        
    );
}
 
export default AbouMeDesktop;

//aboutMe
// experience
//knowledge
//lenguage
