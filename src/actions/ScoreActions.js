import { DECREMENT, INCREMENT } from "../constants/ActionConstants"

export function scoreIncrementAction(){
    return {type:INCREMENT}
}

export function scoreDecrementAction(){
    return {type:DECREMENT}
}