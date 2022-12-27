import { combineReducers } from "redux";
import { scoreReducer } from "./ScoreReducer";
import { themeReducer } from "./ThemeReducer";

export const rootReducer=combineReducers({scoreReducer,themeReducer})