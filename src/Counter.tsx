import React from "react";
import Button from "./Button";

type CounterPropsType = {
    num: number
    setUpStartNumForCounter: () => void
    resetStartNumForCounter: () => void
    max_value: number
    blockButton: boolean
    correctNum: boolean
}

const Counter = (props: CounterPropsType) => {

    const setUpNumValue = () => {
        props.setUpStartNumForCounter()
    }
    const resetNumValue = () => {
        props.resetStartNumForCounter()
    }

    return (
        <div className="counter">
            <div>
                {props.blockButton || <h2 className={props.num === props.max_value ? "limit" : "num"}>{props.num}</h2>}
                {props.blockButton && (!props.correctNum ? <h2 className="incorrect_number">Incorrect Number</h2> :
                    <h2>Enter value and press "set"</h2>)}
            </div>
            <div className="button_group">
                <Button onClick={setUpNumValue} name={"inc"}
                        blockButton={props.num === props.max_value || props.blockButton}/>
                <Button onClick={resetNumValue} name={"reset"} blockButton={props.blockButton}/>
            </div>
        </div>
    );
};

export default Counter;