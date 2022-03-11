import React from "react";
import {FormikValues} from "formik";
// Here we have an interface for typing props and any values that are in the project

export interface Request {
    requestPost: (path: string, user: object) => void
    error: string
    clearError: () => void
    checkError: boolean
}

export interface Token {
    token: string
    name: string
    clearToken: () => void
}

export interface InputLogin {
    type: string
    name: string
    placeholder: string,
    classCss: string
}

export interface FieldChat {
    value: string,
    change: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface ButtonSend {
    message: () => void,
    text: string,
    value: string
}

export interface ButtonLogout {
    exit: () => void
    text: string
}

export interface MessageValue {
    value: string
    id: number
    remove: (numberItem: number) => void
}

export interface tokenName {
    token: string
    fullName: string
}

export interface ErrorTyping {
    clearError: () => void
    checkError: boolean
}

export interface TypingFormikFunc {
    handleCheckPassName: (value: FormikValues) => void
}