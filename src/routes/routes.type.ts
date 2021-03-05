import {FC} from "react";


//Route Type
export interface RouteType {
    pathname: string,
    component: FC<RouteComponentProps>
}

//Route Component Type
export interface RouteComponentProps {
    pathname: string
}

//route names
export interface RouteNames {
    login: string,
    home: string
}

//anonymous routes
export interface AnonymousRouteNames {
    login: string,
    fallback: string
}

export interface AnonymousRoutesType {
    login: RouteType
}



//access routes
export interface AccessRouteNames {
    home: string,
    fallback: string
}

export interface AccessRoutesType {
    home: RouteType
}
