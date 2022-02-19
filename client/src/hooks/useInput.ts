import React, {useState} from "react";

export default function (initialValue: string) {
    const [value, setValue] = useState <string>(initialValue)

    const onChange = (e: React.FocusEvent<HTMLFormElement>): void => {
        const value = e.target.value
        setValue(value)
    }

    return {value, onChange}
}