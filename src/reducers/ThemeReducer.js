import { APPLY_DARK_THEME, APPLY_LIGHT_THEME } from "../constants/ActionConstants";

export const themeReducer = (state,action)=>{
    switch(action.type){
        case APPLY_DARK_THEME: return 'dark';
        case APPLY_LIGHT_THEME: return 'light';
        default : return 'light'
    }
}