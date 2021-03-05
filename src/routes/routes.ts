import {AccessRouteNames, AccessRoutesType, AnonymousRouteNames, AnonymousRoutesType} from "./routes.type";
import LoginPage from "../pages/loginPage/loginPage";
import HomePage from "../pages/homePage/homePage";

// anonymous routes declaration
export const anonymousRouteNames : AnonymousRouteNames = {
    login: "/login",
    fallback: "/login"
};

export const anonymousRoutes : AnonymousRoutesType = {
    login: {
        pathname: anonymousRouteNames.login,
        component: LoginPage
    }
};


// access routes declaration
export const accessRouteNames : AccessRouteNames = {
    home: "/",
    fallback: "/"
};

export const accessRoutes : AccessRoutesType = {
    home: {
        pathname: accessRouteNames.home,
        component: HomePage
    }
};
