import { Link } from "react-router-dom";

export function NavBar(){
    return (
        <ul>
            <li>
                <Link to='/score-board'>Score board</Link>    
            </li>
            <li>
                <Link to='/my'>My Component</Link> 
            </li>
        </ul>
    );
}