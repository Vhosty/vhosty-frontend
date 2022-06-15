import {Dispatch} from "react";

import {
    ReglogStateTypes,
    ReglogActionTypes,
    ReglogActions,
} from "../types/IReglog";

export const setReglogOpen = () => {
    document.body.style.overflowY = "hidden";

    return {
        type: ReglogActionTypes.SET_REGLOG_OPEN,
        payload: true,
    };
};

export const setReglogClose = () => (dispatch: Dispatch<ReglogActions>) => {
    dispatch({
        type: ReglogActionTypes.SET_REGLOG_CLOSE_ANIMATION,
        payload: true,
    });

    setTimeout(() => {
		document.body.style.overflowY = "visible";
		
		dispatch({
            type: ReglogActionTypes.SET_REGLOG_TYPE,
            payload: ReglogStateTypes.LOGIN,
        });


        dispatch({
            type: ReglogActionTypes.SET_REGLOG_OPEN,
            payload: false,
        });

        dispatch({
            type: ReglogActionTypes.SET_REGLOG_CLOSE_ANIMATION,
            payload: false,
        });
    }, 180);
};

export const setReglogType = (type: ReglogStateTypes) => ({
    type: ReglogActionTypes.SET_REGLOG_TYPE,
    payload: type,
});
