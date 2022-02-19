import React, {useState} from "react";
import {Input} from "../TypeScriptTyping/Interfaces";

export default function (initialValue: string): Input {
    const [value, setValue] = useState <string>(initialValue);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        setValue(value);
    }

    return {value, onChange}
}