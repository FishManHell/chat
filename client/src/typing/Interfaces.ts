import React from "react";

// Здесь у нас лежат interface для типизации пропсов и всяких значений которые есть в проекте


export interface Request {
    requestPost: (path: string, user: object) => void
}

export interface UserName {
    name: {
        value: string,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    }
}

export interface UserPassword {
    password: {
        value: string,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    }
}

export interface Input {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface Token {
    token: string
    clearToken: () => void
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
}
