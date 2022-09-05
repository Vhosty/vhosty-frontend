import React from "react";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

interface CitiesProps {
    onChange: (city: string) => void;
}

const Cities: React.FC<CitiesProps> = ({onChange}) => {
    const {cities} = useTypedSelector(({cities}) => cities);

    return (
        <>
            {cities.length ? (
                <div className="cities-wrapper-scroll">
                    <div className="cities">
                        {cities.map((city, index) => (
                            <p
                                className="cities__item"
                                key={`cities__item-${index}`}
                                onClick={() => onChange(city.name)}
                            >
                                {city.name}
                            </p>
                        ))}
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default Cities;
