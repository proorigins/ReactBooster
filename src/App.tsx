import React, {useEffect, useState} from 'react';
import './App.scss';
import {useSelector} from "react-redux";
import {ApplicationStateType} from "./reducers/applicationState/applicationState.type";
import {authenticatedSelector} from "./reducers/userReducer/userReducerSelectors";
import {AnonymousWrapper} from "./components/appAccess/anoymousLevel/AnonymousWrapper";
import {AccessWrapper} from "./components/appAccess/accessLevel/accessWrapper";
import LoadingPage from "./pages/loadingPage/loadingPage";

const App: React.FC = () => {
    const authenticated = useSelector<ApplicationStateType, boolean>(state => authenticatedSelector(state));
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, []);

    if (loading) {
        return (
            <LoadingPage />
        )
    }

    if (authenticated) {
        return (
            <>
                <AccessWrapper />
            </>
        )
    }

    return (
        <>
            <AnonymousWrapper />
        </>
    );
};


export default App;
