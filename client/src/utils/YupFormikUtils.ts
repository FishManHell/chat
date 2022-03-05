import * as Yup from "yup";
import {regName, regPass} from "./Regs";
import {ArrayInputs} from "../typing/Types";

export const initialState: object = {
    userName: '',
    password: '',
    repeatPassword: ''
}
export const checkYup:object = {
    userName: Yup.string().trim().required('Required').matches(regName, 'You write the wrong name'),
    password: Yup.string().trim().required('Required').matches(regPass, 'Try to write again'),
    repeatPassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match").required('Required')
}


export const arrayInputs:ArrayInputs = [
    {type: 'text', name: 'userName', placeholder: 'username', classCss: 'input_field userName'},
    {type: 'password', name: 'password', placeholder: 'password', classCss: 'input_field password'},
    {type: 'password', name: 'repeatPassword', placeholder: 'repeat_password', classCss: 'input_field repeatPassword'}
]