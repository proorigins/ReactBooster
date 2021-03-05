import React, {FC} from "react";
import {AnonymousRoutes} from "./AnonymousRoutes";

export const AnonymousWrapper: FC = ({children}) => {
    return (
        <>
          <AnonymousRoutes/>
        </>
    )
};
