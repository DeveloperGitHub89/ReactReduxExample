import { useSelector } from "react-redux"
import './assets/styles/ThemeStyle.css';
export function MyComponent() {
    const score = useSelector(state => state.scoreReducer);
    const theme = useSelector(state => state.themeReducer);
    return (
        <div className={theme=='dark'?'dark':'light'}>
            <p>{theme}</p>
            <h1>Inside MyComponent score = {score}</h1>
        </div>
    )
}