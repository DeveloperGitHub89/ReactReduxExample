import { useDispatch, useSelector } from "react-redux";
import { scoreDecrementAction, scoreIncrementAction } from "./actions/ScoreActions";
import './assets/styles/ThemeStyle.css'
export function ScoreBoard(){
    const score=useSelector(state=>state.scoreReducer);
    const theme=useSelector(state=>state.themeReducer);
    const dispatch=useDispatch();

    const handlePlusClick=()=>{
        dispatch(scoreIncrementAction());
    }
    const handleMinusClick=()=>{
       dispatch(scoreDecrementAction());
    }
    
    return (
        <div className={theme=='dark'?'dark':'light'}>
            <p>{theme}</p>
            <h1>{score}</h1>
            <input type={'button'} value='+' onClick={handlePlusClick}></input>
            <input type={'button'} value='-' onClick={handleMinusClick}></input>
        </div>
    );
}