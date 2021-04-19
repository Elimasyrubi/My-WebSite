// Dependence
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';
import {changeThemeMode, changeLenguage} from '../../redux/App/AppActions'
import NavbarView from './presentational';

const Navbar = ({fixed}) => {
    //state
    const [showDropDown, setShowDropDown] = useState(false);

    //dispatch
    const dispatch = useDispatch()

    // Lenguague state
    const { lenguage, themeMode } = useSelector(({appReducer})=> appReducer);

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

    //Change theme Color 
    const changeThemeColor = () =>{
        if(themeMode === 'light'){
            localStorage.setItem('inicialThemeMode', JSON.stringify('dark'))
            dispatch(changeThemeMode('dark'));   
        }
        if(themeMode === 'dark'){
            localStorage.setItem('inicialThemeMode', JSON.stringify('light'))
            dispatch(changeThemeMode('light'));
        }
    }

    return ( 
        <NavbarView 
        changeLenguageFn={changeLenguageFn}
        lenguage={lenguage}
        showDropDown={showDropDown}
        showDropDownFn={showDropDownFn}
        closeDropDownFn={closeDropDownFn}
        themeMode={themeMode}
        changeThemeColor={changeThemeColor}
        fixed={fixed}
        />
     );
}

Navbar.defaultProps = {
    fixed: false,
}
Navbar.propTypes = {
	fixed: PropTypes.bool,
};
 
export default Navbar;