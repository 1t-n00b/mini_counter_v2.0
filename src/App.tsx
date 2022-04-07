import React, {useEffect, useState} from "react";
import "./App.css";
import Parameters from "./Parameters";
import Counter from "./Counter";

function App() {
    let [max_value, setMax_Value] = useState<number>(0)
    let [start_value, setStart_Value] = useState<number>(0)
    let [blockButton, setBlockButton] = useState<boolean>(false)
    let [num, setNum] = useState(0)
    let [correctNum, setCorrectNum] = useState(false)

    const setStartNumForCounter = (start: number) => {
        setNum(start)
    }
    const setUpStartNumForCounter = () => {
        setNum(++num)
    }
    const resetStartNumForCounter = () => {
        setNum(start_value)
    }
    const changeBlockButton = (b: boolean) => {
        setBlockButton(b)
    }

    useEffect(() => {
        let valueAsString = localStorage.getItem("num")
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setNum(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("num", JSON.stringify(num))
    }, [num])

    useEffect(() => {
        let valueAsString = localStorage.getItem("max_value")
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setMax_Value(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("max_value", JSON.stringify(max_value))
    }, [max_value])

    return (
        <div className="App">
            <Parameters
                setMax_Value={setMax_Value}
                setStart_Value={setStart_Value}
                setStartNumForCounter={setStartNumForCounter}
                changeBlockButton={changeBlockButton}
                blockButton={blockButton}
                setCorrectNum={setCorrectNum}
            />
            <Counter
                num={num}
                max_value={max_value}
                setUpStartNumForCounter={setUpStartNumForCounter}
                resetStartNumForCounter={resetStartNumForCounter}
                blockButton={!blockButton}
                correctNum={correctNum}
            />
        </div>
    );
}

export default App;
