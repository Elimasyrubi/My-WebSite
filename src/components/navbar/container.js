import NavbarView from './presentational';
import {useDispatch, useSelector} from 'react-redux'
import { useState } from 'react';
import {changeThemeMode, changeLenguage} from '../../redux/App/AppActions'

const Navbar = () => {

    const [showDropDown, setShowDropDown] = useState(false);



    //dispatch
    const dispatch = useDispatch()
    // Lenguague state
    const { lenguage } = useSelector(({appReducer})=> appReducer);

    //dark mode
    const changeToDarkModeFn = () =>{
        localStorage.setItem('inicialThemeMode', JSON.stringify('dark'))
        dispatch(changeThemeMode('dark'));   
    }
    //light mode
    const changeToLightModeFn = () =>{
        localStorage.setItem('inicialThemeMode', JSON.stringify('light'))
        dispatch(changeThemeMode('light'));
    }
    //light mode
    const changeLenguageFn = (lenguage) =>{
        localStorage.setItem('initialLenguage', JSON.stringify(lenguage))
        dispatch(changeLenguage(lenguage));
    }

    //show menu
    const showDropDownFn = () =>{
        setShowDropDown(true)
    }
    //close Menu
    const closeDropDownFn = () =>{
        setShowDropDown(false)
    }

    return ( 
        <NavbarView 
        changeToDarkModeFn={changeToDarkModeFn}
        changeToLightModeFn={changeToLightModeFn}
        changeLenguageFn={changeLenguageFn}
        lenguage={lenguage}
        showDropDown={showDropDown}
        showDropDownFn={showDropDownFn}
        closeDropDownFn={closeDropDownFn}
        />
     );
}
 
export default Navbar;