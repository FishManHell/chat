import React from "react";


// Здесь у нас лежат type для типизации пропсов и всяких значений которые есть в проекте


export type UserPost = [string, string, boolean, (path: string, user: object) => void, () => void]
export type UseSocket = [Array<object>, () => void, string, () => void, (e: React.ChangeEvent<HTMLInputElement>) => void]
export type JSXNode = JSX.Element | null;
