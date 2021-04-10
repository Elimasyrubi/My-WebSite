export const types = {
    CHANGE_THEME_MODE: 'CHANGE_THEME_MODE'
}

const initialState = {
    darkMode : false
}

export const appReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.CHANGE_THEME_MODE:{
            return{
                ...state,
                themeMode: action.meta,
            };
        }
        default:
            return state;
        
    }
};