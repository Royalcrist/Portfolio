import React, { useState, useRef, useEffect } from 'react'

export default function useIndicator(initialValue) {
    const [ value, setValue] = useState(initialValue);
    const previous = usePreviousValue(value);

    function usePreviousValue (value) {
        const ref = useRef(1);

        useEffect(() => {
            ref.current = value;
        });

        return ref.current;

    }

    function handleScroll(e) {
        setValue(handleIndicator(Math.round((e.target.scrollTop / e.target.scrollHeight) * 100)));
    
        function handleIndicator(scrollValue) {
            let indexValue = 1;
    
            if (scrollValue === 0) {
                indexValue = 1;
            }
            else if (scrollValue >= 33 && scrollValue < 58) {
                indexValue = 2;
            }
            else if (scrollValue >= 58) {
                indexValue = 3;
            }
    
            return indexValue;
        }
    }

    return {
        value,
        previous,
        onScroll: handleScroll
    }
}