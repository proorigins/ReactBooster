import React, {FC, useMemo} from "react";
import {Route, Redirect, Switch} from "react-router-dom";
import {RouteType} from "../../../routes/routes.type";
import {accessRoutes, anonymousRouteNames, anonymousRoutes} from "../../../routes/routes";
import NotFoundPage from "../../../pages/notFound/notFoundPage";

export const AnonymousRoutes: FC = () => {
    const accessRoutesArray: Array<RouteType> = useMemo( () => Object.values(accessRoutes), []);
    const anonymousRoutesArray: Array<RouteType> = useMemo(() => Object.values(anonymousRoutes), []);

    return (
        <Switch>
            {
                anonymousRoutesArray.map(({pathname, component}, key) =>
                    <Route
                        key={key}
                        path={pathname}
                        exact={true}
                        render={(props) => {
                            const Component = component;
                            return (
                                <Component pathname={pathname}/>
                            )
                        }}
                    />
                )
            }
            {
                accessRoutesArray.map(({pathname, component}, key) =>
                    <Route
                        key={key}
                        path={pathname}
                        exact={true}
                        render={(props) => {
                            return (
                                <Redirect to={anonymousRouteNames.fallback}/>
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
