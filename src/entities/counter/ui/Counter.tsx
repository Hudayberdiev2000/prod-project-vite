import {Button} from "~shared/ui/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../model/slice/CounterSlice";
import {getCounterValue} from "../model/selectors/getCounterValue/getCounterValue";


export const Counter = ( ) => {
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue )

    const increment = () => {
        dispatch(counterActions.increment())
    }
    const decrement = () => {
        dispatch(counterActions.decrement())
    }
    return (
      <div >
        <h1 data-testid={'value-title'}>{counterValue}</h1>
        <Button data-testid={'increment-btn'} onClick={increment}>Increment</Button>
        <Button data-testid={'decrement-btn'} onClick={decrement} >Decrement</Button>
      </div>
    )
}

