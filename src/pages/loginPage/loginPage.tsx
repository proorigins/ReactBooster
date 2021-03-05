import React, {FC} from "react";
import {RouteComponentProps} from "../../routes/routes.type";
import {loadUser} from "../../reducers/userReducer/userReducer";
import {useDispatch} from "react-redux";

const LoginPage: FC<RouteComponentProps> = ({pathname}) => {
    const dispatch = useDispatch();
    return (
        <>
            <button onClick={() => {
                dispatch(loadUser({firstName: "basel", email:"bfalsayed@gmail.com"}))
            }}>Auth</button>
        </>
    );
};

export default LoginPage;
