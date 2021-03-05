import React, {FC} from "react";
import {RouteComponentProps} from "../../routes/routes.type";
import {useDispatch, useSelector} from "react-redux";
import {ApplicationStateType} from "../../reducers/applicationState/applicationState.type";
import {UserType} from "../../types/user.type";
import {userDataSelector} from "../../reducers/userReducer/userReducerSelectors";
import {loadUser, unloadUser} from "../../reducers/userReducer/userReducer";

const HomePage: FC<RouteComponentProps> = ({pathname}) => {
    const user = useSelector<ApplicationStateType, UserType>(state => userDataSelector(state));
    const dispatch = useDispatch();

    return (
        <div>
            {user.email}
            <button onClick={() => {
                dispatch(unloadUser())
            }}>logout</button>
        </div>
    );
};

export default HomePage;
