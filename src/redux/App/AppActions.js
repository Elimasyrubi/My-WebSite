import {types} from './AppReducer'

export const changeThemeMode = (theme) =>({
    type: types.CHANGE_THEME_MODE,
    meta: theme,
})
export const changeLenguage = (lenguage) =>({
    type: types.CHANGE_LENGUAGE,
    meta: lenguage,
})

