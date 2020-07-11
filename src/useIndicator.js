import React, { useState, useEffect } from "react";
import usePrev from "./usePrev";

export default function useIndicator(scroll) {
    const prev = usePrev(index);
    const [index, setIndex] = useState(1);

    useEffect(() => {
        setIndex(handleIndicator(scroll));
    }, [scroll]);

    function handleIndicator(scroll) {
        let indexValue = 1;

        if (scroll === 0) {
            indexValue = 1;
        } else if (scroll >= 33 && scroll < 58) {
            indexValue = 2;
        } else if (scroll >= 58) {
            indexValue = 3;
        }

        return indexValue;
    }

    return {
        value: index,
        prev,
    };
}
