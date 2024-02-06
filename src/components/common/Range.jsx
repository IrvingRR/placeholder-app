import { useState } from "react";
import { RangeAmountContainer, RangeBar, RangeBarContainer, RangeContainer } from "../../styled/components/common/range";

export const Range = ({ initialValue=0, minValue, maxValue, setValue }) => {
    const [rangeValue, setRangeValue] = useState(initialValue);

    const handleChange = (e) => {
        setRangeValue(e.target.value);
        setValue(e.target.value);
    };

    return (
        <RangeContainer>
            <RangeAmountContainer>
                <h3>${rangeValue}</h3>
            </RangeAmountContainer>
            <RangeBarContainer>
                <RangeBar type='range' min={minValue} max={maxValue} value={rangeValue} onChange={handleChange}/>
            </RangeBarContainer>
            <RangeAmountContainer>
                <h3>${initialValue}</h3>
                <h3>${maxValue}</h3>
            </RangeAmountContainer>
        </RangeContainer>
    );
};