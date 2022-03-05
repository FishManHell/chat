import React from "react";
import {InputLogin} from "./Interfaces";
// Here we have type for typing props and any values that are in the project


export type UserPost = [string, string, boolean, (path: string, user: object) => void, () => void]
export type UseSocket = [Array<object>, () => void, string, () => void, (e: React.ChangeEvent<HTMLInputElement>) => void]
export type JSXNode = JSX.Element | null;

export type ArrayInputs = Array<InputLogin>