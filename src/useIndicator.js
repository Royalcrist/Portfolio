import React, { useState } from 'react'

export default function useIndicator(initialValue) {
    const [ value, setValue] = useState(initialValue);

    function handleScroll(e) {
        return setValue(useIndicator(Math.round((e.target.scrollTop / e.target.scrollHeight) * 100)));
    
        function useIndicator(scrollValue) {
            let indexValue = 1;
    
            if (scrollValue === 0) {
                indexValue = 1;
            }
            else if (scrollValue >= 33 && scrollValue < 66) {
                indexValue = 2;
            }
            else if (scrollValue >= 66) {
                indexValue = 3;
            }
    
            return indexValue;
        }
    }

    return {
        value,
        onScroll: handleScroll
    }
}