export const types = {
    CHANGE_THEME_MODE: 'CHANGE_THEME_MODE',
    CHANGE_LENGUAGE: 'CHANGE_LENGUAGE',
}

//state
const initialState = {
    themeMode : 'light',
    lenguage: 'es'
}

//Get LocalStorage
let inicialThemeMode = JSON.parse(localStorage.getItem('inicialThemeMode'));
let initialLenguage = JSON.parse(localStorage.getItem('initialLenguage'));

//set inictialMode
if(!inicialThemeMode){
 //light mode
 initialState.themeMode = 'light';
}else{
    initialState.themeMode = inicialThemeMode;
} 

//set initial Lenguage
if(!initialLenguage){
 //light mode
 initialState.lenguage = 'es';
}else{
    initialState.lenguage = initialLenguage;
} 


export const appReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.CHANGE_THEME_MODE:{
            return{
                ...state,
                themeMode: action.meta,
            };
        }
        case types.CHANGE_LENGUAGE:{
            return{
                ...state,
                lenguage: action.meta,
            };
        }
        default:
            return state;
    }
};