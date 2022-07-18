import React from "react";
import {useParams} from "react-router-dom";

import {sendConfirmedEmail} from "../redux/actions/confirmed";

const Confirmed: React.FC = () => {
	const { hash } = useParams();
	
    React.useEffect(() => {
        if (hash) sendConfirmedEmail(hash);
    }, []);

    return <></>;
};

export default Confirmed;
