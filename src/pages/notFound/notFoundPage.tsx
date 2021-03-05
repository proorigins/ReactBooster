import React, {FC} from "react";
import {RouteComponentProps} from "../../routes/routes.type";
import {Link} from "react-router-dom";
import {accessRouteNames} from "../../routes/routes";

const NotFoundPage: FC<RouteComponentProps> = ({pathname}) => {
    return (
        <>
            <div>Page not found: {pathname}</div>
            <Link to={accessRouteNames.home}> Home </Link>
        </>
    );
};

export default NotFoundPage;
