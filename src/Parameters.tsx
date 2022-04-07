import React, {ChangeEvent, useEffect, useState} from "react";
import Button from "./Button";

type ParametersPropsType = {
    setMax_Value: (e: number) => void
    setStart_Value: (e: number) => void
    setStartNumForCounter: (start: number) => void
    changeBlockButton: (b: boolean) => void
    blockButton: boolean
    setCorrectNum: (b: boolean) => void
}

const Parameters = (props: ParametersPropsType) => {
    let [maxNum, setMaxNum] = useState(0)
    let [minNum, setMinNum] = useState(0)

    useEffect(() => {
        let valueAsString = localStorage.getItem("maxNum")
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setMaxNum(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("maxNum", JSON.stringify(maxNum))
    }, [maxNum])

    useEffect(() => {
        let valueAsString = localStorage.getItem("minNum")
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setMinNum(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("minNum", JSON.stringify(minNum))
    }, [minNum])

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxNum(Number(e.currentTarget.value))
        props.setMax_Value(Number(e.currentTarget.value))
        props.changeBlockButton(false)

    }
    const incorrectNumber = (): boolean => {
        if (maxNum < minNum) {
            return false
        } else if (maxNum === minNum) {
            return false
        } else return minNum >= 0;
    }
    props.setCorrectNum(incorrectNumber())

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMinNum(Number(e.currentTarget.value))
        props.changeBlockButton(false)

    }
    const setParameters = () => {
        props.setStartNumForCounter(minNum)
        props.setStart_Value(minNum)
        props.changeBlockButton(true)
    }

    return (
        <div>
            <div className="input_parameters">
                <div className="max_value">
                    <h3>max value</h3>
                    <input className={incorrectNumber() ? "" : "error"} type="number"
                           onChange={onChangeMaxValueHandler} value={maxNum}/>
                </div>
                <div className="min_value">
                    <h3>start value</h3>
                    <input className={incorrectNumber() ? "" : "error"} type="number"
                           onChange={onChangeStartValueHandler} value={minNum}/>
                </div>
                <Button onClick={setParameters} name={"set"}
                        blockButton={props.blockButton || !incorrectNumber()}/>
            </div>

        </div>

    );
};

export default Parameters;