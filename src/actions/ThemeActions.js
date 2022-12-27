import { APPLY_DARK_THEME, APPLY_LIGHT_THEME } from "../constants/ActionConstants"

export function applyDarkThemeAction(){
    return {type:APPLY_DARK_THEME}
}

export function applyLightThemeAction(){
    return {type:APPLY_LIGHT_THEME}
} 