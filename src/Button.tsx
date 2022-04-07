import React from "react";

type ButtonPropsType = {
    onClick: () => void,
    name: string
    blockButton?: boolean
}

const Button = (props: ButtonPropsType) => {
    return (
        <div>
            <button disabled={props.blockButton} onClick={props.onClick}>{props.name}</button>
        </div>
    );
};

export default Button;