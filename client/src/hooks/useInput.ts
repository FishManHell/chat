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

// Это кастомный хук, который работает с хуками React и сделан для полей авторизации и принимает начальное значения
// В нашем случае это строка
// 1. У нас есть стейт value в котором будем хранить значения
// 2. У нас есть function onChange которая принимает события и кладет его в стейт.
// Таким образом мы создали универсальной хук который мы можем использовать везде
// Примеры можно увидеть в папке Login в файле LoginPage на 10 и 11 строке

