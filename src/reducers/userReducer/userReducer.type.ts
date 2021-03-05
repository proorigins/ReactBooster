import {UserType} from "../../types/user.type";


// state type
export interface UserReducerStateType {
    data: UserType,
    authenticated: boolean
}

// combined payload types
export type UserReducerPayloadsType = UserType;

