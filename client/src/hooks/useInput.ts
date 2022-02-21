import React, {useState} from "react";
import {Input} from "../typing/Interfaces";

export default function (initialValue: string): Input {
    const [value, setValue] = useState <string>(initialValue);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        setValue(value);
    }
    return {value, onChange}
}

// This is a custom hook that works with React hooks and is made for authorization fields and accepts initial values
// In our case, this is the line
// 1. We have a value state in which we will store values
// 2. We have a function onChange that takes events and puts it in a state.
// Thus, we have created a universal hook that we can use everywhere.
// Examples can be seen in the Login folder in the Login Page file on lines 10 and 11

