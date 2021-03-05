import React, {FC, useMemo} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {RouteType} from "../../../routes/routes.type";
import {accessRouteNames, accessRoutes, anonymousRoutes} from "../../../routes/routes";
import NotFoundPage from "../../../pages/notFound/notFoundPage";

export const AccessRoutes: FC = () => {
    const accessRoutesArray: Array<RouteType> = useMemo( () => Object.values(accessRoutes), []);
    const anonymousRoutesArray: Array<RouteType> = useMemo(() => Object.values(anonymousRoutes), []);

    return (
        <Switch>
            {
                accessRoutesArray.map(({pathname, component}, key) =>
                    <Route
                        key={key}
                        path={pathname}
                        exact={true}
                        render={(props: any) => {
                            const Component = component;
                            return (
                                <Component pathname={pathname}/>
                            )
                        }}
                    />
                )
            }
            {
                anonymousRoutesArray.map(({pathname, component}, key) =>
                    <Route
                        key={key}
                        path={pathname}
                        exact={true}
                        render={(props: any) => {
                            return (
                                <Redirect to={accessRouteNames.fallback}/>
                            )
                        }}
                    />
                )
            }
            <Route
                render={(props) => {
                    return <NotFoundPage pathname={window.location.pathname}/>
                }}
            />
        </Switch>
    )
};
