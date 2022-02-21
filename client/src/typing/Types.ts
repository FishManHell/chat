import React from "react";

export type UserPost = [string, string, boolean, (path: string, user: object) => void, () => void]
export type UseSocket = [Array<object>, () => void, string, () => void, (e: React.ChangeEvent<HTMLInputElement>) => void]
