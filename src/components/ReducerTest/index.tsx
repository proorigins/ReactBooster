import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {testAction} from "../../reducers/testReducer";

export interface IReducerTestProps {
}

const ReducerTest: React.FC<IReducerTestProps> = () => {
    const dispatch = useDispatch();
    const testReducerValue = useSelector((state:any) => state.test);

    useEffect(() => {
        dispatch(testAction("my action is called!"));
    }, []);

    return (
        <div>
            {testReducerValue}
        </div>
    );
};

export default ReducerTest;
