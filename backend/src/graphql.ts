
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Message {
    id: number;
    userId: number;
    content: string;
}

export interface Chat {
    id: number;
    userId: number;
    messages?: Nullable<Nullable<Message>[]>;
}

export interface IQuery {
    chatMessages(chatId: number): Nullable<Nullable<Chat>[]> | Promise<Nullable<Nullable<Chat>[]>>;
}

export interface User {
    id: number;
    avatarUrl?: Nullable<string>;
    fullName?: Nullable<string>;
    phoneNumber?: Nullable<string>;
    chat?: Nullable<Nullable<number>[]>;
    token?: Nullable<string>;
}

export interface IMutation {
    authenticate(phoneNumber: string, password: string): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
