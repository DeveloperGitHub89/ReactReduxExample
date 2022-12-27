import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { applyDarkThemeAction, applyLightThemeAction } from "./actions/ThemeActions";
import { MyComponent } from "./MyComponent";
import { NavBar } from "./NavBar";
import { ScoreBoard } from "./ScoreBoard";

function App() {
  const theme = useSelector(state => state.themeReducer);
  const dispatch=useDispatch()
  const handleChangeTheme=()=>{
    if (theme=='dark') {
      dispatch(applyLightThemeAction());
    } else {
      dispatch(applyDarkThemeAction());
    }
    
  }
  return (
    <>
    <BrowserRouter>
      <NavBar></NavBar>
      <button onClick={handleChangeTheme}>Change Theme</button>
      <Routes>
        <Route path="/score-board" element={<ScoreBoard></ScoreBoard>}></Route>
        <Route path="/my" element={<MyComponent></MyComponent>}></Route>
      </Routes>
    </BrowserRouter>
     
    </>
  );
}

export default App;
