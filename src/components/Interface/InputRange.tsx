import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import {Input} from "../";

const InputRange: React.FC = () => {
    const [value, setValue] = React.useState<number>(15);

    return (
        <div className="input-range">
            <div className="input-range-slider">
                <Slider
                    min={1}
                    max={100}
                    value={value}
                    onChange={(value: any) => setValue(value)}
                    railStyle={{
                        height: 8,
                    }}
                    handleStyle={{
                        height: 23,
                        width: 23,
                        marginLeft: 7,
                        marginTop: -7,
                        backgroundColor: "#00A0A0",
                        border: 0,
                        opacity: 1,
                    }}
                    trackStyle={{
                        backgroundColor: "#00A0A0",
                        height: 8,
                    }}
                />
            </div>

            <div className="input-range-input">
                <Input
                    label=""
                    fixLabel="км"
                    small
                    smallPlaceholder
                    value={value}
                    type="number"
                    onChange={(value: any) =>
                        setValue(value > 100 ? 100 : value)
                    }
                />
            </div>
        </div>
    );
};

export default InputRange;
